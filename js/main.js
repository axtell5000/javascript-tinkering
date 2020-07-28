// strings
let fruit = "banana";
let moreFruit = fruit + "\napple";
console.log(moreFruit);
console.log(moreFruit.length);
console.log(moreFruit.indexOf("b"));
console.log(moreFruit.slice(1, 6)); // start 1 until but not including index 6
console.log(moreFruit.replace("a", "1")); // only the first one found gets replaced
console.log(moreFruit.toUpperCase());
console.log(moreFruit.toLowerCase());
console.log(moreFruit.split(""));

// arrays
let names = ["John", "Anne", "Mark", "Susan"];
console.log(names.toString());
console.log(names.join("-"));
console.log(names.pop());
console.log(names.push("McShizzle"), names);
console.log(names.shift(), names); // more resource intensive
console.log(names.unshift("Amy", "Ian"), names); // more resource intensive

// Objects
let person = {
  firstName: "Stephen",
  lastName: "Axtell",
  sex: "Male",
  age: 48,
  personInfo: function () {
    console.log(`${this.firstName}`);
  },
};

console.log(person.age);
console.log(person["sex"]);
person.personInfo();

// Age in days

const ageInDays = () => {
  const birthYear = prompt("What year were you born ?");
  const ageDays = (2020 - parseInt(birthYear, 10)) * 365;
  const h1 = document.createElement("h1");
  const textAnswer = document.createTextNode(`You are ${ageDays} days old`);
  h1.setAttribute("id", "ageDays");
  h1.appendChild(textAnswer);
  document.getElementById("flexbox-result").appendChild(h1);
};

const reset = () => document.getElementById("ageDays").remove();

// Generate cat function
const catHolder = document.querySelector(".flexbox-cat");

const genCat = () => {
  const catImage = document.createElement("img");
  catImage.src = "https://cataas.com/cat/gif";
  catImage.setAttribute("alt", "Random Cat");
  catHolder.appendChild(catImage);
};

// Rock Paper Scissors game
const rpsGame = (yourChoice) => {
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numToChoice(rpsRandomInt());
  console.log(botChoice, "bot choice");

  const results = decideWinner(humanChoice, botChoice);
  console.log(results);

  const message = finalMessage(results);
  console.log(message.message);
  rpsFrontend(humanChoice, botChoice, message);
};

const rpsRandomInt = () => Math.floor(Math.random() * 3);

const numToChoice = (num) => ["rock", "paper", "scissors"][num];

const decideWinner = (yourChoice, botChoice) => {
  const rpsDatabase = {
    rock: {
      scissors: 1,
      rock: 0.5,
      paper: 0,
    },
    paper: {
      rock: 1,
      paper: 0.5,
      scissors: 0,
    },
    scissors: {
      paper: 1,
      scissors: 0.5,
      rock: 0,
    },
  };

  const yourScore = rpsDatabase[yourChoice][botChoice];
  const computerScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, computerScore];
};

const finalMessage = ([yourScore, computerScore]) => {
  if (yourScore === 0) {
    return { message: "You lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied", color: "yellow" };
  } else {
    return { message: "You won", color: "green" };
  }
};

const rpsFrontend = (humanChoice, computerChoice, message) => {
  const imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  const imageList = document.querySelectorAll("#rps-div img");
  imageList.forEach((image) => image.remove());

  const humanChoiceDiv = document.createElement("div");
  const botChoiceDiv = document.createElement("div");
  const messageDiv = document.createElement("div");

  humanChoiceDiv.innerHTML = `<img src="${imageDatabase[humanChoice]}" alt="${humanChoice}" class="on" />`;
  messageDiv.innerHTML = `<h1 style="color: ${message.color}; font-size: 60px; padding: 30px;">${message.message}</h1>`;
  botChoiceDiv.innerHTML = `<img src="${imageDatabase[computerChoice]}" alt="${computerChoice}" class="on-red" />`;

  document.getElementById("rps-div").appendChild(humanChoiceDiv);

  document.getElementById("rps-div").appendChild(messageDiv);

  document.getElementById("rps-div").appendChild(botChoiceDiv);
};

// Colour change challenge

const allButtons = document.querySelectorAll(".flexbox-color button");
let copyBtns = [];
for (let i = 0; i < allButtons.length; i++) {
  copyBtns.push(allButtons[i].classList[1]);
}

console.log(copyBtns, "copy");

const buttonColorChange = (button) => {
  if (button.value === "red") {
    buttonRed();
  } else if (button.value === "green") {
    buttonGreen();
  } else if (button.value === "reset") {
    buttonColorReset();
  } else if (button.value === "random") {
    randomColors();
  }
};

