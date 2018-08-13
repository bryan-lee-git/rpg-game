//begin hogwarts duel game code

$(document).ready(function() {

    //create objects for game characters

    var chosenCharacter = "";
    var chosenOpponent = "";
    var fightingCharacters = 0;

    //  HARRY POTTER

    var harry = {
        name: "Harry Potter",
        healthPower: 150,
        attackPower: 6,
        counterAttack: 20,
    };

    function beHarry () {

        var harryPotter = $("<div>");
        var harryImage = $("<img>");
        harryImage.addClass("harryImage charImage");
        harryImage.attr("src", "./assets/images/hp.png");
        var harryStats = $("<p>");
        harryStats.addClass("harryStats");

        if (chosenCharacter === harry || chosenCharacter === "") {
            $("#characterArea").append(harryPotter);
            harryPotter.addClass("harryPotter col-sm-2");
            $(".harryPotter").append(harryImage);
            $(".harryPotter").prepend(harryStats);
            $(".harryStats").before(harry.name);
            $(".harryStats").append("HP " + harry.healthPower);

        } else if (chosenOpponent === harry) {
            $("#activeOppArea").append(harryPotter);
            harryPotter.addClass("harryPotter");
            $(".harryPotter").append(harryImage);
            $(".harryPotter").prepend(harryStats);
            $(".harryStats").before(harry.name);
            $(".harryStats").append("HP " + harry.healthPower);

        } else {
            harryPotter.addClass("harryPotter col-sm-4");
            $("#waitingOppArea").append(harryPotter);
            $(".harryPotter").append(harryImage);
            $(".harryPotter").prepend(harryStats);
            $(".harryStats").before(harry.name);
            $(".harryStats").append("HP " + harry.healthPower);
        }
    }

    //  HERMIONE GRANGER

    var hermione = {
        name: "Hermione Granger",
        healthPower: 100,
        attackPower: 6,
        counterAttack: 15,
    };

    function beHermione () {

        var hermioneGranger = $("<div>");
        var hermioneImage = $("<img>");
        hermioneImage.addClass("hermioneImage charImage");
        hermioneImage.attr("src", "./assets/images/hermione.png");
        var hermioneStats = $("<p>");
        hermioneStats.addClass("hermioneStats");

        if (chosenCharacter === hermione || chosenCharacter === "") {
            $("#characterArea").append(hermioneGranger);
            hermioneGranger.addClass("hermioneGranger col-sm-2");
            $(".hermioneGranger").append(hermioneImage);
            $(".hermioneGranger").prepend(hermioneStats);
            $(".hermioneStats").before(hermione.name);
            $(".hermioneStats").append("HP " + hermione.healthPower);

        } else if (chosenOpponent === hermione) {
            $("#activeOppArea").append(hermioneGranger);
            hermioneGranger.addClass("hermioneGranger");
            $(".hermioneGranger").append(hermioneImage);
            $(".hermioneGranger").prepend(hermioneStats);
            $(".hermioneStats").before(hermione.name);
            $(".hermioneStats").append("HP " + hermione.healthPower);

        } else {
            $("#waitingOppArea").append(hermioneGranger);
            hermioneGranger.addClass("hermioneGranger col-sm-4");
            $(".hermioneGranger").append(hermioneImage);
            $(".hermioneGranger").prepend(hermioneStats);
            $(".hermioneStats").before(hermione.name);
            $(".hermioneStats").append("HP " + hermione.healthPower);
        }

    }

    // VOLDEMORT

    var voldemort = {
        name: "Voldemort",
        healthPower: 180,
        attackPower: 6,
        counterAttack: 25,
    };

    function beVoldemort () {

        var tomRiddle = $("<div>");
        var voldemortImage = $("<img>");
        voldemortImage.addClass("voldemortImage charImage");
        voldemortImage.attr("src", "./assets/images/volde.png");
        var voldemortStats = $("<p>");
        voldemortStats.addClass("voldemortStats");

        if (chosenCharacter === voldemort || chosenCharacter === "") {
            $("#characterArea").append(tomRiddle);
            tomRiddle.addClass("tomRiddle col-sm-2");
            $(".tomRiddle").append(voldemortImage);
            $(".tomRiddle").prepend(voldemortStats);
            $(".voldemortStats").before(voldemort.name);
            $(".voldemortStats").append("HP " + voldemort.healthPower);

        } else if (chosenOpponent === voldemort) {
            $("#activeOppArea").append(tomRiddle);
            tomRiddle.addClass("tomRiddle");
            $(".tomRiddle").append(voldemortImage);
            $(".tomRiddle").prepend(voldemortStats);
            $(".voldemortStats").before(voldemort.name);
            $(".voldemortStats").append("HP " + voldemort.healthPower);

        } else {
            $("#waitingOppArea").append(tomRiddle);
            tomRiddle.addClass("tomRiddle col-sm-4");
            $(".tomRiddle").append(voldemortImage);
            $(".tomRiddle").prepend(voldemortStats);
            $(".voldemortStats").before(voldemort.name);
            $(".voldemortStats").append("HP " + voldemort.healthPower);
        }

    }

    // DRACO MALFOY

    var draco = {
        name: "Draco Malfoy",
        healthPower: 120,
        attackPower: 6,
        counterAttack: 5,
    };

    function beDraco () {
        
        var dracoMalfoy = $("<div>");
        var dracoImage = $("<img>");
        dracoImage.addClass("dracoImage charImage");
        dracoImage.attr("src", "./assets/images/draco.png");
        var dracoStats = $("<p>");
        dracoStats.addClass("dracoStats");

        if (chosenCharacter === draco || chosenCharacter === "") {
            $("#characterArea").append(dracoMalfoy);
            dracoMalfoy.addClass("dracoMalfoy col-sm-2");
            $(".dracoMalfoy").append(dracoImage);
            $(".dracoMalfoy").prepend(dracoStats);
            $(".dracoStats").before(draco.name);
            $(".dracoStats").append("HP " + draco.healthPower);

        } else if (chosenOpponent === draco) {
            $("#activeOppArea").append(dracoMalfoy);
            dracoMalfoy.addClass("dracoMalfoy");
            $(".dracoMalfoy").append(dracoImage);
            $(".dracoMalfoy").prepend(dracoStats);
            $(".dracoStats").before(draco.name);
            $(".dracoStats").append("HP " + draco.healthPower);

        } else {
            $("#waitingOppArea").append(dracoMalfoy);
            dracoMalfoy.addClass("dracoMalfoy col-sm-4");
            $(".dracoMalfoy").append(dracoImage);
            $(".dracoMalfoy").prepend(dracoStats);
            $(".dracoStats").before(draco.name);
            $(".dracoStats").append("HP " + draco.healthPower);
        }

    }

    // START GAME CODE

    beHarry();
    beHermione();
    beVoldemort();
    beDraco();

    function chooseCharacter () {

        $(".harryPotter").on("click", function() {
            fightingCharacters++;
            if (fightingCharacters === 1) {
                chosenCharacter = harry;
                $("#characterArea").empty();
                beHarry();
                beHermione();
                beVoldemort();
                beDraco();
                chooseCharacter();
            } else if (fightingCharacters === 2) {
                chosenOpponent = harry;
                $(".harryPotter").remove();
                beHarry();
            }
        });

        $(".hermioneGranger").on("click", function() {
            fightingCharacters++;

            if (fightingCharacters === 1) {
                $("#characterArea").empty();
                chosenCharacter = hermione;
                beHermione();
                beHarry();
                beVoldemort();
                beDraco();
                chooseCharacter();

            } else if (fightingCharacters === 2) {
                chosenOpponent = hermione;
                $(".hermioneGranger").remove();
                beHermione();
                fightingCharacters++;
            }

        });

        $(".tomRiddle").on("click", function() {
            fightingCharacters++;

            if (fightingCharacters === 1) {
                $("#characterArea").empty();
                chosenCharacter = voldemort;
                beVoldemort();
                beHarry();
                beHermione();
                beDraco();
                chooseCharacter();

            } else if (fightingCharacters === 2) {
                chosenOpponent = voldemort;
                $(".tomRiddle").remove();
                beVoldemort();
            }
        });

        $(".dracoMalfoy").on("click", function() {
            fightingCharacters++;

            if (fightingCharacters === 1) {
                $("#characterArea").empty();
                chosenCharacter = draco;
                beDraco();
                beHarry();
                beHermione();
                beVoldemort();
                chooseCharacter();

            } else if (fightingCharacters === 2) {
                chosenOpponent = draco;
                $(".dracoMalfoy").remove();
                beDraco();
            }
        });

    }

    chooseCharacter();

    // BEGIN FIGHT

    function beginFight() {

    }

    //player clicks and hides instructions to start game

    var instructions = $("#instructions");
    $(instructions).on("click", function () {
        $("p").slideToggle(1000);        
    });

    //all characters are displayed with their stats in the "Your Character" area

    //player clicks their character, the rest of the characters are moved to the "Opponents" area

    //player chooses opponent's character, it is moved to defender area

    //all other characters are removed from the screen

    //when player attacks, they damage the opponent
    //players attack increases by 6 with each regular attack (not counter attack)
    
    //any time a player attacks an opponent, they counter attack dealing damage to the player

    //opponent can only counter attack and it does not increase

    //if health drops to or below zero, that character is defeated

    //game repeats until player is defeated or all opponents are defeated

    //if player is defeated, game restarts

});