import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import styles from "./Contact.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Contact({ data }) {
  const { personal, contact } = data;
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailto = `mailto:${personal.email}?subject=${contact.emailSubject} — ${name}&body=${encodeURIComponent(
      `${contact.formNameLabel}: ${name}\n${contact.formEmailLabel}: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
      <div className="section-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {contact.sectionLabel}
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {contact.sectionTitle} <span className="accent">{contact.sectionTitleAccent}</span>
        </motion.h2>
      </div>

      <div className={styles.layout}>
        <motion.div
          className={styles.left}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.2}
        >
          <p className={styles.tagline}>
            {contact.tagline}
          </p>

          <div className={styles.contactItems}>
            <a
              href={`mailto:${personal.email}`}
              className={styles.contactItem}
            >
              <div className={styles.contactIcon}><Mail size={17} /></div>
              <div>
                <div className={styles.contactLabel}>{contact.emailLabel}</div>
                <div className={styles.contactValue}>{personal.email}</div>
              </div>
            </a>

            <a
              href={`tel:${personal.phone}`}
              className={styles.contactItem}
            >
              <div className={styles.contactIcon}><Phone size={17} /></div>
              <div>
                <div className={styles.contactLabel}>{contact.phoneLabel}</div>
                <div className={styles.contactValue}>{personal.phone}</div>
              </div>
            </a>

            <div className={styles.contactItem} style={{ cursor: "default" }}>
              <div className={styles.contactIcon}><MapPin size={17} /></div>
              <div>
                <div className={styles.contactLabel}>{contact.locationLabel}</div>
                <div className={styles.contactValue}>{personal.location}</div>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.right}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.35}
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaTitle}>{contact.formTitle}</div>
            <p className={styles.ctaSubtitle}>
              {contact.formSubtitle}
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>{contact.formNameLabel}</label>
                <input
                  className={styles.input}
                  name="name"
                  type="text"
                  placeholder={contact.formNamePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>{contact.formEmailLabel}</label>
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  placeholder={contact.formEmailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>{contact.formMessageLabel}</label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder={contact.formMessagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              <button className={styles.submitBtn} type="submit">
                {submitted ? contact.formSubmitting : (
                  <><Send size={16} /> {contact.formSubmitButton}</>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerBrand}>
          Bernardo <span>Castellani</span>
        </div>
        <div>© {new Date().getFullYear()} · {contact.footerText}</div>
        <div>{personal.location}</div>
      </div>
    </section>
  );
}
