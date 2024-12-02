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
    const startScreen = document.getElementById("StartingScreen");
    startScreen.style.display = "none";

    const mainScreen = document.getElementById("mainGame");
    mainScreen.style.display = "flex";
}

