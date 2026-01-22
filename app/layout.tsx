// app/layout.tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
<<<<<<< HEAD
=======
import { Inter, Montserrat, Fira_Code } from 'next/font/google';
import './globals.css';

// Configurar cada fonte
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  // weight: ['400', '700'] // Defina pesos se necessário
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});
>>>>>>> dd3252a (add color and fonts)

export const metadata: Metadata = {
  title: 'Vigilant',
  description:
    'Plataforma de monitoramento em tempo real para aplicações web: ping, uptime, SSL, performance e analytics.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
<<<<<<< HEAD
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
=======
    <html lang="pt-br" className={`${inter.variable} ${montserrat.variable} ${firaCode.variable}`}>
      <body>
        {children}
      </body>
>>>>>>> dd3252a (add color and fonts)
    </html>
  );
}
