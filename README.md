# <h1 text-align="center">Secret Message</h1>

Este é meu primeiro Projeto do Bootcamp da Lab! 

## Índice

* [1. Quer escrever mensagens secretas?](#1-quer-escrever-mensagens-secretas)
* [2. Apresentação do projeto](#2-apresentação-do-projeto)
* [3. Objetivos de aprendizagem alcançados](#7-objetivos-de-aprendizagem-alcançados)

***

## 1. Quer escrever mensagens secretas?

Para escrever mensagens secretas, você pode utilizar a [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
que é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

<img href="thumb.png">

## 2. Apresentação do projeto

O contexto pensado para utilização deste site é a aprendizagem de forma dinâmica e lúdica. Pensando no dia-a-dia de trabalho de uma professora que ensina lógica e matemática para jovens alunos

<img href="principal.jpg" width=500px;>

* Os alunos podem ver uma pequena definição da cifra sempre que precisarem.
* Podem cliclar no link disponível na página para ter mais informações sobre a cifra.
* Sabendo como a cifra funciona, podem escolher o número de deslocamento que desejam
  para criptografar e descriptografar mensagens.
* Criptografar e descriptografar as mensagens escritas.

<img href="funcoes.jpg" width=500px;>

Dessa forma, os alunos podem brincar de criptografar e descriptografar mensagens e ainda aprender sobre criptografia e lógica, de forma lúdica e divertida, numa interface fácil e intuitiva de usar. 

## 3. Objetivos de Aprendizagem Alcançados

* Uso de HTML semântico
* Manipulação de DOM
* Uso de seletores CSS
* Fundamentos do JavaScript
* Permitir ao usuário criptografar e
  descriptografar.
* Permitir ao usuário escolher um número de deslocamento.
* Realizar testes unitários dos métodos `cipher`
  (`encode` e `decode`).
* Projeto livre de _erros_ de `eslint`.
* Versionamento do Projeto através do GitHub.
* Interface "implantada" usando o GitHub Pages.
* README aplicado do produto.
