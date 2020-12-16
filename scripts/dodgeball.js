DodgeballApp = {
    container: document.getElementById("court"),
    simulation: undefined,

    init: function () {
       
    },
    createPlayer: function() {
    let playerdiv = document.createElement("div")
    playerdiv.className = "player"
    this.container.append(playerdiv)
    let Player = {
        haveBall = false,
        lives: 3,
        width: 40,
        height: 40,
        element: playerdiv,
        
    }
    },

}

DodgeballApp.init();