<h1 align="center">
    <img src="https://github.com/wellingtoncalixto/Gostack8.0-RocketSeat/blob/master/Meetapp/meetapp-front/src/assets/logo.svg" alt="Meetapp" style="height: 100px;">
    </br>
    Meetapp
</h1>

<h6>
  Este projeto foi desenvolvido no decorrer do Bottcamp GoStack da RocketSeat com foco na stack de nodeJs, React e React-Native, por isso essa é uma aplicação completa com API, Front-And e Mobile.
</h6>

### Explicações para conseguir rodar o projeto.

 1. clone esse repositorio com:
 obs: vale lembra que esse repositorio não contem só a aplicaçãode Meetup e sim o conteudo todo desenvolvido durante as aulas. 
 ```
 git clone git@github.com:wellingtoncalixto/Gostack8.0-RocketSeat.git
 ```

 2. Após isso entre no site do __Node__ e instale a versão estavel dele, nesse projeto foi usado a v10.16.3 que era a versão estavel.
 <a href="https://nodejs.org/en/">Click aqui para baixar o node</a>

 3. Instale o __Yarn__ em seguida, o yarn é um gerenciador de pacotes do node, ele vai falicitar sua vida na hora de instalar dependencias nesse projeto e nos projetos futuros 
<a href="https://yarnpkg.com/en/docs/install#debian-stable">Click aqui para baixar o yarn </a>


Com o Node e o yarn instalados você já pode entrar na pasta Gostack8.0-RocketSeat/Meetapp dentro desta pasta vai estar 3 pastas que são: 
 * meetapp -> que é a API da aplicação, desenvolvida com NodeJs.
 * meetapp-front -> a parte web da aplicação, desenvolvida em React
 * e a mobile -> desenvovida com React-Native, obs: a parte mobile foi desenvolvida com base em Android, por isso não sei como o designer funcionaria em IOS por isso teste em Android, farei as adaptações para IOS em breve 

### Rodando o BackEnd

Para conseguir rodar o backend é preciso ter instalado o docker, irei deixar o link para download aqui e assim que entrar no site procure as orientações para instalar no seu sistemas operacional 
<a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/">Click aqui para baixar o docker para Linux </a>
<a href="https://docs.docker.com/docker-for-windows/install/">Click aqui para baixar o docker para Windows e Mac </a>

depois que seu docker estiver rodando você irar realizar esses três comando no seu terminar:

```
docker run --name database -e POSTGRES_PASSWORD="insira uma seha" -p 5432:5432 -d postgres:11
```
Esse primeiro comando ira criar um container com o banco de dados postgres que é o que foi usado para a apliação, se você não entende o que é um container para o docker recomento dar uma lida na documentação dele.

```
docker run --name mongo -P 27017:27017 -d -t mongo
```
O segundo comando vai fazer com que seja criado um outro container com o mongoDB que é um banco não relacional, que sera usado para guardar as notificações de um usuario

```
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

com esse ultimo comando rodado sera criando um container de redis para trabalho em segundo plano para dar retorno de erros.

Após isso baixe o Postbird e MongoDB Comunity para visualizar os dados se quiser.

Em seguida no em linha de comando execute:

```
yarn 
```
Para instalar todas as dependencias do projeto 

Abra o arquivo .env.example e renomei ele para .env e preencha os campos com os dados dos seus bancos

Exemplo:
```
APP_URL=http://localhost:3333
NODE_ENV=development

APP_SECRET=teste1

DB_HOST=localhost
DB_USER=postgres
DB_PASS=123456
DB_NAME=teste

MONGO_URL=mongodb://localhost:27017/teste

REDIS_HOST=127.0.0.1
REDIS_POST:6379

MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=b54711d827bc13
MAIL_PASS=6485a4ff5e4df6

SENTRY_DNS=

```

Depois disso ao executar: 

```
yarn dev

```

A API já deve estar rodando normalmente 

### Rodando o FrontEnd e Mobile

O front e o Mobile é bem mais facil é só entrar na pasta do projeto e executar:

```
yarn 
&&
yarn star
```
o primeiro como no back ira instalar as dependencias necessarias e o start vai iniciar o projeto 