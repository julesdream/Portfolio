# ⚡ Portfólio Pessoal | Matheus Felipetto

![Project Banner](https://via.placeholder.com/1200x400?text=Portfolio+Banner+Placeholder)

> Um portfólio interativo e responsivo desenvolvido para exibir projetos de desenvolvimento web, fotografia e design. Foco em experiência do usuário, animações suaves e UI moderna.

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

</div>

## 📖 Sobre

Este projeto é um **Single Page Application (SPA)** que serve como hub central para meu trabalho. A aplicação detecta o dispositivo do usuário para oferecer a melhor experiência de navegação:
* **Desktop:** Navegação horizontal ("Slide View") com scroll lock inteligente.
* **Mobile:** Navegação vertical fluida e nativa.

O design utiliza conceitos de **Glassmorphism**, tipografia limpa e animações orquestradas para criar uma imersão visual.

## ✨ Funcionalidades Principais

* **🎨 Design Responsivo Adaptável:** Layout muda drasticamente entre Mobile (Vertical) e Desktop (Horizontal) para melhor UX.
* **🖱️ Smart Scroll System:**
    * Sistema de "One Page Scroll" no Desktop.
    * Detecção inteligente de scroll interno (permite rolar listas longas, como a galeria, antes de trocar de seção).
* **🔍 Navbar Glassmorphism:** Barra de navegação com efeito de vidro fosco (Blur) e máscara de gradiente que reage ao scroll da página.
* **🎭 Animações Avançadas:** Uso do `Framer Motion` para entradas suaves (Fade Up), efeitos de hover em cards e transições de página.
* **🖼️ Galeria Masonry:** Seção de fotografia com layout ajustável e Modal (Lightbox) para visualização de imagens.
* **🌌 Fundo Dinâmico:** Background animado com partículas/estrelas para profundidade visual.

## 🛠️ Tecnologias Utilizadas

* **Core:** React.js, TypeScript, Vite.
* **UI Framework:** Material UI (v5/v6) - Utilizando `Grid2`, `Box`, `Typography` e temas customizados.
* **Animação:** Framer Motion - Para gestos, transições de estado e animações de scroll.
* **Estilização:** Styled Components (via MUI `styled`) e CSS-in-JS.
* **Ícones:** Material UI Icons.

## 📂 Estrutura do Projeto

```bash
src/
├── assets/          # Imagens, PDFs e Fontes
├── components/      # Componentes Reutilizáveis
│   ├── NavBar/      # Barra de navegação com lógica de Glass/Scroll
│   ├── Footer/      # Rodapé com links sociais
│   └── ...
├── pages/
│   └── Home/
│       └── sections/
│           ├── HeroSection/       # Apresentação
│           ├── AboutSection/      # Sobre mim + Skills
│           ├── ProjectsSection/   # Cards de projetos
│           ├── PhotographySection/# Galeria de fotos
│           └── DesignSection/     # Trabalhos de UI/UX
├── theme/           # Configuração de tema do MUI
└── App.tsx          # Lógica principal de roteamento e scroll

---
```
## 🚀 Como Rodar o Projeto

Pré-requisitos: Node.js instalado.

1. Clone o repositório

```bash
git clone https://github.com/julesdream/portfolio.git
cd portfolio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:
```bash
npm run dev
```