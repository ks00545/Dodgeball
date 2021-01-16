DodgeballApp = {
    //Kailash and Kia
    container: document.getElementById("court"),
    game: undefined, // game timer
    speedUp: undefined, // for ball speed up timer
    balls: [],
    player1: undefined,
    player2: undefined,
    keyPressed: [],
    playerSpeed: 5, // speed in pixels
    ballSpeed: 8,
    bounceSound: undefined,
    hitSound: undefined,
    redPoints: 0,
    bluePoints: 0,
    roundInProgress: false,

    //Kailash and Kia
    init: function () {

        this.playerSpeed = 5;
        this.ballSpeed = 8;
        this.redPoints = 0;
        this.bluePoints = 0;

        this.createPlayers();
        this.createBalls();
        this.createSounds();
        this.renderGame();

        // initializes all the keys unpressed
        for (let i = 0; i <= 87; i++) {
            this.keyPressed[i] = false;
        }

        window.onkeydown = function (event) {
            DodgeballApp.keyDown(event);
        }
        window.onkeyup = function (event) {
            DodgeballApp.keyUp(event);
        }

        let winText = document.getElementById("Message");
        winText.textContent = "Press Space To Begin";
        winText.style.color = "black";

    },
    //Kia
    createPlayers: function () {
        let player1div = document.createElement("div")
        player1div.className = "player"
        this.container.append(player1div)
        player1 = {
            color: "blue",
            width: 40,
            height: 40,
            element: player1div,
            x_pos: 40,
            y_pos: 230,
        }
        let player2div = document.createElement("div")
        player2div.className = "player"
        this.container.append(player2div)
        player2 = {
            color: "red",
            width: 40,
            height: 40,
            element: player2div,
            x_pos: 920,
            y_pos: 230,
        }


    },
    //Kailash and Kia
    createBalls: function () {
        for (let i = 0; i < 4; i++) {
            this.balls.push(this.createBall());
        }
        this.initializeBalls();
    },
    //Kailash and Kia
    createBall: function () {
        let balldiv = document.createElement("div")
        balldiv.className = "ball"
        this.container.append(balldiv)
        let ball = {
            element: balldiv,
            moving: false,
            pickedUpBy: 0,
            width: 40,
            color: "black",
            x_velocity: this.ballSpeed,
            y_velocity: this.ballSpeed,
            x_pos: 0,
            y_pos: 0,
        }
        return ball;
    },
    //Kailash
    initializeBalls: function () {
        this.balls[0].x_pos = 0;
        this.balls[0].y_pos = 0;
        this.balls[1].x_pos = 0;
        this.balls[1].y_pos = 460;
        this.balls[2].x_pos = 960;
        this.balls[2].y_pos = 0;
        this.balls[3].y_pos = 460;
        this.balls[3].x_pos = 960;
        for (i = 0; i < 4; i++) {
            this.balls[i].moving = false;
            this.balls[i].pickedUpBy = 0;
        }
        this.ballSpeed = 5;
    },
    //Kailash and Kia
    initializePlayers: function () {
        player1.x_pos = 40;
        player1.y_pos = 230;
        player2.x_pos = 920;
        player2.y_pos = 230;
    },
    //Kailash
    createSounds: function () {
        bounceSound = new Audio('audio/ballBounceSound.mp3');
        //^Recorded by: Popup Pixels; https://soundbible.com/1626-Ball-Bounce.html
        hitSound = new Audio('audio/hitSound.mp3');
        //^Recorded by: SoundMaster13; https://soundbible.com/1948-Slap.html
    },
    //Kailash
    keyDown: function (event) {
        this.keyPressed[event.keyCode] = true;

        switch (event.keyCode) {
            case 20:    // Caps Lock
                console.log("Caps Lock down");
                this.ballThrow(1, player1);
                break;
            case 13:    // Enter
                console.log("Enter down");
                this.ballThrow(2, player2);
                break;
            case 87:    // W
                console.log("W down");
                break;
            case 65:    // A
                console.log("A down");
                break;
            case 83:    // S
                console.log("S down");
                break;
            case 68:    // D
                console.log("D down");
                break;
            case 37:    // Left arrow
                console.log("Left down");
                break;
            case 38:    // Up arrow
                console.log("Up down");
                break;
            case 39:    // Right arrow
                console.log("Right down");
                break;
            case 40:    // Down arrow
                console.log("Down down");
                break;
            case 32: //Space
                console.log("Space Down");
                if (this.roundInProgress == false) {
                    this.resetRound();
                    let winText = document.getElementById("Message");
                    winText.textContent = "";
                }
                break;
            default:
                console.log("Not a valid key");
        }
    },
    //Kailash
    keyUp: function (event) {
        this.keyPressed[event.keyCode] = false;
    },
    //Kailash
    movePlayers: function () {
        // Move Player 1
        if (this.keyPressed[87] == true) {   // If W, go up
            player1.y_pos = player1.y_pos - this.playerSpeed;
            if (player1.y_pos < 0) {
                player1.y_pos = 0;
            }
        }
        if (this.keyPressed[65] == true) {   // If A, go left
            player1.x_pos = player1.x_pos - this.playerSpeed;
            if (player1.x_pos < 0) {
                player1.x_pos = 0;
            }
        }
        if (this.keyPressed[83] == true) {   // If S, go down
            player1.y_pos = player1.y_pos + this.playerSpeed;
            if (player1.y_pos > 500 - player1.height) {
                player1.y_pos = 500 - player1.height;
            }
        }
        if (this.keyPressed[68] == true) {   // If D, go right
            player1.x_pos = player1.x_pos + this.playerSpeed;
            if (player1.x_pos > 500 - player1.width) {
                player1.x_pos = 500 - player1.width;
            }
        }
        //Move Player 2
        if (this.keyPressed[38] == true) {   // If up arrow, go up
            player2.y_pos = player2.y_pos - this.playerSpeed;
            if (player2.y_pos < 0) {
                player2.y_pos = 0;
            }
        }
        if (this.keyPressed[37] == true) {   // If left arrow, go left
            player2.x_pos = player2.x_pos - this.playerSpeed;
            if (player2.x_pos < 500) {
                player2.x_pos = 500;
            }
        }
        if (this.keyPressed[40] == true) {   // If down arrow, go down
            player2.y_pos = player2.y_pos + this.playerSpeed;
            if (player2.y_pos > 500 - player2.height) {
                player2.y_pos = 500 - player2.height;
            }
        }
        if (this.keyPressed[39] == true) {   // If right arrow, go right
            player2.x_pos = player2.x_pos + this.playerSpeed;
            if (player2.x_pos > 1000 - player2.width) {
                player2.x_pos = 1000 - player2.width;
            }
        }
    },
    //Kailash and Kia
    moveBall: function () {
        for (i = 0; i < 4; i++) {
            if (this.balls[i].moving == true) {
                this.balls[i].x_pos = this.balls[i].x_pos + this.balls[i].x_velocity;
                this.balls[i].y_pos = this.balls[i].y_pos + this.balls[i].y_velocity;
            }
            if (this.balls[i].pickedUpBy == 1) {
                this.balls[i].x_pos = player1.x_pos;
                this.balls[i].y_pos = player1.y_pos;
            }
            if (this.balls[i].pickedUpBy == 2) {
                this.balls[i].x_pos = player2.x_pos;
                this.balls[i].y_pos = player2.y_pos;
            }
        }
    },
    //Kailash
    bounceBall: function () {
        for (i = 0; i < 4; i++) {
            if (this.balls[i].x_pos < 0) {
                this.balls[i].x_velocity = 0;
                this.balls[i].y_velocity = 0;
                this.balls[i].x_pos = 0;
                this.balls[i].moving = false;
            }
            if (this.balls[i].x_pos > 1000 - this.balls[i].width) {
                this.balls[i].x_velocity = 0;
                this.balls[i].y_velocity = 0;
                this.balls[i].x_pos = 1000 - this.balls[i].width;
                this.balls[i].moving = false;
            }
            if (this.balls[i].y_pos < 0) {
                this.balls[i].y_velocity = this.balls[i].y_velocity * -1;
                this.balls[i].y_pos = 0;
                bounceSound.play();
            }
            if (this.balls[i].y_pos > 500 - this.balls[i].width) {
                this.balls[i].y_velocity = this.balls[i].y_velocity * -1;
                this.balls[i].y_pos = 500 - this.balls[i].width;
                bounceSound.play();
            }
        }
    },
    //Kailash
    checkForHit: function () {
        let redWasHit = false;
        let blueWasHit = false;
        for (i = 0; i < 4; i++) {
            if (this.balls[i].moving == true) {
                ballCenterX = this.balls[i].x_pos + this.balls[i].width / 2;
                ballCenterY = this.balls[i].y_pos + this.balls[i].width / 2;
                Player1CenterX = player1.x_pos + player1.width / 2;
                Player1CenterY = player1.y_pos + player1.height / 2;
                Player2CenterX = player2.x_pos + player2.width / 2;
                Player2CenterY = player2.y_pos + player2.height / 2;
                distanceSquaredFromP1 = Math.pow(Player1CenterX - ballCenterX, 2) + Math.pow(Player1CenterY - ballCenterY, 2);
                distanceSquaredFromP2 = Math.pow(Player2CenterX - ballCenterX, 2) + Math.pow(Player2CenterY - ballCenterY, 2);
                if (distanceSquaredFromP1 < Math.pow(this.balls[i].width / 2 + player1.width / 2, 2)) {
                    console.log("Player 1 Hit!");
                    hitSound.play();
                    blueWasHit = true;

                }
                if (distanceSquaredFromP2 < Math.pow(this.balls[i].width / 2 + player2.width / 2, 2)) {
                    console.log("Player 2 Hit!");
                    hitSound.play();
                    redWasHit = true;

                }
            }
        }
        if (redWasHit == true && blueWasHit == true) {
            let winText = document.getElementById("Message");
            winText.textContent = "Tie!";
            winText.style.color = "black";
        }
        else if (redWasHit == true) {
            let winText = document.getElementById("Message");
            winText.textContent = "Blue Wins!";
            winText.style.color = "blue";
            this.bluePoints = this.bluePoints + 1;
            let bluePointsText = document.getElementById("bluePoints");
            bluePointsText.textContent = "Blue: " + this.bluePoints;

        }
        else if (blueWasHit == true) {
            let winText = document.getElementById("Message");
            winText.textContent = "Red Wins!";
            winText.style.color = "red";
            this.redPoints = this.redPoints + 1;
            let redPointsText = document.getElementById("redPoints");
            redPointsText.textContent = "Red: " + this.redPoints;
        }
        if (redWasHit == true || blueWasHit == true) {
            window.clearInterval(this.game);
            window.clearInterval(this.speedUp);
            this.roundInProgress = false;
        }
    },
    //Kailash
    checkForBallPickUp: function () {
        for (i = 0; i < 4; i++) {
            if (this.balls[i].moving == false && this.balls[i].pickedUpBy == 0) {
                if (Math.abs(player1.x_pos - this.balls[i].x_pos) <= 10 && Math.abs(player1.y_pos - this.balls[i].y_pos) <= 10) {
                    this.balls[i].pickedUpBy = 1;
                }
                if (Math.abs(player2.x_pos - this.balls[i].x_pos) <= 10 + player2.height - this.balls[i].width
                    && Math.abs(player2.y_pos - this.balls[i].y_pos) <= 10 + player2.height - this.balls[i].width) {
                    this.balls[i].pickedUpBy = 2;
                }
            }
        }
    },
    //Kailash
    ballThrow: function (playerNumber, player) {
        for (i = 0; i < 4; i++) {
            if (this.balls[i].pickedUpBy == playerNumber) {
                if (playerNumber == 1) {
                    this.balls[i].x_pos = this.balls[i].x_pos + player.width;
                    this.balls[i].x_velocity = this.ballSpeed;
                }
                if (playerNumber == 2) {
                    this.balls[i].x_pos = this.balls[i].x_pos - player.width;
                    this.balls[i].x_velocity = - this.ballSpeed;
                }
                this.balls[i].y_velocity = (Math.random() - 0.5) * this.ballSpeed;
                this.balls[i].moving = true;
                this.balls[i].pickedUpBy = 0;
            }
        }
    },
    //Kailash
    resetRound: function () {
        this.initializeBalls();
        this.initializePlayers();
        this.renderGame();
        this.startGame();
    },
    //Kailash
    startGame: function () {
        this.roundInProgress = true;
        this.game = window.setInterval(this.playGame.bind(DodgeballApp), 30);
        this.speedUp = window.setInterval(this.speedUpBalls.bind(DodgeballApp), 6000);
    },
    //Kailash
    playGame: function () {
        this.movePlayers();
        this.moveBall();
        this.bounceBall();
        this.renderGame();
        this.checkForHit();
        this.checkForBallPickUp();
    },
    //Kailash
    speedUpBalls: function () {
        if (this.ballSpeed < 20) {
            this.ballSpeed = this.ballSpeed + 1;
        }
    },
    //Kailash
    renderGame: function () {
        this.renderPlayers();
        this.renderBalls();
    },
    //Kailash
    renderPlayers: function () {
        player1.element.style.top = player1.y_pos + "px";
        player1.element.style.left = player1.x_pos + "px";
        player1.element.style.backgroundColor = player1.color;

        player2.element.style.top = player2.y_pos + "px";
        player2.element.style.left = player2.x_pos + "px";
        player2.element.style.backgroundColor = player2.color;
    },
    //Kailash
    renderBalls: function () {
        for (let i = 0; i < 4; i++) {
            this.balls[i].element.style.top = this.balls[i].y_pos + "px";
            this.balls[i].element.style.left = this.balls[i].x_pos + "px";
            this.balls[i].element.style.backgroundColor = this.balls[i].color;
        }
    },
}

DodgeballApp.init();