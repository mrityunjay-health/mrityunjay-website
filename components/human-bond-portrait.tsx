"use client";

import Image from "next/image";
import { useState, type ReactElement } from "react";

const PORTRAIT_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3Tdvb_ulIuf4HVg1hp-aM8fDOhFEExMIyke5SyLY0F5KeXyTjZK34O_k6MVRgJ0aEAkkBUxXLA2r3oZZgZRg7Rx1e--d7Ps6XD4qH6jmTbyVKC0BN0UpMsBfizZlF9lYjQvvMeAfvgomj6UH4bJvAJymudobZZeLeCCmF1G0Oy4urjkQp9Y6BzleAIZ7aSyduuIf-ItDkycqU6pP7_FJr9fddS4rWNzLzBD-BgUQbLi9vzAgME_pdfw";

export function HumanBondPortrait(): ReactElement | null {
  const [broken, setBroken] = useState(false);
  if (broken) return null;
  return (
    <Image
      alt="Direct eye contact between clinician and patient during consultation"
      src={PORTRAIT_SRC}
      fill
      onError={() => setBroken(true)}
      className="object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 z-10"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  );
}
