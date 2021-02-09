console.log("Welcome to Snake and Ladder Game ");

class SnakeLadder {
    constructor() { }
    main() {                    //main function
        var player = 1;
        const initialpos = 1;
        var dieMove = this.rollDie();
        var currentPos = initialpos;
        this.checkOption(currentPos,dieMove);
    }
    rollDie() {                             //function 1
        console.log(Math.floor(Math.random() * 6) + 1);
    }
    checkOption(currentPos,dieMove) {        //function 2
        var NO_PLAY = 0;
        var LADDER = 1;
        var SNAKE = 2;
        var option = Math.floor(Math.random() * 3); 
        
        switch (option) {
            case NO_PLAY:
                currentPos += 0;
                break;
            case LADDER:
                currentPos= currentPos+ dieMove;
                break;
            case SNAKE:
                if ((currentPos - dieMove) <= 0)
                    currentPos = 0;
                else
                    currentPos = currentPos - dieMove;
                break;
        }
    }
}
var obj1 = new SnakeLadder();
obj1.main();
