import styles from "./LegalPage.module.css";

type Props = {
  title: string;
  lastUpdate: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, lastUpdate, children }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>
            Última atualização: <time>{lastUpdate}</time>
          </p>
        </header>

        <article className={styles.content}>{children}</article>

        <footer className={styles.footer}>
          <p>
            Dúvidas? Entre em contato:{" "}
            <a href="mailto:tiagotj7dev@gmail.com">tiagotj7dev@gmail.com</a>
          </p>
        </footer>
      </div>
    </main>
  );
}