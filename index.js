var numberOfWin=0;
var numberOflost=0;

for(var i=1;i<=5;i++)
{
    var guessNumber = parseInt(prompt("Enter Guess number 1 to 5"));

var randomNumber=Math.floor(Math.random()*5)+1;

if(guessNumber==randomNumber)
{
    console.log("you have win");
    numberOfWin++;
}
else
{
    console.log("you have lost. Random Number was :"+randomNumber);
    numberOflost++;
}
}
document.write("Total Number of Win :"+numberOfWin +"<br>");
document.write("Total Number of Lost :"+numberOflost);
