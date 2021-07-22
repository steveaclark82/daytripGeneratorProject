"user strict"

// Possible trip selection
let chosenDestination = ["miami", "orlando", "clearwater", "sarasota"];
let chosenRestaurant = ["mexican", "italian", "carribean", "bbq", "seafood", "cajun"];
let chosenTransport = ["plane", "train", "car", "taxicab"];
let chosenEntertainment = ["movie", "music", "dance", "sport", "boating", "skydiving"];

// Randomly selected trip details
let randomDestination = getTripItem(chosenDestinations);
let randomRestaurant = getTripItem(chosenRestaurants);
let randomTransportMode = getTripItem(chosenTransportModes);
let randomEntertainment = getTripItem(chosenEntertainment);


// select a trip item for user
function getTripItem(tripItemArray){

    // generate random trip item
    let chosenTripItem = tripItemArray[Math.floor(Math.random() * tripItemArray.length)];

    // ask if user likes trip item generated
    let tripItemChoice = prompt("Is this trip idea okay?  " + chosenTripItem, "yes or no");

    // if user doesn't like trip item, rerun selection until user does
    while (tripItemChoice !== "yes"){
        chosenTripItem = tripItemArray[Math.floor(Math.random() * tripItemArray.length)];
        tripItemChoice = prompt("Is this trip idea okay?  " + chosenTripItem, "yes or no");
    }

    // send selection back to where called
    return chosenTripItem;
}

// confirmation if user likes trip details they selected
let tripDetailConfirmation = userConfirmationPrompt();

// get user confirmation
function userConfirmationPrompt(){
    let userConfirmation = prompt("Here are your trip details." + 
        "\n" + 
        "Type 'yes' to complete your trip or 'no' to get another trip. " +
        "\n\n" +
        "Destination: " + randomDestination +
        "\n" +
        "Transportation Mode: " + randomTransportMode +
        "\n" +
        "Restaurant: " + randomRestaurant +
        "\n" +
        "Entertainment: " + randomEntertainment, "yes or no");
        
        // console.log(userConfirmation);
        return userConfirmation;
}

// verify user confirmation to determine if trip items need to be regenerated or not
let userFinalAnswer = verifyUserConfirmation(tripDetailConfirmation)

// confirm if user likes trip details they selected
function verifyUserConfirmation(userConfirmation){
    while (userConfirmation !== "yes"){

        // Regenerate the trip selections again
        randomDestination = getTripItem(possibleDestinations);
        randomRestaurant = getTripItem(possibleRestaurants);
        randomTransportMode = getTripItem(possibleTransportModes);
        randomEntertainment = getTripItem(possibleEntertainment);

        // display newly generated trip details in prompt and ask user to confirm
        userConfirmation = prompt("Here are your trip details. Type 'yes' to confirm or 'no' to start over." +
            "\n\n" +
            "Destination: " + randomDestination +
             "\n" +
             "Transportation Mode: " + randomTransportMode +
            "\n" +
            "Restaurant: " + randomRestaurant +
            "\n" +
            "Entertainment: " + randomEntertainment, "yes or no");
    }

    
    // if user confirms trip, redisplay trip details and wish them well on their trip
    if (userConfirmation === "yes"){
        alert("Your trip is complete, enjoy!" +
        "\n\n" +
        "Destination: " + randomDestination +
        "\n" +
        "Transportation Mode: " + randomTransportMode +
        "\n" +
        "Restaurant: " + randomRestaurant +
        "\n" +
        "Entertainment: " + randomEntertainment);
    }
}

// display user trip details to console
let displayUserTripDetails = displayTripDetails(randomDestination, randomRestaurant, randomTransportMode, randomEntertainment);


function displayTripDetails(tripDestination, tripRestaurant, tripTransportation, tripEntertainment){
    // display user confirmed trip details one last time
    console.log("Trip Details" +
        "\n\n" +
        "Destination: " + tripDestination +
        "\n" +
        "Restaurant: " + tripRestaurant +
        "\n" +
        "Transportation Mode: " + tripTransportation +
        "\n" +
        "Entertainment: " + tripEntertainment);
}
