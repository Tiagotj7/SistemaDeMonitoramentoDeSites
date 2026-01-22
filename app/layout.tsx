// app/layout.tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Vigilant - Monitoramento Inteligente de Aplicações',
  description:
    'Plataforma de monitoramento em tempo real para aplicações web: ping, uptime, SSL, performance e analytics.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
