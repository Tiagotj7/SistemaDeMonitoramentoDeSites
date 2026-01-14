Segue um README um pouco mais completo, mas ainda simples e direto:

```markdown
# Vigilant – Monitoramento Inteligente de Sites

Landing page para um SaaS de **monitoramento de aplicações web**, com foco em desenvolvedores.  
Mostra um dashboard fictício com uptime, ping, SSL, alertas e planos de assinatura.

---

## ✨ Funcionalidades

- **Hero chamativo** com call-to-action e estatísticas (regiões, latência média, suporte 24/7).
- **Terminal / Dashboard fake** mostrando:
  - Uptime, ping, requisições, validade do SSL
  - Atividade ao vivo
  - Gráfico de latência com animação
- **Seção de features** (Monitoramento em tempo real, Alertas, Analytics, API REST, etc.).
- **Passo a passo “Como funciona”** + snippet de código de exemplo.
- **Tabela de preços** com planos Starter, Pro e Enterprise.
- **CTA final** para criar conta ou agendar demo.
- **Footer** com links de produto, empresa e comunidade.

---

## 🧰 Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS** + estilos custom em `globals.css`

---

## 🚀 Como rodar o projeto

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/<seu-usuario>/<seu-repo>.git
   cd <seu-repo>
   ```

2. **Instalar dependências**

   ```bash
   npm install
   ```

3. **Rodar em desenvolvimento**

   ```bash
   npm run dev
   ```

   Acesse em: http://localhost:3000

4. **Build de produção (opcional)**

   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Estrutura do projeto (resumo)

```bash
app/
  layout.tsx    # Layout raiz (fonte global, <html>, <body>, etc.)
  page.tsx      # Landing page principal
  globals.css   # Tailwind + CSS custom (glass, neon, grid de fundo, etc.)

components/
  Navbar.tsx
  Hero.tsx
  InstallSnippet.tsx
  DashboardMockup.tsx
  LatencyChart.tsx
  TechStack.tsx
  Features.tsx
  HowItWorks.tsx
  Pricing.tsx
  CTA.tsx
  Footer.tsx
```

Cada seção da landing foi separada em um componente para facilitar manutenção e reutilização.

---

## 🎨 Estilo & Customização

- **Cores principais** e fundo estão definidos em `:root` dentro de `app/globals.css`.
- Efeitos visuais como:
  - `grid-bg` (grade animada no fundo),
  - `glass` (glassmorphism),
  - `neon-border`,
  - `terminal`,
  - `pulse-ring`, `scan-line`
  
  também estão em `globals.css` e são combinados com classes utilitárias do Tailwind (`flex`, `grid`, `px-4`, etc).

Para adaptar ao seu projeto:

- Troque textos e CTAs diretamente nos componentes em `components/`.
- Ajuste paleta de cores e efeitos em `app/globals.css`.
- Adicione novas seções criando novos componentes e incluindo-os em `app/page.tsx`.

---

## 📜 Scripts

```bash
npm run dev    # modo desenvolvimento
npm run build  # build de produção
npm run start  # servir o build de produção
npm run lint   # lint (se configurado)
```

---
