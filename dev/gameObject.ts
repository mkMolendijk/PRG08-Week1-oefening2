class gameObject {

    protected div: HTMLElement;
    public x: number;
    public y: number;

    constructor(str: string, x: number, y: number) {
        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement(str);

        this.x = x;
        this.y = y;

        this.draw();

    }

    public draw():void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}