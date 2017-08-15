function GameController(debug) {
    this.debug = debug;
    this.print = function(str){
        if(this.debug){
            console.log(str);
        }
    };
    this.stepUsers = true;
    this.stepIsFinished = true;
    this.displayWidth = null;
    this.displayHeight = null;
    this.desck = null;
    this.dice = null;
    this.start = function(){
        this.displayWidth = document.documentElement.clientWidth;
        this.displayHeight = document.documentElement.clientHeight;
        this.print("document width = " + this.displayWidth +
            "; document height = " + this.displayHeight + ";");
        this.desck = new Desck({
            el: document.getElementsByClassName("desck")[0],
            width: 100,
            height: 100,
            back_color: "green",
            ways: this.ways
        });
        this.desck.render(this);

    };
    this.makeWhiteStep = function(){
        this.stepUsers = false;
        this.print("make white step");
    };
    this.makeBlackStep = function () {
        this.stepUsers = true;
        this.print("make black step");
    };
    this.makeUserStep = function () {
        if (this.stepUsers) {
            this.makeWhiteStep();
        }
        else {
            this.makeBlackStep();
        }
    };
    this.getPossibleSteps = function (ball) {
        var possibleSteps = [];



        console.log("getPossibleSteps");
        ball.possibleSteps = possibleSteps;
    }
}