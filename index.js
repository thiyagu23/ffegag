const btn = document.querySelector('.play-btn')

btn.addEventListener("click", function() {

  // first dicee

  let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  let randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  // second dicee

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  // choosing a winner

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

});
