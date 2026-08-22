import type { Metadata } from "next";
import "./globals.css";

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
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#001736" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Material Symbols is an icon font, not a Google text font (next/font cannot self-host it). The root layout makes this <link> global; the @next/next/no-page-custom-font rule is a Pages Router check. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className="relative bg-clinical-white text-on-surface antialiased font-body-md text-body-md"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
