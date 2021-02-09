console.log("Welcome to Snake and Ladder Game ");

class SnakeAndLadder {
    constructor() { }
    main() {
        var player = 1;
        const initialpos = 0;
        this.currentPos = initialpos;
        var winningPosition = 100;
        for(let i=currentPos;i<winningPosition;i++) {
            var dieMove = this.rollDie();
            this.currentPos = this.checkOption(this.currentPos, dieMove);
            console.log("PlayerPosition = " + this.currentPos);
        }
    }
    rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    checkOption(currentPos, dieMove) {
        var NO_PLAY = 0;
        var LADDER = 1;
        var SNAKE = 2;
        this.option = Math.floor(Math.random() * 3);

        switch (this.option) {
            case NO_PLAY:
                currentPos += 0;
                break;
            case LADDER:
                if ((currentPos + dieMove) > 100)
                    currentPos = 1;
                else
                    currentPos = currentPos + dieMove;
                break;

            case SNAKE:
                if ((currentPos - dieMove) <= 0)
                  {
                    currentPos = 0;
                  }
                  else
                   { currentPos = currentPos - dieMove;
                     }
                     break;
        }
        return currentPos;
    }

}
var object = new SnakeLadder();
obj1.main();
