Para rodar o projeto incialmente voce
precisa rodar os seguintes comandos:

pip install django<br>
pip3 install djangorestframework<br>
pip install Pillow<br>
pip install djangorestframework-jwt

<!-- django-admin startproject carRent . -->

se for pensar em dividir o código da forma correta vamos lá:

-> app para cadastro, leitura e edição do usuário;

-> app para cadastro, leitura e edição de veiculo;

-> app para cadastro, leitura e edição de lojas;

-> app para cadastro, leitura e edição de funcionário; ??? como eu posso iniciar pelo site admin do proprio django deve dar para fazer algo com isso sem precisar criar um app para gerenciar isso de forma separada?

-> app com a lógica e escrita de aluguéis;

-> app que cadastra produtos, serviços e seguro;

-> app de impressão de relatório e os dados financeiros;

criando os serializers, dá pra usar as rotas criadas em modelViewSet diretas para fazer os cruds.

[x] podemos também criar readonly views

https://www.youtube.com/watch?v=dunf5IqxRaA&list=PLLxk3TkuAYnrO32ABtQyw2hLRWt1BUrhj

na ordem criamos os models

-> serializers

-> views (dá pra automatizar paginação)

-> buscando na documentação, dá pra aplicar em tudo e depois remover onde n faz sentido nenhum colocando o codigo no settings.py

fazer buscas também é fácil so copiar o texto e colar no modelListView, procurando por filters
ordenar no views.py;
o video 4 fala sobre auth e como tratar as coisas da forma correta lá no app
usando token api auth;
how to use a base serializers, to validate data and make logic for objects

os usuários ficam no main project, e depois eu separo cada coisa em um projeto diferente eu acho
5 aula sobre criar reports é muito boa para criar sobre as vendas e tals
