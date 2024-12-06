# DEADPOOL HANGMAN
[Click here to see deployed game](https://lenah92.github.io/deadpool-hangman/)

## Description

> DEADPOOL HAS BEEN CAPTURED!
> Help Dogpool figure out 3 words to save him.
> You can move Dogpool's icon with the  A  S  W  D keys or the arrow keys.
> You have 6 lives with each word. With each life less, Deadpool will lose a body part, but don't worry, Deadpool will grow back!
> TIP: If you get stuck on one you can refresh to another with the "Try Again" button!

Deadpool Hangman takes the beloved game of "hangman" and gives it a cheeky, Deadpool-inspired makeover. In this version, players navigate Dogpool's icon around the game board using either the arrow keys or WASD controls to select letters and guess the hidden word. Get all the letters right, and it's a win! Rack up three consecutive victories to complete the game and bask in your triumph.

## Main Functionalities
- Players guide Dogpool using keyboard controls (W, A, S, D or arrow keys).
- Players have to guess and select all the letters of a word.
- Players win by solving three puzzles.
- Each incorrect guess costs a life.
- Players lose if they run out of lives.
-----------------
## Backlog
- Losing lives are visually represented by Deadpool losing a body part.
- Lives reload every time a new word is played.
- Buttons animated responsiveness to being clicked.
-----------------
### To be added in the future
- Background music.
- Sounds.
- Animations.
- Better backgrounds.
-----------------
## Data structure
class Game
-----
        this.startScreen
        this.mainScreen
        this.playinArea
        this.endingScreen
        this.playinAreaWidth
        this.width
        this.height
        this.life
        this.counter
        this.words
        this.image
        this.player
        this.currentFrame 
        this.endingPicture
        this.endingTitle
        this.endingSubtitle

    startingGame()
    getNewWord ()
    gameLoop()
    getLivesImg()
    didItCollide()
    checkLetter()
    updateLives()
    endGame()

class Player
-----
        this.playinArea
        this.width
        this.height
        this.positionX
        this.positionY
        this.leftSide
        this.element
        this.directionX
        this.directionY
        this.speed

    updatePosition()
    move()
    reposition()


-----------------
## States y States Transitions

1. Start Screen
2. Game Screen
3. Ending Screen
-----------------
## Task
1. Figure out the secret word.
2. Survive three rounds.
-----------------
## Technologies Used
- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- Local Storage
- Image()
-----------------
### Links

- [Slides Link](https://docs.google.com/presentation/d/1Bz_n2eQyNtussheyGcOFF8YFkvlnsQ-XU-qgZXubMcg/edit?usp=sharing)
- [Github repository Link](https://github.com/LenaH92/deadpool-hangman)
- [Deployment Link](https://lenah92.github.io/deadpool-hangman/)
