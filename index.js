var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generates random number from 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; 
var randomImageSource = "images/" + randomDiceImage;
document.getElementById("dicee1").setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.getElementById("dicee2").setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.getElementById("winner").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.getElementById("winner").innerHTML = "Player 2 wins!🚩";
} else {
    document.getElementById("winner").innerHTML = "Draw!";
}