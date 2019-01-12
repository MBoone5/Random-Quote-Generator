// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {quote:"What is important is seldom urgent, and what is urgent is seldom important.",
    source:"Dwight D. Eisenhower",
    citation:"",
    year:"1954",
    theme:"Productivity"},

    {quote:"There is surely nothing quite so useless as doing with great efficiency what should not be done at all",
    source:"Peter Drucker",
    citation:"Managing for Business Effectiveness",
    year:"1963",
    theme:"Productivity"},

    {quote:"You don't have to know everything, just where to find it.",
    source:"Albert Einstein",
    citation:"",
    year:"1921",
    theme:"Education"},

    {quote:"Never let schooling interfere with your education.",
    source:"Grant Allen",
    citation:"Post-Prandial Philosophy",
    year:"1894",
    theme:"Education"},

    {quote:"It is not the mountains we conquer, but ourselves.",
    source:"Edmund Hillary",
    citation:"Pittsburgh Post",
    year:"1998",
    theme:"Motivation"},

    {quote:"Attitude is a little thing that makes a big difference.",
    source:"Theodore Roosevelt",
    citation:"",
    year:"1895",
    theme:"Motivation"}
];


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(quotesArray) {
    quoteValue = Math.floor(Math.random() * (Math.floor(5) + 1))
    var randomQuote = quotesArray[quoteValue];
    return randomQuote;
}

// Create the printQuote funtion and name it printQuote
function printQuote(){
    var newQuote = getRandomQuote(quotes);
    console.log(newQuote); //prints the quote to the console for debugging purposes
    document.getElementById('quote').innerHTML = newQuote.quote;
    document.getElementById('source').innerHTML = newQuote.source;
    document.getElementById('citation').innerHTML = newQuote.citation;
    document.getElementById('year').innerHTML = newQuote.year;

    // Conditonal statement to get rid of the comma if there isn't a citation
    if (newQuote.citation.length != 0) {
        document.getElementById('year').setAttribute("class", "comma");
    }
    else {
        document.getElementById('year').removeAttribute("class");
    };

    // Conditonal statement to change background color based on the theme of the quote
    var quoteTheme = newQuote.theme;

    if (quoteTheme == "Education") {
        // The colors are set to independent variables in order to make it easier to reference the color more than once
        var eduColor = "rgb(42, 150, 196)";
        document.body.style.background = eduColor;
    }
    else if (quoteTheme == "Motivation") {
        var motiColor = "rgb(187, 37, 37)";
        document.body.style.background = motiColor;
    }
    else {
        var prodColor = "rgb(94, 31, 209)"
        document.body.style.background = prodColor;
    };
};

// Function to manage the interval for quotes
var quoteInterval = null;

function quoteIntFunc(bool) {
    if(bool){
        quoteInterval = setInterval(printQuote, 5000)
    }
    else{
        clearInterval(quoteInterval)
    };
};

// Starts the initial interval
quoteIntFunc(true);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "changeQuote" function is called
function changeQuote(){
    // Changes and prints the new quote
    printQuote();

    // Starts a new interval for the quote
    quoteIntFunc(false);
    quoteIntFunc(true);
};
document.getElementById('loadQuote').addEventListener("click", changeQuote, false);
