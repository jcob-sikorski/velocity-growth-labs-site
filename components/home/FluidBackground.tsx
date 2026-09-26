"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Premium "liquid silk" hero background.
 * A WebGL fragment shader using layered, domain-warped noise so the light
 * folds and flows like fabric or ink. Colours are tuned to the navy palette.
 *
 * - Pauses when off-screen or when the tab is hidden
 * - Renders a single still frame for prefers-reduced-motion
 * - Falls back to the CSS gradient layer underneath if WebGL is unavailable
 * - Caps device pixel ratio for smooth performance on retina screens
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

// Height field of the "silk" surface
float field(vec2 p, float t) {
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t * 0.8));
  vec2 r = vec2(
    fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 1.1),
    fbm(p + 3.0 * q + vec2(8.3, 2.8) - t * 0.9)
  );
  return fbm(p + 2.3 * r);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float t = uTime * 0.045;

  // Stretch horizontally so folds read as long, flowing waves
  // Zoom in a little on portrait screens so folds stay visible on mobile
  float asp = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * 0.7, uv.y * 1.3) * mix(1.8, 1.0, clamp(asp, 0.0, 1.0)) + uMouse * 0.05;
  p += vec2(t * 0.6, 0.0);

  float h  = field(p, t);
  float e  = 0.008;
  float hx = field(p + vec2(e, 0.0), t);
  float hy = field(p + vec2(0.0, e), t);

  // Surface normal and a soft key light -> satin highlights
  vec3 n = normalize(vec3((h - hx) / e * 0.075, (h - hy) / e * 0.075, 1.0));
  vec3 l = normalize(vec3(-0.35, 0.55, 0.75));
  float diff = clamp(dot(n, l), 0.0, 1.0);
  float spec = pow(clamp(dot(reflect(-l, n), vec3(0.0, 0.0, 1.0)), 0.0, 1.0), 12.0);

  vec3 ink    = vec3(0.012, 0.016, 0.034);   // near-black
  vec3 navy   = vec3(0.034, 0.048, 0.120);
  vec3 cobalt = vec3(0.100, 0.150, 0.440);
  vec3 silver = vec3(0.880, 0.860, 0.820);   // warm platinum

  vec3 col = mix(ink, navy, smoothstep(0.15, 0.75, h));
  col = mix(col, cobalt, smoothstep(0.55, 0.95, h) * 0.55);
  col += navy * diff * 0.7;
  col += silver * spec * 0.6 * smoothstep(0.3, 0.8, h);

  // Concentrate the light in a soft diagonal band through the middle
  float band = exp(-pow((uv.y + uv.x * 0.28 + 0.05) * 1.9, 2.0));
  col *= mix(0.45, 1.15, band);

  // Vignette + gentle falloff to the top so the nav stays readable
  float vig = smoothstep(1.35, 0.25, length(uv * vec2(0.75, 1.0)));
  col *= mix(0.35, 1.0, vig);
  col *= mix(1.0, 0.6, smoothstep(0.1, 0.5, uv.y));

  // Tiny dither to prevent banding in the dark gradients
  col += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export function FluidBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) return; // CSS fallback stays visible

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    // Full-screen triangle
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Render at a reduced internal resolution — the image is soft by nature,
    // so this is visually lossless and much cheaper.
    const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.75;

    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(1, Math.floor(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Smoothed mouse parallax
    const target = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) loop();
    });
    io.observe(canvas);

    let raf = 0;
    const start = performance.now() - 20000; // start mid-flow, not at t=0
    let first = true;

    const draw = (now: number) => {
      mouse.x += (target.x - mouse.x) * 0.04;
      mouse.y += (target.y - mouse.y) * 0.04;
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (first) {
        first = false;
        setReady(true);
      }
    };

    const loop = () => {
      cancelAnimationFrame(raf);
      const tick = (now: number) => {
        if (!visible || document.hidden) return;
        draw(now);
        if (!reduced) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const onVis = () => !document.hidden && loop();
    document.addEventListener("visibilitychange", onVis);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      // Free GPU resources but keep the context alive: React re-runs this
      // effect in dev (Strict Mode) and needs to reuse the same context.
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 h-full w-full transition-opacity duration-[1600ms] ease-out ${
        ready ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
}
