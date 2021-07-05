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

function getRandomIndex(items) {
    return Math.floor(Math.random() * items.length);
}
for (let i = 0; i < 1; i++) {
    let removedItem = chosenRestaurant.splice(getRandomIndex(chosenRestaurant), 1);
    console.log(removedItem);
}

let chosenTransport = ["plane", "train", "car", "taxicab"];

function getRandomIndex(items) {
    return Math.floor(Math.random() * items.length);
}
for (let i = 0; i < 1; i++) {
    let removedItem = chosenTransport.splice(getRandomIndex(chosenTransport), 1);
    console.log(removedItem);
}

let chosenEntertainment = ["movie", "music", "dance", "sport", "boating", "skydiving"];

function getRandomIndex(items) {
    return Math.floor(Math.random() * items.length);
}
for (let i = 0; i < 1; i++) {
    let removedItem = chosenEntertainment.splice(getRandomIndex(chosenEntertainment), 1);
    console.log(removedItem);
}

