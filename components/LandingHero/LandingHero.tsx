"use client";

import styles from "./LandingHero.module.css";
import HeroMonitoring from "../HeroMonitoring/HeroMonitoring";
import TechMarquee from "../TechMarquee/TechMarquee";

export default function LandingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.diagonal} />

      <div className={styles.wrapper}>
        <HeroMonitoring />

        <div className={styles.marqueeArea}>
          <TechMarquee
            items={[
              { src: "/assets/logotech/react.svg", alt: "React" },
              { src: "/assets/logotech/nodedotjs.svg", alt: "Node.js" },
              { src: "/assets/logotech/nextdotjs.svg", alt: "Next.js" },
              { src: "/assets/logotech/javascript.svg", alt: "JavaScript" },
              { src: "/assets/logotech/mysql.svg", alt: "MySQL" },
              { src: "/assets/logotech/php.svg", alt: "PHP" },
              { src: "/assets/logotech/html5.svg", alt: "HTML5" },
              { src: "/assets/logotech/css.svg", alt: "CSS" },
              { src: "/assets/logotech/vercel.svg", alt: "Vercel" },
            ]}
            duration={50}
            repeats={4}
            badgeSize={90}
            iconSize={44}
            labelSize={16}
            highlightIndex={2}
          />
        </div>
      </div>
    </section>
  );
}