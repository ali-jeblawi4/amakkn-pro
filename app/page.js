import { ManageBlogSection } from "@/components/landing-page/blog";
import { BuildYourWebsiteSection } from "@/components/landing-page/build-your-website";
import { ManageCustomersSection } from "@/components/landing-page/customers";
import { HeroParallaxDemo } from "@/components/landing-page/hero";
import { ManageProjectsSection } from "@/components/landing-page/projects";

export default function HeroSectionOne() {
  return (
    <>
      <HeroParallaxDemo />
      <BuildYourWebsiteSection />
      <ManageProjectsSection />
      <ManageCustomersSection />
      <ManageBlogSection />
    </>
  );
}
