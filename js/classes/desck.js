function Desck(options) {
    this.game = null;
    this.left = null;
    this.top = null;
    this.ways = null;
    this.balls = null;
    this.dice = null;
    this.el = options.el;
    this.width = options.width;
    this.height = options.height;
    this.back_color = options.back_color;
    this.render = function (game) {
        this.game = game;
        this.el.style.backgroundColor = this.back_color;
        var sideSize;
        if (game.displayWidth >= game.displayHeight) {
            sideSize = game.displayHeight;
        }
        else {
            sideSize = game.displayWidth;
        }
        this.width = sideSize * 0.9;
        this.top = (game.displayHeight - this.width) / 2;
        this.left = (game.displayWidth - this.width) / 2;
        this.el.style.width = this.width.toString() + "px";
        this.el.style.height = this.width.toString() + "px";
        this.el.style.top = this.top.toString() + "px";
        this.el.style.left = this.left.toString() + "px";
        this.ways = [];
        for (var i = 0; i < 24; i++) {
            var way;
            if (i < 12) {
                way = new Way({
                    id: i,
                    isUp: false,
                    //width: 50,
                    //height: 40 * 5,
                    whiteWay: i,
                    balckWay: i + 12,
                    //positionX: i * 50,
                    //positionY: 40 * 15
                });
            }
            else {
                way = new Way({
                    id: i,
                    isUp: true,
                    //width: 50,
                    //height: 40 * 5,
                    whiteWay: i,
                    balckWay: i - 12,
                    //positionX: 11 * 50 - ((i - 12) * 50),
                    //positionY: 0
                });
            }
            way.render(this);
            this.ways[i] = way;
        }
        this.balls = [];
        for (var i = 0; i < 30; i++) {
            var ball;
            if (i < 15) {
                ball = new Ball({
                    id: i,
                    color: "white"
                });
                this.ways[0].addBall(ball);
                ball.render(this.ways[0]);
            }
            else {
                ball = new Ball({
                    id: i,
                    color: "black",
                });
                this.ways[12].addBall(ball);
                ball.render(this.ways[12]);
            }
            this.balls[i] = ball;
        }
        this.dice = new Dice();
        this.dice.render(this);

    };
    this.rerender = function () {
        var sideSize;
        if (game.displayWidth >= game.displayHeight) {
            sideSize = game.displayHeight;
        }
        else {
            sideSize = game.displayWidth;
        }
        this.width = sideSize * 0.9;
        this.top = (game.displayHeight - this.width) / 2;
        this.left = (game.displayWidth - this.width) / 2;
        this.el.style.width = this.width.toString() + "px";
        this.el.style.height = this.width.toString() + "px";
        this.el.style.top = this.top.toString() + "px";
        this.el.style.left = this.left.toString() + "px";
        for (var i = 0; i < this.ways.length; i++) {
            this.ways[i].rerender(this);
        }
        this.dice.rerender(this);
    }
}