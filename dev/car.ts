/// <reference path="wheel.ts"/>

class Car {

    private speed:number;
    private div:HTMLElement;
    private braking:boolean;
            
    constructor() {
        // het DOM element waar de div in geplaatst wordt:
        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("car");
        container.appendChild(this.div);

        this.speed = 4;

        // hier een keypress event listener toevoegen. een keypress zorgt dat braking true wordt
        //

        // alvast goed zetten

        this.move();
    }

    public move():void {
        // hier de snelheid verlagen als we aan het afremmen zijn
        //

        // hier kijken of de x waarde hoger is dan de x van de rots (335)
        //

        // de snelheid bij de x waarde optellen
        //
        
        // tekenen
        this.div.style.transform ="translate(200px,220px)";
    } 

    //
    // hier een method maken voor on key press
    //
}