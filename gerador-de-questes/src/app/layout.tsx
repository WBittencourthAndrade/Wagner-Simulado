import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Especialista FCC | Bancas, Raio-X & Questões Inéditas (Nível Médio)",
  description:
    "Especialista Sênior em Bancas de Concursos Públicos da Fundação Carlos Chagas (FCC). Diagnóstico de incidência recente, questões inéditas calibradas e engenharia de distratores para Técnico Judiciário e Administrativo.",
  keywords: [
    "FCC",
    "Fundação Carlos Chagas",
    "Concursos Públicos",
    "Técnico Judiciário",
    "TRT",
    "TRE",
    "TRF",
    "TJ",
    "Questões Inéditas",
    "Raio-X FCC",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-100 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
