import { Navbar } from "@/components/landing-page/navbar";
import Footer from "@/components/shared/footer";
import ContactSalesCTA from "./_components/contact-sales-cta";
import DomainChooser from "./_components/domain-chooser";

export default function PlansAndPricesPage() {
  return (
    <>
      <Navbar />
      <DomainChooser />
      <ContactSalesCTA />
      <Footer />
    </>
  );
}
