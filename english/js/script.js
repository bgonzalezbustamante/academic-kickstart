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
		quote: "Abandon normal instructions",
		source: "",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Accept advice",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Adding on",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "A line has two sides",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Always the first steps",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Ask people to work against their better judgement",
		source: "",
		citation: "",
		year: "",
		tags: "",
	},
	{
		quote: "Ask your body",
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
