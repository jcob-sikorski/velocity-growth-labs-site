import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { h: "What we collect", p: "Describe the personal data you collect (e.g. contact details submitted through forms, analytics data) and how it is gathered." },
        { h: "How we use it", p: "Explain the purposes and legal bases for processing, such as responding to enquiries and delivering services." },
        { h: "Sharing", p: "List the categories of processors you share data with (e.g. CRM, scheduling and analytics providers)." },
        { h: "Your rights", p: "Explain how people can access, correct or delete their data and how to contact you." },
      ]}
    />
  );
}
