//Showing toast

function showToast() {
    const toast = document.getElementById("toastContainer");
    toast.classList.add("show")
};

//Closing toast

function closeToast() {
    const toast = document.getElementById("toastContainer");
    toast.classList.remove("show")
};

// Changing to the main screen 

function startGame() {
    game = new Game(); //reaches the class in classes.js
    game.startingGame();
    console.log("start game?");
}

