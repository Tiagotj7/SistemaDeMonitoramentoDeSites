"use client";

import styles from "./CtaSection.module.css";
import { useInViewOnce } from "./useInViewOnce";

type Props = {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export default function CtaSection({ onPrimaryClick, onSecondaryClick }: Props) {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${inView ? styles.isVisible : ""}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Pronto para Começar?</h2>

        <p className={styles.subtitle}>
          Comece agora e monitore suas aplicações com segurança.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={onPrimaryClick}>
            Criar Conta Grátis
          </button>

          <button className={styles.btnSecondary} onClick={onSecondaryClick}>
            Conheça-nos
          </button>
        </div>

        <p className={styles.small}>Setup em sua mão!</p>
      </div>
    </section>
  );
}