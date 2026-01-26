"use client";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <section className={styles.content}>
      <h1>
        Bem-vindo ao <span>VIGILANT</span>
      </h1>

      <p>
        Plataforma de monitoramento em tempo real para aplicações web:
        <br />
        ping, uptime, SSL, performance e analytics.
      </p>
    </section>
  );
};
