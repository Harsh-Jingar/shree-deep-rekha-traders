import About from "app/components/About";
import Vision from "app/components/Vision";
import OwnerSection from "app/components/OwnerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shree Deep Rekha Traders",
  description:
    "Learn more about Shree Deep Rekha Traders – a trusted name in plastic household products. Discover our journey, values, and commitment to quality in wholesale and retail plastic items.",
  keywords:
    "About Shree Deep Rekha Traders, plastic supplier Ahmedabad, wholesale plastic items Gujarat, plastic products company, plastic household items wholesaler",
  openGraph: {
    title: "About Us | Shree Deep Rekha Traders",
    description:
      "Shree Deep Rekha Traders is a leading supplier of premium plastic household products in Ahmedabad. Learn about our mission, values, and commitment to quality.",
    url: "https://www.shreedeeprekhatraders.in/about",
    siteName: "Shree Deep Rekha Traders",
    locale: "en_US",
    type: "website",
  },
};
export default function AboutPage() {
  return (
    <main>
      <About />
      <OwnerSection />
      <Vision />
    </main>
  );
}