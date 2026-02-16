import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hope Missions 360 | Transforming Lives Through Care",
  description: "Hope Missions 360 provides medical, dental, and vision care to underserved populations worldwide. Putting God's love in action through humanitarian service.",
  keywords: "nonprofit, medical missions, humanitarian aid, dental care, vision care, disaster relief, community service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
