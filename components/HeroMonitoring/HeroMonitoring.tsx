import styles from "./HeroMonitoring.module.css";

export default function HeroMonitoring() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* LEFT */}
        <div>
          <h1 className={styles.title}>
            Monitoramento{"\n"}
            inteligente{"\n"}
            para Web e{"\n"}
            Mobile
          </h1>

          <p className={styles.subtitle}>
            Acompanhe uptime, latência e validade do SSL em tempo real com um
            dashboard simples, rápido e pensado para desenvolvedores.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.tabletWrap}>
            <div className={styles.glow} />

            <div className={styles.tablet}>
              <div className={styles.tabletInner}>
                <aside className={styles.sidebar}>
                  <div className={styles.brand}>VIGILANT</div>

                  <nav className={styles.nav}>
                    <a className={styles.navItem} href="#"><span className={styles.dot} /> Visão Geral</a>
                    <a className={styles.navItem} href="#"><span className={styles.dot} /> Monitorar</a>
                    <a className={styles.navItem} href="#"><span className={styles.dot} /> Análise</a>
                    <div className={styles.divider} />
                    <a className={styles.navItem} href="#"><span className={styles.dot} /> Filtros</a>
                    <a className={styles.navItem} href="#"><span className={styles.dot} /> Retenção</a>
                    <a className={styles.navItem} href="#"><span className={styles.dot} /> Metas</a>
                  </nav>
                </aside>

                <main className={styles.main}>
                  <div className={styles.topbar}>
                    <div className={styles.burger} />
                    <div className={styles.search} />
                  </div>

                  <div className={styles.stats}>
                    <div className={styles.card}>
                      <div className={styles.cardLabel}>Acessos</div>
                      <div className={styles.cardValue}>25</div>
                    </div>
                    <div className={styles.card}>
                      <div className={styles.cardLabel}>Retenção</div>
                      <div className={styles.cardValue}>78%</div>
                    </div>
                    <div className={styles.card}>
                      <div className={styles.cardLabel}>Velocidade</div>
                      <div className={styles.cardValue}>0.65</div>
                    </div>
                  </div>

                  <div className={styles.middle}>
                    <div className={`${styles.panel} ${styles.panelWide}`}>
                      <div className={styles.panelTitle}>Estatistica de tráfego</div>

                      <div className={styles.bars}>
                        <div className={styles.bar} style={{ height: "42%" }} />
                        <div className={styles.bar} style={{ height: "68%" }} />
                        <div className={styles.bar} style={{ height: "76%" }} />
                        <div className={styles.bar} style={{ height: "62%" }} />
                        <div className={styles.bar} style={{ height: "84%" }} />
                      </div>

                      <div className={styles.axis}>
                        <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span>
                      </div>
                    </div>

                    <div className={styles.panel}>
                      <div className={styles.donut}>
                        <div className={styles.donutInner}>72%</div>
                      </div>

                      <div className={styles.miniBadge}>
                        <span className={styles.muted}>35%</span> <b>/24h</b>
                      </div>
                    </div>
                  </div>

                  <div className={styles.bottom}>
                    <div className={styles.panel}>
                      <div className={styles.softChart} />
                      <div className={styles.axisSmall}>
                        <span>seg</span><span>ter</span><span>qua</span><span>qui</span><span>sex</span>
                      </div>
                    </div>

                    <div className={styles.panel}>
                      <div className={styles.progressBox}>
                        <div className={styles.progressA} />
                        <div className={styles.progressB} />
                      </div>
                      <div className={styles.caption}>últimos 7 dias</div>
                    </div>
                  </div>
                </main>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}