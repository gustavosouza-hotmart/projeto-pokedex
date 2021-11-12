# Projeto Pokedéx

## Sobre o projeto

### Visão Geral

O projeto pokédex é um projeto desenvolvido para realizar o treinamento de estágio na área de Data Tracking atuando como front-end. 
Ele consiste em uma SPA que permite o cadastro de treinadores utilizando nome e data de nascimento, exclusão, edição e seleção deste treinador, e, á partir do 
treinador selecionado, é possível acessar uma lista que contém todos os pokémons, outra que exibe apenas os pokémons vistos e outra que filtra os pokémons capturados, 
tudo isso com base nos pokémons que o treinador selecionado viu e/ou capturou.

## Processo de desenvolvimento

### Tecnologias utilizadas

- React 17.0.2
- Typescript 4.4.4
- Axios 0.24.0
- Json-server 0.17.0
- Node Sass 6.0.1
- Hotmart Cosmos 3.8.0
- Webpack 5.59.1

### Instruções necessárias para compilação e execução do projeto

Abaixo seguem os passos necessários para execução do projeto em sua máquina.

#### Passos para execução do projeto

- Instale o node.js em sua máquina através do site https://nodejs.org/en/.
- Caso possua o git instalado em sua máquina, utilize o comando ```git clone https://github.com/gustavosouza-hotmart/projeto-pokedex/``` no terminal ou faça o download do projeto em sua máquina.
- Abra o projeto em uma IDE de sua preferência.
- Execute o comando ```npm install``` no terminal para instalar todas as dependências necessárias para que o projeto funcione.
- Execute o comando ```npm install -g json-server``` no terminal para instalar o json-server e poder utilizar o banco de dados do projeto em sua máquina.
- Execute o comando ```json-server --watch server.json``` no terminal para executar o banco de dados e para que o projeto possa fazer as requisições a ele.
- Execute o comando ```npm start``` no terminal para executar o projeto.
