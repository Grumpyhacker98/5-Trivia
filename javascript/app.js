var q1 = {
    "is this task difficult?":true
};
var q2 = {
    "am i learning?":true
};
var q3 = {};
var q4 = {};
var q5 = {};
var questions = {q1, q2, q3, q4, q5,};
var currentQ = 0;

function linkInfo(){
    this.question = question;
    this.awnser = awnser
}

// wins losses total questions
var correct = 0;
var wrong = 0;
var remain = 5;

// this variable makes buttons return when the awnser phase is playing
var timerOn = false;

function nextQuest(){
   currentQ++;


}

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
    timerOn = true;
    setTimeout(function() {
        timerOn = false
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

    $("#true").on("click", function() {
        fourSeconds()
    });

    $("#false").on("click", function(){
        if(timerOn){return false}

    });

    $("#restart").on("click", reset);
};

