import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import styles from "./Experience.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      className={styles.entry}
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.15}
    >
      <div className={`${styles.dot} ${exp.current ? styles.dotActive : ""}`} />

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardLeft}>
            <div className={styles.role}>{exp.role}</div>
            <div className={styles.company}>{exp.company}</div>
            <div className={styles.type}>{exp.type} · {exp.location}</div>
          </div>
          <div className={styles.cardRight}>
            <span className={styles.periodBadge}>{exp.period}</span>
            {exp.current && (
              <span className={styles.currentBadge}>
                <span className={styles.currentDot} />
                Atual
              </span>
            )}
          </div>
        </div>

        <ul className={styles.highlights}>
          {exp.highlights.map((h, i) => (
            <li key={i} className={styles.highlight}>
              <ChevronRight size={14} className={styles.highlightArrow} />
              {h}
            </li>
          ))}
        </ul>

        <div className={styles.techRow}>
          {exp.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience({ data }) {
  const { experiences, experience } = data;
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className={`section ${styles.experience}`} ref={sectionRef}>
      <div className="section-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {experience.sectionLabel}
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {experience.sectionTitle} <span className="accent">{experience.sectionTitleAccent}</span>
        </motion.h2>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine} />
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
