import type { ReactElement } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ChatInterface } from "@/components/chat-interface";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage(): ReactElement {
  return (
    <>
      <Nav />
      <main className="relative pt-20 bg-clinical-overlay">
        <Hero />
        <HowItWorks />
        <ChatInterface />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
