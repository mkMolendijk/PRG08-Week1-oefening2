/// <reference path="car.ts"/>

class Game {

    private static GameInstance: Game;
    private car : Car;
    
    constructor() {
        let container:HTMLElement = document.getElementById("container");

        this.car = new Car(container);
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.move();
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
    let g = Game.getInstance();
});