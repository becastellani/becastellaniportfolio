import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${project.featured ? styles.featured : ""}`}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index * 0.1}
      layout
    >
      <div className={styles.cardTop}>
        <span className={styles.categoryBadge}>{project.category}</span>
        <span className={styles.statusBadge}>
          <span
            className={`${styles.statusDot} ${
              project.status !== "Em desenvolvimento" ? styles.statusDotDone : ""
            }`}
          />
          {project.status}
        </span>
      </div>

      <div className={styles.projectName}>{project.name}</div>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.techRow}>
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className={styles.cardActions}>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.actionBtn}
          >
            <Github size={14} /> GitHub
          </a>
        ) : (
          <span className={styles.empty}>Privado / WIP</span>
        )}


        {project.deploy ? (
          <a
            href={project.deploy}
            target="_blank"
            rel="noreferrer"
            className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
          >
            <ExternalLink size={14} /> Demo
          </a>
        ) : (
          <span className={styles.empty}></span>
        )}
      </div>
    </motion.div>
  );
}

const CATEGORIES = ["Todos", "SaaS", "Sistemas", "Automação", "Produtividade"];

export default function Projects({ data }) {
  const { projects } = data;
  const [filter, setFilter] = useState("Todos");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filtered =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className={`section ${styles.projects}`} ref={sectionRef}>
      <div className="section-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Portfólio
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projetos
        </motion.h2>
      </div>

      <motion.div
        className={styles.filterRow}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div className={styles.grid} layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
