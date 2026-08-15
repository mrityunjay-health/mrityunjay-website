import type { ReactElement } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Intelligence } from "@/components/intelligence";
import { Outcome01, Outcome02, Outcome03 } from "@/components/outcomes";
import { HumanBond } from "@/components/human-bond";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function HomePage(): ReactElement {
  return (
    <>
      <Nav />
      <main className="pt-20 bg-clinical-overlay">
        <Hero />
        <Intelligence />
        <Outcome01 />
        <Outcome02 />
        <Outcome03 />
        <HumanBond />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
