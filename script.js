let secAbout = document.querySelector(".section-about");
let secFeat = document.querySelector(".section-features");

let head1 = document.querySelector(".head-one");
let head2 = document.querySelector(".head-two");
let head3 = document.querySelector(".head-three");

let contn = document.querySelector(".anim-right");
let imgs = document.querySelector(".composition");
let img1 = document.querySelector(".composition__photo--p1");
let img2 = document.querySelector(".composition__photo--p2");
let img3 = document.querySelector(".composition__photo--p3");
let fet1 = document.querySelector(".one");
let fet2 = document.querySelector(".two");
let fet3 = document.querySelector(".three");
let fet4 = document.querySelector(".four");
let card1 = document.querySelector(".card-1");
let card2 = document.querySelector(".card-2");
let card3 = document.querySelector(".card-3");
let booking = document.querySelector(".book");

// let str = document.querySelector(".story");
let story1 = document.querySelector(".story-one");
let story2 = document.querySelector(".story-two");

let navbg = document.querySelector(".navigation__background");
let nav = document.querySelector(".navigation__nav");
let navbtn = document.querySelector(".navigation__button");
let navIcon = document.querySelector(".navigation__icon");
let navLink = document.querySelectorAll(".navigation__link");
let navTop = document.querySelector(".navigation__top");
let navMiddle = document.querySelector(".navigation__middle");
let navBottom = document.querySelector(".navigation__bottom");
// let navCheck = document.getElementById("navi__toggle");
let navCheck = document.querySelector(".navigation__checkbox");

let s1 = 350;
let s2 = 550;
let s3 = 1110;
let s4 = 1800;
let s5 = 2000;
let s6 = 2950;
let s7 = 3000;
let s8 = 3250;
// let s9 = 4700;

window.addEventListener("scroll", function () {
  if (this.document.documentElement.clientWidth < 600) {
    s1 = 200;
    s2 = 300;
    s3 = 1000;
    s4 = 1550;
    s5 = 1700;
  }
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > s1) {
    head1.style.animation = "moveLeft .8s ease-out";
    head1.style.opacity = "1";
  }
  if (this.document.documentElement.scrollTop > s2) {
    contn.style.animation = "moveRight .9s ease-out";
    contn.style.opacity = "1";
    img1.style.animation = "moveLeft .9s ease-out";
    img2.style.animation = "moveLeft 1.3s ease-out";
    img3.style.animation = "moveLeft 1.1s ease-out";
    imgs.style.opacity = "1";
  }
  if (this.document.documentElement.scrollTop > s3) {
    fet1.style.animation = "moveRight 1.1s ease-out";
    fet2.style.animation = "moveRight .9s ease-out";
    fet3.style.animation = "moveLeft .9s ease-out";
    fet4.style.animation = "moveLeft 1.1s ease-out";
    fet1.style.opacity = "1";
    fet2.style.opacity = "1";
    fet3.style.opacity = "1";
    fet4.style.opacity = "1";
  }
  if (this.document.documentElement.scrollTop > s4) {
    head2.style.animation = "moveLeft .8s ease-out";
    head2.style.opacity = "1";
  }

  if (this.document.documentElement.scrollTop > s5) {
    card1.style.animation = "moveRight 1.2s ease-out";
    card2.style.animation = "moveRight 1.1s ease-out";
    card3.style.animation = "moveLeft 1.1s ease-out";
    card1.style.opacity = "1";
    card2.style.opacity = "1";
    card3.style.opacity = "1";
  }

  if (this.document.documentElement.scrollTop > s6) {
    head3.style.animation = "moveLeft .9s ease-out";
    head3.style.opacity = "1";
  }

  if (this.document.documentElement.scrollTop > s7) {
    story1.style.animation = "moveRightSt .9s ease-out";

    story1.style.opacity = "1";
  }

  if (this.document.documentElement.scrollTop > s8) {
    story2.style.animation = "moveLeftSt .9s ease-out";
    story2.style.opacity = "1";
  }
});

navbtn.addEventListener("click", function () {
  navbg.style.transition = "transform 0.7s cubic-bezier(0.86, 0, 0.07, 1)";
  nav.style.transition = "all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
  if (nav.style.opacity === "") {
    nav.style.opacity = "1";
    nav.style.width = "100%";
    navbg.style.transform = "scale(60)";
  } else {
    nav.style.opacity = "";
    nav.style.width = "0";
    navbg.style.transform = "scale(0)";
  }
});

navLink.forEach(function (i) {
  i.addEventListener("click", function () {
    navbg.style.transform = "scale(0)";
    nav.style.opacity = "";
    nav.style.width = "0";
    navbg.style.transform = "scale(0)";
    navCheck.checked = false;
  });
});
