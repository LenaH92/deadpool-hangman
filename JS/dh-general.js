//Start Screen

//Showing toast

const instructionsBTN = document.getElementById("instructionsBTN");

instructionsBTN.addEventListener("click", () => {
    console.log("toast called!");
    showToast();
})

//Closing toast

const closeToastBTN = document.getElementById("closeBTN");

closeToastBTN.addEventListener("click", () => closeToast());

// Changing to the main screen

const startBTN = document.getElementById("startGametBTN");
startBTN.addEventListener("click", () => {
    console.log("changing screens");
    startGame()});

