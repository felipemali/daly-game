# Daly Games - Acompanhe seus jogos favoritos

Daly Games é um site de jogos onde é possível acompanhar todos detalhes, como data de lançamento, plataformas e categoria do jogo. O site foi desenvolvido utilizando Nextjs, Typescript e TailwindCSS para estilização.
<br>
<br>
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Funcionalidades

### Recursos Principais

- ✅ **Página Home**: Acesso a todo conteúdo principal
- ✅ **Página Game**: Acesso detalhado do jogo selecionado

## 🏗️ Arquitetura

### Estrutura do Projeto

```
public/
├── images/          # Contém imagens estáticas

src/
├── api/             # Contém todas requisições REST necessárias
├── app/             # Contém a página Home e Game
├── components/      # Contém todos componentes reutilizáveis
├── utils/           # Contém as Tipagens globais

env                  # Contém a URL da API e do projeto

```

## 🛠️ Tecnologias

- **Typescript 5** - Linguagem
- **Next 15.3.2** - Framework
- **TailwindCSS 4** - Biblioteca de estilização
- **React-icons 5.5.0** - biblioteca de ícones

## 🚦 Endpoints

### API

```http
# Buscar um jogo
GET /https://sujeitoprogramador.com/next-api/?api=game_day

# Buscar todos jogos
GET /https://sujeitoprogramador.com/next-api/?api=games

# Buscar um jogo através do título
GET /https://sujeitoprogramador.com//next-api/?api=game&title=${text}
OBS: A propriedade text é o valor que o usuário digitou no input
```

## 📋 Configuração

### Variáveis de Ambiente

```bash
# URL API
NEXT_API_URL=https://sujeitoprogramador.com

# URL do Projeto
PROJECT_URL=http://localhost:3000
```

## 🚀 Execução

### Desenvolvimento

```bash
# Clonar repositório
 git clone <repository-url>
 cd daly-game

# Instalar dependências do projeto
 pnpm install

# Executar Projeto
 pnpm dev
```

## 📝 Exemplo de Uso

### Acessar detalhes de um jogo

- ✅ Clicando no card de um jogo na página incial, será levado para página Game e terá acesso a todas informações do jogo.

### Pesquisar um jogo específico

- ✅ Na página inicial terá um campo de pesquisa, digitando um título e clicando no ícone de lupa, será filtrado todos jogos com base no título digitado.
