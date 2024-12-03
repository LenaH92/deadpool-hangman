class Game {
    constructor(){
        this.startScreen = document.getElementById("StartingScreen");
        this.mainScreen = document.getElementById("mainGame");
        this.playinArea = document.getElementById("playinArea");
        this.playinAreaWidth = "800px"
        this.width = "100vw";
        this.height = "100vh";
        this.life = 0;
        this.counter = 0;
        this.words = ["ryan", "reynolds", "marvel", "movie", "vanessa", "action", "mask", "mercenary", "hero", "deadpool", "dogpool", "wade", "dog", "wolverine", "katana", "mutant", "superpower"];
        this.image = "";
        this.player;
        this.currentFrame = 0; //to keep track of the frames
    }

    startingGame(){
        this.startScreen.style.display = "none"; //changing the screens
        this.mainScreen.style.display = "flex";

        this.mainScreen.style.width = this.width;
        //this.playinArea.style.width = this.playinAreaWidth;
        this.mainScreen.style.height = this.height;
        console.log("starting new game")

        this.player = new Player(this.playinArea);

        this.life = 6; //restarting the life counter
        let lifeText = document.getElementById("lifes");
        lifeText.innerText = `Lifes: ${this.life}`; 

        const imgDiv = document.getElementById("hangmanImg"); //getting the div where  the img should be nested
        
        const fullLivesImg = document.createElement("img"); //nesting the img and 
        fullLivesImg.src = "./img/life-stages/6-lifes.png";
        fullLivesImg.alt = "Hanging Deadpool with 6 lives";
        imgDiv.appendChild(fullLivesImg);
        this.image = fullLivesImg;

        this.getNewWord(); // strting a new word to find

        
        this.gameLoop(); // calling the method so the game actually can move

    }

    getNewWord (){
        const newWordIndex = Math.floor(Math.random() * this.words.length); //get the rendom index of the Array
        let newWord = this.words[newWordIndex].toUpperCase(); //this is selecting the word of the array

        const newWordContainer = document.getElementById("misteriousWord");
        newWordContainer.innerText = ""; //emptying the container jut in case

        //make the divs and Assigning them the letters
        for (const letter of newWord) { //running through the letters of the word
            
            let letterDiv = document.createElement("div"); //creating a div so the border shows when hiding the letter
            let letterP = document.createElement ("p");
            
            letterP.innerText = letter;
            letterP.style.visibility = "hidden"; //how can I hide the letter and show the border?
            letterP.classList.add(`${letter}`); //added a class of the type of letter it is so it's easier to  link  with the playing area
            letterP.style.paddingBottom = "3px"
            letterDiv.style.borderBottom = "solid 3px black";

            newWordContainer.appendChild(letterDiv);
            letterDiv.appendChild(letterP);
          }
    }

    gameLoop() {
        setInterval(() => {
            this.currentFrame += 1;

            this.player.move();

        }, 1000 /60) //interval set to 60fps
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
        this.element.src ="./img/doggoIcon.png";

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

}

class Obstacle{

}