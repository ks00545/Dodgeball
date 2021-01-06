DodgeballApp = {
    container: document.getElementById("court"),
    simulation: undefined,
    balls: [],
    player1: undefined,
    player2: undefined,

    init: function () {


        this.createPlayers();
        this.createBalls();
        this.renderGame();
        this.startGame();

        window.onkeypress = function (event) {
            DodgeballApp.keyPress(event);
        }


    },
    createPlayers: function () {
        let player1div = document.createElement("div")
        player1div.className = "player"
        this.container.append(player1div)
        player1 = {
            color: "blue",
            haveBall: false,
            lives: 3,
            width: 40,
            height: 40,
            element: player1div,
            x_pos: 40,
            y_pos: 250,
        }
        let player2div = document.createElement("div")
        player2div.className = "player"
        this.container.append(player2div)
        player2 = {
            color: "red",
            haveBall: false,
            lives: 3,
            width: 40,
            height: 40,
            element: player2div,
            x_pos: 920,
            y_pos: 250,
        }


    },

    createBalls: function () {
        for (let i = 0; i < 4; i++) {
            this.balls.push(this.createBall());
        }
        this.balls[1].y_pos = 470;
        this.balls[2].x_pos = 970;
        this.balls[3].y_pos = 470;
        this.balls[3].x_pos = 970;
    },

    createBall: function () {
        let balldiv = document.createElement("div")
        balldiv.className = "ball"
        this.container.append(balldiv)
        let ball = {
            element: balldiv,
            radius: 15,
            color: "black",
            x_velocity: 0,
            y_velocity: 0,
            x_pos: 0,
            y_pos: 0,
        }
        return ball;
    },


    keyPress: function (event) {
        switch (event.keyCode) {
            case 87:    // W
                console.log("W pressed");
                break;
            case 65:    // A
                console.log("A pressed");
                break;
            case 83:    // S
                console.log("S pressed");
                break;
            case 68:    // D
                console.log("D pressed");
                break;
            default:
                console.log("Not a valid key");
        }
    },

    movePlayers: function (event) {
        /*if (event.keyCode == 87) {
            DodgeballApp.Player1.x_pos = DodgeballApp.Player1.x_pos + 1;
            console.log("ok");
        }
          else if(event.keyCode == 65){
            SketchApp.color = 'red';
          }
          else if(event.keyCode == 83){
            SketchApp.color = 'green';
          }
          else if(event.keyCode == 68){
            SketchApp.color = 'blue';
          }*/
    },

    moveBall: function() {
        
    },

    bounceBall: function() {
        
    },

    checkForHit: function () {

    },

    startGame: function () {
        this.simulation = window.setInterval(this.playGame.bind(DodgeballApp), 30);
    },

    playGame: function () {
        this.moveBall();
        this.bounceBall();
        this.checkForHit();
        this.renderGame();
    },

    

    renderGame: function () {
        this.renderPlayers();
        this.renderBalls();   
    },

    renderPlayers: function() {
        player1.element.style.top = player1.y_pos + "px";
        player1.element.style.left = player1.x_pos + "px";
        player1.element.style.backgroundColor = player1.color;

        player2.element.style.top = player2.y_pos + "px";
        player2.element.style.left = player2.x_pos + "px";
        player2.element.style.backgroundColor = player2.color;
    },

    renderBalls: function() {
        for(let i = 0; i < 4; i++) {
            this.balls[i].element.style.top = this.balls[i].y_pos + "px";
            this.balls[i].element.style.left = this.balls[i].x_pos + "px";
            this.balls[i].element.style.backgroundColor = this.balls[i].color;
        }
    },
}

DodgeballApp.init();