import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";

// Fonts with personality — deliberately not the generic Inter/Outfit look.
// Bricolage Grotesque (display) has distinctive humanist quirks; Hanken
// Grotesk (body) is warm and readable with more character than Inter.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Fraunces — serif display de alto contraste e caráter (eixos SOFT/WONK).
// Usada como acento artístico (ex.: numerais das datas), contrastando com o grotesco.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ambulatório de Dermatologia e Hanseníase da Amazônia · Marabá-PA",
    template: "%s | Ambulatório de Hanseníase da Amazônia",
  },
  description:
    "Centro de referência em Marabá-PA no diagnóstico, tratamento, reabilitação, pesquisa e ensino sobre a hanseníase. Atendimento gratuito pelo SUS, e realizador do I Congresso Amazônico de Hanseníase.",
  keywords:
    "ambulatório, hanseníase, dermatologia, Amazônia, Marabá, Pará, UEPA, SUS, congresso, saúde pública, hansenologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${hanken.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
