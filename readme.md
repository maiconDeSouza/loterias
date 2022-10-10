<h1>
	Loterias
	<img 
		align="right"
		width="150"
        src="https://raw.githubusercontent.com/maiconDeSouza/assets/master/loterias/logo.jpeg" 
	/>
</h1>

<h2>Sobre o projeto</h2>

<p>
    Este Projeto se trata de uma API que retorna jogos de Loterias. Por exemplo, você escolhe a MegaSena a API retorna em JSON com 6 números que é a quantidade de números que o apostar deve marcar em sua aposta.
</p>

<h4>São 3 Jogos Disponíveis:</h4>
<ul>
    <li>Mega-Sena - retorna 6 números de 1 a 60</li>
    <li>Lotafácil - retorna 15 números de 1 a 25</li>
    <li>Lotomania - retorna 20 números de 0 a 99</li>
</ul>

<img 
    src="https://raw.githubusercontent.com/maiconDeSouza/assets/master/loterias/rodando.gif"
/>


<h3>Tecnologias utilizadas</h3>
<h4>Back end</h4>
<ul>
	<li>NodeJS</li>
	<li>ExpressJS - Framework backend para NodeJS</li>
	<li>Cors - biblioteca NodeJS para segurança da dua API, pois você informa quais endereços terão acesso a sua API</li>
	<li>Nodemon - pacote NodeJS para desenvolvimento</li>
</ul>

<hr>
<h2>Como executar o projeto</h2>

<h3>Back end</h3>
<p>Pré-requisitos: NodeJS</p>

```bash
# clonar repositório
git clone ggit@github.com:maiconDeSouza/loterias.git

# Abra no terminal a pasta /projeto-crud
# rode o comando
npm i

# executar o projeto
npm start
# Para executar com desenvolvimento 
npm run dev
```
<img 
    src="https://raw.githubusercontent.com/maiconDeSouza/assets/master/loterias/instalacao.gif"
/>

<h2>Rota Para Acessar a aplicação</h2>
```url
http://localhost:1992/sorteio
```
<h3>valores aceitos</h3>
<p>req.body</p>
<img 
    src="https://raw.githubusercontent.com/maiconDeSouza/assets/master/loterias/lotomania.png"
/>
<img 
    src="https://raw.githubusercontent.com/maiconDeSouza/assets/master/loterias/lotofacil.png"
/>
<img 
    src="https://raw.githubusercontent.com/maiconDeSouza/assets/master/loterias/megasena.png"
/>

<h2>Autor</h2>
<strong>Maicon Souza</strong>