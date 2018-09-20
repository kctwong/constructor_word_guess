function Letter(letter) {
    this.char = letter;
    this.guessed = false;
    
    this.returns = function(){
        if (this.guessed == true){
            return this.char;
        } else{
            return "_";
        }
    };
    
    this.check = function(check){
        if (this.char == check){
            this.guessed = true;
            return 1;
        } else{
            return 0;
        }
    };
  
    this.printStats = function() {
        console.log("Char: "+ this.char + " Guessed: " + this.guessed);
    };
};

module.exports = Letter;