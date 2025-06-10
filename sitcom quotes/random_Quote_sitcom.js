const quotes = [
  {
    quote: "We were on a break!",
    sitcom: "Friends",
    background: "url('https://i.imgur.com/OxGZBXd.jpg')", // Central Perk
    image: "https://i.imgur.com/6rZqN7A.jpg" // Ross
  },
  {
    quote: "I am not superstitious, but I am a little stitious.",
    sitcom: "The Office",
    background: "url('https://i.imgur.com/lEtwB7F.jpg')", // Dunder Mifflin Office
    image: "https://i.imgur.com/EbYcQpQ.jpg" // Michael Scott
  },
  {
    quote: "Bazinga!",
    sitcom: "The Big Bang Theory",
    background: "url('https://i.imgur.com/KUxsz8Z.jpg')", // Apartment living room
    image: "https://i.imgur.com/1K2W8Ju.jpg" // Sheldon
  },
  {
    quote: "True story.",
    sitcom: "How I Met Your Mother",
    background: "url('https://i.imgur.com/VldW9b3.jpg')", // MacLaren's Pub
    image: "https://i.imgur.com/ZTSE5wL.jpg" // Barney
  },
  {
    quote: "No soup for you!",
    sitcom: "Seinfeld",
    background: "url('https://i.imgur.com/TNz3DID.jpg')", // Monk's Cafe
    image: "https://i.imgur.com/VLfLMDv.jpg" // Soup Nazi
  },
  {
    quote: "How you doin'?",
    sitcom: "Friends",
    background: "url('https://i.imgur.com/OxGZBXd.jpg')",
    image: "https://i.imgur.com/gK2J3jG.jpg" // Joey
  },
  {
    quote: "That's what she said!",
    sitcom: "The Office",
    background: "url('https://i.imgur.com/lEtwB7F.jpg')",
    image: "https://i.imgur.com/EbYcQpQ.jpg" // Michael Scott
  },
  {
    quote: "It's gonna be legen—wait for it—dary!",
    sitcom: "How I Met Your Mother",
    background: "url('https://i.imgur.com/VldW9b3.jpg')",
    image: "https://i.imgur.com/ZTSE5wL.jpg" // Barney
  },
  {
    quote: "Serenity now!",
    sitcom: "Seinfeld",
    background: "url('https://i.imgur.com/TNz3DID.jpg')",
    image: "https://i.imgur.com/NqB01F5.jpg" // Frank Costanza
  },
  {
    quote: "Penny, Penny, Penny.",
    sitcom: "The Big Bang Theory",
    background: "url('https://i.imgur.com/KUxsz8Z.jpg')",
    image: "https://i.imgur.com/1K2W8Ju.jpg" // Sheldon
  }
];

let lastRandomIndex = -1; // To ensure a different quote each time

const quoteTextElement = document.getElementById("quote-text");
const quoteSitcomElement = document.getElementById("quote-sitcom");
const characterImageElement = document.getElementById("character-image");
const generateQuoteBtn = document.getElementById("generateQuoteBtn");
const tweetQuoteBtn = document.getElementById("tweetQuoteBtn");

function generateQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastRandomIndex && quotes.length > 1); // Ensure different quote
  lastRandomIndex = randomIndex;

  const selected = quotes[randomIndex];

  // Update quote text and sitcom
  quoteTextElement.textContent = `"${selected.quote}"`;
  quoteSitcomElement.textContent = `- ${selected.sitcom}`;

  // Update background with smooth transition
  document.body.style.backgroundImage = selected.background;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed"; // Keep background fixed

  // Update character or scene image
  characterImageElement.src = selected.image;
  characterImageElement.alt = `Character from ${selected.sitcom}`;
  characterImageElement.style.display = "block"; // Show the image

  // Show tweet button
  tweetQuoteBtn.style.display = "inline-block";
}

function tweetQuote() {
  const quote = quoteTextElement.textContent;
  const sitcom = quoteSitcomElement.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} ${sitcom} #SitcomQuotes`)}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
generateQuoteBtn.addEventListener("click", generateQuote);
tweetQuoteBtn.addEventListener("click", tweetQuote);

// Generate an initial quote on page load
generateQuote();
