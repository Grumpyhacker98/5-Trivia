var q1 = {};
var q2 = {};
var q3 = {};
var q4 = {};
var q5 = {};
var questions = {q1, q2, q3, q4, q5,};

// wins losses total questions
var correct = 0;
var wrong = 0;
var remain = 5;

// this variable makes buttons return when the awnser phase is playing
var timerOn = true;



// game logic function (the answer value)
// push a trial
// true or false logic
// push correct incorrect values

// reset game function
function reset(){
    correct = 0;
    wrong = 0;
    remain = 5;
}

// timer functions for phases
function fourSeconds(){
    if (timerOn){
        return false;
    }
    console.log("start")
    timerOn = true;
    setTimeout(function() {
        timerOn = false
        console.log("end")
      }, 4000);
}
function sevenSeconds(){
    if (timerOn){
        return false;
    }
    timerOn = true;
    setTimeout(function() {
        timerOn = false;
      }, 7000);
}

// on page load and when the timers allow
// the 4 answer buttons
// function(answer-value)
window.onload = function() {
    $("#true").on("click", this.fourSeconds);
    $("#false").on("click", this.fourSeconds);
};



//   start the game and run a for loop, every array has 
