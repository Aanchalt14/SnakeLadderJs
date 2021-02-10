console.log("Welcome to Snake and Ladder Game ");

class SnakeLadder {
    constructor() { }
    main() {
        var player = 1;
        const initialpos = 0;
        this.currentPos = initialpos;
        var winningPosition = 100;
        var NumberoftimesDiceRolled = 0
        for(let i=currentPos;i<winningPosition;i++){
            NumberoftimesDiceRolled++;
            this.currentPos = this.checkOption(this.currentPos, dieMove);
            console.log("PlayerPosition = " + this.currentPos);
        }
        console.log("Player Rolled "+NumberoftimesDiceRolled +"of times to won the game");
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
                    currentPos=currentPos;
                else
                    currentPos = currentPos + dieMove;
                break;

            case SNAKE:
                if ((currentPos- dieMove) <= 0)
                    currentPos = 0;
                else
                    currentPos = currentPos - dieMove;
                break;
        }
        return currentPos;
    }

}
var object = new SnakeLadder();
object.main();
