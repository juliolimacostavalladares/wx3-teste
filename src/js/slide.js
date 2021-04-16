var carousel_1 = document.querySelector(".carousel--1");

var carousel_2 = document.querySelector(".carousel--2");

var carousel_3 = document.querySelector(".carousel--3");

function verificarCheckBox() {
  var check = document.querySelector(".carousel-open");

  for (var i = 0; i < check.length; i++) {
    if (check[i].checked == true) {
      alert(check[i]);
    } else {
      alert("erro");
    }
  }
}
verificarCheckBox();

function carousel3() {
  carousel_3.classList.add("carousel");
}

function carousel2() {
  carousel_2.classList.add("carousel");
}
function carousel1() {
  carousel_1.classList.add("carousel");
}

function carouselR3() {
  carousel_3.classList.remove("carousel");
}

function carouselR2() {
  carousel_2.classList.remove("carousel");
}
function carouselR1() {
  carousel_1.classList.remove("carousel");
}

carousel_1.addEventListener("click", () => {});
