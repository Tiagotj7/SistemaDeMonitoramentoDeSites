"use client";

import styles from "./FeaturesSection.module.css";
import FeatureCard from "./FeatureCard";
import { useInViewOnce } from "./useInViewOnce";

/* Ícones (os mesmos que eu tinha antes, mantidos) */
function IconBolt() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L3 14h7l-1 8 12-14h-7l-1-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 12.5 10.5 15 16 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconBell() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconLock() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 11V8a5 5 0 0 1 10 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 11h12v10H6V11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconDevices() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h12v9H4V7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M18 9h2v10h-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 19h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 9 4 12l4 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9 20 12l-4 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7 10 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FeaturesSection() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section ref={ref} className={`${styles.section} ${inView ? styles.isVisible : ""}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Recursos Poderosos</h2>
          <p className={styles.subtitle}>
            Tudo que você precisa para manter suas aplicações online e performáticas.
          </p>
        </header>

        <div className={styles.grid}>
          <FeatureCard
            index={0}
            title="Monitoramento em Tempo Real"
            description="Acompanhe uptime, latência e status da sua aplicação em tempo real."
            tag="Latência em Tempo Real"
            color="#2d7cff"
            icon={<IconBolt />}
          />

          <FeatureCard
            index={1}
            title="Dashboard Moderno"
            description="Dashboard Intuitivo. Interface simples, rápida e pensada para desenvolvedores."
            tag="Infraestrutura confiável"
            color="#2bd47c"
            icon={<IconCheck />}
          />

          <FeatureCard
            index={2}
            title="Alertas Inteligentes"
            description="Receba notificações quando algo sair do normal."
            tag="Mobile"
            color="#a855f7"
            icon={<IconBell />}
          />

          <FeatureCard
            index={3}
            title="Verificação SSL"
            description="Monitore a validade do seu certificado SSL e evite surpresas."
            tag="Auto-renewal Check"
            color="#fbbf24"
            icon={<IconLock />}
          />

          <FeatureCard
            index={4}
            title="Web + Mobile"
            description="Acesse métricas de qualquer lugar."
            tag="Web e Mobile"
            color="#ff3b3b"
            icon={<IconDevices />}
          />

          <FeatureCard
            index={5}
            title="Histórico de Incidentes"
            description="Visualize eventos, quedas e tempo de recuperação."
            tag="GET /api/v1/sites"
            color="#22d3ee"
            icon={<IconCode />}
          />
        </div>
      </div>
    </section>
  );
}