const buttonRed = () => {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-danger");
  }
};

const buttonGreen = () => {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn-success");
  }
};

const buttonColorReset = () => {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyBtns[i]);
  }
};

const randomColors = () => {
  const choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];

  for (let i = 0; i < allButtons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }
};

// Blackjack game

const blackjackGame = {
  you: {
    scoreSpan: "#your-blackjack-total",
    div: "#your-box",
    score: 0,
  },
  dealer: {
    scoreSpan: "#dealer-blackjack-total",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  cardsValueMap: {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 10,
    Q: 10,
    K: 10,
    A: [1, 11],
  },
};

const YOU = blackjackGame.you;
const DEALER = blackjackGame.dealer;
const hitSound = new Audio("/sounds/swish.m4a");
const winSound = new Audio("/sounds/cash.mp3");
const lossSound = new Audio("/sounds/aww.mp3");

document.querySelector("#bj-hit").addEventListener("click", bjHit);
document.querySelector("#bj-stand").addEventListener("click", dealerLogic);
document.querySelector("#bj-deal").addEventListener("click", bjDeal);

function bjHit() {
  let card = randomCard();
  refreshMessage();
  showCard(card, YOU);
  updateScore(card, YOU);
  showScore(YOU);
}

function bjDeal() {
  bjDealCard();
}

function showCard(card, activePlayer) {
  if (activePlayer.score <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `/images/${card}.png`;
    cardImage.setAttribute("alt", "Playing Card");
    document.querySelector(activePlayer.div).appendChild(cardImage);
    hitSound.play();
  }
}

function bjDealCard() {
  showResult(determineWinner());
  const yourImages = document
    .querySelector("#your-box")
    .querySelectorAll("img");
  const dealerImages = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");

  for (let i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }

  for (let i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }

  YOU.score = 0;
  DEALER.score = 0;

  document.querySelector(YOU.scoreSpan).style.color = "white";
  document.querySelector(DEALER.scoreSpan).style.color = "white";

  document.querySelector(YOU.scoreSpan).textContent = 0;
  document.querySelector(DEALER.scoreSpan).textContent = 0;
  yourImages.forEach((card) => card.remove());
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame.cards[randomIndex];
}

function updateScore(cards, activePlayer) {
  // dealing with the Ace whether its 1 or 11
  if (cards === "A") {
    if (activePlayer.score + blackjackGame.cardsValueMap[cards][1] <= 21) {
      activePlayer.score += blackjackGame.cardsValueMap[cards][1];
    } else {
      activePlayer.score += blackjackGame.cardsValueMap[cards][0];
    }
  } else {
    activePlayer.score += blackjackGame.cardsValueMap[cards];
  }
}

function showScore(activePlayer) {
  if (activePlayer.score > 21) {
    document.querySelector(activePlayer.scoreSpan).textContent = "BUST";
    document.querySelector(activePlayer.scoreSpan).style.color = "red";
  } else {
    document.querySelector(activePlayer.scoreSpan).textContent =
      activePlayer.score;
  }
}

function dealerLogic() {
  let card = randomCard();
  refreshMessage();
  showCard(card, DEALER);
  updateScore(card, DEALER);
  showScore(DEALER);
}

// determine winner and who just won
function determineWinner() {
  let winner;

  if (YOU.score <= 21) {
    // IF YOUR SCORE IS UNDER OR EQUAL TO 21 AND GREATER THAN DEALER OR DEALER WENT BUST, YOU WIN
    if (YOU.score > DEALER.score || DEALER.score > 21) {
      console.log("You won");
      winner = YOU;
    } else if (YOU.score < DEALER.score) {
      console.log("You lost");
      winner = DEALER;
    } else if (YOU.score === DEALER.score) {
      console.log("Its a tie");
    }
    // if you go bust but not dealer
  } else if (YOU.score > 21 && DEALER.score <= 21) {
    console.log("You lost");
    winner = DEALER;

    // both YOU and DEALER bust
  } else if (YOU.score > 21 && DEALER.score > 21) {
    console.log("Its a tie eeeek");
  }

  console.log(`Winner is ${winner}`);
  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if (winner === YOU) {
    message = "You won";
    messageColor = "green";
    winSound.play();
  } else if (winner === DEALER) {
    message = "You lost";
    messageColor = "red";
    lossSound.play();
  } else {
    message = "You drew";
    messageColor = "black";
  }

  const result = document.querySelector("#blackjack-result");
  result.textContent = message;
  result.style.color = messageColor;
}

function refreshMessage() {
  const result = document.querySelector("#blackjack-result");
  result.style.color = "black";
  result.textContent = "Let's Play";
}
