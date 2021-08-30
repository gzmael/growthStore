# GrowthStore
Projeto como desafio de seleção para a vaga de FullStack JS

## Descrição das APIs

- CandyStore - api contendo uma lista de doces
- PetStore - api contendo uma lista de pets
- UserAPI - api contendo os dados de usuários e favoritos

## Instalação

### _Pré-requisitos:_
 - É necessário que tenha o [Node.js](https://nodejs.org/) v10+ instalado para rodar.
 - É necessário que tenha o [Docker](https://docs.docker.com/engine/install/) e [Docker-Composer](https://docs.docker.com/compose/install/) instalado para criar as bases de dados e rodar as APIs como serviços.

### Criando os Containers

Com o Docker e o Composer já instalado em sua máquina, acesse _cada um dos diretórios_ `petshop-api`, `candystore-api` e `user-api` e execute cada uma das instruções a seguir:

#### 1. Inicializar os Container em modo detach (Background)
Torne o arquivo de preparação do Banco de Dados `load-extensions.sh` executável com o comando:
```sh
chmod +x load-extensions.sh
```
Inicie os containers no Docker com o comando:
```sh
docker-composer up -d
```
Se preferir conferir o processo e logs no terminal, retire o argumento `-d`.
#### 2. Executar as Migrations para criar as bases de dados e Seeds
Com as bases de dados já instaladas e ainda dentro do diretório instale os pacotes por meio do comando:
```sh
npm install
```
ou com o [Yarn](https://yarnpkg.com/getting-started/install), caso tenha instalado:
```sh
yarn
```
Agora execute as migrations para criar as tabelas.
```sh
npm run typeorm:migration
```
ou com o Yarn
```sh
yarn typeorm:migration
```
Agora execute os comandos para popular as tabelas.
```sh
npm run typeorm:seeds
```
ou com o Yarn
```sh
yarn typeorm:seeds
```
#### 3. Executando os Testes de Integração e Unitários
Agora execute o comandos abaixo para executar todos os testes.
```sh
npm run test --detectOpenHandles
```
ou com o Yarn
```sh
yarn test --detectOpenHandles
```
### Rodando o Front-end

Acabei optando por usar o Framework [Next.js](https://nextjs.org/) para criar o frontend. Algumas vantagens desse framework para lojas virtuais podem ser lidas nesse [artigo](https://www.alura.com.br/artigos/next-js-vantagens).

Entre no diretório `frontend` e instale os pacotes.
```sh
npm install
```
ou com o Yarn
```sh
yarn
```
Crie o _build_ da aplicação:
```sh
npm run build
```
ou com o Yarn
```sh
yarn build
```
Rode o _build_ da aplicação com o comando abaixo e abra no navegador com o endereço `http://localhost:3000`:
```sh
npm run start
```
ou com o Yarn
```sh
yarn start
```

_Observações_: 
- A api de `users` rodará no endereço: `http://localhost:3333`.
- A api de `pets` rodará no endereço: `http://localhost:3334`.
- A api de `candys` rodará no endereço: `http://localhost:3335`.
- As informações dos Produtos são gerados aleatóriamente.
- Para excluir os containers no Docker, utilize o comando abaixo em cada um dos diretórios das apis

```sh
docker-compose down -v --remove-orphans
```

_Dificuldades que passei_:
- Não tinha entendido como seria a persistência das buscas, filtros e atributos, só depois de gastar alguns dias eu percebi que poderia ser algo simples, como fiz.
- Tive dificuldade em usar pela primeira vez o Ant Design, como usava mais o TailwindCSS, achei meio complicado no começo, mas depois ajuda muito na criação da interface.
- O a ordenação dos produtos dos favoritos ainda está com problemas. O algoritmo pode ser melhorado.

_Features que eu poderiam implementar_:
- E-mail de ativação de conta.
- E-mail template com handlebars.
- Cache dos dados com Redis.
- Validação dos requests com o celebrate.
- Interface responsiva (ainda não aprendi com o Ant Design).
- Dados dos Produtos com Server Side.
- Cache no frontend com SWR.
- Interface mais dinâmicas com animações.
