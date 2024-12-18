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

//THanks toast

const thanksBTN = document.getElementById("thanks");

thanksBTN.addEventListener("click", () => {
    console.log("toast called!");
    showThanksToast(); //function in methods.js
})

//Closing toast

const closeThanksToastBTN = document.getElementById("thanksCloseBTN");

closeThanksToastBTN.addEventListener("click", () => closeThanksToast()); //function in methods.js

//stating game so it goes to the whole scope

let game;

// Changing to the main screen 

const startBTN = document.getElementById("startGametBTN");

startBTN.addEventListener("click", () => {
    console.log("changing screens");
    startGame()
}); //function in methods.js

// Start over a word

const retryBTN = document.querySelector("#box button");
retryBTN.addEventListener("click", () => {
    game.player.reposition();
    game.getNewWord ()})

// Moving the player

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyA" || event.code === "ArrowLeft"){
        console.log("go left");
        game.player.directionX = -1;
    }
    if (event.code === "KeyD" || event.code === "ArrowRight"){
        console.log("go right");
        game.player.directionX = 1
    }
    if (event.code === "KeyW" || event.code === "ArrowUp"){
        console.log("go up");
        game.player.directionY = -1;
    }
    if (event.code === "KeyS" || event.code === "ArrowDown"){
        console.log("go down");
        game.player.directionY = 1;
    }
})

// Stoping the player from moving

document.addEventListener("keyup", (event) => {
    if (event.code === "KeyA" || event.code === "ArrowLeft" || event.code === "KeyD" || event.code === "ArrowRight"){
        game.player.directionX = 0;
    }
   
    if (event.code === "KeyW" || event.code === "ArrowUp" || event.code === "KeyS" || event.code === "ArrowDown"){
        game.player.directionY = 0;
    }
    
})

//Restaring to the first page

const restartBTN = document.getElementById("restartBTN");
restartBTN.addEventListener("click", () => {

    const playinDIVS = document.querySelectorAll("#playinArea div");
    playinDIVS.forEach((currentDiv) => {
        if (currentDiv.classList.contains("checked")) {
            currentDiv.classList.remove("checked");
        }
    });

    game.player.element.remove();
    game.image.remove();
    game.endingPicture.remove();


    const startScreen = document.getElementById("StartingScreen");
    const endScreen = document.getElementById("endingScreen");
    endScreen.style.display = "none";
    startScreen.style.display = "flex";
})


// Changing buttons colors when clicked and hoovered on PENDING


const gameBTNs = document.querySelectorAll("button");
gameBTNs.forEach((currentButton) => {
    currentButton.addEventListener("mousedown", () => {
        currentButton.classList.add("clicked");
    });
    
    currentButton.addEventListener("mouseup", () => {
        currentButton.classList.remove("clicked");
    })
});

