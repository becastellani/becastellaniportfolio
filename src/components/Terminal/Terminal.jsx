import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import styles from "./Terminal.module.css";

const HOSTNAME = "bernardo@portfolio";
const PROMPT = `${HOSTNAME}:~$`;

function buildResponses(data) {
  const p = data.personal;
  const exps = data.experiences;
  const projs = data.projects;
  const skills = data.skills;
  const edu = data.education;
  const certs = data.certifications;
  const achievements = data.achievements;
  const nav = data.navigation;

  // Gera pods dinamicamente a partir dos projetos
  const buildPods = () => {
    const rows = projs.map((proj) => {
      const podName = `${proj.name.toLowerCase().replace(/\s+/g, "-")}-api-${Math.random().toString(36).slice(2, 6)}`;
      const age = proj.status.toLowerCase().includes("andamento") ||
                  proj.status.toLowerCase().includes("progress") ||
                  proj.status.toLowerCase().includes("cours") ||
                  proj.status.toLowerCase().includes("bearbeitung")
        ? `${Math.floor(Math.random() * 30) + 1}d`
        : `${Math.floor(Math.random() * 120) + 30}d`;
      return `${podName.padEnd(36)}1/1     Running     0          ${age}`;
    });
    rows.push("bernardo-brain-0                    1/1     Running     0          20y");
    return rows.join("\n");
  };

  // Monta stack de skills dinamicamente
  const buildSkills = () => {
    const backend = skills.backend.map((s) => `  ${s.name}`).join("\n");
    const frontend = skills.frontend.map((s) => `  ${s.name}`).join("\n");
    const infra = skills.infra.map((s) => `  ${s.name}`).join("\n");
    const dbs = `  ${skills.databases.join(" · ")}`;

    return `
Backend:
${backend}

Frontend:
${frontend}

${nav?.about || "Databases"}:
${dbs}

Infraestrutura:
${infra}
`;
  };

  // Ambientes e tipos únicos extraídos das experiências
  const envTypes = [...new Set(exps.map((e) => e.type))].join(" · ");

  // Anos de experiência calculados dinamicamente
  const startYear = 2023;
  const yearsExp = new Date().getFullYear() - startYear;

  return {
    help: () => `
Comandos disponíveis:

  whoami              ${p.role}
  skills              Stack técnica completa
  experience          ${nav?.experience || "Histórico profissional"}
  projects            ${nav?.projects || "Projetos"}
  education           Formação acadêmica
  certs               Certificações
  achievements        Conquistas acadêmicas
  php --version       Expertise em PHP
  php artisan list    Comandos do dia a dia
  kubectl get pods    Serviços em produção
  git log             Histórico de commits
  contact             ${nav?.contact || "Contato"}
  cat readme.md       Sobre este portfólio
  cat .secrets        Tenta a Sorte! (só para curiosos)
  ls                  Arquivos disponíveis
  pwd                 Diretório atual
  date                Data/hora do sistema
  uname               Informações do sistema
  cd ..               Você não vai a lugar nenhum
  sudo rm -rf /       Tenta aí
  clear               Limpar terminal (ou Ctrl+L)
  exit                Fechar terminal (ou ESC)
`,

    whoami: () => `
${p.fullName}
${p.role} — ${p.location}

${p.description}

Digite 'skills' para ver o stack completo.
`,

    skills: buildSkills,

    experience: () => {
      return "\n" + exps.map((exp, i) => {
        const highlights = exp.highlights
          .map((h) => `    → ${h}`)
          .join("\n");
        const current = exp.current ? " ◉ atual" : "";
        return `[${i + 1}] ${exp.company} — ${exp.role}${current}
    ${exp.period} | ${exp.location}
    Stack: ${exp.tech.join(" · ")}
${highlights}`;
      }).join("\n\n");
    },

    projects: () => {
      const list = projs.map((proj) => {
        const tech = proj.tech.join(" · ");
        const github = proj.github ? `\n                     github.com/${proj.github.split("github.com/")[1]}` : "";
        const deploy = proj.deploy ? `\n                     demo: ${proj.deploy}` : "";
        return `  ${proj.name.padEnd(18)} [${proj.status.toUpperCase()}]
                     ${proj.description}
                     ${tech}${github}${deploy}`;
      }).join("\n\n");

      return `\n${list}\n\nDigite 'kubectl get pods' para ver o status de produção.\n`;
    },

    education: () => {
      return "\n" + edu.map((e) => `
  ${e.institution}
  ${e.degree} — ${e.period}
  ${e.highlight}
`).join("\n");
    },

    certs: () => {
      const list = certs.map((c) => `  [${c.year}]  ${c.name} — ${c.issuer}`).join("\n");
      return `\nCertificações:\n\n${list}\n`;
    },

    achievements: () => {
      const list = achievements.map((a) => `  ✓ ${a}`).join("\n");
      return `\nConquistas acadêmicas:\n\n${list}\n`;
    },

    "kubectl get pods": () => `
NAME                                  READY   STATUS      RESTARTS   AGE
${buildPods()}

All pods healthy. No restarts detected.
`,

    "php --version": () => `
PHP 8.2.0 (cli) (built: production-ready)
Copyright (c) The PHP Group

Frameworks:    Laravel · Symfony
Experiência:   ${yearsExp}+ anos em produção
Ambientes:     ${envTypes}
Especialidade: APIs REST · Refatoração de legado · Performance
Extras:        Queues · Cache · Migrations · Artisan Commands

"Code is like humor. When you have to explain it, it's bad."
— Cory House
`,

    "php artisan list": () => `
Laravel Framework 11.x

Usage:
  command [options] [arguments]

Available commands (favoritos):
  make:model        Cria model + migration + factory
  make:job          Processa filas assíncronas
  queue:work        Worker de filas RabbitMQ/Redis
  migrate:fresh     Reseta banco (nunca em prod)
  tinker            PHP interativo no contexto do app
  route:list        Lista todas as rotas da aplicação
  optimize          Cache de config, routes e views
  test              Roda PHPUnit / Pest

Dica: nunca rode 'migrate:fresh' em produção.
Aprendi isso da pior forma possível.
`,

    "git log": () => `
commit a7f3d91 (HEAD -> main)
Author: ${p.fullName} <${p.email}>
Date:   Hoje

    feat: adiciona terminal interativo ao portfólio

commit 3b8e204
Date:   Semana passada

    fix: corrige overflow no mobile do Hero section

commit 9c1fa55
Date:   Há 2 semanas

    refactor: remove skill bars com % inventado

commit 4d72a18
Date:   Há 3 semanas

    feat: portfólio v1 — primeiro commit

commit 0000001
Date:   ${startYear}

    init: começou a programar de verdade
`,

    contact: () => `
Entre em contato:

  Email       ${p.email}
  LinkedIn    ${p.social.linkedin.replace("https://www.", "").replace("https://", "")}
  GitHub      ${p.social.github.replace("https://", "")}
  Telefone    ${p.phone}
  Localização ${p.location}

Tempo médio de resposta: < 24h
`,

    "cat readme.md": () => `
# ${p.fullName} — Portfolio

${p.tagline}

${p.description}

Stack:
  - React 18 + Vite 5
  - Framer Motion
  - CSS Modules

Formação: ${edu[0]?.degree} — ${edu[0]?.institution}
${edu[0]?.highlight}

MIT License — use à vontade.
`,

    ls: () => `
total 4
drwxr-xr-x  bernardo  staff   curriculo.pdf
drwxr-xr-x  bernardo  staff   readme.md
----------  bernardo  staff   .secrets
`,

    "cat .secrets": () => `
cat: .secrets: Permission denied

(tenta com sudo)
`,

    "sudo cat .secrets": () => `
[sudo] password for bernardo: 

Autenticando...
Autenticando...

ACCESS GRANTED

.secrets:
  - Café antes de qualquer standup
  - Todo bug em prod foi "funciona na minha máquina"
  - O ERP legado tinha funções de 800 linhas
  - Kubernetes parecia impossível. Agora é rotina.
  - Esse portfólio foi feito com ajuda de IA. E daí?
`,

    "sudo rm -rf /": () => `
[sudo] password for bernardo:

Verificando permissões...
Analisando impacto...

Brincadeira. Não vai rolar.
Esse servidor está protegido por:
  ✓ Bom senso
  ✓ ${yearsExp} anos de erros em produção
  ✓ Aquela vez que rodei UPDATE sem WHERE

Tente 'help' para comandos que realmente funcionam.
`,

    "cd ..": () => `cd: permission denied: você não sai daqui tão fácil.`,
    "cd ~": () => `Você já está em home. Esse é o portfólio todo.`,

    pwd: () => `/home/bernardo/portfolio`,
    date: () => new Date().toString(),
    uname: () => `Portfolio OS ${yearsExp}.0.0 — React Kernel — Built with Vite`,
    echo: (args) => args.join(" ") || "",
    clear: () => null,
    exit: () => "__EXIT__",
  };
}

