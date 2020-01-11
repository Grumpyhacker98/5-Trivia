var q1 = new triviaQ("is this hard?",true)
var q2 = new triviaQ("will i learn?",true)
var q3 = new triviaQ("placeholders",false)
var q4 = new triviaQ("placeholders",false)
var q5 = new triviaQ("placeholders",false)
var questions = {q1, q2, q3, q4, q5,};
var currentQ = 0;


function triviaQ(question, awnser){
    this.question = question;
    this.awnser = awnser
}

// wins losses total questions
var correct = 0;
var wrong = 0;
var remain = 5;

// this variable makes buttons return when the awnser phase is playing
var timerOn = false;

function nextQuest(q){
   currentQ++;
   console.log(q.question)


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
    timerOn = false;
    currentQ = 0;
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
    
    // nextquestion
}
function sevenSeconds(){
    if (timerOn){
        return false;
    }
    timerOn = true;
    setTimeout(function() {
        timerOn = false;
    }, 7000);

    // times up!
}

// on page load and when the timers allow
// the 4 answer buttons
// function(answer-value)
window.onload = function() {

    $("#true").on("click", function() {
        fourSeconds()
        nextQuest(questions[currentQ])
    });

    $("#false").on("click", function(){

    });

    $("#restart").on("click", function(){
        reset()
    });
};

