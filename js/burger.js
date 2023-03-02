let navLinks = document.querySelectorAll(".nav-link");
let burgerCheck = document.querySelector(".burger__check");

for (let navLink of navLinks) {
navLink.onclick = function () {
  console.log("YEAH");
  burgerCheck.checked = false;
}; 
}




