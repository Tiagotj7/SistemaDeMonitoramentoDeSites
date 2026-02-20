import styles from "./FeaturesSection.module.css";

type Props = {
  title: string;
  description: string;
  tag: string;
  color: string;
  icon: React.ReactNode;
  index: number; // para stagger
};

export default function FeatureCard({
  title,
  description,
  tag,
  color,
  icon,
  index,
}: Props) {
  return (
    <article
      className={styles.card}
      style={
        {
          ["--accent" as any]: color,
          ["--d" as any]: `${index * 110}ms`,
        } as React.CSSProperties
      }
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>

      <div className={styles.cardFooter}>
        <span className={styles.cardTag}>{tag}</span>

        <span className={styles.cardIcon} aria-hidden="true">
          {icon}
        </span>
      </div>

      <span className={styles.cardGlow} aria-hidden="true" />
      <span className={styles.cardShine} aria-hidden="true" />
    </article>
  );
}