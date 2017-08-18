function Dice(){
    this.game = null;
    this.width = null;
    this.width = null;
    this.positionX = null;
    this.positionY = null;
    this.el = null;
    this.square = null;
    this.dice1 = null;
    this.dice2 = null;
    this.render = function(desck){
        this.game = desck.game;
        this.width = desck.width/2;
        this.height = desck.width/2;
        this.positionX = desck.left + ((desck.width - this.width)/2);
        this.positionY = desck.top + ((desck.width - this.height)/2);
        this.el = document.createElement("div");
        this.el.style.width = this.width.toString() + "px";
        this.el.style.height = this.height.toString() + "px";
        this.el.style.top = this.positionY.toString() + "px";
        this.el.style.left = this.positionX.toString() + "px";
        this.el.style.position = "fixed";
        this.el.style.backgroundColor = "white";
        this.el.addEventListener("click", this.brosokClick.bind(this));
        var x = document.getElementsByClassName("desck")[0];
        x.appendChild(this.el);

    };
    this.rerender = function (desck) {
        this.width = desck.width/2;
        this.height = desck.width/2;
        this.positionX = desck.left + ((desck.width - this.width)/2);
        this.positionY = desck.top + ((desck.width - this.height)/2);
        this.el.style.width = this.width.toString() + "px";
        this.el.style.height = this.height.toString() + "px";
        this.el.style.top = this.positionY.toString() + "px";
        this.el.style.left = this.positionX.toString() + "px";
    };
    this.brosokClick = function () {
        if(this.game.stepIsFinished){
            this.game.stepIsFinished = false;
            var x = Math.floor((Math.random() * 6) + 1);
            this.dice1 = x;
            document.getElementById("first").value = x;
            var y = Math.floor((Math.random() * 6) + 1);
            this.dice2 = y;
            document.getElementById("second").value = y;
            game.makeUserStep();
        }

    }
}
