function helpBall() {

    this.game = null;
    this.el = document.createElement("div");
    this.way = null;
    this.ball = null;
    this.radius = null;
    this.positionX = null;
    this.positionY = null;
    this.render = function (way, ball) {
        this.game = way.game;
        this.way = way;
        this.ball = ball;
        this.radius = way.width * 0.4;
        this.el.style.width = (this.radius * 2).toString() + "px";
        this.el.style.height = (this.radius * 2).toString() + "px";
        this.el.style.border = "1px solid yellow";
        this.el.style.borderRadius = this.radius + "px";
        this.el.style.position = "fixed";
        this.el.style.backgroundColor = "rgba(255,255,255, .5";
        way.getCoordinatesForHelpBall(this);
        this.el.style.top = this.positionY + "px";
        this.el.style.left = this.positionX + "px";
        this.el.addEventListener("click", this.helpBallClick.bind(this));
        var x = document.getElementsByClassName("desck")[0];
        x.appendChild(this.el);
    };
    this.rerender = function (way) {
        this.radius = way.width * 0.4;
        this.el.style.width = (this.radius * 2).toString() + "px";
        this.el.style.height = (this.radius * 2).toString() + "px";
        this.el.style.borderRadius = this.radius + "px";
        way.getCoordinatesForHelpBall(this);
        this.el.style.left = this.positionX.toString() + "px";
        this.el.style.top = this.positionY.toString() + "px";

    };
    this.helpBallClick = function () {
        console.log(this);
        this.ball.makePass(this.way);

    };

}