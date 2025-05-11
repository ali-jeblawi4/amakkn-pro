import { AboutUsSection } from "@/components/landing-page/about-us";
import { ManageBlogSection } from "@/components/landing-page/blog";
import { BuildYourWebsiteSection } from "@/components/landing-page/build-your-website";
import { ManageCustomersSection } from "@/components/landing-page/customers";
import { HeroParallaxDemo } from "@/components/landing-page/hero";
import { Navbar } from "@/components/landing-page/navbar";
import PricingSection from "@/components/landing-page/pricing";
import { ManageProjectsSection } from "@/components/landing-page/projects";

export default function HeroSectionOne() {
  return (
    <>
      <Navbar />
      <HeroParallaxDemo />
      <AboutUsSection />
      <BuildYourWebsiteSection />
      <ManageCustomersSection />
      <ManageProjectsSection />
      <ManageBlogSection />
      <PricingSection />
    </>
  );
}
