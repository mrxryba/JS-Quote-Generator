const quoteText = document.querySelector('.quote');
const personText = document.querySelector('.person');
const newQuoteBtn = document.querySelector('#new-quote');


const quotes = [
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        person: "Margaret Mead"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        person: "Aristotle"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        person: "Maya Angelou"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        person: "Dalai Lama"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        person: "Mae West"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    }

];

function changeQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    quoteText.innerText = quotes[randomNumber].quote;
    personText.innerText = quotes[randomNumber].person;
}

newQuoteBtn.addEventListener('click', changeQuote);


