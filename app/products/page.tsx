import { Metadata } from "next";
import { Suspense } from "react";
import ProductsClientPage from "app/components/ProductsClientPage"; // 👉 Import renamed Client Component

export const metadata: Metadata = {
  title: "Plastic Water Bucket, Bucket Mop, Kitchen & Storage Essential | Shree Deep Rekha Traders",
  description:
    "Explore our wide range of plastic household products including kitchen storage, cleaning items, and plastic containers. Wholesale and retail plastic products in Ahmedabad.",
  keywords:
    "plastic products Ahmedabad, kitchen storage containers, wholesale plastic items, cleaning products, plastic household items, plastic ware India",
  openGraph: {
    title: "Our Products | Shree Deep Rekha Traders",
    description:
      "Discover top-quality plastic household items from Shree Deep Rekha Traders. Shop kitchen containers, plastic organizers, cleaning tools, and more at wholesale prices.",
    url: "https://www.shreedeeprekhatraders.in/products",
    siteName: "Shree Deep Rekha Traders",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.shreedeeprekhatraders.in/products",
  },
};

export default function ProductPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsClientPage />
      </Suspense>
    </main>
  );
}
