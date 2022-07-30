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
var Score = 0;
var timeLeft = 90;
var max_chars = 3;
 //Hide all elements to begin 
 $Intro.hide();
 $SecondLine.hide();
 $Answer1.hide();
 $Answer2.hide();
 $Answer3.hide();
 $Answer4.hide();
 $textbox.hide();

//Intro to Quiz 
$Intro.show();
$StartParagraph.text("Coding Challange Quiz");
$Intro.text("Welcome! Try your luck at answering code-related questions within the time limit. Keep in mind with each wrong answer it will affect your overall score.")
$StartBtn.text("Start");
$StartParagraph.append();
$Counter.text('Time: '+timeLeft); 


function countdownTimer() {
   $StartBtn.hide();
   $Intro.text('Well Done now the real fun begins')
  
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
        // Call the `displayMessage()` function
       
      }
    }, 1000);
  }







// $Intro.append(); 
// $SecondLine.text("Enter your Intials"); 

function endGame(event) {
    $StartParagraph.text("All Done!");
    $StartParagraph.text("Your final Score is: " + Score);

    $('#input').keydown(function (e) {
        if ($(this).val().length >= max_chars) {
            $(this).val($(this).val().substr(0, max_chars));
        }
    });

    $('#input').keyup(function (e) {
        if ($(this).val().length >= max_chars) {
            $(this).val($(this).val().substr(0, max_chars));
        }
    });


}
 $StartBtn.on('click', countdownTimer)  





