console.log("Welcome to SAU Cafe");

let burgerVotes = 0;
let sandwichVotes = 0;
let coffeeVotes = 0;

const burgerButton = document.getElementById("burgerVote");
const sandwichButton = document.getElementById("sandwichVote");
const coffeeButton = document.getElementById("coffeeVote");

burgerButton.addEventListener("click", function () {

    burgerVotes++;

    document.getElementById("burgerCount").innerHTML =
        "Votes : " + burgerVotes;

});

sandwichButton.addEventListener("click", function () {

    sandwichVotes++;

    document.getElementById("sandwichCount").innerHTML =
        "Votes : " + sandwichVotes;

});

coffeeButton.addEventListener("click", function () {

    coffeeVotes++;

    document.getElementById("coffeeCount").innerHTML =
        "Votes : " + coffeeVotes;

});

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {

    button.addEventListener("mouseover", function () {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseout", function () {

        button.style.transform = "scale(1)";

    });

});

const foods = ["Burger", "Sandwich", "Cold Coffee"];

foods.forEach(function (food) {

    console.log(food);

});

function greetUser(name) {

    return "Hello " + name;

}

console.log(greetUser("Roshan"));