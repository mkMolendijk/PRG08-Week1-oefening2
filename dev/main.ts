/// <reference path="car.ts"/>
/// <reference path="rock.ts"/>

class Game {

    private static GameInstance: Game;
    private car : Car;
    private rock: Rock;
    
    constructor() {
        let container:HTMLElement = document.getElementById("container");

        this.car = new Car(container);
        this.rock = new Rock(container);
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.move();
        this.rock.move();

        if(this.car.x + this.car.width >= this.rock.x){
            console.log("Biem");
            this.rock.setSpeed(5);
        }


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