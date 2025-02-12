export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/FAQ";
import Cta from "@/components/cta";
import { Weather } from "@/components/weather";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Testimonials />
      <FAQ />
      <Cta />
      <Weather />
    </>
  );
}
