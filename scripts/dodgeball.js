DodgeballApp = {
    container: document.getElementById("court"),
    simulation: undefined,

    init: function () {
       
    },
    createPlayer: function() {
    let player1div = document.createElement("div")
    player1div.className = "player1"
    this.container.append(player1div)
    let Player1 = {
        haveBall = false,
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
        haveBall = false,
        lives: 3,
        width: 40,
        height: 40,
        element: player2div,
        x_pos: 960,
        y_pos: 250
    }

    },
    createBall: function() {
    let Ball = {
        radius = 15,
        color: white,
        x_velocity = 0,
        y_velocity = 0
    }
    },
    checkForHit: function() {

    },
}

DodgeballApp.init();