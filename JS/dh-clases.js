class Game {
    constructor(){
        this.startScreen = document.getElementById("StartingScreen");
        this.mainScreen = document.getElementById("mainGame");
        this.playinArea = document.getElementById("playinArea");
        this.endingScreen = document.getElementById("endingScreen");
        this.playinAreaWidth = "800px"
        this.width = "100vw";
        this.height = "100vh";
        this.life = 0;
        this.counter = 0;
        this.words = ["ryan", "reynolds", "marvel", "movie", "vanessa", "action", "mask", "mercenary", "hero", "deadpool", "dogpool", "wade", "dog", "wolverine", "katana", "mutant", "superpower"];
        this.image = document.createElement("img");
        this.player;
        this.currentFrame = 0; //to keep track of the frames

        this.endingPicture = document.createElement("img");
        this.endingTitle = document.getElementById("endingTitle");
        this.endingSubtitle = document.getElementById("endingSubtitle");

        const imgDiv = document.getElementById("hangmanImg");
        imgDiv.appendChild(this.image);

        const endImgDiv = document.getElementById("endingPicture");
        endImgDiv.appendChild(this.endingPicture);

    }

    startingGame(){
        this.startScreen.style.display = "none"; //changing the screens
        this.mainScreen.style.display = "flex";

        this.mainScreen.style.width = this.width;
        this.mainScreen.style.height = this.height;
        console.log("starting new game")

        this.player = new Player(this.playinArea);

        let counterText = document.getElementById("counter");
        counterText.innerHTML =`counter: ${this.counter}`;
        
        this.getNewWord(); // strting a new word to find

        this.gameLoop(); // calling the method so the game actually can move

    }

    getNewWord (){
        const newWordIndex = Math.floor(Math.random() * this.words.length); //get the rendom index of the Array
        let newWord = this.words[newWordIndex].toUpperCase(); //this is selecting the word of the array

        const newWordContainer = document.getElementById("misteriousWord");
        newWordContainer.innerText = ""; //emptying the container just in case

        this.life = 6; //restarting the life counter
        let lifeText = document.getElementById("lifes");
        lifeText.innerText = `Lifes: ${this.life}`;
        this.getLivesImg(); //method to change the img depending on the number of lives

        //unselecting the words from playing area
        const allLetterDivs = document.querySelectorAll(".letterButton"); // Todas las letras
        allLetterDivs.forEach((currentDiv) => {
            if (currentDiv.classList.contains("selected")){
                currentDiv.classList.remove("selected");
            }
        })

        //make the divs and Assigning them the letters
        for (const letter of newWord) { //running through the letters of the word
            
            let letterDiv = document.createElement("div"); //creating a div so the border shows when hiding the letter
            let letterP = document.createElement ("p");
            
            letterP.innerText = letter;
            letterP.style.visibility = "hidden"; //hide the letter
            
            letterP.style.paddingBottom = "3px"
            letterDiv.style.borderBottom = "solid 3px black";

            newWordContainer.appendChild(letterDiv);
            letterDiv.appendChild(letterP);
        }
        
    }

    gameLoop() {
        this.intervalId =setInterval(() => {
            this.currentFrame += 1;

            this.player.move();
            this.didItCollide();

        }, 1000 /60) //interval set to 60fps
    }

    getLivesImg() {


        switch (this.life) {
            case 6:
                this.image.src = "img/life-stages/6-lifes.png";
                this.image.alt = "Hanging Deadpool with 6 lives";
                console.log("6 lives left")
                break;

            case 5:
                this.image.src = "img/life-stages/5-lifes.png";
                this.image.alt = "Hanging Deadpool with 5 lives";
                console.log("5 lives left")
                break;

            case 4:
                this.image.src = "img/life-stages/4-lifes.png";
                this.image.alt = "Hanging Deadpool with 4 lives";
                console.log("4 lives left")
                break;

            case 3:
                this.image.src = "img/life-stages/3-lifes.png";
                this.image.alt = "Hanging Deadpool with 3 lives";
                console.log("3 lives left")
                break;

            case 2:
                this.image.src = "img/life-stages/2-lifes.png";
                this.image.alt = "Hanging Deadpool with 2 lives";
                console.log("2 lives left")
                break;

            case 1:
                this.image.src = "img/life-stages/1-life.png";
                this.image.alt = "Hanging Deadpool with 1 life";
                console.log("1 life left")
                break;
        }

        
    } 

    didItCollide(){
        const allLetterDivs = document.querySelectorAll(".letterButton"); // Todas las letras
        const playerRect = this.player.element.getBoundingClientRect(); // Jugador

        allLetterDivs.forEach((currentDiv) => {
            const divRect = currentDiv.getBoundingClientRect(); // Cada letra

            // Verificar si los rectángulos del jugador y el div de la letra se solapan
            if (
                playerRect.left < divRect.right &&
                playerRect.right > divRect.left &&
                playerRect.top < divRect.bottom &&
                playerRect.bottom > divRect.top
            ) {
                currentDiv.classList.add("selected"); //put grey the letter
                const selectedLetter = currentDiv.innerText.trim(); // Letra tocada
                console.log(selectedLetter);
                this.checkLetter(selectedLetter, currentDiv); // Verificar si está en la palabra
            }
        });
    }

    checkLetter(letter, div){
        const wordLetters = document.querySelectorAll("#misteriousWord p"); //select all the letters of the misterious word
        let foundLetter = false;

        wordLetters.forEach((currentLetter) => {
            if (currentLetter.innerHTML === letter) {
                currentLetter.style.visibility = "visible";
                foundLetter = true;
                console.log(`letter found!!`);
            } 
        });

         if (!foundLetter && !div.classList.contains("checked")) {
            this.life -= 1;
            this.updateLives();
            div.classList.add("checked"); // marca la letra como procesada para evitar más reducciones
        } 

        //checking if all the letter are visible
        const allRevealed = Array.from(wordLetters).every(
            (currentLetter) => currentLetter.style.visibility === "visible"); //this returns a boolean!

        
    
        if (allRevealed) {
            this.counter += 1;
            let counterText = document.getElementById("counter");
            counterText.innerHTML =`counter: ${this.counter}`; //should I keep thishere?
            if (this.counter >= 3) {
                this.endGame("win");
            }
            this.player.reposition();
            this.getNewWord();

        }

    }

    updateLives() {
        const lifeText = document.getElementById("lifes");
        lifeText.innerText = `Lifes: ${this.life}`;

        this.getLivesImg(); // Cambiar imagen del ahorcado según vidas restantes

        if (this.life <= 0) {
            console.log("¡Game Over!");
            clearInterval(this.intervalId);
            this.endGame("lose");
        }
    }

    endGame(condition){

        //changing screens
        this.mainScreen.style.display = "none";
        this.endingScreen.style.display = "flex";
        console.log("end Screen is here")

        this.endingPicture.style.maxWidth = "50vw"
        

        //setting the different screens depending on win or lose

        if (condition === "lose"){

            this.endingPicture.src = "img/endingSCRimg/sadDoggo.png";
            this.endingPicture.alt = "Dogpool is sad";

            
            this.endingTitle.innerText = "You lost";
            this.endingSubtitle.innerText = "and now Dogpool is sad"

        } else if (condition === "win"){
            this.endingPicture.src = "img/endingSCRimg/happyDoggo.jpeg";
            this.endingPicture.alt = "Dogpool and Deadpool are happily reunited";

            
            this.endingTitle.innerText = "Congrats!";
            this.endingSubtitle.innerHTML = "You did great!<br>Dogpool and Deadpool are happily reunited!"
        }
        
    }

}

