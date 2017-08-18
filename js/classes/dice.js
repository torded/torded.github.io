// поле кубиков - площадка на которой размещаются кубики а так же функционал
function Dice(){
    // хранит игру
    this.game = null;
    // хранит ширину поля кубиков
    this.width = null;
    // хранит высоту поля кубиков
    this.height = null;
    // позиция слева
    this.positionX = null;
    // позиция сверху
    this.positionY = null;
    // хранит в себе html елемент
    this.el = null;
    // хранит в себе значение первого кубика
    this.dice1 = null;
    // хранит в себе значение второго кубика
    this.dice2 = null;

    this.variants = null;
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

    };
    this.getVariants = function () {
        this.variants = [];
        if(this.dice1 === this.dice2){
            for(var i = 0; i < 4; i++){
                this.variants.push({
                    id: i,
                    variant_step: this.dice1,
                    enable: true
                });
            }
        }
        else{
            this.variants.push({
                id: 0,
                variant_step: this.dice1,
                enable: true
            });
            this.variants.push({
                id: 1,
                variant_step: this.dice2,
                enable: true
            });
        }
    }
}
