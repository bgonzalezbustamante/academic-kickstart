// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];

//Array to hold quotes, sources, citaitons & years
var quotes = [
	{
		quote: "<strong>Cuidado, la mortalidad por asma es muy alta en la actualidad</strong>",
		source: "",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "<strong>Conocerás a alguien muy profesional</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>No sacarás la vuelta, realizarás observación participante</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Abrirás una nueva línea de investigación de alto impacto en la región</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Toda doctora puede ser un proyecto</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Aplicarás técnicas complejas y sofisticadas</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>La vida puede ser dura, deberás aprender a transformar las dificultades en bonos</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Descubrirás que tus colegas no entienden que tienes otro nivel de vida</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Descubrirás que la tecnocracia municipal es una línea por desarrollar</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>No uses bases de datos existentes y validadas, para eso tienes ayudantes. Que creen un nuevo índice</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Nuevos proyectos aparecerán en tu vida</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Te declararán la guerra, pero encontrarás consuelo en nuevos proyectos</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>El proceso se complicará, pero siempre puedes reconvertirlo en proyecto</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Nunca dejes que un proyecto termine en un proceso</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>La gestión te alejará de la senda del alto impacto. Pero tranquilo. El proyecto lo vale</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Descubrirás nuevos comandos</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Un comando te arruinará la presentación</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "<strong>Habermas o Bourdieu, esa es la cuestión</strong>",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

//Function to genereate random rgb color value
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

// Function to take previously selected random object from array & print to screen
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	// message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}
