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
  }
};

console.log(person.age);
console.log(person["sex"]);
person.personInfo();

// Age in days

const ageInDays = () => {
  const birthYear = prompt('What year were you born ?');
  const ageDays = (2020 - parseInt(birthYear, 10)) * 365;
  const h1 = document.createElement('h1');
  const textAnswer = document.createTextNode(`You are ${ageDays} days old`);
  h1.setAttribute('id', 'ageDays');
  h1.appendChild(textAnswer);
  document
    .getElementById('flexbox-result')
    .appendChild(h1)

};

const reset = () => document
  .getElementById('ageDays')
  .remove();

// Generate cat function
const catHolder = document.querySelector('.flexbox-cat');

const genCat = () => {
  const catImage = document.createElement('img');
  catImage.src = 'https://cataas.com/cat/gif';
  catImage.setAttribute('alt', 'Random Cat');
  catHolder.appendChild(catImage);
};

// Rock Paper Scissors game
const rpsGame = (yourChoice) => {
  let humanChoice,
    botChoice;
  humanChoice = yourChoice.id;
  botChoice = numToChoice(rpsRandomInt());
  console.log(botChoice, 'bot choice')

  const results = decideWinner(humanChoice, botChoice);
  console.log(results);

  const message = finalMessage(results);
  console.log(message.message)
  rpsFrontend(humanChoice, botChoice, message)
}

const rpsRandomInt = () => Math.floor(Math.random() * 3)

const numToChoice = (num) => ['rock', 'paper', 'scissors'][num]

const decideWinner = (yourChoice, botChoice) => {
  const rpsDatabase = {
    'rock': {
      'scissors': 1,
      'rock': 0.5,
      'paper': 0
    },
    'paper': {
      'rock': 1,
      'paper': 0.5,
      'scissors': 0
    },
    'scissors': {
      'paper': 1,
      'scissors': 0.5,
      'rock': 0
    }
  };

  const yourScore = rpsDatabase[yourChoice][botChoice];
  const computerScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, computerScore];
}

const finalMessage = ([yourScore, computerScore]) => {
  if (yourScore === 0) {
    return {'message': 'You lost', 'color': 'red'};
  } else if (yourScore === 0.5) {
    return {'message': 'You tied', 'color': 'yellow'};
  } else {
    return {'message': 'You won', 'color': 'green'};
  }
}

const rpsFrontend = (humanChoice, computerChoice, message) => {
  const imageDatabase = {
    'rock': document
      .getElementById('rock')
      .src,
    'paper': document
      .getElementById('paper')
      .src,
    'scissors': document
      .getElementById('scissors')
      .src
  }

  const imageList = document.querySelectorAll('#rps-div img');
  imageList.forEach(image => image.remove());

  const humanChoiceDiv = document.createElement('div');
  const botChoiceDiv = document.createElement('div');
  const messageDiv = document.createElement('div');

  humanChoiceDiv.innerHTML = `<img src="${imageDatabase[humanChoice]}" alt="${humanChoice}" class="on" />`;
  messageDiv.innerHTML = `<h1 style="color: ${message.color}; font-size: 60px; padding: 30px;">${message.message}</h1>`
  botChoiceDiv.innerHTML = `<img src="${imageDatabase[computerChoice]}" alt="${computerChoice}" class="on-red" />`;

  document
    .getElementById('rps-div')
    .appendChild(humanChoiceDiv);

  document
    .getElementById('rps-div')
    .appendChild(messageDiv);

  document
    .getElementById('rps-div')
    .appendChild(botChoiceDiv);
}