
import type { Metadata } from "next";
import type { ReactNode } from "react";
import './global.css';

export const metadata: Metadata = {
  title: 'Vigilant',
  description: 'Plataforma de monitoramento em tempo real para aplicações web: ping, uptime, SSL, performance e analytics.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
