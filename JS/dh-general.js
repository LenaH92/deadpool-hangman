//Start Screen

//Showing toast

const instructionsBTN = document.getElementById("instructionsBTN");

instructionsBTN.addEventListener("click", () => {
    console.log("toast called!");
    showToast(); //function in methods.js
})

//Closing toast

const closeToastBTN = document.getElementById("closeBTN");

closeToastBTN.addEventListener("click", () => closeToast()); //function in methods.js

//stating game so it goes to the whole scope

let game;

// Changing to the main screen 

const startBTN = document.getElementById("startGametBTN");

startBTN.addEventListener("click", () => {
    console.log("changing screens");
    startGame()}); //function in methods.js

