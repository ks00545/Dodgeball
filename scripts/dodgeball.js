DodgeballApp = {
    container: document.getElementById("court"),
    simulation: undefined,
    balls: [],

    init: function () {
       

        this.createPlayer();
        this.createBalls();
        this.renderGame();
        this.startGame();
        
        window.onkeydown = function(event){
            DodgeballApp.keyPress(event);
        }


    },
    createPlayer: function() {
    let player1div = document.createElement("div")
    player1div.className = "player1"
    this.container.append(player1div)
    let Player1 = {
        haveBall: false,
        lives: 3,
        width: 40,
        height: 40,
        element: player1div,
        x_pos: 40,
        y_pos: 250
        }
    let player2div = document.createElement("div")
    player2div.className = "player2"
    this.container.append(player2div)
    let Player2 = {
        haveBall: false,
        lives: 3,
        width: 40,
        height: 40,
        element: player2div,
        x_pos: 960,
        y_pos: 250
        }

    },

    createBalls: function () {
        for (let i = 0; i < 4; i++) {
            this.balls.push(this.createBall());
        }
    },

    createBall: function () {
        let balldiv = document.createElement("div")
        balldiv.className = "ball"
        this.container.append(balldiv)
        let ball = {
            element: balldiv,
            radius: 15,
            color: "white",
            x_velocity: 0,
            y_velocity: 0
        }
        return ball;
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


    checkForHit: function() {

    },

    startGame: function() {
        this.simulation = window.setInterval(this.playGame.bind(DodgeballApp), 30);
    },

    playGame: function() {
        moveBall();
        bounceBall();
        checkForHit();
        renderGame();
    },

    renderGame: function() {
        
    },
}

DodgeballApp.init();