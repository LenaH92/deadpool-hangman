class Game {
    constructor(){
        this.startScreen = document.getElementById("StartingScreen");
        this.mainScreen = document.getElementById("mainGame");
        this.width = "100vw";
        this.height = "100vh";
        this.life = 0;
        this.counter = 0;
        this.words = ["hello", "deadpool", "dogpool", "wade", "dog", "wolverine", "katana", "mutant", "superpower"];
        this.image = "";
        //this.image.style.max-width = "200px"
    }

    startingGame(){
        this.startScreen.style.display = "none"; //changing the screens
        this.mainScreen.style.display = "flex";

        this.mainScreen.style.width = this.width;
        this.mainScreen.style.height = this.height;
        console.log("starting new game")

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

    }

    getNewWord (){
        const newWordIndex = Math.floor(Math.random() * this.words.length); //get the rendom index of the Array
        let newWord = this.words[newWordIndex].toUpperCase(); //this is selecting the word of the array

        //make the divs and Assigning them the letters
        for (const letter of newWord) { //running through the letters of the word
            const newWordContainer = document.getElementById("misteriousWord");
            let letterDiv = document.createElement("div"); //creating a div so the border shows when hiding the letter
            let letterP = document.createElement ("p");
            
            letterP.innerText = letter;
            letterP.style.visibility = "hidden"; //how can I hide the letter and show the border?
            letterP.classList.add(`${letter}`); //added a class of the type of letter it is so it's easier to  link  with the playing area

            letterDiv.style.borderBottom = "solid 2px black";

            newWordContainer.appendChild(letterDiv);
            letterDiv.appendChild(letterP);
          }
    }
}