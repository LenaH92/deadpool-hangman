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
    startGame()
}); //function in methods.js

// Start over a word

const retryBTN = document.querySelector("#box button");
retryBTN.addEventListener("click", () => game.getNewWord ())

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
