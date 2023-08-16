<h1 align="center">Trybesmith</h1>

<p align="justify">
 Trybesmith é uma API Rest que foi criada com o intuito de entender o funcionamento da autenticação do usuário através do token com o JWT (<b>JSON Web Token</b>).

</p>
<p align="justify">
  Foi construída com o <b>JavaScript</b> (Node.js) junto ao
  <b>Express.js</b> e <b>Typescript</b> para validação de tipos estáticos.
</p>

<p align="justify">
  Sua base de dados foi toda construída em <b>MySQL</b> com a comunicação feita diretamente por query's SQL no código (<b>hard-coded</b>).
</p>

## Como eu faço para executar este projeto?

Primeiro faça o clone e navegue até a pasta do projeto:

```bash
git clone git@github.com:Adolligit/trybesmith.git && cd trybesmith/
```

### Instalação

<p align="justify">
🚨 É <b>crucial</b> que você já tenha em sua máquina as ferramentas citadas em cada tipo de instalação, com a correta versão ou superior.

Escolha uma das instalações a seguir:
</p>
<details>
  <summary>Instalar com Docker 🐳</summary>
  <b>Requisitos</b>
  <br>Você deve possuir as seguintes ferramentas:
<ul>
    <li>Docker: v20.1</li>
    <li>Docker Compose: v1.29</li>
</ul>

  2. Crie e inicie os contêiners:
  ```bash
  docker compose up -d
  ```
  3. Entre no contêiner da aplicação:
  ```bash
  docker exec -it trybesmith bash
  ```
  ---
</details>

<details>
  <summary>Instalar localmente 💻</summary>
  <b>Requisitos</b>
  <br>Você deve possuir as seguintes ferramentas:
<ul>
    <li>Node.js: v16</li>
    <li>npm: v8.19</li>
    <li>MySQL: v8</li>
</ul>

  1. Renomeie o arquivo **.env.example**, que esta na pasta raiz, para **.env**.
  2. No arquivo **.env**, informe seus dados de acesso ao banco de dados MySQL nas chaves: **MYSQL_USER** e **MYSQL_PASSWORD**.
  3. Altere o valor da chave **JWT_SECRET** inserindo uma senha que será utilizada para criar o token de autenticação (lembre-se de salvar o arquivo **.env**).
  ---
</details>

### Execução
Instalar as dependências do projeto:
  ```bash
npm install
  ```
Criar as tabelas no banco de dados MySQL:
```bash
npm run migration
```
Popular o banco de dados:
```bash
npm run seed
```
Iniciar o projeto:
```bash
npm start
```
Inciar o projeto em modo de desenvolvimento (nodemon):
```bash
npm run dev
```
Executar o **ESLint** para verificar os erros do código estático:
```bash
npm run lint
```
Recriar o banco de dados já populado:
```bash
npm run reset
```
## Quais são as rotas desta API?
Deixei uma documentação feita com [Swagger UI](https://swagger.io/tools/swagger-ui/) para facilitar e lhe orientar no uso da API. Você pode acessa-la em [http://127.0.0.1:3000/v1/docs/](http://127.0.0.1:3000/v1/docs/).
<img align="center" alt="gif de demonstração de uso" src="https://raw.githubusercontent.com/Adolligit/trybesmith/main/img/1.gif">

## Linguagens e ferramentas:
<div>
    <a href="https://swagger.io/tools/swagger-ui/"><img align="center" alt="NodeJs" height="45" width="45" src="https://camo.githubusercontent.com/96e43701d83561899724a89d71187445b7b8f4fe84518a3ea5bec8f85bd207bf/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f737761676765722e737667"></a>
    <a href="https://nodejs.org/en/"><img align="center" alt="NodeJs" height="45" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></a>
    <a href="https://expressjs.com/pt-br/"><img align="center" alt="Express" height="45" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"></a>
    <a href="https://www.typescriptlang.org/"><img align="center" alt="TypeScript" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"></a>
    <a href="https://dev.mysql.com/doc/"><img align="center" alt="NodeJs" height="45" width="55" src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"></a>
    <a href="https://docs.docker.com/"><img align="center" alt="NodeJs" height="45" width="55" src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"></a>
</div>

## Agradecimento
<p align="justify">
Com este projeto, pude entender como funciona a autenticação de usuário através da utilização do <b>JWT</b>.
</p>

<p align="justify">
Agradeço muito a <a href="https://github.com/tryber">@tryber</a> pela idealização deste projeto, pois para mim, toda teoria é mais fácil entender na prática.
</p>