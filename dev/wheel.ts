class Wheel {
                        
    constructor() {
        // het DOM element waar de div in geplaatst wordt:
        let container:HTMLElement = document.getElementById("container");

        let div = document.createElement("wheel");
        container.appendChild(div);

        div.style.transform ="translate(0px, 30px)";
    }
}