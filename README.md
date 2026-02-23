# Bernardo Castellani — Portfolio

Portfólio profissional construído com React + Vite, Framer Motion e CSS Modules.

## Stack
- React 18 + Vite
- Framer Motion (animações)
- @tsparticles/react (hero particles)
- CSS Modules (zero CSS global bagunçado)
- lucide-react (ícones)

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Preview do build
npm run preview
```

## Estrutura

```
src/
├── components/
│   ├── Sidebar/       # Sidebar fixa (desktop) + bottom bar (mobile)
│   ├── Hero/          # Hero com particles + animações
│   ├── About/         # Sobre + skill bars + certificações
│   ├── Experience/    # Timeline de experiências
│   ├── Projects/      # Cards de projetos + filtro por categoria
│   └── Contact/       # Formulário + links de contato
├── context/
│   └── ThemeContext.jsx   # Dark/Light theme
├── data/
│   └── portfolioData.js   # SINGLE SOURCE OF TRUTH — edite aqui
└── styles/
    └── globals.css        # CSS variables + reset + layout base
```

## Personalização

Todos os dados ficam em `src/data/portfolioData.js`. 
Nenhum dado está hardcoded nos componentes.

Para mudar cores, edite as CSS variables em `src/styles/globals.css`.
