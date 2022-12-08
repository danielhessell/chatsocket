# Chatsocket

![Badge](https://img.shields.io/static/v1?label=author&message=DanielHessel&color=0070f3&style=flat&logo=<LOGO>)
![Badge](https://img.shields.io/static/v1?label=status&message=Done&color=success&style=flat&logo=<LOGO>)
![Badge](https://img.shields.io/static/v1?label=license&message=MIT&color=0070f3&style=flat&logo=<LOGO>)

Chatsocket is a simple message chat application that was developed in order to gain knowledge in websocket protocol.

**What is the websocket protocol?**

When we have requests made via HTTP, we have several methods like:
GET, POST, PUT, PATCH and DELETE.
When we work with websocket, we don't have that kind of separate naming in methods.

Another difference, and perhaps the biggest difference, is that in a request with the http protocol, when, for example, a client makes a request for a resource from a given server, it waits for the server to process to get the response back, or that is, the client opens a request with the server and after the response is returned, this client-server connection is closed.

In a request with WS protocol, this client sends/opens a connection with the server, where both are connected without the connection being closed.

<details>
<summary>Translate/Tradução</summary>
Chatsocket é uma aplicação de chat de mensagens simples que foi desenvolvido a fim de adquirir conhecimento em protocolo websocket.

**O que é o protocolo websocket?**

Quando temos requisições feitas via HTTP, temos vários método como:
GET, POST, PUT, PATCH e DELETE.
Quando trabalhamos com websocket, nós não temos esse tipo de nomenclatura separado em métodos.

Uma outra diferença, e talvez a maior diferença, é que em uma requisição com protocolo http, quando por exemplo, um cliente faz uma requisição para um recurso de um determinado servidor ele fica aguardando o processamento do servidor para obter o retorno da resposta, ou seja, o cliente abre um requisição com o servidor e após o retorno da resposta essa conexão entre cliente-servidor é fechada.

Já em uma requisição com protocolo WS, esse cliente envia/abre uma conexão com o servidor, onde ambos ficam conectados sem que a conexão seja fechada.

</details>

## :pushpin: Table of contents

<!--ts-->

- [Technologies](#zap-technologies)
- [Getting started](#computer-getting-started)
- [How to run](#information_source-how-to-run)
- [How to contribute to the project](#tada-how-to-contribute-to-the-project)
- [License](#page_facing_up-license)
<!--te-->

## :zap: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Socket.io](https://socket.io/docs/v4/)
- [Mongoose](https://mongoosejs.com/)
- [TSyringe](https://www.npmjs.com/package/tsyringe)

## :computer: Getting started

Before you begin, you will need to have the following tools installed on your machine:

- [Git](https://git-scm.com)

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

Npm is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer.

- [Node.js v18.12.0](https://nodejs.org/) or heigher.

Yarn is a package manager created by the Facebook team and seems to be faster than npm in general.

- [Yarn v1.22.18](https://yarnpkg.com/) or heigher.

Docker is a containerization tool where we will be able to eliminate project configuration tasks between different machines and guarantee a development environment as close as possible to the production environment.

- [Docker](https://docs.docker.com/get-docker/)

Compose is a tool for defining and running multi-container Docker applications. And in this scenario, we will use it to automate the execution of our API container next to the database.

- [Docker Compose](https://docs.docker.com/compose/install/)

Also, it’s good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

## :information_source: How to run

Follow the instructions below to download and use the project from this repository:

> You can use yarn or npm as package manager to run this project, but preferably I use npm.

Clone this repository using SSH:

```bash
git clone git@github.com:danielhessell/chatsocket.git
```

or clone using https:

```bash
git clone git@github.com:danielhessell/chatsocket.git
```

Go to project folder in terminal/cmd:

```bash
cd chatsocket
```

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Run project:

```bash
docker-compose up
```

To stop project:

```bash
docker-compose down
```

The server will start on port 8080. Go to http://localhost:8080/.

## :tada: How to contribute to the project

1. Fork the project
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save the changes and create a commit message telling what you've done: `git commit -m "feature: My new feature"`
4. Submit your changes: `git push origin my-feature`

Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions).

## :page_facing_up: License

This project is under the MIT license. See the [LICENSE](https://github.com/danielhessell/chatsocket/blob/master/LICENSE) file for more details.

---

Made with :blue_heart: by Daniel Hessel.
