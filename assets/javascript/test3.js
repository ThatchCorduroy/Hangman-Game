document.addEventListener("DOMContentLoaded", function(event) { 


    var colormap = {
        "Apricot": "#FDD5B1", 
        "Asparagus": "#7BA05B",
        "Bittersweet": "#FE6F5E",
        "Black": "#000000",
        "Blue": "#0066FF",
        "Blue Green": "#0095B7",
        "Blue Violet": "#6456B7",
        "Brick Red": "#C62D42",
        "Brown": "#AF593E",
        "Burnt Orange": "#FF7F49",
        "Burnt Sienna": "#E97451",
        "Cadet Blue": "#A9B2C3",
        "Carnation Pink": "#FFA6C9",
        "Cerulean": "#02A4D3",
        "Chestnut": "#B94E48",
        "Cornflower": "#93CCEA",
        "Dandelion": "#FED85D",
        "Forest Green": "#5FA777",
        "Gold": "#92926E",
        "Goldenrod": "#FCD667",
        "Granny Smith Apple": "#9DE093",
        "Gray": "#8B8680",
        "Green": "#3AA655",
        "Green Yellow": "#F1E788",
        "Indigo": "#4F69C6",
        "Lavender": "#FBAED2",
        "Macaroni and Cheese": "#FFB97B",
        "Magenta": "#F653A6",
        "Mahogany": "#CA3435",
        "Mauvelous": "#F091A9",
        "Melon": "#FEBAAD",
        "Olive Green": "#B5B35C",
        "Orange": "#FF8833",
        "Orchid": "#E29CD2",
        "Pacific Blue": "#009DC4",
        "Peach": "#FFCBA4",
        "Periwinkle": "#C3CDE6",
        "Plum": "#8E3179",
        "Purple Mountain’s Majesty": "#D6AEDD",
        "Raw Sienna": "#D27D46",
        "Red": "#ED0A3F",
        "Red Orange": "#FF681F",
        "Red Violet": "#BB3385",
        "Robin’s Egg Blue": "#00CCCC",
        "Salmon": "#FF91A4",
        "Scarlet": "#FD0E35",
        "Sea Green": "#93DFB8",
        "Sepia": "#9E5B40",
        "Silver": "#C9C0BB",
        "Sky Blue": "#76D7EA",
        "Spring Green": "#ECEBBD",
        "Tan": "#D99A6C",
        "Tickle Me Pink": "#FC80A5",
        "Timberwolf": "#D9D6CF",
        "Tumbleweed": "#DEA681",
        "Turquoise Blue": "#6CDAE7",
        "Violet": "#8359A3",
        "Violet Red": "#F7468A",
        "White": "#FFFFF",
        "Wild Strawberry": "#FF3399",
        "Wisteria": "#C9A0DC",
        "Yellow": "#FBE870",
        "Yellow Green": "#C5E17A",
        "Yellow Orange": "#FFAE42",
    }

    var answerList = ["Apricot", "Asparagus", "Bittersweet", "Black", "Blue", "Blue Green", 
                "Blue Violet", "Brick Red", "Brown", "Burnt Orange", "Burnt Sienna", "Cadet Blue", 
                "Carnation Pink", "Cerulean", "Chestnut", "Cornflower", "Dandelion", "Forest Green",
                "Gold", "Goldenrod", "Granny Smith Apple", "Gray", "Green", "Green Yellow", "Indigo",
                "Lavender", "Macaroni and Cheese", "Magenta", "Mahogany", "Mauvelous", "Melon", 
                "Olive Green", "Orange", "Orchid", "Pacific Blue", "Peach", "Periwinkle", "Plum", 
                "Purple Mountain’s Majesty", "Raw Sienna", "Red", "Red Orange", "Red Violet", "Robin’s Egg Blue", 
                "Salmon", "Scarlet", "Sea Green", "Sepia", "Silver", "Sky Blue", "Spring Green", "Tan",
                "Tickle Me Pink", "Timberwolf", "Tumbleweed", "Turquoise Blue", "Violet", "Violet Red", 
                "White", "Wild Strawberry", "Wisteria", "Yellow", "Yellow Green", "Yellow Orange"];


    //function validGuess(guess, pastGuesses);

    function getAnswer() {
    /* ------------------------------------------
    Return a randomly chosen string value from the answer list
    ---------------------------------------------*/
        randomNum = Math.floor(Math.random() * (64 - 0));

        return answerList[randomNum];
    }

    function dashMaker(answerArr) {
    /* ------------------------------------------
    Returns an array equivalent to answerArr but with letters replaced
        with "_"

    answerArr (array): the answer in array form
    ---------------------------------------------*/
        var dashArr = [];

        for (i=0; i < answerArr.length; i++) {

            if (answerArr[i] === " ") {
                dashArr[i] = " ";
            } else {
                dashArr[i] = "_";
            }
        }

        return dashArr;
    }

    function guessCheck(answerArr, dashArr, guess) {

        goodguess = false;

        for (i = 0; i < answerArr.length; i++) {
            if (answerArr[i].toLowerCase() === guess.toLowerCase()) {
                dashArr[i] = answerArr[i];
                goodguess = true;
            }
        }
        
        return dashArr;
    }

    function winCheck(dashArr) {


        for (i = 0; i < dashArr.length; i++) {
            if (dashArr[i] === "_") {
                return false;
            }
        }

        return true;
    }

    function prettyText(arr) {

        var newArr = []

        for (i =0; i < arr.length; i++) {
            if (arr[i] === " ") {
                newArr.push("&nbsp;&nbsp;&nbsp;&nbsp;");
            } else {
                newArr.push(arr[i] + "&nbsp;");
            }
        }

        return newArr.join("");
    }

    function colorboxInit(color) {
        return colormap[color];
    }

    function guessTrack(guess) {
        if (goodguess === false) {
            track.push(guess);
        }

        return track;
    }

    function getComment(guess) {
        var comment = "";
        if (goodguess === true) {
            comment = 'Nice job  "' + guess + '" was a correct guess!';
        } else {
            comment = 'Sorry "' + guess + '" was an incorrect guess';
        }

        return comment;
    }

    // function displayTextMaker2(answer) {
    // /* ------------------------------------------
    // Returns a set of "_ " that is the same length as the answer

    // answer (string): the word the user needs to guess

    // ---------------------------------------------*/

    //     var displayText = "";

    //     for (i = 0; i < answer.length; i++) {
    //         if (answer.charAt(i) == " ") {
    //             displayText += "&nbsp;&nbsp;&nbsp;&nbsp;"
    //         } else {
    //             displayText += "_ "
    //         }

    //     }

    //     return displayText;

    // }

    // function displayTextMaker(answerArr) {
    // /* ------------------------------------------
    // Returns a set of "_ " that is the same length as the answer

    // answer (string): the word the user needs to guess

    // ---------------------------------------------*/

    //     var displayText = "";

    //     for (i = 0; i < answerArr.length; i++) {
    //         if (answerArr[i] === " ") {
    //             displayText += "&nbsp;&nbsp;&nbsp;&nbsp;"
    //         } else {
    //             displayText += "_ "
    //         }

    //     }

    //     return displayText;

    // }

    // function stringChecker2(answerArr, guess) {
    // /* ------------------------------------------
    // Returns an array of indices where guessed letter is found

    // answer (string): the word the user needs to guess
    // guess (char): the character representing the users guess
    // ---------------------------------------------*/

    //     var indexStore = [];

    //     for (i = 0; i < answer.length; i++) {
    //         if (answer.charAt(i) === guess) {
    //             indexStore.push(i);
    //         }
    //     }

    //     return indexStore;
    // }

    // function arrModify(indexStore, guess) {
    // /* ------------------------------------------
    // Modifies the displayText to place the guess char into the index positions found by stringChecker

    // displayText (string): the text the user sees to show game progress
    // indexStore (array): an array of indices where guessed letter is found
    // guess (char): the character representing the users guess
    // ---------------------------------------------*/
    //     for (i = 0; i < indexStore.length; i++) {
    //         displayText = displayText.slice(0, indexStore[i]) + guess + (displayText.slice(indexStore[i]+1, displayText.length));
            
    //         console.log("This is the displayText " + displayText);
    //     }

    //     return displayText
    // }



    function gameplay() {
        var answer = getAnswer();
        var answerArr = answer.split('');
        var dashArr = dashMaker(answerArr);

        //Place the text and colorbox
        outputDiv.innerHTML = prettyText(dashArr);
        document.getElementById("colorbox").style.backgroundColor = colorboxInit(answer);

        //Keyup events
        document.onkeyup = function(event) {
            var guess = event.key;

            outputDiv.innerHTML = prettyText(guessCheck(answerArr, dashArr, guess));
            trackDiv.innerHTML = guessTrack(guess).toString();
            commentDiv.innerHTML = getComment(guess);

            if (track.length > 5) {
                trackDiv.innerHTML = "Sorry - you lose :(  The answer was " + answer + ".";

            }
            
            if (winCheck(dashArr)===true) {
                trackDiv.innerHTML = "YOU'RE A WINNER!!!";
            }
        }
    }

    var goodguess = false
    var track = []
    var outputDiv = document.getElementById("output");
    var trackDiv = document.getElementById("tracker");
    var commentDiv = document.getElementById("commentary");

    //var colorboxDiv = document.getElementById("colorbox").style.backgroundColor = colorboxInit(answer);
    gameplay();



    //console.log(answer);
    //console.log(answerArr);
    //console.log(dashArr);

    //outputDiv.innerHTML = displayTextMaker(answer);
    // console.log(answer);
    //outputDiv.innerHTML = arrModify(stringChecker(answer , guess), guess);
});
