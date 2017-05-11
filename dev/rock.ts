/// <reference path="gameObject.ts"/>

class Rock extends GameObject{

    private speed:number;
                        
    constructor(parent:HTMLElement) {
        super("rock", parent, 490, 210);

        this.speed = 0;
        this.move();
    }

    public move():void {

        // speed optellen zo lang we niet de bodem raken
        // speed wordt hoger dan 0 zodra de auto de rots raakt
        
        //teken de div op de juiste positie
        // this.div.style.transform ="translate(490px,210px)";     
    }
}