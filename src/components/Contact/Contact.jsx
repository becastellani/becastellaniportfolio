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
  const { personal } = data;
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
    const mailto = `mailto:${personal.email}?subject=Contato via portfólio — ${name}&body=${encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\n${message}`
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
          Contato
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Vamos <span className="accent">conversar?</span>
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
            Estou aberto a novas oportunidades, projetos freelance e conversas técnicas.
            Se você tem algo interessante para discutir, me manda uma mensagem.
          </p>

          <div className={styles.contactItems}>
            <a
              href={`mailto:${personal.email}`}
              className={styles.contactItem}
            >
              <div className={styles.contactIcon}><Mail size={17} /></div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>{personal.email}</div>
              </div>
            </a>

            <a
              href={`tel:${personal.phone}`}
              className={styles.contactItem}
            >
              <div className={styles.contactIcon}><Phone size={17} /></div>
              <div>
                <div className={styles.contactLabel}>Telefone</div>
                <div className={styles.contactValue}>{personal.phone}</div>
              </div>
            </a>

            <div className={styles.contactItem} style={{ cursor: "default" }}>
              <div className={styles.contactIcon}><MapPin size={17} /></div>
              <div>
                <div className={styles.contactLabel}>Localização</div>
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
            <div className={styles.ctaTitle}>Envie uma mensagem</div>
            <p className={styles.ctaSubtitle}>
              Respondo em até 24h. Pode ser sobre oportunidades de trabalho,
              colaborações técnicas ou apenas um papo sobre tecnologia.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Nome</label>
                <input
                  className={styles.input}
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email</label>
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Mensagem</label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder="Sobre o que quer conversar?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              <button className={styles.submitBtn} type="submit">
                {submitted ? "Abrindo cliente de email..." : (
                  <><Send size={16} /> Enviar mensagem</>
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
        <div>© {new Date().getFullYear()} · Construído com React + Vite</div>
        <div>{personal.location}</div>
      </div>
    </section>
  );
}
