"use strict";

let player;
let ai;
let player_score = 0;
let ai_score = 0;
        
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
    let cal = player - ai;
    if (cal === 0) {
        document.getElementById("finish").innerHTML = "It's a draw!";
    } else if (cal === -1 || cal === 2) {
        document.getElementById("finish").innerHTML = "You Lose!!";
        ai_score++;
        document.getElementById("ai_S").innerHTML = ai_score;
    } else {
        document.getElementById("finish").innerHTML = "You Win!!!";
        player_score++;
        document.getElementById("p_S").innerHTML = player_score;
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

function reseter() {
    player_score = 0;
    ai_score = 0;
    document.getElementById("ai_S").innerHTML = ai_score;
    document.getElementById("p_S").innerHTML = player_score;
}