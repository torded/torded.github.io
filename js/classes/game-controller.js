function GameController(debug) {
    // переменная используется функцией print ; если true то в консоль выводятся комментарии
    this.debug = debug;
    // функция принимает строку и печатает ее в консоль
    this.print = function(str){
        if(this.debug){
            console.log(str);
        }
    };
    // переменная определяет какой цвет играет; если true то очередь белого цвета
    this.stepUsers = true;
    // переменная позволяет определить можно ли бросать кости или нет
    this.stepIsFinished = true;
    // в переменную пишется ширина окна
    this.displayWidth = null;
    // в переменную пишется высота окна
    this.displayHeight = null;
    // в переменной храница игральная доска
    this.desck = null;
    // функция стартует игру
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
    // функция делает переход хода с белых на черных
    this.makeWhiteStep = function(){
        this.stepUsers = false;
        this.print("make white step");
    };
    // функция делает переход хода с черных на белых
    this.makeBlackStep = function () {
        this.stepUsers = true;
        this.print("make black step");
    };
    // функция делает ход
    this.makeUserStep = function () {
        this.desck.dice.getVariants();
        console.log(this.desck.dice.variants);
        if (this.stepUsers) {
            this.makeWhiteStep();
        }
        else {
            this.makeBlackStep();
        }
    };

    this.getPossibleSteps = function (ball) {
        var possibleSteps = [];
        this.print("getPossibleSteps");

        if(this.desck.dice.variants === null){
            alert('pls mix dice');
        }
        else{
            var enabledVariants = [];
            for(var i = 0; i < this.desck.dice.variants.length; i++){
                if(this.desck.dice.variants[i].enable){
                    enabledVariants.push(this.desck.dice.variants[i]);
                }
            }
            var tempWays = null;
            if(ball.color === 'white') {
                tempWays = this.desck.ways;
            }
            else {
                tempWays = this.desck.blackWays;
            }

            for(var i = 0; i < enabledVariants.length; i++){
                var tempVariants = [];
                var tempSteps = 0;
                for(var k = i; k < enabledVariants.length; k++){
                    tempVariants.push(enabledVariants[k]);
                    tempSteps += enabledVariants[k].variant_step;
                }
                possibleSteps.push({
                    way: tempWays[ball.way.id + tempSteps],
                    variants: tempVariants
                });
            }
            /*if(this.desck.dice.variants.length === 2){
                var firstStepWay = tempWays[ball.way.id + this.desck.dice.dice1];
                if(firstStepWay.getPossibilityForStep(ball) && this.desck.dice.variants[0]){
                    possibleSteps.push({
                        way: firstStepWay,
                        variants: [this.desck.dice.variants[0]]
                    });
                }
                var secondStepWay = tempWays[ball.way.id + this.desck.dice.dice2];
                if(secondStepWay.getPossibilityForStep(ball) && this.desck.dice.variants[1]){
                    possibleSteps.push({
                        way: secondStepWay,
                        variants: [this.desck.dice.variants[1]]
                    });
                }
                var thirdStepWay = tempWays[ball.way.id + this.desck.dice.dice1 + this.desck.dice.dice2]
                if(thirdStepWay.getPossibilityForStep(ball) && this.desck.dice.variants[0] && this.desck.dice.variants[1]){
                    possibleSteps.push({
                        way: thirdStepWay,
                        variants: [this.desck.dice.variants[0], this.desck.dice.variants[1]]
                    });
                }
            }
            else{
                for(var i=0;i<)
                var firstStepWay = tempWays[ball.way.id + this.desck.dice.dice1];
                if(firstStepWay.getPossibilityForStep(ball) && this.desck.dice.variants[0]){
                    possibleSteps.push({
                        way: firstStepWay,
                        variants: [this.desck.dice.variants[0]]
                    });
                }
                var secondStepWay = tempWays[ball.way.id + 2*this.desck.dice.dice1];
                if(secondStepWay.getPossibilityForStep(ball) && this.desck.dice.variants[0] && this.desck.dice.variants[1]){
                    possibleSteps.push({
                        way: secondStepWay,
                        variants: [
                            this.desck.dice.variants[0],
                            this.desck.dice.variants[1]
                        ]
                    });
                }
                var thirdStepWay = tempWays[ball.way.id + 3*this.desck.dice.dice1];
                if(thirdStepWay.getPossibilityForStep(ball) && this.desck.dice.variants[0] && this.desck.dice.variants[1] && this.desck.dice.variants[2]){
                    possibleSteps.push({
                        way: thirdStepWay,
                        variants: [
                            this.desck.dice.variants[0],
                            this.desck.dice.variants[1],
                            this.desck.dice.variants[2]
                        ]
                    });
                }
                var forthStepWay = tempWays[ball.way.id + 4*this.desck.dice.dice1];
                if(forthStepWay.getPossibilityForStep(ball) && this.desck.dice.variants[0] && this.desck.dice.variants[1] && this.desck.dice.variants[2] && this.desck.dice.variants[3]){
                    possibleSteps.push({
                        way: forthStepWay,
                        variant: [
                            this.desck.dice.variants[0],
                            this.desck.dice.variants[1],
                            this.desck.dice.variants[2],
                            this.desck.dice.variants[3]
                        ]
                    });
                }


            }*/
        }
        ball.possibleSteps = possibleSteps;
        possibleSteps = null;
        for(var i = 0; i < ball.possibleSteps.length; i++){
            console.log(ball.possibleSteps[i]);
        }
    };
    this.renderPossibleSteps = function(ball){
       if(ball.possibleSteps.length > 0){
           for(var i = 0; i < ball.possibleSteps.length;i++){
               ball.possibleSteps[i].way.renderHelpPoint(ball);
           }
       }
    };
}