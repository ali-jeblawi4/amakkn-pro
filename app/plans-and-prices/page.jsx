import { Navbar } from "@/components/landing-page/navbar";
import { Hero } from "./_components/hero";
import PricingSection from "@/components/landing-page/pricing";
import Footer from "@/components/shared/footer";
import ContactSalesCTA from "./_components/contact-sales-cta";

export default function PlansAndPricesPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PricingSection withoutHeader />
      <ContactSalesCTA />
      <Footer />
    </>
  );
}
