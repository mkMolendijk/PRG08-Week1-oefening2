/// <reference path="car.ts"/>

class Game {

    private static GameInstance: Game;
    private car : Car;
    
    constructor() {
        this.car = new Car();
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        requestAnimationFrame(() => this.gameLoop());
    }

    public endGame(){
        document.getElementById("score").innerHTML = "Score : 0";
    }
    
    public static getInstance() {
        if (! Game.GameInstance) {
            Game.GameInstance = new Game();
        }
        return Game.GameInstance;
    }
} 
// load
window.addEventListener("load", function() {
    Game.getInstance();
});