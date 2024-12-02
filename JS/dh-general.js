//Start Screen

//Showing toast

function showToast() {
    const toast = document.getElementById("toastContainer");
    toast.classList.add("show")
};

const instructionsBTN = document.getElementById("instructionsBTN");

instructionsBTN.addEventListener("click", () => {
    console.log("toast called!");
    showToast();
})

//Closing toast

function closeToast() {
    const toast = document.getElementById("toastContainer");
    toast.classList.remove("show")
};

const closeToastBTN = document.getElementById("closeBTN");

closeToastBTN.addEventListener("click", () => closeToast());

// Changing to the main screen

function startGame() {
    const startScreen = document.getElementById("StartingScreen");
    startScreen.style.display = "none";

    const mainScreen = document.getElementById("mainGame");
    mainScreen.style.display = "flex";
}

const startBTN = document.getElementById("startGametBTN");
startBTN.addEventListener("click", () => {
    console.log("changing screens");
    startGame()});