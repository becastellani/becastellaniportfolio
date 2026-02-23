import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square, TerminalIcon } from "lucide-react";
import styles from "./Terminal.module.css";

const HOSTNAME = "bernardo@portfolio";
const PROMPT = `${HOSTNAME}:~$`;

const FILES = {
  "curriculo.pdf": "binary",
  "readme.md": "text",
  ".secrets": "hidden",
};

const RESPONSES = {
  help: () => `
Comandos disponíveis:

  whoami              Quem é esse dev
  skills              Stack técnica completa
  experience          Histórico profissional
  projects            Projetos em produção
  php --version       Expertise em PHP
  php artisan list    Comandos do dia a dia
  kubectl get pods    Serviços em produção
  git log             Histórico de commits
  contact             Como me encontrar
  cat readme.md       Sobre este portfólio
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
Bernardo Castellani
Full Stack Developer — Toledo, PR

Especializado em PHP, Node.js e Docker.
Atualmente na Sicredi Vale do Piquiri, desenvolvendo e mantendo
sistemas críticos para uma cooperativa de crédito.

Estudante de Engenharia de Software na Biopark (2023-2026).

Digite 'skills' para ver o stack completo.
`,

  skills: () => `
Backend:
  PHP     - Laravel · Symfony
  Node.js - NestJS · Express
  Python  - Pandas · Scripts
  Go      - Concorrência · APIs
  Java    - Spring Boot
  TypeScript

Banco de Dados:
  PostgreSQL · SQL Server · Oracle · MySql · MongoDB · Redis

Infraestrutura:
  Kubernetes · Docker · RabbitMQ · CI/CD · Linux

Frontend:
  React · JavaScript · HTML5 · CSS3
`,

  experience: () => `
[1] Sicredi Vale do Piquiri — Full Stack Developer
    Jul 2025 → Presente | Palotina, PR
    → Sistema satélite de cobrança e negociação de dívidas
    → Integrações REST com core bancário e bureaus de crédito
    → Microsserviços PHP orquestrados em Kubernetes
    → Troubleshooting: queries SQL Server/PostgreSQL em produção
    → ETLs com Python/Pandas

[2] Alow Gestão e Telefonia — Full Stack Developer
    Ago 2023 → Jun 2025 | Toledo, PR (Remoto)
    → Refatoração de ERP legado em PHP (Laravel/Symfony)
    → Cache distribuído Redis — redução de 30% no tempo de resposta
    → Automações Puppeteer/Selenium — ~20h semanais eliminadas
    → Filas RabbitMQ para processamento assíncrono

[3] Alow Gestão e Telefonia — Suporte Técnico N2/N3
    Mai 2023 → Jul 2023 | Toledo, PR (Remoto)
    → Otimização de queries MySQL — redução de 35% em relatórios
    → Automação de verificações de sistema com Python/Selenium
`,

  projects: () => `
Projetos ativos e concluídos:

  FD SmartCheck   [WIP]    Check-in acadêmico via QR Code + geolocalização
                           Node.js · React · PostgreSQL · HMAC-SHA256
                           Segurança por assinatura criptográfica

  ActionPlanner   [DONE]   Task management com dashboard profissional
                           Angular · Node.js · TypeScript · PostgreSQL · JWT

  Price Tracker   [DONE]   Web scraping concorrente de preços em Go
                           Go · Goroutines · PostgreSQL · REST API

Digite 'kubectl get pods' para ver o status de produção.
`,

  "kubectl get pods": () => `
NAME                          READY   STATUS      RESTARTS   AGE
fd-smartcheck-backend-9x1m    1/1     Running     0          14d
fd-smartcheck-frontend-2k8s   1/1     Running     0          14d
price-tracker-scraper-3j7n    1/1     Running     0          47d
actionplanner-api-5m3x        1/1     Running     0          89d
bernardo-brain-0              1/1     Running     0          20y

All pods healthy. No restarts detected.
`,

  "php --version": () => `
PHP 8.2.0 (cli) (built: production-ready)
Copyright (c) The PHP Group

Frameworks:    Laravel · Symfony - Expertise em sistemas legados e modernos
Performance:   Otimização de queries, caching e troubleshooting em produção
Experiência:   3+ anos em produção
Ambientes:     SaS · ERP · Cooperativa de Crédito
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
Author: Bernardo Castellani <becastellani10@gmail.com>
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
Date:   2023

    init: começou a programar de verdade
`,

  contact: () => `
Entre em contato:

  Email       becastellani10@gmail.com
  LinkedIn    linkedin.com/in/bernardo-castellani-b515a0203
  GitHub      github.com/becastellani
  Telefone    +55 19 99905-0946
  Localização Toledo — Paraná, Brasil

Tempo médio de resposta: < 24h
`,

  "cat readme.md": () => `
# Bernardo Castellani — Portfolio

Construído com React + Vite + Framer Motion.

Stack:
  - React 18
  - Vite 5
  - Framer Motion
  - CSS Modules
  - tsParticles

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
  ✓ 3 anos de erros em produção
  ✓ Aquela vez que rodei UPDATE sem WHERE

Tente 'help' para comandos que realmente funcionam.
`,

  "cd ..": () => `
cd: permission denied: você não sai daqui tão fácil.
`,

  "cd ~": () => `
Você já está em home. Esse é o portfólio todo.
`,

  pwd: () => `/home/bernardo/portfolio`,

  date: () => new Date().toString(),

  uname: () => `Portfolio OS 1.0.0 — React Kernel — Built with Vite`,

  echo: (args) => args.join(" ") || "",

  clear: () => null,

  exit: () => "__EXIT__",
};

