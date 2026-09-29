// IC10 - COSC2328 - Professor McCurry
// Implemented by: Amelia Jaimes Alcauter

// variables & concatenation

const city = "Tokyo";
const country = "Japan";
let population = 1200000;

console.log("Location: " + city + ", " + country);
console.log("Population: " + population);

// if statements

if (population > 1000000) {
    console.log(city + " is a metropolis!");
} else {
    console.log(city + " is a growing city.");
}

// boolean statement

let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome back!") 
} else {
    console.log("Please log in.");
}

// truthy and falsy

let username = "deez";
if (username) {
    console.log("Username accepted: " + username);
} else {
    console.log("Username is required. >:( ");
}

// combined logic 

const hasAccount = true;
const isEmailVerified = false;
const agreedToTerms = true;

if ((hasAccount && agreedToTerms) || isEmailVerified) {
    console.log("Registration allowed.") 
} else {
    console.log("Registration blocked.");
}

// stretch 

let itemCount = 5;
let hasItem = true;

if ((hasItem && itemCount)) {
    console.log("Cart has " + itemCount + " items!" )
} else {
    console.log("Cart is empty.");
}