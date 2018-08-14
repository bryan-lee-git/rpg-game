
//  Begin hogwarts duel game code

$(document).ready(function() {

    $("#characterRow").hide();
    $("#opponentsRow").hide();
    $("#allOppsRow").hide();
    $("#ruleRow").hide();
    $("#yourCharacterRow").hide();

    //  Create objects for game characters

    var chosenCharacter = "";
    var chosenOpponent = "";
    var waitingOpps = [];
    var fightingCharacters = 0;
    var opponentStats = [];
    var defeatedOpps = 0;

    var theme = new Audio('./assets/sounds/theme.mp3');
    var attack = new Audio('./assets/sounds/attack.mp3');
    var winSound = new Audio('./assets/sounds/youWin.mp3');
    var gameOverSound = new Audio('./assets/sounds/hermione.mp3');

    function playAudio() { 
        x.play(); 
    } 

    //  HARRY POTTER - Character object and game functions

    var harry = {
        name: "Harry Potter",
        variable: "harry",
        healthPower: 150,
        attackPower: 6,
        counterAttack: 20,
    };

    var harrySound = new Audio('./assets/sounds/harry.mp3');

    function beHarry () {

        var harryPotter = $("<div>");
        var harryImage = $("<img>");
        harryImage.addClass("harryImage charImage");
        harryImage.attr("src", "./assets/images/hp.png");
        var harryStats = $("<p>");
        harryStats.addClass("harryStats");

        if (chosenCharacter === harry || chosenCharacter === "harry") {
            $("#characterArea").empty();
            $("#characterArea").append(harryPotter);
            harryPotter.addClass("harryPotter col-sm-3");
            $(".harryPotter").append(harryImage);
            var harryPlay = $("<h2>");
            $("#characterArea").append(harryPlay);
            harryPlay.addClass("playerStats col-sm-2");
            harryPlay.append(harry.name + "<br>");
            harryPlay.append("HP " + harry.healthPower);

        } else if (chosenCharacter === "") {
            var harryStats = $("<p>");
            harryStats.addClass("harryStats");
            $("#characterArea").append(harryPotter);
            harryPotter.addClass("harryPotter col-sm-2");
            $(".harryPotter").append(harryImage);
            $(".harryPotter").prepend(harryStats);
            $(".harryStats").before(harry.name);
            $(".harryStats").append("HP " + harry.healthPower);

        } else if (chosenOpponent === harry) {
            $("#waitingOppArea .playerStats").empty();
            $("#activeOppArea").empty();
            $(".harryPotter").empty();
            $("#activeOppArea").append(harryPotter);
            harryPotter.addClass("harryPotter");
            $(".harryPotter").append(harryImage);
            var harryPlay = $("<h2>");
            $("#waitingOppArea").prepend(harryPlay);
            harryPlay.addClass("oppStats col-sm-4");
            harryPlay.append(harry.name + "<br>");
            harryPlay.append("HP " + harry.healthPower);

        } else if (chosenOpponent !== harry && chosenOpponent === "") {
            $("#waitingOppArea").append(harryPotter);
            harryPotter.addClass("harryPotter col-sm-4");
            $(".harryPotter").append(harryImage);
            $(".harryPotter").prepend(harryStats);
            $(".harryStats").before(harry.name);
            $(".harryStats").append("HP " + harry.healthPower);
        
        } else {
            waitingOpps.push(harry.variable);
        }
    }

    //  HERMIONE GRANGER - Character object and game functions

    var hermione = {
        name: "Hermione Granger",
        variable: "hermione",
        healthPower: 100,
        attackPower: 6,
        counterAttack: 15,
    };

    var hermioneSound = new Audio('./assets/sounds/hermione2.mp3');

    function beHermione () {

        var hermioneGranger = $("<div>");
        var hermioneImage = $("<img>");
        hermioneImage.addClass("hermioneImage charImage");
        hermioneImage.attr("src", "./assets/images/hermione.png");
        var hermioneStats = $("<p>");
        hermioneStats.addClass("hermioneStats");

        if (chosenCharacter === hermione || chosenCharacter === "hermione"){
            $("#characterArea").empty();
            $("#characterArea").append(hermioneGranger);
            hermioneGranger.addClass("hermioneGranger col-sm-3");
            $(".hermioneGranger").append(hermioneImage);
            var hermionePlay = $("<h2>");
            $("#characterArea").append(hermionePlay);
            hermionePlay.addClass("playerStats col-sm-2");
            hermionePlay.append(hermione.name + "<br>");
            hermionePlay.append("HP " + hermione.healthPower);
        
        } else if (chosenCharacter === "") {
            $("#characterArea").append(hermioneGranger);
            hermioneGranger.addClass("hermioneGranger col-sm-2");
            $(".hermioneGranger").append(hermioneImage);
            $(".hermioneGranger").prepend(hermioneStats);
            $(".hermioneStats").before(hermione.name);
            $(".hermioneStats").append("HP " + hermione.healthPower);

        } else if (chosenOpponent === hermione) {
            $("#waitingOppArea .playerStats").empty();
            $("#activeOppArea").empty();
            $(".hermioneGranger").empty();
            $("#activeOppArea").append(hermioneGranger);
            hermioneGranger.addClass("hermioneGranger");
            $(".hermioneGranger").append(hermioneImage);
            var hermionePlay = $("<h2>");
            $("#waitingOppArea").prepend(hermionePlay);
            hermionePlay.addClass("oppStats col-sm-4");
            hermionePlay.append(hermione.name + "<br>");
            hermionePlay.append("HP " + hermione.healthPower);

        } else if (chosenOpponent !== hermione && chosenOpponent === "") {
            $("#waitingOppArea").append(hermioneGranger);
            hermioneGranger.addClass("hermioneGranger col-sm-4");
            $(".hermioneGranger").append(hermioneImage);
            $(".hermioneGranger").prepend(hermioneStats);
            $(".hermioneStats").before(hermione.name);
            $(".hermioneStats").append("HP " + hermione.healthPower);
        
        } else {
            waitingOpps.push(hermione.variable);
        }

    }

    // VOLDEMORT - Character object and game functions

    var voldemort = {
        name: "Voldemort",
        variable: "voldemort",
        healthPower: 180,
        attackPower: 6,
        counterAttack: 25,
    };

    var voldemortSound = new Audio('./assets/sounds/voldemort.mp3');

    function beVoldemort () {

        var tomRiddle = $("<div>");
        var voldemortImage = $("<img>");
        voldemortImage.addClass("voldemortImage charImage");
        voldemortImage.attr("src", "./assets/images/volde.png");
        var voldemortStats = $("<p>");
        voldemortStats.addClass("voldemortStats");

        if (chosenCharacter === voldemort || chosenCharacter === "voldemort") {
            $("#characterArea").empty();
            $("#characterArea").append(tomRiddle);
            tomRiddle.addClass("tomRiddle col-sm-3");
            $(".tomRiddle").append(voldemortImage);
            var voldemortPlay = $("<h2>");
            $("#characterArea").append(voldemortPlay);
            voldemortPlay.addClass("playerStats col-sm-2");
            voldemortPlay.append(voldemort.name + "<br>");
            voldemortPlay.append("HP " + voldemort.healthPower);
        
        } else if (chosenCharacter === "") {
            $(".tomRiddle").empty();
            $("#characterArea").append(tomRiddle);
            tomRiddle.addClass("tomRiddle col-sm-2");
            $(".tomRiddle").append(voldemortImage);
            $(".tomRiddle").prepend(voldemortStats);
            $(".voldemortStats").before(voldemort.name);
            $(".voldemortStats").append("HP " + voldemort.healthPower);

        } else if (chosenOpponent === voldemort) {
            $("#waitingOppArea .playerStats").empty();
            $("#activeOppArea").empty();
            $(".tomRiddle").empty();
            $("#activeOppArea").append(tomRiddle);
            tomRiddle.addClass("tomRiddle");
            $(".tomRiddle").append(voldemortImage);
            var voldemortPlay = $("<h2>");
            $("#waitingOppArea").prepend(voldemortPlay);
            voldemortPlay.addClass("oppStats col-sm-4");
            voldemortPlay.append(voldemort.name + "<br>");
            voldemortPlay.append("HP " + voldemort.healthPower);

        } else if (chosenOpponent !== voldemort && chosenOpponent === "") {
            $("#waitingOppArea").append(tomRiddle);
            tomRiddle.addClass("tomRiddle col-sm-4");
            $(".tomRiddle").append(voldemortImage);
            $(".tomRiddle").prepend(voldemortStats);
            $(".voldemortStats").before(voldemort.name);
            $(".voldemortStats").append("HP " + voldemort.healthPower);

        } else {
            waitingOpps.push(voldemort.variable);
        }

    }

    // DRACO MALFOY - Character object and game functions

    var draco = {
        name: "Draco Malfoy",
        variable: "draco",
        healthPower: 120,
        attackPower: 6,
        counterAttack: 5,
    };

    var dracoSound = new Audio('./assets/sounds/draco.mp3');

    function beDraco () {

        var dracoMalfoy = $("<div>");
        var dracoImage = $("<img>");
        dracoImage.addClass("dracoImage charImage");
        dracoImage.attr("src", "./assets/images/draco.png");
        var dracoStats = $("<p>");
        dracoStats.addClass("dracoStats");

        if (chosenCharacter === draco || chosenCharacter === "draco") {
            $("#characterArea").empty();
            $("#characterArea").append(dracoMalfoy);
            dracoMalfoy.addClass("dracoMalfoy col-sm-3");
            $(".dracoMalfoy").append(dracoImage);
            var dracoPlay = $("<h2>");
            $("#characterArea").append(dracoPlay);
            dracoPlay.addClass("playerStats col-sm-2");
            dracoPlay.append(draco.name + "<br>");
            dracoPlay.append("HP " + draco.healthPower);

        } else if (chosenCharacter === "") {
            $(".dracoMalfoy").empty();
            $("#characterArea").append(dracoMalfoy);
            dracoMalfoy.addClass("dracoMalfoy col-sm-2");
            $(".dracoMalfoy").append(dracoImage);
            $(".dracoMalfoy").prepend(dracoStats);
            $(".dracoStats").before(draco.name);
            $(".dracoStats").append("HP " + draco.healthPower);

        } else if (chosenOpponent === draco) {
            $("#activeOppArea").empty();
            $("#waitingOppArea .playerStats").empty();
            $(".dracoMalfoy").empty();
            $("#activeOppArea").append(dracoMalfoy);
            dracoMalfoy.addClass("dracoMalfoy");
            $(".dracoMalfoy").append(dracoImage);
            var dracoPlay = $("<h2>");
            $("#waitingOppArea").prepend(dracoPlay);
            dracoPlay.addClass("oppStats col-sm-4");
            dracoPlay.append(draco.name + "<br>");
            dracoPlay.append("HP " + draco.healthPower);

        } else if (chosenOpponent !== draco && chosenOpponent === "") {
            $("#waitingOppArea").append(dracoMalfoy);
            dracoMalfoy.addClass("dracoMalfoy col-sm-4");
            $(".dracoMalfoy").append(dracoImage);
            $(".dracoMalfoy").prepend(dracoStats);
            $(".dracoStats").before(draco.name);
            $(".dracoStats").append("HP " + draco.healthPower);
        
        } else {
            waitingOpps.push(draco.variable);
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

        beHarry();
        beHermione();
        beVoldemort();
        beDraco();   
    }

// START GAME FUNCTIONALITY

    //  Player clicks and hides instructions to start game

    var instructions = $("#instructions");
    
    $(instructions).on("click", function () {
        $(instructions).hide(400);   
        runGame();
    });

    function runGame() {


        $("#playTheme").on("click", function () {
            theme.play();
        });

        $("#characterRow").show();
        $("#opponentsRow").show();
        $("#allOppsRow").show();
        $("#ruleRow").show();
        $("#yourCharacterRow").show();

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

    //  when player clicks on attack button, they damage the opponent for the amount specified as "objectname.attackPower"
    //  player's attack increases by 6 with each regular attack (not on counter attack)
    
    //  any time a player attacks an opponent, they automatically counter attack dealing damage to the player

    //  opponent can only counter attack. Each opponent's "counterAttack" stays constant throughout game

    //  if player or opponent health drops to or below zero, that character is defeated
    //  if player is defeated, game over screen is shown, click game over screen to restart

    //  if opponent is defeated, call the next opponent in the oppononent waiting area and move them into the active opponent position

    //  game repeats until player is defeated or all opponents are defeated

    //  if all opponents are defeated, the player is receives the "elder wand" on the win screen

});