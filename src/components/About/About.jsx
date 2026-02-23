import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Award, BookOpen, Trophy } from "lucide-react";
import styles from "./About.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About({ data }) {
  const { personal, certifications, achievements, about } = data;
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className={`section ${styles.about}`} ref={sectionRef}>
      <div className="section-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {about.sectionLabel}
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {about.sectionTitle}{" "}
          <span className="accent">{about.sectionTitleAccent}</span>
        </motion.h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <motion.p
            className={styles.bio}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
          >
            {about.bio}
          </motion.p>

          <motion.div
            className={styles.infoList}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.35}
          >
            {about.languages.map((lang) => (
              <div key={lang.name} className={styles.infoItem}>
                <Award size={15} className={styles.infoIcon} />
                <span className={styles.infoLabel}>{lang.name}</span>
                <span className={styles.infoValue}>{lang.level}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.42}
          >
            <div className={styles.groupLabel}>{about.softSkillsLabel}</div>
            <div className={styles.tagCloud}>
              {about.softSkills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.box}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.5}
          >
            <div className={styles.boxHeader}>
              <Trophy size={14} className={styles.infoIcon} />
              <span className={styles.groupLabel} style={{ margin: 0 }}>{about.academicLabel}</span>
            </div>
            <ul className={styles.achievementsList}>
              {achievements.map((a) => (
                <li key={a} className={styles.achievementItem}>{a}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className={styles.right}>
          {about.skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.skillGroup}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2 + gi * 0.1}
            >
              <div className={styles.groupLabel}>{group.label}</div>
              <div className={styles.tagCloud}>
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            className={styles.box}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.7}
          >
            <div className={styles.boxHeader}>
              <BookOpen size={14} className={styles.infoIcon} />
              <span className={styles.groupLabel} style={{ margin: 0 }}>{about.certificationsLabel}</span>
            </div>
            <div className={styles.certsList}>
              {certifications.map((cert) => (
                <div key={cert.name} className={styles.certItem}>
                  <span className={styles.certName}>{cert.name}</span>
                  <span className={styles.certYear}>{cert.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
