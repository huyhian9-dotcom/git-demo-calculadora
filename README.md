<p align="center">
  <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js">
</p>

> **🇧🇷** Projeto didático para praticar o fluxo Git completo (branch → commit → push → Pull Request) caçando um bug proposital. · **🇺🇸** A hands-on teaching project to practice the full Git workflow (branch → commit → push → Pull Request) by hunting an intentional bug.
>
> Parte do meu portfólio · Part of my portfolio — [@huyhian9-dotcom](https://github.com/huyhian9-dotcom)

---

# 🧮 Calculadora com Bug — Demo de Versionamento com Git

Projeto didático para aula de **Versionamento de Código**.
A `main` tem um **bug proposital** simples: o logo no topo da página não carrega porque o nome do arquivo no HTML tem um caractere a mais. Sua missão é encontrar o bug pelo **DevTools** e corrigir usando o fluxo Git completo.

> 🎓 **É aluno da aula?** Siga o passo-a-passo completo em **[GUIA_ALUNO.md](./GUIA_ALUNO.md)** — inclui Fork, Pull Request e troubleshooting.

---

## 🎯 O que você vai praticar

- Abrir o **DevTools** (F12) para investigar um bug
- `git clone` — clonar um repositório
- `git branch` / `git checkout -b` — criar uma branch de correção
- `git add` / `git commit` — registrar mudanças
- `git push` — enviar para o GitHub
- **Pull Request (PR)** — propor o merge da correção

---

## 🛠️ Pré-requisitos

- **Node.js 18+** ([baixar aqui](https://nodejs.org/))
- **Git** ([baixar aqui](https://git-scm.com/downloads))
- Conta no **GitHub**

Verifica que está tudo instalado:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Passo a passo

### 1) Clone o repositório e rode

```bash
git clone https://github.com/huyhian9-dotcom/git-demo-calculadora.git
cd git-demo-calculadora
npm install
npm run dev
```

Abre em `http://localhost:5173`.

### 2) Abra o DevTools e veja o bug

1. Repare que o **logo no topo aparece quebrado** (iconezinho de imagem rasgada)
2. Pressione **F12** (ou `Ctrl+Shift+I`)
3. Vá na aba **Network**
4. Atualize a página (`F5`)
5. Vai aparecer uma requisição em **vermelho**:
   ```
   GET  /logoo.svg   404 (Not Found)
   ```

### 3) Crie uma branch para a correção

```bash
git checkout -b fix/logo-path
```

### 4) Encontre e corrija o bug

Abra o arquivo `src/App.jsx`. Procure a tag `<img>`:

```jsx
<img src="/logoo.svg" alt="Git Demo Logo" className="logo" />
```

O arquivo real se chama `logo.svg` (com um `o` só). Remova o `o` extra:

```jsx
<img src="/logo.svg" alt="Git Demo Logo" className="logo" />
```

Salve — o Vite recarrega sozinho.

### 5) Valide no DevTools

Atualize a página. Agora você deve ver:
- O **logo laranja** aparecendo corretamente no topo
- Na aba **Network**: `GET /logo.svg  →  200 OK` (verde)

### 6) Registre a correção

```bash
git status
git add src/App.jsx
git commit -m "fix: corrige caminho do logo que retornava 404"
```

### 7) Envie sua branch pro GitHub

```bash
git push origin fix/logo-path
```

### 8) Abra um Pull Request

No GitHub, vai aparecer o botão **"Compare & pull request"**. Clique, descreva o que você corrigiu, abra o PR e faça o **merge** na `main`.

---

## 📋 Cheatsheet — comandos Git essenciais

| Comando | O que faz |
|---|---|
| `git clone <url>` | Baixa um repositório |
| `git status` | Mostra arquivos modificados |
| `git branch` | Lista branches |
| `git checkout -b <nome>` | Cria e entra numa nova branch |
| `git add <arquivo>` | Prepara arquivo pro commit |
| `git commit -m "msg"` | Registra o commit |
| `git push origin <branch>` | Envia pro GitHub |
| `git pull` | Baixa atualizações |
| `git log --oneline` | Histórico resumido |

---

## 📚 Estrutura do projeto

```
git-demo-calculadora/
├── README.md              # Este arquivo
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
├── index.html             # HTML raiz
├── public/
│   └── logo.svg           # Logo (arquivo que DEVERIA ser carregado)
├── src/
│   ├── main.jsx           # Ponto de entrada
│   ├── App.jsx            # ⚠️ Componente principal (tem o bug)
│   ├── operacoes.js       # Funções matemáticas
│   └── App.css            # Estilos
└── slides/
    ├── apresentacao.pptx  # Slides da aula
    └── build_slides.py    # Script que gera o PPTX
```

---

## 🧪 Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera versão otimizada para produção |
| `npm run preview` | Pré-visualiza a build de produção |

---

Feito com ❤️ para a aula de Versionamento de Código.
