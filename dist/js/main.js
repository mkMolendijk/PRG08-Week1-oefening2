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
    function gameObject(str, x, y) {
        var container = document.getElementById("container");
        this.div = document.createElement(str);
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
    function Car() {
        var _this = _super.call(this, "car", 0, 0) || this;
        _this.speed = 4;
        _this.move();
        return _this;
    }
    Car.prototype.move = function () {
        this.div.style.transform = "translate(200px,220px)";
    };
    return Car;
}(gameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.car = new Car();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.move;
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
    Game.getInstance();
});
var Rock = (function () {
    function Rock(tag, parent) {
        this.speed = 0;
        this.move();
    }
    Rock.prototype.move = function () {
    };
    return Rock;
}());
//# sourceMappingURL=main.js.map