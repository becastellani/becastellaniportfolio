import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages } from "lucide-react";
import styles from "./LangSwitcher.module.css";

export default function LangSwitcher({ lang, changeLang, langs }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = langs[lang];

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        title="Idioma / Language"
      >
        <Languages size={15} />
        <span className={styles.currentLang}>
          {current?.flag} {current?.label}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {Object.entries(langs).map(([code, { label, flag, name }]) => (
              <button
                key={code}
                className={`${styles.option} ${lang === code ? styles.active : ""}`}
                onClick={() => {
                  changeLang(code);
                  setOpen(false);
                }}
              >
                <span className={styles.flag}>{flag}</span>
                <span className={styles.langName}>{name}</span>
                {lang === code && <span className={styles.check}>✓</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}