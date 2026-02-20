import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <Image
                src="/assets/Logo Vigilant2.png"
                alt="Vigilant"
                width={120}
                height={120}
                className={styles.logo}
                priority={false}
              />
            </div>

            <p className={styles.brandText}>
              Monitoramento inteligente de aplicações web para desenvolvedores.
            </p>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Projeto</div>
            <nav className={styles.links}>
              <Link className={styles.link} href="#Recursos">Recursos</Link>
              <Link className={styles.link} href="#Contato">Contato</Link>
            </nav>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Desenvolvedor</div>
            <nav className={styles.links}>
              <Link className={styles.link} href="https://github.com/Tiagotj7">Sobre mim</Link>
              <Link className={styles.link} href="https://portifolio-tiagotj7dev.vercel.app">Portfólio</Link>
              <a className={styles.link} href="https://github.com/Tiagotj7" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className={styles.link} href="https://www.linkedin.com/in/tiagotj7dev" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </nav>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Contato</div>
            <nav className={styles.links}>
              <a className={styles.link} href="mailto:tiagotj7dev@gmail.com">
                Email
              </a>
              <a className={styles.link} href="https://www.linkedin.com/in/tiagotj7dev">
                Agendar conversa
              </a>
            </nav>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <div className={styles.copy}>
            © {new Date().getFullYear()} Vigilant. Todos os direitos reservados.
          </div>

          <div className={styles.bottomLinks}>
            <Link className={styles.bottomLink} href="/privacy">Privacidade</Link>
            <Link className={styles.bottomLink} href="/terms">Termos</Link>
            <Link className={styles.bottomLink} href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}