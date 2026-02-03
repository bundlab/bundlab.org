import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Team } from "@/components/landing/team";
import { Blog } from "@/components/landing/blog";
import { Contact } from "@/components/landing/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Blog />
      <Contact />
    </>
  );
}
