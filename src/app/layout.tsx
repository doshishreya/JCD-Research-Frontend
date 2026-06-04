import type { Metadata } from "next";
import { Noto_Sans, Poppins } from "next/font/google";
import { brandAssets } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JCD Research | Peptide Testing & Orders Dashboard",
  description:
    "Peptide-only analytical testing for researchers. Browse tests, place orders, and view COAs through a clean clinical dashboard at JCD Research.",
  keywords: [
    "peptide testing",
    "HPLC purity",
    "USP 71 sterility",
    "endotoxin testing",
    "JCD Research",
    "jcdresearch.com",
  ],
  icons: {
    icon: brandAssets.faviconWhite,
    shortcut: brandAssets.faviconWhite,
    apple: brandAssets.faviconWhite,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSans.variable}`}
    >
      <body className="bg-rule-60 font-sans antialiased">{children}</body>
    </html>
  );
}
