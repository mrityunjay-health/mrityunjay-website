import type { Metadata } from "next";
import { Newsreader, Manrope, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mritunjay | The Intelligent Layer of Healthcare",
  description:
    "Mritunjay is the intelligent bridge between your medical history and your future care. Healthcare that finally remembers you.",
  keywords: [
    "personalized healthcare",
    "AI healthcare",
    "health intelligence",
    "preventive care",
    "physician assisted AI",
  ],
  openGraph: {
    title: "Mritunjay | The Intelligent Layer of Healthcare",
    description: "Healthcare that finally remembers you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} ${hankenGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#001736" />
      </head>
      <body
        className="bg-clinical-white text-on-surface antialiased font-body-md text-body-md"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
