var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wheel = (function () {
    function Wheel() {
        var container = document.getElementById("container");
        var div = document.createElement("wheel");
        container.appendChild(div);
        div.style.transform = "translate(0px, 30px)";
    }
    return Wheel;
}());
var gameObject = (function () {
    function gameObject(str, parent, x, y) {
        this.div = document.createElement(str);
        parent.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.draw();
    }
    gameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return gameObject;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(parent) {
        var _this = _super.call(this, "car", parent, 0, 210) || this;
        _this.speed = 4;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        _this.move();
        return _this;
    }
    Car.prototype.move = function () {
        if (this.braking) {
            this.speed *= 0.9;
        }
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Car.prototype.onKeyDown = function (event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 40:
                this.braking = true;
                break;
        }
    };
    return Car;
}(gameObject));
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock(parent) {
        var _this = _super.call(this, "rock", parent, 0, 355) || this;
        _this.speed = 0;
        _this.move();
        return _this;
    }
    Rock.prototype.move = function () {
        this.div.style.transform = "translate(490px,210px)";
    };
    return Rock;
}(gameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.car = new Car(container);
        this.rock = new Rock(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.move();
        this.rock.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.endGame = function () {
        document.getElementById("score").innerHTML = "Score : 0";
    };
    Game.getInstance = function () {
        if (!Game.GameInstance) {
            Game.GameInstance = new Game();
        }
        return Game.GameInstance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
//# sourceMappingURL=main.js.map