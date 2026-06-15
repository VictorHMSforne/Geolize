# Geolize

Projeto de Atividade da Faculdade, voltado para a Disciplina de Front-End e Mentalidade Criativa e Empreendedora.

**Geolize** é um sistema de gestão de estacionamentos através de câmeras inteligentes com visão computacional e IA para monitoramento de estacionamentos e vagas em tempo real. Permite o mapeamento de vagas e segurança: o sistema reconhece colisões, furtos e roubos e notifica a equipe instantaneamente ao identificar uma atividade suspeita.

---

## 1. Recursos / Tecnologias de Desenvolvimento

- **React** (via CDN + Babel Standalone)
  - Construção da interface por meio de componentes reutilizáveis.
  - Renderização dinâmica de listas (equipe, cards) com `.map()`.
  - Carregado pelo navegador, sem etapa de build/bundler.
- **HTML**
  - Estrutura e marcação semântica das páginas (`index.html`).
  - Ponto de entrada que carrega as fontes, os CSS e os componentes na ordem em que aparecem na tela.
- **CSS**
  - Variáveis globais de tema definidas em `style.css` (`:root`).
  - Um arquivo CSS por componente/página (`css/Navbar.css`, `css/Home.css`, `css/Hero.css`, `css/Sobre.css`, `css/Equipe.css`, `css/Footer.css`).
  - Layout responsivo com media queries.
- **Fontes externas** (Google Fonts)
  - Space Grotesk (texto), Bebas Neue (títulos) e DM Mono (detalhes).

---

## 2. Layout

- **Visual inovador e com cores chamativas**
  - Identidade visual marcante, em estilo moderno e de alto contraste.
  - Paleta definida em variáveis globais (`style.css`):

    | Variável     | Cor       | Uso                       |
    | ------------ | --------- | ------------------------- |
    | `--ink`      | `#0D0D0D` | Preto / texto principal   |
    | `--bg`       | `#F7F5F0` | Fundo off-white           |
    | `--lime`     | `#c8f135` | Verde-limão de destaque   |
    | `--mid`      | `#4A4A4A` | Cinza secundário          |
    | `--card-bg`  | `#EDEAE3` | Fundo dos cards           |

  - Verde-limão usado como cor de destaque (highlight) da marca.

- **Estrutura separada por componentes (inspirada em MVC)**
  - Cada parte da interface em seu próprio componente, com o CSS correspondente:
    - **Navbar** — barra de navegação (logo + links).
    - **Home** — entrada da página.
    - **Hero** — seção de destaque com a proposta do produto.
    - **Sobre** — história e objetivo da GeoLize.
    - **Equipe** — apresentação dos integrantes.
    - **Footer** — rodapé com direitos autorais.
  - Inspirado no padrão **MVC (Model-View-Controller)**:
    - **View** — componentes React e arquivos CSS (apresentação).
    - **Controller** — lógica de interação e fluxo da aplicação.
    - **Model** — dados e regras de negócio (vagas, ocorrências, dados da equipe).
  - Objetivo: código organizado, de fácil manutenção e reaproveitável.

---

## 3. Tecnologia / Processo de Trabalho

- **Git e GitHub**
  - Versionamento do código com Git.
  - Repositório remoto hospedado no GitHub.
  - Uso de branches (ex.: `main` e `dev`) para separar o trabalho.
- **Uso do Git para separar as tarefas**
  - Divisão do trabalho entre os colaboradores.
  - Cada tarefa/funcionalidade desenvolvida em sua própria branch.
- **Boas práticas de commit**
  - Commits pequenos, frequentes e com propósito único.
  - Mensagens claras e descritivas sobre o que foi alterado.
  - Uso de prefixos padronizados (`feat:`, `style:`, etc.).
- **Revisão de código (code review)**
  - Revisar o código dos demais colaboradores antes de integrar.
  - Uso de Pull Requests para discussão e aprovação das mudanças.
  - Garantia de qualidade e padronização do código do time.

---

## 4. Equipe

| Integrante                  | Papel                     |
| --------------------------- | ------------------------- |
| Hector de Santana Lima      | Front-End & Back-End      |
| Matheus Ferreira da Rocha   | Back-End                  |
| Thiago Campanholi Chagas    | Back-End & Documentação   |
| Victor Hugo Mendes Sforne   | Back-End & Documentação   |
| Wellington Fernando Rocha   | Front-End                 |

---

## 5. Estrutura de Pastas

```
Geolize/
├── index.html            -> página principal e ponto de entrada
├── style.css             -> variáveis globais e estilos base
├── components/           -> componentes React (.jsx)
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── Hero.jsx
│   ├── Sobre.jsx
│   ├── Equipe.jsx
│   └── Footer.jsx
├── css/                  -> um CSS por componente
│   ├── Navbar.css
│   ├── Home.css
│   ├── Hero.css
│   ├── Sobre.css
│   ├── Equipe.css
│   └── Footer.css
├── img/                  -> logos, fotos da equipe e ilustrações
├── REQUISITOS.txt        -> documento de requisitos
└── README.md
```

---

## Como rodar

O projeto usa React via Babel no navegador (sem build), então precisa ser servido por HTTP — abrir o `index.html` direto com `file://` não funciona.

```bash
python3 -m http.server 5500
```

Depois abra **http://localhost:5500/** no navegador.
