# Atividade Somativa - Aplicação React com Firebase

Repositório destinado à atividade somativa da Semana 4 (PUCPR). O projeto consiste em uma aplicação construída em React, implementando sistema de rotas, validação de formulários, autenticação de usuários e integração com banco de dados em nuvem.

## 🚀 Link da Aplicação (Deploy)
[Acessar o Projeto na Vercel](https://proje-facu.vercel.app/login)

## 📋 Sobre o Projeto
A aplicação foi desenvolvida seguindo os requisitos do enunciado e está dividida em 3 páginas principais, gerenciadas pelo `react-router-dom`:

* **Cadastro:** Permite o registro de novos usuários no Firebase Authentication (via e-mail/senha). Além disso, salva os dados adicionais (nome, sobrenome, data de nascimento e o respectivo UID) no banco de dados Firestore.
* **Login:** Tela para autenticação de usuários previamente cadastrados. Ao tentar acessar com os dados de teste (`eduardo.lino@pucpr.br` / senha `123456`), o sistema possui uma validação lógica que exibe mensagens condicionais ("Acessado com sucesso!" ou "Usuário ou senha incorretos!"). Se o login for bem-sucedido no Firebase, o usuário é redirecionado.
* **Principal:** Rota protegida e dinâmica. Ao carregar a página, o sistema busca os dados do usuário logado (nome, sobrenome e data de nascimento) armazenados no Firestore e os exibe em tela.

## 🛠️ Tecnologias Utilizadas
* React
* Vite
* React Router Dom
* Firebase (Authentication & Cloud Firestore)
* Vercel (Hosting & Deploy)
