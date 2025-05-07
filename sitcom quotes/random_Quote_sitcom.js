const quotes = [
  {
    quote: "We were on a break!",
    sitcom: "Friends",
    background: "url('https://i.imgur.com/OxGZBXd.jpg')",
    image: "https://i.imgur.com/6rZqN7A.jpg" // Ross
  },
  {
    quote: "I am not superstitious, but I am a little stitious.",
    sitcom: "The Office",
    background: "url('https://i.imgur.com/lEtwB7F.jpg')",
    image: "https://i.imgur.com/EbYcQpQ.jpg" // Michael Scott
  },
  {
    quote: "Bazinga!",
    sitcom: "The Big Bang Theory",
    background: "url('https://i.imgur.com/KUxsz8Z.jpg')",
    image: "https://i.imgur.com/1K2W8Ju.jpg" // Sheldon
  },
  {
    quote: "True story.",
    sitcom: "How I Met Your Mother",
    background: "url('https://i.imgur.com/VldW9b3.jpg')",
    image: "https://i.imgur.com/ZTSE5wL.jpg" // Barney
  },
  {
    quote: "No soup for you!",
    sitcom: "Seinfeld",
    background: "url('https://i.imgur.com/TNz3DID.jpg')",
    image: "https://i.imgur.com/VLfLMDv.jpg" // Soup Nazi
  }
];

window.generateQuote = function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];

  // Update quote text
  document.getElementById("quote").textContent = `"${selected.quote}" - ${selected.sitcom}`;

  // Update background
  document.body.style.backgroundImage = selected.background;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.color = "white";

  // Update character or scene image
  const imageElement = document.getElementById("character-image");
  imageElement.src = selected.image;
  imageElement.style.display = "block";
};
