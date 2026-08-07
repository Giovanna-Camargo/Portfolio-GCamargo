# Portfólio — Giovanna Camargo

Site pessoal em React + Vite + Tailwind CSS, baseado no conteúdo do
portfólio anterior e no novo design (fundo preto, gradiente
violeta → magenta, cards com borda).

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Gerar build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/`, prontos para publicar (Vercel,
Netlify, GitHub Pages etc).

## Estrutura

```
src/
  components/
    Navbar.jsx        menu fixo com gradiente
    Hero.jsx           seção inicial (nome, foto, CTA, badge "Disponível")
    Sobre.jsx           texto sobre mim + linha do tempo de formação
    Habilidades.jsx     hard skills e soft skills em pills
    Portfolio.jsx       cards de projetos (Dev / Design) com imagens reais
    Certificados.jsx    grade de certificados com filtro por categoria
    Footer.jsx          contato + links (e-mail, GitHub, LinkedIn)
  data/
    certificados.js      lista de certificados (edite aqui para adicionar/remover)
  assets/                 fotos e imagens dos projetos
```

## Personalizar

- **Textos e dados**: edite diretamente os componentes em `src/components`
  ou o arquivo `src/data/certificados.js`.
- **Currículo em PDF**: coloque o arquivo em `public/` com o nome
  `curriculo-giovanna-camargo.pdf` (o botão "Download CV" já aponta para
  esse caminho).
- **Cores**: os tokens de cor e gradiente estão em `tailwind.config.js`
  (`violet`, `magenta`, `bg-brand-nav`, `bg-brand-cta`).
- **Links**: e-mail, GitHub e LinkedIn estão em `Navbar.jsx` e
  `Footer.jsx`.
