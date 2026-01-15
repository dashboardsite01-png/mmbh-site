import { Navbar } from "@/components/navbar";
import { ProgressBar } from "@/components/ui/progress-bar";
import type { Metadata } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";

// Font para títulos e destaques
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// Font para texto corrido (mais legível)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Marcha da Maconha BH | Pela liberdade e justiça social",
  description:
    "Site oficial da Marcha da Maconha de Belo Horizonte. Luta antiproibicionista, acolhimento jurídico/médico e informações sobre a regulamentação da cannabis.",
  keywords: [
    "Marcha da Maconha",
    "BH",
    "Belo Horizonte",
    "Cannabis",
    "Regulamentação",
    "Justiça Social",
    "Acolhimento",
    "Antiproibicionismo",
    "Direitos Humanos",
    "Cannabis Medicinal",
    "Redução de Danos",
    "Movimento Social",
  ],
  authors: [{ name: "Coletivo MMBH" }],
  creator: "Coletivo de Comunicação MMBH",
  publisher: "Marcha da Maconha BH",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marchadamaconhabh.org",
    title: "Marcha da Maconha BH | Pela liberdade e justiça social",
    description:
      "Desde 2008, lutando pela liberdade, justiça social e direitos humanos em Minas Gerais. Apoio jurídico, acolhimento médico e educação antiproibicionista.",
    siteName: "Marcha da Maconha BH",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcha da Maconha BH - Luta Antiproibicionista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcha da Maconha BH | Pela liberdade e justiça social",
    description:
      "Site oficial da Marcha da Maconha de Belo Horizonte. Luta antiproibicionista desde 2008.",
    images: ["/images/twitter-image.jpg"],
    creator: "@marchadamaconhabh",
  },
  alternates: {
    canonical: "https://marchadamaconhabh.org",
  },
  verification: {
    google: "inserir-codigo-verificacao-google",
    yandex: "inserir-codigo-verificacao-yandex",
  },
  category: "Ativismo Social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#78b341" />
        <meta name="msapplication-TileColor" content="#78b341" />
        <meta name="theme-color" content="#0a0a0a" />

        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Meta tags adicionais */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${comfortaa.variable} ${inter.variable} bg-background text-foreground selection:text-foreground font-sans antialiased selection:bg-emerald-500/30`}
      >
        {/* Progress Bar como componente client separado */}
        <ProgressBar />

        <Navbar />

        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
