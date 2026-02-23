import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  TerminalIcon,
} from "lucide-react";
import styles from "./Sidebar.module.css";

const NAV_ICONS = {
  hero: Home,
  about: User,
  experience: Briefcase,
  projects: FolderGit2,
  contact: Mail,
};

export default function Sidebar({ data, activeSection, setActiveSection, onTerminalOpen }) {
  const { theme, toggleTheme } = useTheme();
  const { personal, navigation } = data;
  
  const NAV_ITEMS = [
    { id: "hero", label: navigation.home },
    { id: "about", label: navigation.about },
    { id: "experience", label: navigation.experience },
    { id: "projects", label: navigation.projects },
    { id: "contact", label: navigation.contact },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <motion.aside
        className={styles.sidebar}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.sidebarTop}>
          <div className={styles.brand}>
            <img 
              src="/avatar.jpg" 
              alt={personal.fullName}
              className={styles.avatar}
            />
            <div className={styles.brandText}>
              <div className={styles.brandName}>{personal.fullName}</div>
              <div className={styles.brandRole}>{personal.brandRole}</div>
            </div>
          </div>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navSectionLabel}>{navigation.navigationLabel}</div>
          {NAV_ITEMS.map(({ id, label }) => {
            const Icon = NAV_ICONS[id];
            return (
              <div
                key={id}
                className={`${styles.navItem} ${activeSection === id ? styles.active : ""}`}
                onClick={() => scrollTo(id)}
              >
                <Icon className={styles.navIcon} size={18} />
                {label}
                {activeSection === id && <span className={styles.navDot} />}
              </div>
            );
          })}
        </nav>

        <div className={styles.sidebarBottom}>
          <div className={styles.socialRow}>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className={styles.socialLink}
              title="Email"
            >
              <Mail size={14} />
            </a>
          </div>
          <button className={styles.terminalBtn} onClick={onTerminalOpen}>
            <TerminalIcon size={14} />
            <span>{navigation.terminal}</span>
          </button>

          <button className={styles.themeToggle} onClick={toggleTheme}>
            {theme === "dark" ? <Moon size={15} /> : <Sun size={15} />}
            <span>{theme === "dark" ? navigation.theme.dark : navigation.theme.light}</span>
            <div className={styles.toggleTrack}>
              <div
                className={`${styles.toggleThumb} ${
                  theme === "light" ? styles.toggleThumbActive : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.aside>

      <div className={styles.mobileBar}>
        <div className={styles.mobileNav}>
          {NAV_ITEMS.map(({ id, label }) => {
            const Icon = NAV_ICONS[id];
            return (
              <div
                key={id}
                className={`${styles.mobileNavItem} ${activeSection === id ? styles.active : ""}`}
                onClick={() => scrollTo(id)}
              >
                <Icon size={20} />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
