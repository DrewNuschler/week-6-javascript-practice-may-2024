let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

// Example
function day2Part1() {
  let wallet;
  let walletNumber;
  let coffeeNumber = 3.99;

  wallet = prompt("How much is in your wallet?");
  walletNumber = Number(wallet);

  
  messageParagraph.innerHTML = `Coffee costs ${coffeeNumber}. You have ${walletNumber}. You can afford coffee: ${walletNumber > coffeeNumber}`
  
}

part1.onclick = day2Part1;


function day2Part2() {
  let bank;
  let bankNumber;
  let carNumber = 5000;

    bank = prompt("How much do you have in saving at the moment?");
    bankNumber = Number(bank); 
   
  
  messageParagraph.innerHTML = `The car costs ${carNumber}. You have ${bankNumber} in your bank. You can afford the car: ${bank > carNumber}`
  
  
}
part2.onclick = day2Part2;


function day2Part3() {
  let wallet;
  let walletNumber;
  let tvNumber = 300;
  
  wallet = prompt("How much money do you have on you?");
  walletNumber = Number(wallet);


  
  messageParagraph.innerHTML = `You have ${wallet}, and the tv cost ${tvNumber} so you can buy the tv: ${walletNumber > tvNumber}`

}
part3.onclick = day2Part3;


function day2Part4() {
  let bank;
  let bankNumber;
  let rocketNumber = 10000000.99;

  bank = prompt("How much cash do you have in your checking account?");
  bankNumber = Number(bank);


  messageParagraph.innerHTML = `you have ${bank} in the bank, the rocket is ${rocketNumber}, So you can buy it: ${bankNumber > rocketNumber}.`

 

}
part4.onclick = day2Part4;
