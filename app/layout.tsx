// app/layout.tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: 'Vigilant - Monitoramento Inteligente de Aplicações',
  description:
    'Plataforma de monitoramento em tempo real para aplicações web: ping, uptime, SSL, performance e analytics.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable}`}>{children}</body>
    </html>
  );
}