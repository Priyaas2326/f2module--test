const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const form = document.getElementById("form");
const display = document.getElementById("display");
const displayName = document.getElementById("display-name");
const displayUsername = document.getElementById("display-username");
const dice = document.getElementById("dice");
const diceImg = document.getElementById("dice-img");
const result = document.getElementById("result");

const couponCode = document.getElementById("coupon-code");

img1.addEventListener("click", function () {
  form.style.display = "block";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  displayName.innerHTML = `Name: ${name}`;
  displayUsername.innerHTML = `Username: ${username}`;
  form.style.display = "none";
});

img2.addEventListener("click", function () {
  display.style.display = "block";
});

let sum = 0;
let count = 0;


const imgs = document.querySelectorAll("img");
imgs.forEach(function (img) {
  img.addEventListener("click", function () {
    form.style.display = "none";
    display.style.display = "none";
    dice.style.display = "none";
    coupon.style.display = "none";

    if (img.id === "img1") {
      form.style.display = "block";
    } else if (img.id === "img2") {
      display.style.display = "block";
    } else if (img.id === "img3") {
      dice.style.display = "block";
    } else if (img.id === "img4") {
      coupon.style.display = "block";
    }
  });
});

let attempt = 1;

img3.addEventListener("click", function () {
  if (!dice.style.display) {
    dice.style.display = "block";
  }
});

diceImg.addEventListener("click", function () {
  if (count < 3) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    result.innerHTML += `${randomNumber} `;
    sum += randomNumber;
    count++;
  }
  if (count === 3) {
    if (sum > 10) {
      img4.style.display = "block";
    } else {
      if (attempt === 1) {
        result.innerHTML = "Try again after scoring more than 10.";
        sum = 0;
        count = 0;
        attempt++;
      } else {
        result.innerHTML = "You have exceeded the number of attempts.";
      }
    }
  }
});
document.getElementById("dice").addEventListener("click", shake);
img4.addEventListener("click", function () {
    if (!coupon.style.display) {
        coupon.style.display = "block";
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 12; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        couponCode.innerHTML = text;
        congrats.style.display = "block";
      }
    });


    
    img4.addEventListener("click", generateCoupon);
    
    const coupon = Math.floor(Math.random() * 1000000000000).toString();
document.getElementById("coupon").innerHTML = coupon;
document.getElementById("congrats-img").style.display = "block";

let rolls = 0;
let total = 0;
let tries = 0;

function rollDice() {
  if (rolls === 3) {
    return;
  }
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  total += diceRoll;
  rolls++;
  document.getElementById("dice-rolls").innerHTML += diceRoll + " + ";
  if (rolls === 3) {
    document.getElementById("dice-rolls").innerHTML =
      "Total: " + total + "<br>" + document.getElementById("dice-rolls").innerHTML;
    if (total > 10) {
      document.getElementById(" fourth-img").style.display = "block";
    } else if (tries === 1) {
      document.getElementById("dice-rolls").innerHTML = "Bad luck";
    } else {
      tries++;
      rolls = 0;
      total = 0;
      document.getElementById("dice-rolls").innerHTML = "Roll again to get over 10<br>";
    }
  }
}

