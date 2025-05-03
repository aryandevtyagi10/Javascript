const quotes = [
  {
    quote: "We were on a break!",
    sitcom: "Friends",
    background: "url('https://i.imgur.com/OxGZBXd.jpg')" // Friends couch
  },
  {
    quote: "I am not superstitious, but I am a little stitious.",
    sitcom: "The Office",
    background: "url('https://i.imgur.com/lEtwB7F.jpg')" // Office background
  },
  {
    quote: "Bazinga!",
    sitcom: "The Big Bang Theory",
    background: "url('https://i.imgur.com/KUxsz8Z.jpg')" // TBBT background
  },
  {
    quote: "True story.",
    sitcom: "How I Met Your Mother",
    background: "url('https://i.imgur.com/VldW9b3.jpg')" // MacLaren's Pub
  },
  {
    quote: "No soup for you!",
    sitcom: "Seinfeld",
    background: "url('https://i.imgur.com/TNz3DID.jpg')" // Seinfeld diner
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${selected.quote}" - ${selected.sitcom}`;

  document.body.style.backgroundImage = selected.background;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.color = "white"; // for readability
}