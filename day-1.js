let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.class = prompt("What is your favorite class?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.


  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}, when your not playing ${playerOne.class}? `;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  customer.howLong =prompt("How long have you been at that address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}, and you have lived there for ${customer.howLong}?`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};
  pet.name = prompt("What is your pets names?")
  pet.age = prompt("How old is he/she?")


  // Try it!
  // TODO: create a prompt to ask about a pet

  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `Wow ${pet.name} is a great name, I can believe he is ${pet.age}.`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
 let car;
 car = {};
 car.type = prompt("What kind of car do you like?");
 car.color = prompt("What color would you like in?");

  

 messageParagraph.innerHTML = `${car.type} are amazing vehicles, and it looks great in ${car.color}.`;
}

part4.onclick = day1Part4;