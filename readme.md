<picture>
    <source media="(prefers-colors-scheme: light)" srcset="https://jornalteresa.netlify.app/assets/jornalclaro-C3L1fr4J.png">
    <img src="https://jornalteresa.netlify.app/assets/jornalescuro-N2iCIYK0.png" style="border-radius: 2em;">
</picture>

<h1 align="center">
    Jornal Teresa
</h1>

Jornal para a comunidade do IFRN. Feito por alunos, para alunos! Visite o site em <a href="https://jornalteresa.netlify.app/" target='_blank'>jornalteresa.netlify.app</a> !



### Pré-requisitos
Antes de instalar, é necessário ter o [Node.js](https://nodejs.org/en/) instalado na máquina

#### Rodando o front-end
```bash
# Clonando repositório
git clone https://github.com/Benin10-bit/jornalteresaTeste.git

# Entrando no diretório
cd jornalTeresaTeste
cd fronteresa

# Baixando dependências
npm install

# Iniciar em dev
npm run dev

# A aplicação abrirá no :3000 - quando rodar, visite http://localhost:3000
```

#### Rodando o back-end
```bash
# Entrando no diretório
cd jornalTeresaTeste
cd api

# Baixando dependências
npm install

# Gerando cliente Prisma
npx prisma generate

# Iniciar em dev
npm run dev

# O back-end estará rodando na porta :1992. Quando rodar, as docs estarão em http://localhost:1992/docs/
```
