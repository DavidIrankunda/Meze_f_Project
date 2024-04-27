var btn = document.querySelectorAll(".filter-box div");
var foodItems = document.querySelectorAll(".food");

var btnText = "";
var foodItemNames = "";

//eventListener with all filter button
for (var x = 0; x < btn.length; x++) {
  btn[x].addEventListener("click", function () {

    btnText = this.innerText.toLowerCase(); //defined button inner text

    //loop for active filter button style
    for (var a = 0; a < btn.length; a++) {
      if (btnText === btn[a].innerText.toLowerCase()) {
        this.style.background = "darkgreen";
        this.style.color = "darkyellow";
      } else {
        btn[a].style.background = "transparent";
        btn[a].style.color = "darkyellow";
      }
    }

    //fitering all food
    for (var i = 0; i < foodItems.length; i++) {
      foodItemNames = foodItems[i].classList[1];
      if (btnText === foodItemNames) {
        foodItems[i].style.display = "flex";
      } else if (btnText === "all") {
        foodItems[i].style.display = "flex";
      } else {
        foodItems[i].style.display = "none";
      }
    }
  });
}




// // Change the text content of the "breakfast" filter button to "food"
// var breakfastBtn = document.querySelector('.filter-box div:nth-child(1)');
// breakfastBtn.textContent = 'food';