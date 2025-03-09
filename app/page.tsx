import HeroSlider from "@/app/components/Hero";
import Products from "app/components/Products";
import Reviews from "app/components/Reviews";
import FAQ from "app/components/FAQ";
import ScrollToTop from "app/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Products />
      <Reviews />
      <FAQ />
      <ScrollToTop />
    </main>
  );
}
