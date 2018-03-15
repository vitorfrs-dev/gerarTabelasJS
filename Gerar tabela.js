//Um Script que gera uma tabela com Nome, idade e gênero

//Declara as variáveis da tabela a ser gerada e do botão que despara a função
var tabelaDeNomesEL, btnGerarTabelaEL;

//referência os elementos da página

tabelaDeNomesEL = document.querySelector('#nameTable');
btnGerarTabelaEL = document.querySelector('#btnGerarTabela');

//Evento a ser disparado quando clicar no botão
btnGerarTabela.addEventListener('click',function() {
	gerarTabela(people);
});

/// Array com o cadastro das pessoas
var people = [
				{
					"name": "Wagner",
					"age": 41,
					"gender": "male"
				},

				{
					"name": "Ronaldo",
					"age": 35,
					"gender": "male"
				},

				{
					"name": "Ana",
					"age": 32,
					"gender": "famele"
				},

				{
					"name": "Fernanda",
					"age": 19,
					"gender": "famale"
				},

				{
					"name": "Priscila",
					"age": 19,
					"gender": "famale"
				},

				{
					"name": "Aline",
					"age": 22,
					"gender": "famale"
				},

				{
					"name": "Martha",
					"age": 32,
					"gender": "famale"
				},

				{
					"name": "Alexander",
					"age": 52,
					"gender": "male"
				},

				{
					"name": "Gabriela",
					"age": 17,
					"gender": "famale"
				},

				{
					"name": "Michele",
					"age": 22,
					"gender": "male"
				},

				{
					"name": "Natalia",
					"age": 22,
					"gender": "famale"
				},

				{
					"name": "Rogério",
					"age": 35,
					"gender": "male"
				},

				{
					"name": "Marcos",
					"age": 26,
					"gender": "male"
				},



			]


//função que irá gerar a tabela
function gerarTabela(array) {

	for (let i = 0; i < array.length; i++) {
		//Variaveis que possuem o valor das propriedades de cada pessoas
		let name, age, gender;
		name = array[i].name;
		age = array[i].age;
		gender = array[i].gender;

		//Chama a função com os dados armazenados nas variáveis acima
		createRow(name, age, gender);
	}
}


function createRow(nome, idade, genero) {

	//Cria os elementos tr e td
	var tr, td1, td2,td3;
	tr = document.createElement('tr');
	td1 = document.createElement('td');//Vai Conter o nome
	td2 = document.createElement('td');//Vai Conter a idade
	td3 = document.createElement('td');//Vai Conter o Gênero

	//Cria um elemento text node e coloca os valores passados nos parâmetros nome, idade, genero
	var texto1, texto2, texto3;
	texto1 = document.createTextNode(nome);
	texto2 = document.createTextNode(idade);
	texto3 = document.createTextNode(genero);

	//Coloca o texto dentro da célula
	td1.appendChild(texto1);
	td2.appendChild(texto2);
	td3.appendChild(texto3);
	
	//Coloca as células dentro da row
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);


	//Coloca a row no final da tabela
	tabelaDeNomesEL.lastChild.appendChild(tr);
}
