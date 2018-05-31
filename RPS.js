"use strict";

var player;
var ai;
        
function aiMove() {
    ai = Math.ceil(Math.random() * 3);
    if (ai === 1) {
        document.getElementById("aim").innerHTML = "Rock!";
    } else if (ai === 2) {
        document.getElementById("aim").innerHTML = "Paper!";
    } else {
        document.getElementById("aim").innerHTML = "Scissors!";
    }
}
    
function winner() {
    var cal = player - ai;
    if (cal === 0) {
        document.getElementById("finish").innerHTML = "It's a draw!";
    } else if (cal === -1 || cal === 2) {
        document.getElementById("finish").innerHTML = "You Lose!!";
    } else {
        document.getElementById("finish").innerHTML = "You Win!!!";
    }
}
                   
function rocku() {
        player = 1;
        aiMove();
        winner();
}
    
function paperu(){
        player = 2;
        aiMove();
        winner();
}
        
function scissoru(){
        player = 3;
        aiMove();
        winner();
}