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
		quote: "Conocerás a alguien muy profesional",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "No sacarás la vuelta, realizarás observación participante",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Abrirás una nueva línea de investigación de alto impacto en la región",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Toda doctora puede ser un proyecto",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Aplicarás técnicas complejas y sofisticadas",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "La vida puede ser dura, deberás aprender a transformar las dificultades en bonos",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Descubrirás que tus colegas no entienden que tienes otro nivel de vida",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Be extravagant",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Be less critical",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Breathe more deeply",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Bridges -build -burn",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Change ambiguities to specifics",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Change nothing and continue consistently",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Change specifics to ambiguities",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Consider transitions",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Courage!",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Cut a vital connection",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Decorate, decorate",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Destroy nothing; Destroy the most important thing",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Discard an axiom",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Disciplined self-indulgence",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Discover your formulas and abandon them",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Display your talent",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Distort time",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Do nothing for as long as possible",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Don't avoid what is easy",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Don't break the silence",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Don't stress one thing more than another",
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
