var $StartParagraph = $('#Quiz');
var $Intro = $('#intro');
var $StartBtn = $('#StartBtn');
var $SecondLine = $('#SecondLine');
var $Answer1 = $('#Ans1');
var $Answer2 = $('#Ans2');
var $Answer3 = $('#Ans3');
var $Answer4 = $('#Ans4');
var $textbox = $('#input');
var Score = 0;
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
 //$StartBtn.on('click', function () {
// console.log();

// }



