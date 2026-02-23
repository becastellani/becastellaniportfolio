import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ArrowRight, Download } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Hero.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Stats({ className, data }) {
  return (
    <div className={className}>
      <div className={styles.stat}>
        <div className={styles.statNumber}>3<span>+</span></div>
        <div className={styles.statLabel}>{data.hero.statsYearsLabel}</div>
      </div>
      <div className={styles.stat}>
        <div className={styles.statNumber}>20<span>+</span></div>
        <div className={styles.statLabel}>{data.hero.statsProjectsLabel}</div>
      </div>
    </div>
  );
}

export default function Hero({ data }) {
  const { personal } = data;
  const { theme } = useTheme();
  const [particlesInit, setParticlesInit] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 640
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesInit(true));
  }, []);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      color: { value: theme === "dark" ? "#00d4aa" : "#009b78" },
      links: {
        color: theme === "dark" ? "#00d4aa" : "#009b78",
        distance: 150,
        enable: true,
        opacity: 0.08,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: { density: { enable: true, area: 1000 }, value: 60 },
      opacity: { value: { min: 0.05, max: 0.3 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      {particlesInit && (
        <div className={styles.particles}>
          <Particles options={particlesOptions} />
        </div>
      )}
      <div className={styles.grid} />
      <div className={styles.gradient} />

      <div className={styles.content}>
        <motion.span
          className={styles.firstName}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          {personal.name}
        </motion.span>
        <motion.span
          className={styles.lastName}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          {personal.lastName}
        </motion.span>

        <motion.div
          className={styles.roleRow}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          <div className={styles.roleLine} />
          <span className={styles.roleText}>{personal.role}</span>
        </motion.div>

        <motion.p
          className={styles.description}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
        >
          {personal.description}
        </motion.p>

        <motion.div
          className={styles.actions}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          <button className={styles.btnPrimary} onClick={scrollToProjects}>
            {data.hero.viewProjectsButton} <ArrowRight size={16} />
          </button>
          <a
            href="/Bernardo_Mantoan_Castellani.pdf"
            download
            className={styles.btnSecondary}
          >
            {data.hero.resumeButton} <Download size={16} />
          </a>
        </motion.div>

        {isMobile && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.65}
          >
            <Stats className={styles.stats} data={data} />
          </motion.div>
        )}
      </div>

      {!isMobile && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          <Stats className={styles.stats} data={data} />
        </motion.div>
      )}

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        scroll
      </div>
    </section>
  );
}