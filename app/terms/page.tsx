import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms" };

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      sections={[
        { h: "Use of this site", p: "Set out the conditions under which visitors may use the website and its content." },
        { h: "Intellectual property", p: "State who owns the site content and what visitors may and may not do with it." },
        { h: "Liability", p: "Describe limitations of liability appropriate for your jurisdiction." },
        { h: "Contact", p: "Provide a contact address for questions about these terms." },
      ]}
    />
  );
}
