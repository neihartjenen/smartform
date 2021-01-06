const colors = ['red', 'blue', 'green','yellow']
const images = {
    red: ["apple", "firetruck"],
    blue: ["sky", "water"],
    green: ["grass", "broccoli"],
    yellow: ["sun", "lemon"]
}

let userColor = undefined;
let defaultColor = 'red';
let currentColor = userColor || defaultColor;

for (let color of colors)
    console.log(color);

const colorSelect = document.querySelector("#userColors") 
const imagesContainer = document.querySelector(".images") 
const mapImage = image => `<img src="assets/images/${image}.jpg" alt="${image}">`

colorSelect.addEventListener("change", function () {
    currentColor = colorSelect.value;
    const imageElements = images[currentColor].map(mapImage).join('');
    imagesContainer.innerHTML = imageElements;
});

let inputNumber = undefined;

 var submitButton = document.getElementById("submit_form");
 
 const favNumber = document.getElementById("favoriteNumber")


 var form = document.getElementById("javascript_form");
 var err = document.getElementById("err")
 form.addEventListener("submit", function (e) {
    e.preventDefault();

if (favNumber.value <= 0) {
     err.innerText = "Negative numbers are cool"
  }
  else if (favNumber.value <= 10) {
    err.innerText = "Something between zero and ten, nice choice"
 }
  else if (favNumber.value > 10) {
    err.innerText = "Big Number! Nice Choice."
 }
  else {
      err.innerText = "please choose a number."
 }
     console.log(favNumber.value, "fav num")
     setTimeout(function() {
         submitButton.value = "Sending...";
         submitButton.disabled = true;
     }, 1); 
 });






 