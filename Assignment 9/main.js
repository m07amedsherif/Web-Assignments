const quotes = [
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
];

var lastIndex = -1;

function generateQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = `"${randomQuote.quote}"`;
    document.getElementById('author').innerText = `--${randomQuote.author}`;
}
