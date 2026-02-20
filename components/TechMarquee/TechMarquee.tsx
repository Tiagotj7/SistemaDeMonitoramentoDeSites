import Image from "next/image";
import styles from "./TechMarquee.module.css";

export type TechItem = {
  src: string;
  alt: string;
  label?: string;
};

type Props = {
  items: TechItem[];
  duration?: number;

  /** aumenta o “ciclo base” para evitar espaço vazio */
  repeats?: number;

  /** tamanhos */
  badgeSize?: number; // circulo
  iconSize?: number;  // svg dentro
  labelSize?: number; // texto

  highlightIndex?: number;
};

export default function TechMarquee({
  items,
  duration = 20,
  repeats = 3,
  badgeSize = 62,
  iconSize = 38,
  labelSize = 16,
  highlightIndex = 2,
}: Props) {
  const safeRepeats = Math.max(1, repeats);

  // base mais longo (pra não ficar menor que a tela)
  const base = Array.from({ length: safeRepeats }, () => items).flat();

  // duplica 2x para loop perfeito com translateX(-50%)
  const loop = base.concat(base);

  return (
    <div
      className={styles.band}
      style={{
        ["--duration" as any]: `${duration}s`,
        ["--badge" as any]: `${badgeSize}px`,
        ["--icon" as any]: `${iconSize}px`,
        ["--label" as any]: `${labelSize}px`,
      }}
    >
      <div className={styles.track}>
        {loop.map((it, i) => {
const shouldHighlight = typeof highlightIndex === "number" && highlightIndex >= 0 && i === highlightIndex;          return (
            <div
              key={`${it.alt}-${i}`}
              className={`${styles.item} ${shouldHighlight ? styles.highlight : ""}`}
            >
              <div className={styles.badge}>
                <Image
                  src={it.src}
                  alt={it.alt}
                  width={iconSize}
                  height={iconSize}
                  className={styles.icon}
                />
              </div>

              {it.label ? <span className={styles.label}>{it.label}</span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}