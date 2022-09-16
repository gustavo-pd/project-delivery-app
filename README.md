<h1>DELIVERY APP</h1>

<h2>Índice</h2>
<h4>- <a href="#context">Contexto</a></h4>
<h4>- <a href="#tecnologies">Técnologias utilizadas</a></h4>
<h4>- <a href="#development">Desenvolvimento</a></h4>
<h4>- <a href="#howtouse">Como executar o projeto</a></h4>

<h2 id="context">Contexto</h2>

<p>O Delivery App foi desenvolvido para ser uma plataforma de delivery de cerveja!</p>
<p>Este projeto foi realizado durante o curso da Trybe, com seu objetivo fixar todos os conteúdos estudados durante os módulos de front-end e back-end foi realizado em grupo, para reforçarmos nossas skills de trabalho em equipe e simularmos o dia-a-dia de trabalho em uma empresa.</p>
<p>Este projeto foi realizado em julho de 2022, no final do módulo de Back-end.</p>
<p>As pessoas realizadoras deste projeto são:</p>
<p>- Luiz Ricardo (<link>https://github.com/luizricardo41</link>),</p>
<p>- Pedro Lima (<link>https://github.com/PedroPDIN</link>),</p>
<p>- Felipe David (<link>https://github.com/Freeliper</link>),</p>
<p>- Gustavo Pozzan Dalmoro (<link>https://github.com/gustavo-pd</link>) e</p>
<p>- Luiz Carlos(<link>https://github.com/LuisCarlosCruz</link>).</p>

<h2 id="tecnologies">Técnologias utilizadas</h2>

<ul>
  <li>MySQL e Sequelize</li>
  <li>NodeJS</li>
  <li>Express</li>
  <li>API Rest - CRUD</li>
  <li>Modelo de camadas MSC</li>
  <li>ReactJS</li>
  <li>React Hooks</li>
  <li>Context API</li>
  <li>Metodologias ágeis - Kanban</li>
</ul>

<h2 id="development">Desenvolvimento</h2>

<p>Neste projeto pudemos implementar do zero uma aplicação de delivery de cerveja</p>
<p>Iniciando pelo banco de dados, criamos 04 tabelas, sendo elas users, sales, salesProduct e products</p>
<p>Banco de dados criado em MySQL, utilizando a ferramenta Sequelize. Foram adicionados dados por via de Seeders para popular a tabela e mostrar o funcionamento.</p>
<p>Após isso implementamos todas as rotas e regras de negócio necessárias no back-end, em NodeJS e express, para poder utilizar os dados no front-end.
<p>Após isso o front-end foi desenvolvido utilizando ReactJS, se conectando com o back-end.</p>
<p>Na plataforma desenvolvida é possível logar com 03 tipos diferentes de role de usuário, sendo elas administrador, vendedor ou cliente.</p>
<p>O cliente pode selecionar os produtos, assim eles são enviados para o carrinho, onde ele pode finalizar o pedido.</p>
<p>O vendedor recebe os pedidos, e pode manipular o estado dos pedidos, como Pendente, Preparando ou Entregue.</p>
<p>Com o login do administrador, é possível gerenciar e adicionar mais usuários de cliente e vendedor.</p>


<h2 id="howtouse">Como executar o projeto</h2>

  1. Clone o repositório
    * `git clone https://github.com/gustavo-pd/project-delivery-app.git`.
    * Entre na pasta do repositório que você acabou de clonar:
      * `cd project-delivery-app`
</br>

  2. Instale as dependências:
    * `npm install`
</br>

  3. Inicie o projeto:
    * `npm run start`
</br>

  4. O front-end irá rodar na porta 3000, e o back-end na porta 3001, para acessar o front-end, acesse no seu navegador:
  * front-end: `http://localhost:3000`
  ou
  * back-end: `http://localhost:3001`
</br>


