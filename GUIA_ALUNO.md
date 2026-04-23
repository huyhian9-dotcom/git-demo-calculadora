# 📘 Guia do Aluno — Git Demo Calculadora

Passo-a-passo completo pra você completar a atividade da aula de **Versionamento de Código**.

Você vai aprender:
- Fazer **Fork** de um repositório
- Investigar um bug pelo **DevTools**
- Criar uma **branch** de correção
- Fazer **commit** e **push**
- Abrir e fazer merge de um **Pull Request**

Tempo estimado: **~20 minutos**.

---

## 🔧 Antes da aula (prepara seu notebook)

Instale:

- **Node.js 18+** — https://nodejs.org (vem com npm)
- **Git** — https://git-scm.com/downloads
- **VS Code** (ou outro editor) — https://code.visualstudio.com
- Conta no **GitHub** — https://github.com/signup

Confirme no terminal que tudo está instalado:

```bash
node --version    # v18.x ou maior
npm --version
git --version
```

Configure seu nome e email no Git (faz UMA VEZ só, na vida):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

---

## 🚀 Durante a aula — 12 passos

### 1) Fazer Fork do repositório

- Entre em **https://github.com/huyhian9-dotcom/git-demo-calculadora**
- Clique no botão **`Fork`** (canto superior direito)
- Confirme em **Create fork**
- Pronto — agora existe uma cópia do repo no seu GitHub: `github.com/SEU-USUARIO/git-demo-calculadora`

### 2) Clonar SEU fork no notebook

> ⚠️ Clone o **SEU fork**, não o repo do professor.

```bash
git clone https://github.com/SEU-USUARIO/git-demo-calculadora.git
cd git-demo-calculadora
```

### 3) Instalar dependências e rodar

```bash
npm install
npm run dev
```

O navegador abre em `http://localhost:5173`.

**👀 O que você deve ver:** a calculadora carrega, mas **o logo no topo aparece quebrado** (iconezinho de imagem rasgada).

### 4) Investigar o bug pelo DevTools

- No navegador, aperte **`F12`** (ou `Ctrl+Shift+I`)
- Clique na aba **Network**
- Aperte **`F5`** pra recarregar a página

**👀 O que você deve ver:** uma linha **vermelha**:

```
GET  /logoo.svg     404 Not Found
```

💡 Percebeu o `logoo` com **dois "o"**? O arquivo real se chama `logo.svg` (um "o" só). **Esse é o bug.**

### 5) Criar uma branch só pra correção

> 🚨 **Nunca mexa direto na `main`.** Sempre crie uma branch pra cada mudança.

```bash
git checkout -b fix/logo-path
```

### 6) Corrigir o código

- Abra o VS Code na pasta do projeto. Pelo terminal: `code .`
- Abra o arquivo **`src/App.jsx`**
- Encontre a tag `<img>` (em torno da linha 74):

```jsx
<img src="/logoo.svg" alt="Git Demo Logo" className="logo" />
```

- **Apague o `o` extra:**

```jsx
<img src="/logo.svg" alt="Git Demo Logo" className="logo" />
```

- Salve o arquivo (`Ctrl+S`)

### 7) Confirmar que funcionou

Volte pro navegador — o Vite recarrega sozinho.

**👀 O que você deve ver:**
- O **logo laranja** apareceu no topo 🎉
- No DevTools → Network, aperte `F5`: agora a linha é **verde** → `GET /logo.svg 200 OK`

### 8) Registrar a correção (commit)

```bash
git status                              # mostra o que mudou
git add src/App.jsx
git commit -m "fix: corrige caminho do logo que retornava 404"
```

### 9) Enviar a branch pro SEU fork no GitHub (push)

```bash
git push origin fix/logo-path
```

O terminal vai mostrar um link parecido com:

```
https://github.com/SEU-USUARIO/git-demo-calculadora/pull/new/fix/logo-path
```

**Copie esse link — é atalho pro próximo passo.**

### 10) Abrir o Pull Request

Cole o link no navegador (ou vai no GitHub direto — aparece um banner amarelo com "Compare & pull request").

**⚠️ ATENÇÃO — tela de criar PR:**

GitHub vai mostrar **4 dropdowns** no topo da página:

```
base repository:  huyhian9-dotcom/git-demo-calculadora    ← PADRÃO — VAMOS MUDAR
base:             main
head repository:  SEU-USUARIO/git-demo-calculadora
compare:          fix/logo-path
```

👉 **No primeiro dropdown (`base repository`), clique e troque para `SEU-USUARIO/git-demo-calculadora`.**

Por quê? Porque o PR é pra merge **no seu próprio fork** (não no repo do professor).

Depois:
- **Título:** `fix: corrige caminho do logo`
- **Descrição:** "Removi o 'o' extra no caminho do arquivo SVG (`/logoo.svg` → `/logo.svg`)"
- Clique no botão verde **`Create pull request`**

### 11) Fazer o merge do PR

- Você cai na página do PR
- Clique em **`Merge pull request`**
- Clique em **`Confirm merge`**
- Opcionalmente, clique em **`Delete branch`** (prática comum: apagar branches já mergeadas)

### 12) Ver o resultado final

- Volte pra página principal do seu fork: `github.com/SEU-USUARIO/git-demo-calculadora`
- Abra `src/App.jsx`
- Confirma que a linha do `<img>` agora está com `/logo.svg` ✅
- Na aba **Pull requests** (filtro "Closed"), você vê seu PR com label **Merged** (roxo)

---

## ✅ Checklist final

Você concluiu tudo se tem:

- [ ] 🍴 Um **fork** do repositório no seu GitHub
- [ ] 🌿 Uma **branch** `fix/logo-path` com 1 commit de correção
- [ ] 🔀 Um **Pull Request** criado
- [ ] 🟣 O PR com label **Merged** (roxo)
- [ ] 🧮 A calculadora rodando local com o logo aparecendo
- [ ] 📋 Sabe explicar o que cada comando Git faz

---

## 🚨 Deu ruim? Troubleshooting

| Problema | Solução |
|---|---|
| `command not found: npm` ou `git` | Fecha e abre o terminal. Se não resolver, reinstale o Node/Git. |
| `npm install` parece travar | Pode ser proxy da faculdade. Tenta usar 4G do celular como hotspot. |
| `git push` pede usuário/senha e rejeita | Gera um **Personal Access Token** em https://github.com/settings/tokens → marca `repo` → cola ele no lugar da senha. |
| Logo ainda quebrado após salvar | No navegador, `Ctrl+Shift+R` (refresh sem cache). |
| Abri o PR pro repo do professor sem querer | Fecha o PR (`Close pull request`) e abre um novo com o `base repository` correto (o seu). |
| Quebrei tudo e quero recomeçar | `cd ..`, apaga a pasta, volta ao passo 2 (clone). Seu fork no GitHub continua intacto. |

---

## 📚 Bônus — comandos Git que todo dev usa sempre

```bash
git status                    # o que mudou?
git log --oneline             # histórico resumido
git log --oneline --graph     # histórico visual com branches
git branch                    # lista branches locais
git checkout main             # volta pra branch main
git pull                      # baixa atualizações do remote
git diff                      # mostra o que mudou nos arquivos
```

---

**Boa sorte!** 🚀 Qualquer dúvida na hora, chama o professor.
