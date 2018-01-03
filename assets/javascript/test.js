document.addEventListener("DOMContentLoaded", function(event) { 


    var gamePlay = {

        answer : "",
        answerArr : [],
        dashArr : [],
        hex : "",

        guess: "",
        badGuessCount: 0,
        badGuessArr: [],
        goodGuess: false,
        badGuessAllowed: 5,

        first: true,
        winner: false,
        loser: false,
        
        gameText: "",

        init : function () {
            this.setAnswer();
            this.setHex();
            this.setAnswerArr();
            this.setDashArr();
            this.gameText = this.prettyText(this.dashArr);
            this.setText();
        },

        prettyText : function(arr) {

            var newArr = []

            for (i =0; i < arr.length; i++) {
                if (arr[i] === " ") {
                    newArr.push("&nbsp;&nbsp;&nbsp;&nbsp;");
                } else {
                    newArr.push(arr[i] + "&nbsp;");
                }
            }

            return newArr.join("");
        },
        
        setAnswer : function () {
            /* ------------------------------------------
            Return a randomly chosen string value from the answer list
            ---------------------------------------------*/
    
            var answerList = ["Apricot", "Asparagus", "Bittersweet", "Black", "Blue", "Blue Green", 
            "Blue Violet", "Brick Red", "Brown", "Burnt Orange", "Burnt Sienna", "Cadet Blue", 
            "Carnation Pink", "Cerulean", "Chestnut", "Cornflower", "Dandelion", "Forest Green",
            "Gold", "Goldenrod", "Granny Smith Apple", "Gray", "Green", "Green Yellow", "Indigo",
            "Lavender", "Macaroni and Cheese", "Magenta", "Mahogany", "Mauvelous", "Melon", 
            "Olive Green", "Orange", "Orchid", "Pacific Blue", "Peach", "Periwinkle", "Plum", 
            "Purple Mountain’s Majesty", "Raw Sienna", "Red", "Red Orange", "Red Violet", "Robin’s Egg Blue", 
            "Salmon", "Scarlet", "Sea Green", "Sepia", "Silver", "Sky Blue", "Spring Green", "Tan",
            "Tickle Me Pink", "Timberwolf", "Tumbleweed", "Turquoise Blue", "Violet", "Violet Red", 
            "White", "Wild Strawberry", "Wisteria", "Yellow", "Yellow Green", "Yellow Orange"
            ];
            
            var randomNum = Math.floor(Math.random() * (64 - 0));
            
            this.answer =  answerList[randomNum];
        },

        setHex : function () {
            var colorMap = {
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
                "Robins Egg Blue": "#00CCCC",
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
                "Yellow Orange": "#FFAE42"
            }
        
            this.hex = colorMap[this.answer];
        },

        setAnswerArr : function () {
            this.answerArr = this.answer.split("");
        },

        setDashArr : function () {
            /* ------------------------------------------
            Returns an array equivalent to answerArr but with letters replaced
                with "_"

            answerArr (array): the answer in array form
            ---------------------------------------------*/

            for (i=0; i < this.answerArr.length; i++) {

                if (this.answerArr[i] === " ") {
                    this.dashArr[i] = " ";
                } else {
                    this.dashArr[i] = "_";
                }
            }
        },

        setText : function () {
            
            document.getElementById("gameText").innerHTML = this.gameText;
            document.getElementById("colorBox").style.backgroundColor = this.hex;

            if (this.first === true) {
                document.getElementById("above").innerHTML = "How Well Do You Know Your Colors?  What's the Color on the Right?";
                document.getElementById("below").innerHTML = ""
                this.first = false;
            } 
            else if (this.winner === true) {
                document.getElementById("above").innerHTML = "You're A Winner!!! You Really Know Your Colors!!!";
                document.getElementById("below").innerHTML = ""
            } 
            else if (this.loser === true) {
                document.getElementById("above").innerHTML = "Sorry you Lose!!!";
                document.getElementById("below").innerHTML = ""
            }
            else if (this.goodGuess === true) {
                document.getElementById("above").innerHTML = "<p>" + this.guess.toUpperCase() + " is a Good Guess!</p>"
                document.getElementById("below").innerHTML = "<p>Your Incorrect Guesses Are " + this.badGuessArr.toString().toUpperCase() + ".</p><p>You have " + (this.badGuessAllowed - this.badGuessCount) + " more guesses.</p>";
            } 
            else {
                document.getElementById("above").innerHTML = "<p>Sorry there are no " + this.guess.toUpperCase() + "'s.</p>"  
                document.getElementById("below").innerHTML = "<p>Your Incorrect Guesses Were: " + this.badGuessArr.toString().toUpperCase() + ".</p><p>You have " + (this.badGuessAllowed - this.badGuessCount) + " more guesses.</p>";
            }


        },

        winCheck : function () {
            
            if (this.badGuessCount === this.badGuessAllowed) {
                this.loser = true;
            } else {
            
                for (i = 0; i < this.answerArr.length; i++) {
                    if (this.dashArr[i] !== this.answerArr[i]) {
                       return 
                    }
                }
                this.winner = true;
            }
        },

        turn : function () {
            
            this.goodGuess = false;

            for (i = 0; i < this.answerArr.length; i++) {
                if (this.answerArr[i].toLowerCase() === this.guess.toLowerCase()) {
                    this.dashArr[i] = this.answerArr[i];
                    this.goodGuess = true;
                }
            }
            
            if (this.goodGuess === false) {
                this.badGuessCount++;
                this.badGuessArr.push(this.guess);
            }
            
            this.gameText = this.prettyText(this.dashArr);
            this.winCheck();

            this.setText();

            // if (this.winner === true || this.loser === true) {
            //     setTimeout(this.init(), 3000);
            // }
            console.log("winner " + this.winner + " loser " + this.loser);
            console.log(this.answerArr === this.dashArr);
            console.log(this.answerArr);
            console.log(this.dashArr);
        }
    
    }


    gamePlay.init();

    document.onkeyup = function(event) {
        gamePlay.guess = event.key;
        gamePlay.turn();    
    }

});