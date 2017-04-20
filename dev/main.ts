/// <reference path="car.ts"/>

class Game {

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
} 


// load
window.addEventListener("load", function() {
    new Game();
});