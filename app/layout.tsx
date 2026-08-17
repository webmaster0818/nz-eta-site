import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New Zealand eTA Guide — what the NZeTA really costs",
    template: "%s | NZeTA Guide",
  },
  description:
    "An independent, plain-English guide to the New Zealand Electronic Travel Authority (NZeTA): the request fee, the NZ$100 IVL, validity, and how to apply on the official channels.",
  keywords:
    "NZeTA, New Zealand eTA, Electronic Travel Authority, IVL, International Visitor Levy, New Zealand travel authorisation",
  robots: { index: true, follow: true },
  /** ⚠️ Search Consoleの所有権確認はMETA方式。
   *  FILE方式は trailingSlash:true のせいで /googleXXXX.html が308になり使えなかった。 */
  verification: { google: "u7cswoLnSj51ZO6QLLRBwN62QGsvxamKaV_XVGm99i0" },
  openGraph: {
    title: "New Zealand eTA Guide — what the NZeTA really costs",
    description:
      "The NZeTA request fee is only part of it. The NZ$100 IVL is charged at the same time.",
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}