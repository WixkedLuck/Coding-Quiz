var $StartParagraph = $('#Quiz');
var $Counter =$('#Time');
var $Intro = $('#intro');
var $StartBtn = $('#StartBtn');
var $SecondLine = $('#SecondLine');
var $Answer1 = $('#Ans1');
var $Answer2 = $('#Ans2');
var $Answer3 = $('#Ans3');
var $Answer4 = $('#Ans4');
var $textbox = $('#input');
var $btnScore= $('#High-Score');
var $endBtn= $('#EndBtn');
var $Refresh= $('#Refresh');
var $ClearBtn= $('#Clear');
var $Choices= $('#AnswerChoice');
var Score = timeLeft;
var timeLeft = 1000;
var timenow=0;
var max_chars = 3;
const NumberofHighScores=10; 


// localStorage.setItem(High_Scores, 'Null'); 
// const HighscoreString =localStorage.getItem(High_Scores);
// const highScores=JSON.parse(HighscoreString) ?? [];
// const lowestScore= highScores[NumberofHighScores-1]?.score ?? 0;


 //Hide all elements to begin 
 $Intro.hide();
 $SecondLine.hide();
 $Answer1.hide();
 $Answer2.hide();
 $Answer3.hide();
 $Answer4.hide();
 $textbox.hide();
 $endBtn.hide();
 $Refresh.hide();
 $ClearBtn.hide();


//Intro to Quiz 
$Intro.show();
$StartParagraph.text("Coding Challenge Quiz");
$Intro.text("Welcome! Try your luck at answering code-related questions within the time limit. Keep in mind with each wrong answer it will affect your overall score.")
$StartBtn.text("Start");
$StartParagraph.append();
$Counter.text('Time: '+timeLeft); 


//Timer Function
function countdownTimer() {
   $StartBtn.hide();
   $btnScore.prop('disabled', true);
  Questions();
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        $Counter.text('Time: '+timeLeft); 
        // Decrement `timeLeft` by 1
        timeLeft--;
      } 
       else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        $Counter.text("");
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        endGame();
       
      }
    }, 1000);
  }

//Function to Start Questions 
function Questions(){
 $Answer1.show();
 $Answer2.show();
 $Answer3.show();
 $Answer4.show();
  $Intro.text('What is the use of isNaN function?');
 
  $Answer1.text('isNan function returns true if the argument is not a number; otherwise, it is false.');
  $Answer2.text('isNan function returns false if the argument is not a number; otherwise, it is true.');
  $Answer3.text('isNan function sets the value to UNDEFINED');
  $Answer4.text('Idk... What is isNan?');

 
}


//End game function enter intials and show score 
function endGame(event) {
  $Intro.hide();
  $StartBtn.hide();
  $Answer1.hide();
  $Answer2.hide();
  $Answer3.hide();
  $Answer4.hide();
  $textbox.show()
  

    $StartParagraph.text("Your final Score is: " + timenow);
    $SecondLine.text("Please enter your Intials");
    $SecondLine.show();
    $endBtn.text("Save");
    $endBtn.show();


    $textbox.keydown(function (e) {
        if ($(this).val().length >= max_chars) {
            $(this).val($(this).val().substr(0, max_chars));
        }
    });

    $textbox.keyup(function (e) {
        if ($(this).val().length >= max_chars) {
            $(this).val($(this).val().substr(0, max_chars));
        }
    });


}

//Shows High Scores function
function HighScores(){
  $endBtn.hide();
  $StartBtn.hide();
  $Intro.hide();
  $SecondLine.hide();
  $textbox.hide();
  $Refresh.show();
  $ClearBtn.show();
  $Refresh.text("Go Back");
  $StartParagraph.text("Coding Challenge Quiz High Scores:");


  var StoreDate=JSON.parse(localStorage.getItem("ScoreData"))|| []
  for(var i=0; i<StoreDate.length; i++ ){
    var intials=StoreDate[i].userInt;
    var score=StoreDate[i].UserScore;
    //$('li').text=("Initials: "+intials+ " Score:"+ score);
    $('#unordered').append($('li').text=("Initials: "+intials+ " Score:"+ score));


  }
    

 


}

function SaveHighscoress(){
  var userInt=$textbox.val();
  var UserScore=timenow;
  var newScore={
    userInt: userInt,
    UserScore: UserScore
  }
  var highscoreData=JSON.parse(localStorage.getItem("ScoreData"))|| []
  highscoreData.push(newScore);
  console.log(userInt)
  localStorage.setItem("ScoreData",JSON.stringify(highscoreData));

}

function answeredQuestion(event){
  console.log("before: "+timeLeft);
//console.log(event.target);
var userChoice=event.target.innerHTML;
if(userChoice!=='isNan function returns true if the argument is not a number; otherwise, it is false.'){
timeLeft-=10; 
endGame();
console.log(timeLeft);
timenow=timeLeft;
}
endGame();
console.log(timeLeft);


}


//start game
 $StartBtn.on('click', countdownTimer)  ;

//shows highscore page 
 $btnScore.on('click', function(event){
  HighScores();
 }) ; 

//button for intials 
 $endBtn.on('click', function () {
 



SaveHighscoress();
  HighScores();
   });


//refresh page 
   $Refresh.on('click',function(){
    window.location.reload;

   });
   $ClearBtn.on('click',function(){
    localStorage.clear();
   });

   //Answer button click 
$Choices.on('click', answeredQuestion)

//console.log(timeLeft);