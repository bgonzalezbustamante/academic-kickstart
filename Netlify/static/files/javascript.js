var quotes = [
'Cuidado, la mortalidad por asma es muy alta en la actualidad',
'Conocerás a alguien muy profesional'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
