function Ball(optiions) {
    this.possibleSteps = null;
    this.game = null;
    this.el = document.createElement("div");
    this.way = null;
    this.radius = null;
    this.color = optiions.color;
    this.id = optiions.id;
    this.positionX = null;
    this.positionY = null;
    this.makePass = function (way) {
        delete this.way.balls[this.way.balls.length - 1];
        way.balls.push(this);
        this.way = way;
        for(var i = 0; i < this.game.desck.ways.length; i++){
            if(this.game.desck.ways[i].helpBall !== null){
                this.game.desck.ways[i].helpBall.el.remove();
                this.game.desck.ways[i].helpBall = null;
            }
        }
        this.rerender(way);
        for(var i = 0; i < this.possibleSteps.length; i++){
            if(this.possibleSteps[i].way === way){
                for(var k = 0; k < this.possibleSteps[i].variants.length; k++){
                    this.possibleSteps[i].variants[k].enable = false;
                }
            }
        }

    };
    this.render = function (way) {
        this.game = way.game;
        this.way = way;
        this.radius = way.width * 0.4;
        this.el.style.width = (this.radius * 2).toString() + "px";
        this.el.style.height = (this.radius * 2).toString() + "px";
        this.el.style.border = "1px solid black";
        this.el.style.borderRadius = this.radius + "px";
        this.el.style.position = "fixed";
        this.el.style.backgroundColor = this.color;
        way.getCoordinates(this);
        this.el.style.top = this.positionY + "px";
        this.el.style.left = this.positionX + "px";
        this.el.setAttribute("data-ballId", this.id);
        this.el.addEventListener("click", this.ballClick.bind(this));
        var x = document.getElementsByClassName("desck")[0];
        x.appendChild(this.el);
    };
    this.rerender = function (way) {
        this.radius = way.width * 0.4;
        this.el.style.width = (this.radius * 2).toString() + "px";
        this.el.style.height = (this.radius * 2).toString() + "px";
        this.el.style.borderRadius = this.radius + "px";
        way.getCoordinates(this);
        this.el.style.left = this.positionX.toString() + "px";
        this.el.style.top = this.positionY.toString() + "px";

    };
    this.ballClick = function () {
        if(this.id === this.way.balls[this.way.balls.length - 1].id){
            var colorStep;
            if(this.color === "white"){
                colorStep = true;
            }
            else{
                colorStep = false;
            }
            if(this.game.stepUsers = colorStep){
                console.log(this);
                this.game.getPossibleSteps(this);
                this.game.renderPossibleSteps(this);
            }

        }

    };

}