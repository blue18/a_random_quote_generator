// December 17, 2018 
// Blue18 
const quotes = [
  {
    quote: "I do not fear computers. I fear lack of them.",
    source: "Isaac Asimov"
  },
  {
    quote: "A computer once beat me at chess, but it was no match for me at kick boxing.",
    source: "Emo Philips"
  },
  {
    quote: "Computer Science is no more about computers than astronomy is about telescopes.",
    source: "Edsger W. Dijkstra",
    year: 1900,
    citation: "classroom"
  }, 
  {
    quote: "The question of whether computers can think is like the question of whether submarines can swim.",
    source: "Edsger W. Dijkstra",
    year: 1900,
    citation: "University"
  }, 
  {
    quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    source: "Anonymous"
  }
];

// random number ranger formula 
function randomNumber(min_value, max_value) {
  return Math.floor(Math.random() * (max_value - min_value)) + min_value;
}

// Get an object from the quotes list 
function getRandomQuote() {
  const floorMin = 0;
  let random = randomNumber(floorMin, quotes.length);
  return quotes[random];
}

function printQuote() {
  let quoteObject = getRandomQuote();
  let quote = quoteObject.quote;
  let source = quoteObject.source;
  let citation = quoteObject.citation;
  let year = quoteObject.year;
  let stringOfQuotePrperties = "";

  if (citation == null) {
    // print quote and source
    let quoteString = '<p class="quote">' + quote + '</p>';
    let sourceString = '<p class="source">' + source + '</p>';
    stringOfQuotePrperties = quoteString + sourceString;

  } else {
    // print all properties 
    let quoteString = '<p class="quote">' + quote + '</p>';
    let sourceString = '<p class="source">' + source;
    let citationString = '<span class="citation">' + citation +'</span>';
    let yearString = '<span class="year">' + year + '</span>';
    let sourceStingEnd = '</p>';

    // Compbine the HTML tags 
    stringOfQuotePrperties = quoteString + sourceString + citationString + yearString + sourceStingEnd;

  }

  // set the new quote
  document.getElementById('quote-box').innerHTML = stringOfQuotePrperties;

}

// Update the quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