const UNKNOWN = (cmd) => `
bash: ${cmd}: command not found

Digite 'help' para ver os comandos disponíveis.
`;

function processCommand(input) {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return "";

  const [cmd, ...args] = trimmed.split(" ");
  const full = trimmed;

  if (RESPONSES[full]) return RESPONSES[full](args);
  if (RESPONSES[cmd]) return RESPONSES[cmd](args);
  return UNKNOWN(trimmed);
}

export default function Terminal({ isOpen, onClose }) {
  const [lines, setLines] = useState([
    { type: "system", text: "Portfolio Terminal v1.0.0" },
    { type: "system", text: 'Digite "help" para ver os comandos disponíveis.' },
    { type: "system", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [hoveredDot, setHoveredDot] = useState(null);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
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

    const newHistory = [cmd, ...history];
    setHistory(newHistory);
    setHistoryIndex(-1);

    const result = processCommand(cmd);

    if (result === "__EXIT__") {
      onClose();
      setInput("");
      return;
    }

    const newLines = [
      ...lines,
      { type: "input", text: cmd },
    ];

    if (result === null) {
      // clear
      setLines([]);
      setInput("");
      return;
    }

    if (result) {
      newLines.push({ type: "output", text: result });
    }

    setLines(newLines);
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      setInput(history[next] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setInput(next === -1 ? "" : history[next]);
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
                  onMouseEnter={() => setHoveredDot('close')}
                  onMouseLeave={() => setHoveredDot(null)}
                  title="Fechar"
                >
                  {hoveredDot === 'close' && <X size={8} strokeWidth={3} />}
                </button>
                <button
                  className={`${styles.dot} ${styles.dotYellow}`}
                  onMouseEnter={() => setHoveredDot('minimize')}
                  onMouseLeave={() => setHoveredDot(null)}
                  title="Minimizar"
                >
                  {hoveredDot === 'minimize' && <Minus size={8} strokeWidth={3} />}
                </button>
                <button
                  className={`${styles.dot} ${styles.dotGreen}`}
                  onMouseEnter={() => setHoveredDot('maximize')}
                  onMouseLeave={() => setHoveredDot(null)}
                  title="Maximizar"
                >
                  {hoveredDot === 'maximize' && <Square size={6} strokeWidth={3} />}
                </button>
              </div>
              <span className={styles.title}>
                {HOSTNAME} — bash
              </span>
              <div className={styles.titleRight} />
            </div>

            <div
              className={styles.output}
              onClick={() => inputRef.current?.focus()}
            >
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