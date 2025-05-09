import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

interface SinOption {
  id: number;
  text: string;
}

const sins = [
  { id: 1, text: "Blessing water guns at summer camp" },
  { id: 2, text: "Sneaking extra wine during communion" },
  { id: 3, text: "Using holy water for his houseplants" },
  { id: 4, text: "High-fiving during solemn ceremonies" },
  { id: 5, text: "Replacing hymn lyrics with pop songs" },
  { id: 6, text: "Racing other cardinals with pope-mobiles" },
  { id: 7, text: "Taking selfies with confused tourists" },
  { id: 8, text: "Adding disco balls to the Vatican" },
  { id: 9, text: "Wearing sneakers under his robes" },
  { id: 10, text: "Ordering pizza during midnight mass" },
  { id: 11, text: "Hiding whoopee cushions on cardinal chairs" },
  { id: 12, text: "Installing a slip-n-slide in St. Peter's Square" },
  { id: 13, text: "Using the papal staff as a limbo stick" },
  { id: 14, text: "Starting a Vatican TikTok dance challenge" },
  { id: 15, text: "Replacing incense with bubble machines" },
  { id: 16, text: "Holding impromptu karaoke in the Sistine Chapel" },
  { id: 17, text: "Wearing novelty socks with religious figures" },
  { id: 18, text: "Installing a cotton candy machine in Vatican City" },
  { id: 19, text: "Using holy oil to fix squeaky Vatican doors" },
  { id: 20, text: "Challenging visiting dignitaries to thumb wrestling" },
  { id: 21, text: "Blessing smartphones with holy water emojis" },
  { id: 22, text: "Converting one Vatican room into a ball pit" },
  { id: 23, text: "Secretly practicing moonwalking between ceremonies" },
  { id: 24, text: "Adding 'just kidding' after serious blessings" },
  { id: 25, text: "Riding a skateboard through Vatican hallways" },
  { id: 26, text: "Using Latin phrases to order fast food" },
  { id: 27, text: "Renaming saints with superhero nicknames" },
  { id: 28, text: "Installing a basketball hoop on St. Peter's Basilica" },
  { id: 29, text: "Photobombing tourist pictures around Rome" },
  { id: 30, text: "Using the papal hat to hide snacks" },
  { id: 31, text: "Organizing a Vatican City scavenger hunt" },
  { id: 32, text: "Playing rock-paper-scissors to settle theological debates" },
  { id: 33, text: "Adding confetti cannons to Easter celebrations" },
  { id: 34, text: "Converting the papal apartment into a bounce house" },
  { id: 35, text: "Starting a fantasy football league with cardinals" },
  { id: 36, text: "Using stained glass windows for shadow puppets" },
  {
    id: 37,
    text: "Blessing food with 'Bon Appétit' instead of traditional prayer",
  },
  { id: 38, text: "Adding air horns to important announcements" },
  { id: 39, text: "Dabbing after delivering a particularly good sermon" },
  { id: 40, text: "Hosting a Vatican-wide pillow fight night" },
  {
    id: 41,
    text: "Hiding Easter eggs in hard-to-reach Vatican spots year-round",
  },
  { id: 42, text: "Wearing a 'Kiss the Pope' novelty apron while cooking" },
  { id: 43, text: "Starting Vatican City flash mobs" },
  { id: 44, text: "Installing a lazy river around St. Peter's Square" },
  { id: 45, text: "Using religious texts for impromptu poetry slams" },
  { id: 46, text: "Keeping a secret stash of candy in Bible compartments" },
  { id: 47, text: "Using a megaphone to whisper confessions" },
  { id: 48, text: "Setting up a mini-golf course through the Vatican gardens" },
  { id: 49, text: "Suggesting casual Fridays for Vatican dress code" },
  { id: 50, text: "Installing a Vatican City zip line" },
  { id: 51, text: "Using holy water to make blessed ice cubes" },
  { id: 52, text: "Replacing religious music with his personal mixtape" },
  { id: 53, text: "Starting a papal podcast called 'Holy Talks'" },
  {
    id: 54,
    text: "Adding a 'honk if you love Jesus' bumper sticker to the popemobile",
  },
  { id: 55, text: "Using religious vestments for impromptu fashion shows" },
  { id: 56, text: "Making snow angels in Vatican City during rare snowfall" },
  { id: 57, text: "Starting a wave during crowded masses" },
  { id: 58, text: "Putting googly eyes on Vatican statues" },
  { id: 59, text: "Installing a popcorn machine for lengthy ceremonies" },
  { id: 60, text: "Using blessings to review restaurants: '4 out of 5 halos'" },
  { id: 61, text: "Organizing a Vatican talent show with celebrity judges" },
  { id: 62, text: "Creating a secret handshake with the Swiss Guard" },
  { id: 63, text: "Using the papal ring as a bottle opener" },
  { id: 64, text: "Turning confession booths into telephone booths" },
  { id: 65, text: "Setting up a dunk tank for charity with cardinals" },
  { id: 66, text: "Wearing a 'World's Best Pope' coffee mug during meetings" },
  { id: 67, text: "Creating Vatican-themed escape rooms" },
  { id: 68, text: "Using holy relics for show-and-tell" },
  { id: 69, text: "Starting a 'bring your pet to the Vatican' day" },
  { id: 70, text: "Installing a trampoline in the papal gardens" },
  { id: 71, text: "Using saint medals as poker chips" },
  { id: 72, text: "Putting on disguises to tour Rome unrecognized" },
  { id: 73, text: "Installing a water slide from the Vatican roof" },
  { id: 74, text: "Creating a Vatican mannequin challenge video" },
  { id: 75, text: "Replacing traditional bells with pop song ringtones" },
  { id: 76, text: "Starting spontaneous conga lines during processions" },
  { id: 77, text: "Installing an ice cream truck in St. Peter's Square" },
  { id: 78, text: "Using Bible stories for impromptu puppet shows" },
  { id: 79, text: "Setting up a 'Pope for a day' contest for visitors" },
  { id: 80, text: "Adding a fog machine for dramatic sermon entrances" },
  { id: 81, text: "Using Latin to order at modern coffee shops" },
  { id: 82, text: "Holding wheelie chair races in Vatican hallways" },
  { id: 83, text: "Installing a giant Jenga set made of blessed blocks" },
  { id: 84, text: "Creating 'Pope Trading Cards' with fun pope facts" },
  { id: 85, text: "Replacing traditional blessings with finger guns" },
  { id: 86, text: "Installing a photo booth with papal-themed props" },
  { id: 87, text: "Using the Swiss Guard for flash mob security" },
  { id: 88, text: "Creating a secret Vatican handshake" },
  { id: 89, text: "Writing 'wash me' on dusty Vatican cars" },
  { id: 90, text: "Using the papal hat for origami demonstrations" },
  { id: 91, text: "Installing 'Casual Fridays' for Vatican staff" },
  { id: 92, text: "Creating a 'Pimp My Popemobile' renovation show" },
  { id: 93, text: "Hosting a Vatican City comedy roast night" },
  { id: 94, text: "Using a papal decree to declare 'opposite day'" },
  { id: 95, text: "Hosting a Vatican-wide hide and seek championship" },
  { id: 96, text: "Installing a DJ booth for Sunday service" },
  { id: 97, text: "Creating 'holy water' squirt gun battles on hot days" },
  { id: 98, text: "Having speed-blessing competitions with other clergy" },
  { id: 99, text: "Using a T-shirt cannon to distribute religious pamphlets" },
  { id: 100, text: "Installing a mechanical bull in Vatican City" },
  { id: 101, text: "Using prayers to announce the Vatican lunch menu" },
  { id: 102, text: "Putting 'Reserved for Pope' signs on public benches" },
  { id: 103, text: "Blessing selfie sticks as modern religious artifacts" },
  { id: 104, text: "Starting an 'Undercover Pope' reality show" },
  { id: 105, text: "Wearing sunglasses during indoor ceremonies" },
  { id: 106, text: "Installing a 'Holy See-saw' in the Vatican playground" },
  { id: 107, text: "Using ecclesiastical robes as superhero capes" },
  { id: 108, text: "Creating a secret Vatican handshake" },
  { id: 109, text: "Putting 'honk for blessings' signs on the popemobile" },
  {
    id: 110,
    text: "Installing a 'hot or not' rating system for saint statues",
  },
  { id: 111, text: "Creating viral 'Pope Pranks' videos" },
  { id: 112, text: "Using religious texts for impromptu karaoke lyrics" },
];

function getRandomSin(): string {
  const randomIndex = Math.floor(Math.random() * sins.length);
  return sins[randomIndex].text;
}

if (app) {
  const randomSin = getRandomSin();

  app.innerHTML = `
    <div class="container">
      <h1>The Naughty Pope</h1>
      <div class="pope-image">👴✝️👑</div>
      <p class="tagline">Caught in the act of...</p>
      <p class="sin">${randomSin}</p>
      <button id="new-sin-btn" class="confess-btn">Confess Another Sin</button>
    </div>
  `;

  // Add event listener after DOM is loaded
  setTimeout(() => {
    const newSinBtn = document.getElementById("new-sin-btn");
    if (newSinBtn) {
      newSinBtn.addEventListener("click", () => {
        const sinElement = document.querySelector<HTMLParagraphElement>(".sin");
        if (sinElement) {
          sinElement.textContent = getRandomSin();
          // Add a little animation
          sinElement.classList.add("sin-reveal");
          setTimeout(() => sinElement.classList.remove("sin-reveal"), 500);
        }
      });
    }
  }, 0);
}
