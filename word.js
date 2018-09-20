var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    this.underscoreArray = [];
    this.letterArray = [];
    this.strArray = [];
    this.wordSplitter = function () {
        for (var i = 0; i<this.word.length; i++) {
            this.letterArray[i] = "_";
        }
    }

    this.showTheLetters = function(){
        var strArray = this.word.split();  
        console.log(strArray)
        for (var i = 0; i<this.strArray.length; i++)
        {
            this.letters.push( new Letter(strArray[i]) );
        }
    
    }

}

module.exports = Word;