Star Wars Planets Filter App

Este projeto é uma aplicação React que consome dados da API de Planetas de Star Wars e permite que os usuários filtrem e visualizem as informações dos planetas.
Índice

    Instalação
    Uso
    Componentes
    Contextos
    Testes

Instalação

    Clone o repositório e instale as dependências:

    bash
Clone o projeto

cd star-wars-planets-filter
npm install

Inicie o servidor de desenvolvimento:

bash

    npm start

    A aplicação estará disponível em http://localhost:3000.

Uso

A aplicação permite que os usuários:

    Visualizem uma tabela com informações dos planetas de Star Wars.
    Apliquem filtros de texto e numéricos para refinar a pesquisa.
    Removam filtros individualmente ou todos de uma vez.

Componentes
App

O componente principal que gerencia o estado global e fornece o contexto para os componentes filhos.
Table

Componente que exibe a tabela de planetas e aplica os filtros.
FilterInputs

Componente de entrada de texto para filtrar planetas pelo nome.
FilterForNumber

Componente de entrada numérica para filtrar planetas por atributos numéricos (ex: população, diâmetro).
Contextos
GetApi

Contexto utilizado para compartilhar o estado da API e os filtros entre os componentes.

Função que faz a requisição à API de Planetas de Star Wars.

Testes

A aplicação possui testes para verificar a funcionalidade da página Table e os filtros aplicados. Os testes estão localizados na pasta tests.
Exemplos de Testes

    Verificar se a requisição à API é feita e os componentes são renderizados corretamente.
    Verificar se a tabela é filtrada corretamente quando um filtro é aplicado.
    Verificar se o botão de remover todos os filtros funciona corretamente.
    Verificar se a tabela retorna ao estado anterior ao remover um filtro específico.

Para rodar os testes, utilize o comando:

bash

npm test
