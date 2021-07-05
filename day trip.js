"user strict"


let chosenDestination = ["miami", "orlando", "clearwater", "sarasota"];

function getRandomIndex(items) {
    return Math.floor(Math.random() * items.length);
}
for (let i = 0; i < 1; i++) {
    let removedItem = chosenDestination.splice(getRandomIndex(chosenDestination), 1);
    console.log(removedItem);
}

let chosenRestaurant = ["mexican", "italian", "carribean", "bbq", "seafood", "cajun"];

for (let i = 0; i < 1; i++) {
    let removedItem = chosenRestaurant.splice(getRandomIndex(chosenRestaurant), 1);
    console.log(removedItem);
}

let chosenTransport = ["plane", "train", "car", "taxicab"];

for (let i = 0; i < 1; i++) {
    let removedItem = chosenTransport.splice(getRandomIndex(chosenTransport), 1);
    console.log(removedItem);
}

let chosenEntertainment = ["movie", "music", "dance", "sport", "boating", "skydiving"];

for (let i = 0; i < 1; i++) {
    let removedItem = chosenEntertainment.splice(getRandomIndex(chosenEntertainment), 1);
    console.log(removedItem);
}

<<<<<<< HEAD
let randomDestination = chosenDestination[getRandomIndex(chosenDestination)]
console.log(randomDestination);
let userInput = prompt("what part of your trip would you like to change");
if (userInput === "destination"){
    randomDestination = chosenDestination[getRandomIndex(chosenDestination)]
    console.log(randomDestination);
}

let randomRestaurant = chosenRestaurant[getRandomIndex(chosenRestaurant)]
console.log(randomRestaurant);
let userInput1 = prompt("what part of your food would you like to change");
if (userInput1 === "restaurant"){
    randomRestaurant = chosenRestaurant[getRandomIndex(chosenRestaurant)]
    console.log(randomRestaurant);
}

let randomTransport = chosenTransport[getRandomIndex(chosenTransport)]
console.log(randomTransport);
let userInput2 = prompt("what part of your transportation would you like to change");
if (userInput2 === "transport"){
    randomTransport = chosenTransport[getRandomIndex(chosenTransport)]
    console.log(randomTransport);
}

let randomEntertainment = chosenEntertainment[getRandomIndex(chosenEntertainment)]
console.log(randomEntertainment);
let userInput3 = prompt("what part of your entertainment would you like to change");
if (userInput3 === "entertainment"){
    randomEntertainment = chosenEntertainment[getRandomIndex(chosenEntertainment)]
    console.log(randomEntertainment);
}

console.log(randomDestination, randomRestaurant, randomTransport, randomEntertainment);
=======
>>>>>>> 6e6fd71cdef9117ee3c2a22044e5e28576e609f9
