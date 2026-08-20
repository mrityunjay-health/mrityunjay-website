import type { ReactElement } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Differentiator } from "@/components/differentiator";
import { HowItWorks } from "@/components/how-it-works";
import { ChatInterface } from "@/components/chat-interface";
import { Outcome01, Outcome02, Outcome03 } from "@/components/outcomes";
import { HumanBond } from "@/components/human-bond";
import { Trust } from "@/components/trust";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function HomePage(): ReactElement {
  return (
    <>
      <Nav />
      <main className="relative pt-20 bg-clinical-overlay">
        <Hero />
        <Problem />
        <Differentiator />
        <HowItWorks />
        <ChatInterface />

        <Outcome01 />
        <Outcome02 />
        <Outcome03 />
        <HumanBond />
        <Trust />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
