function Way(options) {
    this.game = null;
    this.el = document.createElement("div");
    this.id = options.id;
    this.isUp = options.isUp;
    this.balls = [];
    this.helpBall = null;
    this.width = null;
    this.height = null;
    this.whiteWay = options.whiteWay;
    this.balckWay = options.balckWay;
    this.positionX = options.positionX;
    this.positionY = options.positionY;
    this.checkToPass = function (ball) {
        return true;
    };
    this.getCoordinatesForHelpBall = function(helpBall){
        if(this.balls.length === 0){
            helpBall.positionX = this.positionX + (this.width / 2) - helpBall.radius;
            if (this.isUp) {
                helpBall.positionY = this.positionY + (this.width / 2) - helpBall.radius;
            }
            else {
                helpBall.positionY = this.positionY + this.height - (this.width / 2) - helpBall.radius;
            }
        }
        else{
            helpBall.positionX = this.positionX + (this.width / 2) - helpBall.radius;
            if (this.isUp) {
                helpBall.positionY = this.positionY + (this.width / 2) - helpBall.radius + this.balls[0].radius * this.balls.length;
            }
            else {
                helpBall.positionY = this.positionY + this.height - (this.width / 2) - ball.radius - this.balls[0].radius * this.balls.length;
            }
        }

    };
    this.getCoordinates = function (ball) {
        var include = false;
        var index = null;
        for (var i = 0; i < this.balls.length; i++) {
            var opana = this.balls[i];
            if (opana.id === ball.id) {
                include = true;
                index = i;
            }
        }
        if (include) {
            ball.positionX = this.positionX + (this.width / 2) - ball.radius;
            if (this.isUp) {
                ball.positionY = this.positionY + (this.width / 2) + index * ball.radius * 2 - ball.radius;
            }
            else {
                ball.positionY = this.positionY + this.height - (this.width / 2) - index * ball.radius * 2 - ball.radius;
            }
        }
        else {
            ball.positionX = this.positionX + (this.width / 2);
            if (this.isUp) {
                ball.positionY = this.positionY + (this.width / 2) + this.balls.length * ball.radius * 2;
            }
            else {
                ball.positionY = this.positionY + this.height - (this.width / 2) - this.balls.length * ball.radius * 2;
            }
        }
    };
    this.addBall = function (ball) {
        if (this.balls.length > 0) {
            var lastIndex = this.balls.length
            this.balls[lastIndex] = ball;
        }
        else {
            this.balls[0] = ball;
        }

    };
    this.render = function (desck) {
        this.game = desck.game;
        this.width = desck.width / 12;
        this.height = desck.width / 2;
        if (this.id < 12) {
            this.positionX = desck.left + this.id * this.width;
            this.positionY = desck.top + this.height;
        }
        else {
            this.positionX = desck.left + desck.width - ((this.id - 12) * this.width) - this.width;
            this.positionY = desck.top;
        }
        this.el.style.width = this.width.toString() + "px";
        this.el.style.height = this.height.toString() + "px";
        this.el.style.top = this.positionY.toString() + "px";
        this.el.style.left = this.positionX.toString() + "px";
        this.el.style.backgroundColor = "red";
        this.el.style.position = "fixed";
        var x = document.getElementsByClassName("desck")[0];
        x.appendChild(this.el);
    };
    this.rerender = function (desck) {
        this.width = desck.width / 12;
        this.height = desck.width / 2;
        if (this.id < 12) {
            this.positionX = desck.left + this.id * this.width;
            this.positionY = desck.top + this.height;
        }
        else {
            this.positionX = desck.left + desck.width - ((this.id - 12) * this.width) - this.width;
            this.positionY = desck.top;
        }
        this.el.style.width = this.width.toString() + "px";
        this.el.style.height = this.height.toString() + "px";
        this.el.style.top = this.positionY.toString() + "px";
        this.el.style.left = this.positionX.toString() + "px";
        this.el.style.backgroundColor = "red";
        this.el.style.position = "fixed";
        for (var i = 0; i < this.balls.length; i++) {
            this.balls[i].rerender(this);
        }
        if(this.helpBall !== null){
            this.helpBall.rerender(this);
        }

    };
    this.getPossibilityForStep = function(ball) {
        if(this.balls.length === 0){
            return true;
        }
        else{
            var tempColor = this.balls[this.balls.length - 1].color;
            if(ball.color === tempColor){
                return true;
            }
            else{
                return false;
            }
        }
    };
    this.renderHelpPoint = function(ball){
      var helpPoint = new helpBall();
      helpPoint.render(this, ball);
      this.helpBall = helpPoint;
    };
}