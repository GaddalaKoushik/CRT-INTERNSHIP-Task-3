// Array of quotes
const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
    text:"The only way to do great work is to love what you do."
    author: "Steve Jobs"
    },
  {
    text:"Success is not final, failure is not fatal: It is the courage to continue that counts."
    author: "Winston Churchill"
  },
  {
    text:"The only place where success comes before work is in the dictionary."
    author : "Vidal Sassoon"
  },
  {
text: "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
   author: "Sam Levenson"
  },
  {
    text:"It does not matter how slowly you go as long as you do not stop. "
    author:" Confucius"
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it" 
    author:" Henry David Thoreau"
   },
   {text: "Believe in yourself, take on your challenges, and dig deep within yourself to conquer fears." 
    author:"Chantal Sutherland"
  ];
  
  // Function to generate a random quote
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-author").textContent = "- " + quote.author;
  }
  
  // Event listener for the "New Quote" button
  document.getElementById("new-quote").addEventListener("click", generateRandomQuote);
  
  // Generate a random quote on page load
  generateRandomQuote();