function processCommand(input, responses) {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return "";

  const [cmd, ...args] = trimmed.split(" ");
  const full = trimmed;

  if (responses[full]) return responses[full](args);
  if (responses[cmd]) return responses[cmd](args);

  return `\nbash: ${trimmed}: command not found\n\nType 'help' to see available commands.\n`;
}

export default function Terminal({ isOpen, onClose, data }) {
  const responses = useMemo(() => buildResponses(data), [data]);

  const [lines, setLines] = useState([
    { type: "system", text: "Portfolio Terminal v1.0.0" },
    { type: "system", text: 'Type "help" to see available commands.' },
    { type: "system", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [hoveredDot, setHoveredDot] = useState(null);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const submit = () => {
    const cmd = input.trim();
    if (!cmd) return;

    setHistory((h) => [cmd, ...h]);
    setHistoryIndex(-1);

    const result = processCommand(cmd, responses);

    if (result === "__EXIT__") {
      onClose();
      setInput("");
      return;
    }

    if (result === null) {
      setLines([]);
      setInput("");
      return;
    }

    setLines((prev) => [
      ...prev,
      { type: "input", text: cmd },
      ...(result ? [{ type: "output", text: result }] : []),
    ]);
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((i) => {
        const next = Math.min(i + 1, history.length - 1);
        setInput(history[next] || "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((i) => {
        const next = Math.max(i - 1, -1);
        setInput(next === -1 ? "" : history[next]);
        return next;
      });
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.terminal}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.titleBar}>
              <div className={styles.dots}>
                <button
                  className={`${styles.dot} ${styles.dotRed}`}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredDot("close")}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  {hoveredDot === "close" && <X size={8} strokeWidth={3} />}
                </button>
                <button
                  className={`${styles.dot} ${styles.dotYellow}`}
                  onMouseEnter={() => setHoveredDot("minimize")}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  {hoveredDot === "minimize" && <Minus size={8} strokeWidth={3} />}
                </button>
                <button
                  className={`${styles.dot} ${styles.dotGreen}`}
                  onMouseEnter={() => setHoveredDot("maximize")}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  {hoveredDot === "maximize" && <Square size={6} strokeWidth={3} />}
                </button>
              </div>
              <span className={styles.title}>{HOSTNAME} — bash</span>
              <div className={styles.titleRight} />
            </div>

            <div className={styles.output} onClick={() => inputRef.current?.focus()}>
              {lines.map((line, i) => (
                <div key={i} className={styles[line.type]}>
                  {line.type === "input" && (
                    <span className={styles.prompt}>{PROMPT} </span>
                  )}
                  <pre>{line.text}</pre>
                </div>
              ))}
              <div className={styles.inputLine}>
                <span className={styles.prompt}>{PROMPT}</span>
                <input
                  ref={inputRef}
                  className={styles.input}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}