# Bookshelves Front <!-- omit in toc -->

[![nuxtjs](https://img.shields.io/static/v1?label=NuxtJS&message=v2.15&color=00C58E&style=flat-square&logo=nuxt.js&logoColor=ffffff)](https://nuxtjs.org/)
[![tailwindcss](https://img.shields.io/static/v1?label=Tailwind%20CSS&message=v2.0&color=38B2AC&style=flat-square&logo=tailwind-css&logoColor=ffffff)](https://tailwindcss.com/)
[![nuxtjs](https://img.shields.io/static/v1?label=Designed%20to%20be&message=SSR&color=00C58E&style=flat-square&logo=nuxt.js&logoColor=ffffff)](https://nuxtjs.org/docs/2.x/concepts/server-side-rendering/)
[![NodeJS](https://img.shields.io/static/v1?label=NodeJS&message=v14.16&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en)
en)
[![yarn](https://img.shields.io/static/v1?label=yarn&message=1.2&color=2C8EBB&style=flat-square&logo=yarn&logoColor=ffffff)](https://classic.yarnpkg.com/lang/en/)

📀 [**bookshelves-back**](https://gitlab.com/ewilan-riviere/bookshelves-back) : back-end of Bookshelves  
🎨 [**bookshelves-front**](https://gitlab.com/ewilan-riviere/bookshelves-front) : front-end of Bookshelves (current repository)  

💻 [**bookshelves.ink**](https://bookshelves.ink): front demo  
📚 [**bookshelves.ink/docs**](https://bookshelves.ink/docs): Documentation API  
📚 [**bookshelves.ink/wiki**](https://bookshelves.ink/wiki): wiki for Bookshelves usage, if this link not work check [**files here**](https://gitlab.com/ewilan-riviere/bookshelves-back/-/tree/master/resources/views/pages/wiki/content)

**Table of contents**

- [**I. Setup**](#i-setup)
  - [*I. a. Modify API*](#i-a-modify-api)
- [**II. Production in SSR**](#ii-production-in-ssr)

## **I. Setup**

Setup local on <http://localhost:3000> with <https://bookshelves.ink> API

Create `.env`

```bash
cp .env.example .env
```

Node.js dependencies

```bash
npm i
```

Local serve

```bash
npm run dev
```

### *I. a. Modify API*

Modify `.env` on `API_URL` to use local API

```yml
API_URL=http://localhost:8000/api
```

## **II. Production in SSR**

Update `.env`

```yml
BASE_URL=https://bookshelves.ink
API_URL=https://bookshelves.ink/api
```

Setup build

```bash
npm run build
```

Launch server in SSR

```bash
npm run start
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