class Player {

    constructor(playinArea){
        this.playinArea = playinArea;
        this.width = 60;
        this.height= 57;
        this.positionX = playinArea.offsetWidth - this.width - 30;
        this.positionY = playinArea.clientHeight - this.height - 30;
        console.log(playinArea)
        this.leftSide= document.getElementById("leftside");

        this.element = document.createElement("img"); //getting the img
        this.element.src ="img/doggoIcon.png";

        // positioning 
        this.element.alt ="Player icon";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
        
        this.playinArea.appendChild(this.element);

        // moving
        this.directionX = 0
        this.directionY = 0
        this.speed = 5
    }

    updatePosition(){

        //horizontally
        this.positionX += this.speed * this.directionX;


        if (this.positionX < this.leftSide.offsetWidth) {
              this.positionX = this.leftSide.offsetWidth; // left
        }
        
        if (this.positionX > this.leftSide.offsetWidth + this.playinArea.offsetWidth - this.width) {
              this.positionX = this.leftSide.offsetWidth + this.playinArea.offsetWidth - this.width; // right
        }

        //vertically
        this.positionY += this.speed * this.directionY;

        if (this.positionY < 0) {
            this.positionY = 0; // superior
        }

        if (this.positionY > this.playinArea.offsetHeight - this.height) {
            this.positionY = this.playinArea.offsetHeight - this.height; // inferior
        }
    }

    move(){
        this.updatePosition();
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
    }

    reposition(){
        this.positionX = playinArea.offsetWidth - this.width - 30;
        this.positionY = playinArea.clientHeight - this.height -30;

        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
    }

}
