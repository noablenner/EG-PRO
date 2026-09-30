import type { Metadata } from "next";
import RenovationLanding from "@/components/RenovationLanding";
import { RENOVATION_APPARTEMENT as PAGE } from "@/lib/renovation";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  path: PAGE.path,
});

export default function RenovationAppartementPage() {
  return <RenovationLanding page={PAGE} />;
}
