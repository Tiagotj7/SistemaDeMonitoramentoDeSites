import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <section className={styles.loadingContainer}>
      <div className={styles.content}>
        <h1>
          Bem-vindo ao <span>VIGILANT</span>
        </h1>

        <p>
          Plataforma de monitoramento em tempo real para aplicações web:
          <br />
          ping, uptime, SSL, performance e analytics.
        </p>
      </div>

      <span className={styles.dot} aria-label="Carregando" />
    </section>
  );
};