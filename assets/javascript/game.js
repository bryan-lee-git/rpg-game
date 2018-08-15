
//  Begin hogwarts duel game code

$(document).ready(function() {

    $("#instructionsPopUp").hide(0); 
    $("#characterRow").hide(0);
    $("#opponentsRow").hide(0);
    $("#allOppsRow").hide(0);
    $("#ruleRow").hide(0);
    $("#yourCharacterRow").hide(0);
    $("#instructionsHide").hide(0);
    $("#footer").hide(0);
    $("#attackBtn").hide(0);

    //  Create objects for game characters

    var chosenCharacter = "";
    var chosenOpponent = "";
    var waitingOpps = [];
    var fightingCharacters = 0;
    var defeatedOpps = 0;

    var theme = new Audio('./assets/sounds/theme.mp3');
    var attack = new Audio('./assets/sounds/attack.mp3');
    var winSound = new Audio('./assets/sounds/youWin.mp3');
    var gameOverSound = new Audio('./assets/sounds/hermione.mp3');
    var harrySound = new Audio('./assets/sounds/harry.mp3');
    var hermioneSound = new Audio('./assets/sounds/hermione2.mp3');
    var dracoSound = new Audio('./assets/sounds/draco.mp3');
    var voldemortSound = new Audio('./assets/sounds/voldemort.mp3');

    //  HARRY POTTER - Character object and game functions

    var harry = {
        name: "Harry Potter",
        variable: "harry",
        healthPower: 150,
        attackPower: 7,
        counterAttack: 10,
        image: "./assets/images/hp.png",
        beHarry: function () {

            var harryPotter = $("<div>");
            var harryImage = $("<img>");
            harryImage.addClass("harryImage charImage");
            harryImage.attr("src", this.image);

            if (chosenCharacter === this) {
                
                $("#characterArea").empty();
                $("#characterArea").append(harryPotter);
                harryPotter.addClass("harryPotter col-sm-3");
                $(".harryPotter").append(harryImage);
                var harryPlay = $("<h2>");
                harryPlay.addClass("playerStats col-sm-2");
                harryPlay.append(this.name + "<br>");
                harryPlay.append("HP " + this.healthPower);
                $("#characterArea").append(harryPlay);
            
            } else if (chosenCharacter === "") {

                $(".harryPotter").empty();
                $("#characterArea").append(harryPotter);
                harryPotter.addClass("harryPotter col-sm-2");
                $(".harryPotter").append(harryImage);
                var harryStats = $("<p>");
                $(".harryPotter").prepend(harryStats);
                harryStats.addClass("harryStats");
                $(".harryPotter").prepend(harryStats);
                $(".harryStats").before(this.name);
                $(".harryStats").append("HP " + this.healthPower);

            } else if (chosenOpponent === this) {

                $(".oppStats").empty();
                $("#activeOppArea").empty();
                $(".harryPotter").empty();
                $("#activeOppArea").append(harryPotter);
                harryPotter.addClass("harryPotter");
                $(".harryPotter").append(harryImage);
                var harryPlay = $("<h2>");
                harryPlay.addClass("oppStats col-sm-4");
                harryPlay.append(this.name + "<br>");
                harryPlay.append("HP " + this.healthPower);
                $("#waitingOppArea").prepend(harryPlay);

            } else if (chosenOpponent !== this && chosenOpponent === "") {

                $("#waitingOppArea").append(harryPotter);
                harryPotter.addClass("harryPotter col-sm-4");
                $(".harryPotter").append(harryImage);
                var harryStats = $("<p>");
                harryStats.addClass("harryStats");
                $(".harryPotter").prepend(harryStats);
                $(".harryStats").before(this.name);
                $(".harryStats").append("HP " + this.healthPower);

            } else {
                waitingOpps.push(this.variable);
            }
        }
    }

    //  HERMIONE GRANGER - Character object and game functions

    var hermione = {
        name: "Hermione Granger",
        variable: "hermione",
        healthPower: 100,
        attackPower: 10,
        counterAttack: 15,
        image: "./assets/images/hermione.png",
        beHermione: function () {

            var hermioneGranger = $("<div>");
            var hermioneImage = $("<img>");
            hermioneImage.addClass("hermioneImage charImage");
            hermioneImage.attr("src", this.image);

            if (chosenCharacter === this) {
                
                $("#characterArea").empty();
                $("#characterArea").append(hermioneGranger);
                hermioneGranger.addClass("hermioneGranger col-sm-3");
                $(".hermioneGranger").append(hermioneImage);
                var hermionePlay = $("<h2>");
                hermionePlay.addClass("playerStats col-sm-2");
                hermionePlay.append(this.name + "<br>");
                hermionePlay.append("HP " + this.healthPower);
                $("#characterArea").append(hermionePlay);
            
            } else if (chosenCharacter === "") {

                $(".hermioneGranger").empty();
                $("#characterArea").append(hermioneGranger);
                hermioneGranger.addClass("hermioneGranger col-sm-2");
                $(".hermioneGranger").append(hermioneImage);
                var hermioneStats = $("<p>");
                $(".hermioneGranger").prepend(hermioneStats);
                hermioneStats.addClass("hermioneStats");
                $(".hermioneGranger").prepend(hermioneStats);
                $(".hermioneStats").before(this.name);
                $(".hermioneStats").append("HP " + this.healthPower);

            } else if (chosenOpponent === this) {

                $(".oppStats").empty();
                $("#activeOppArea").empty();
                $(".hermioneGranger").empty();
                $("#activeOppArea").append(hermioneGranger);
                hermioneGranger.addClass("hermioneGranger");
                $(".hermioneGranger").append(hermioneImage);
                var hermionePlay = $("<h2>");
                hermionePlay.addClass("oppStats col-sm-4");
                hermionePlay.append(this.name + "<br>");
                hermionePlay.append("HP " + this.healthPower);
                $("#waitingOppArea").prepend(hermionePlay);

            } else if (chosenOpponent !== this && chosenOpponent === "") {

                $("#waitingOppArea").append(hermioneGranger);
                hermioneGranger.addClass("hermioneGranger col-sm-4");
                $(".hermioneGranger").append(hermioneImage);
                var hermioneStats = $("<p>");
                hermioneStats.addClass("hermioneStats");
                $(".hermioneGranger").prepend(hermioneStats);
                $(".hermioneStats").before(this.name);
                $(".hermioneStats").append("HP " + this.healthPower);

            } else {
                waitingOpps.push(this.variable);
            }
        }
    }

    // VOLDEMORT - Character object and game functions

    var voldemort = {
        name: "Voldemort",
        variable: "voldemort",
        healthPower: 180,
        attackPower: 6,
        counterAttack: 20,
        image: "./assets/images/volde.png",
        beVoldemort: function () {

            var tomRiddle = $("<div>");
            var voldemortImage = $("<img>");
            voldemortImage.addClass("voldemortImage charImage");
            voldemortImage.attr("src", this.image);

            if (chosenCharacter === this) {
                
                $("#characterArea").empty();
                $("#characterArea").append(tomRiddle);
                tomRiddle.addClass("tomRiddle col-sm-3");
                $(".tomRiddle").append(voldemortImage);
                var voldemortPlay = $("<h2>");
                voldemortPlay.addClass("playerStats col-sm-2");
                voldemortPlay.append(this.name + "<br>");
                voldemortPlay.append("HP " + this.healthPower);
                $("#characterArea").append(voldemortPlay);
            
            } else if (chosenCharacter === "") {

                $(".tomRiddle").empty();
                $("#characterArea").append(tomRiddle);
                tomRiddle.addClass("tomRiddle col-sm-2");
                $(".tomRiddle").append(voldemortImage);
                var voldemortStats = $("<p>");
                $(".tomRiddle").prepend(voldemortStats);
                voldemortStats.addClass("voldemortStats");
                $(".tomRiddle").prepend(voldemortStats);
                $(".voldemortStats").before(this.name);
                $(".voldemortStats").append("HP " + this.healthPower);

            } else if (chosenOpponent === this) {

                $(".oppStats").empty();
                $("#activeOppArea").empty();
                $(".tomRiddle").empty();
                $("#activeOppArea").append(tomRiddle);
                tomRiddle.addClass("tomRiddle");
                $(".tomRiddle").append(voldemortImage);
                var voldemortPlay = $("<h2>");
                voldemortPlay.addClass("oppStats col-sm-4");
                voldemortPlay.append(this.name + "<br>");
                voldemortPlay.append("HP " + this.healthPower);
                $("#waitingOppArea").prepend(voldemortPlay);

            } else if (chosenOpponent !== this && chosenOpponent === "") {

                $("#waitingOppArea").append(tomRiddle);
                tomRiddle.addClass("tomRiddle col-sm-4");
                $(".tomRiddle").append(voldemortImage);
                var voldemortStats = $("<p>");
                voldemortStats.addClass("voldemortStats");
                $(".tomRiddle").prepend(voldemortStats);
                $(".voldemortStats").before(this.name);
                $(".voldemortStats").append("HP " + this.healthPower);

            } else {
                waitingOpps.push(this.variable);
            }
        }
    }

    // DRACO MALFOY - Character object and game functions

    var draco = {
        name: "Draco Malfoy",
        variable: "draco",
        healthPower: 120,
        attackPower: 8,
        counterAttack: 5,
        image: "./assets/images/draco.png",
        beDraco: function () {

            var dracoMalfoy = $("<div>");
            var dracoImage = $("<img>");
            dracoImage.addClass("dracoImage charImage");
            dracoImage.attr("src", this.image);

            if (chosenCharacter === this) {
                
                $("#characterArea").empty();
                $("#characterArea").append(dracoMalfoy);
                dracoMalfoy.addClass("dracoMalfoy col-sm-3");
                $(".dracoMalfoy").append(dracoImage);
                var dracoPlay = $("<h2>");
                dracoPlay.addClass("playerStats col-sm-2");
                dracoPlay.append(this.name + "<br>");
                dracoPlay.append("HP " + this.healthPower);
                $("#characterArea").append(dracoPlay);
            
            } else if (chosenCharacter === "") {

                $(".dracoMalfoy").empty();
                $("#characterArea").append(dracoMalfoy);
                dracoMalfoy.addClass("dracoMalfoy col-sm-2");
                $(".dracoMalfoy").append(dracoImage);
                var dracoStats = $("<p>");
                $(".dracoMalfoy").prepend(dracoStats);
                dracoStats.addClass("dracoStats");
                $(".dracoMalfoy").prepend(dracoStats);
                $(".dracoStats").before(this.name);
                $(".dracoStats").append("HP " + this.healthPower);

            } else if (chosenOpponent === this) {

                $(".oppStats").empty();
                $("#activeOppArea").empty();
                $(".dracoMalfoy").empty();
                $("#activeOppArea").append(dracoMalfoy);
                dracoMalfoy.addClass("dracoMalfoy");
                $(".dracoMalfoy").append(dracoImage);
                var dracoPlay = $("<h2>");
                dracoPlay.addClass("oppStats col-sm-4");
                dracoPlay.append(this.name + "<br>");
                dracoPlay.append("HP " + this.healthPower);
                $("#waitingOppArea").prepend(dracoPlay);

            } else if (chosenOpponent !== this && chosenOpponent === "") {

                $("#waitingOppArea").append(dracoMalfoy);
                dracoMalfoy.addClass("dracoMalfoy col-sm-4");
                $(".dracoMalfoy").append(dracoImage);
                var dracoStats = $("<p>");
                dracoStats.addClass("dracoStats");
                $(".dracoMalfoy").prepend(dracoStats);
                $(".dracoStats").before(this.name);
                $(".dracoStats").append("HP " + this.healthPower);

            } else {
                waitingOpps.push(this.variable);
            }
        }
    }

    //  Function for choosing characters at beginning of game

    function chooseCharacter () {

        //  HARRY OPTIONS
        $(".harryPotter").on("click", function() {
            fightingCharacters++;

            if (fightingCharacters === 1) {
                harrySound.play();
                chosenCharacter = harry;
                $("#characterArea").empty();
                loadCharacters();
                chooseCharacter();

            } else if (fightingCharacters === 2) {
                harrySound.play();
                chosenOpponent = harry;
                $(".harryPotter").remove();
                loadCharacters();
            
            } else if (fightingCharacters > 2) {
                harrySound.play();
                chosenOpponent = harry;
                $(".harryPotter").remove();
                loadCharacters();
            }
        });

        //  HERMIONE OPTIONS
        $(".hermioneGranger").on("click", function() {
            fightingCharacters++;

            if (fightingCharacters === 1) {
                hermioneSound.play();
                $("#characterArea").empty();
                chosenCharacter = hermione;
                loadCharacters();
                chooseCharacter();

            } else if (fightingCharacters === 2) {
                hermioneSound.play();
                chosenOpponent = hermione;
                $(".hermioneGranger").remove();
                loadCharacters();
            
            } else if (fightingCharacters > 2) {
                hermioneSound.play();
                chosenOpponent = hermione;
                $(".hermioneGranger").remove();
                loadCharacters();
            }
        });

        //  VOLDEMORT OPTIONS
        $(".tomRiddle").on("click", function() {
            fightingCharacters++;

            if (fightingCharacters === 1) {
                voldemortSound.play();
                $("#characterArea").empty();
                chosenCharacter = voldemort;
                loadCharacters();
                chooseCharacter();

            } else if (fightingCharacters === 2) {
                voldemortSound.play();
                chosenOpponent = voldemort;
                $(".tomRiddle").remove();
                loadCharacters();
            
            } else if (fightingCharacters > 2) {
                voldemortSound.play();
                chosenOpponent = voldemort;
                $(".tomRiddle").remove();
                loadCharacters();
            }
        });

        //  DRACO OPTIONS
        $(".dracoMalfoy").on("click", function() {
            fightingCharacters++;

            if (fightingCharacters === 1) {
                dracoSound.play();
                $("#characterArea").empty();
                chosenCharacter = draco;
                loadCharacters();
                chooseCharacter();

            } else if (fightingCharacters === 2) {
                dracoSound.play();
                chosenOpponent = draco;
                $(".dracoMalfoy").remove();
                loadCharacters();
            
            } else if (fightingCharacters > 2) {
                dracoSound.play();
                chosenOpponent = draco;
                $(".dracoMalfoy").remove();
                loadCharacters();
            }
        });
    }

    //Function to load characters
    function loadCharacters () {
        harry.beHarry();
        draco.beDraco();
        hermione.beHermione();
        voldemort.beVoldemort();
    }

// START GAME FUNCTIONALITY

    //  Player clicks and hides instructions to start game

    var instructions = $("#instructions");
    
    $(instructions).on("click", function () {
        $(instructions).hide(500); 
        $("#instructionsPopUp").show(2000); 
        runGame();
    });

    function runGame() {

        $("#playTheme").on("click", function () {
            theme.play();
        });

        $("#instructionsPopUp").on("click", function () {
            $("#yourCharacterRow").slideToggle(1000); 
            $("#characterRow").slideToggle(1000); 
            $(instructions).slideToggle(1000);
            $("#footer").slideToggle(1000); 
        });

        $("#characterRow").show(1200);
        $("#attackBtn").show();
        $("#opponentsRow").show();
        $("#allOppsRow").show();
        $("#ruleRow").show();
        $("#yourCharacterRow").show();
        $("#footer").show(500);

        loadCharacters();
        chooseCharacter();

        //  fight begins

        function beginFight() {

            // opponent loses health power equal to the player's damage
            chosenOpponent.healthPower = chosenOpponent.healthPower - chosenCharacter.attackPower;
        
            // add 6 to player's attach power
            chosenCharacter.attackPower = chosenCharacter.attackPower + 6;

            //refresh opponent stats
            $("#waitingOppArea .oppStats").empty();
            $("#waitingOppArea .oppStats").append(chosenOpponent.name + "<br>");
            $("#waitingOppArea .oppStats").append("HP " + chosenOpponent.healthPower);
            
            chosenCharacter.healthPower = chosenCharacter.healthPower - chosenOpponent.counterAttack;

            //refresh player stats
            $("#characterArea .playerStats").empty();
            $("#characterArea .playerStats").append(chosenCharacter.name + "<br>");
            $("#characterArea .playerStats").append("HP " + chosenCharacter.healthPower);
            
            if (chosenCharacter.healthPower <= 0) {
                gameOverSound.play();
                //add in game over screen with button to restart
                $(".container").empty();
                $(".container").removeClass("containerBackground");
                var endScreen = $("<div class='col-sm-12'>");
                var loseImage = $("<img style='width:100%'>")
                var restartInstructions = $("<h2 style='text-align:center'>");
                loseImage.attr("src", "./assets/images/youlose4.png");
                loseImage.addClass("endImage");
                $(".container").append(endScreen);
                endScreen.append(loseImage);
                endScreen.before(restartInstructions);
                restartInstructions.html("Click center of screen to restart.")
            }
            
            if (chosenOpponent.healthPower <= 0) {
                $("#activeOppArea").empty();
                $(".oppStats").remove();
                defeatedOpps++;
            }

            if (defeatedOpps === 3) {
                winSound.play();
                $(".container").empty();
                $(".container").removeClass("containerBackground");
                var endScreen = $("<div class='col-sm-12'>");
                var winImage = $("<img style='width:100%'>")
                var restartInstructions = $("<h2 style='text-align:center'>");
                winImage.attr("src", "./assets/images/youwin4.png");
                winImage.addClass("endImage");
                $(".container").append(endScreen);
                endScreen.append(winImage);
                endScreen.before(restartInstructions);
                restartInstructions.html("Click center of screen to restart.")
            }

            $(".endImage").on("click", function () {
                location.reload();
            });
        }

        $("#attackBtn").on("click", function () {
            attack.play();
            
            if (fightingCharacters < 2) {
                alert("You must choose characters before you can attack.");
            
            } else {
                beginFight();
            }
        });
    }

});