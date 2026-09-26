import { redirect } from "next/navigation";

// Old route — kept as a redirect. Safe to delete this folder.
export default function Page() {
  redirect("/approach");
}
