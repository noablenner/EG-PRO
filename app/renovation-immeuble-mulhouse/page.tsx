import type { Metadata } from "next";
import RenovationLanding from "@/components/RenovationLanding";
import { RENOVATION_IMMEUBLE as PAGE } from "@/lib/renovation";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  path: PAGE.path,
});

export default function RenovationImmeublePage() {
  return <RenovationLanding page={PAGE} />;
}
