var randomNumber1 = Math.random();
var randomNumberFloor1 = Math.floor(randomNumber1 * 6) + 1;
var randomImage = ("dice" + randomNumberFloor1 + ".png");
document.querySelector(".img1").setAttribute("src", randomImage);
var randomNumber2 = Math.random();
var randomNumberFloor2 = Math.floor(randomNumber2 * 6) + 1;
var randomImage = ("dice" + randomNumberFloor2 + ".png");
document.querySelector(".img2").setAttribute("src", randomImage);




if (randomNumberFloor1 > randomNumberFloor2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumberFloor1 < randomNumberFloor2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
