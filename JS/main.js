// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelectorِ(".days span").innerHTML = days;
  document.querySelectorِ(".hours span").innerHTML = hours;
  document.querySelectorِ(".minutes span").innerHTML = minutes;
  document.querySelectorِ(".seconds span").innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Carousels

$(document).ready(function () {
  

  $("#landing-carousel").owlCarousel({
    nav: true,
    items: 1,
    rtl: true,
    dots: false,
    loop: true,
    // smartSpeed :900,
    nav: true,
    navText: [
      "<img src='../assets/images/arrow-right.svg'>",
      "<img src='../assets/images/arrow-left.svg'>",
    ],
    autoplay: true,
  });


  $("#partners-carousel").owlCarousel({
    nav: true,
    items: 4,
    rtl: true,
    dots: false,
    loop: true,
    // smartSpeed :900,
    nav: true,
    navText: [
      "<img src='../assets/images/arrow-right.svg'>",
      "<img src='../assets/images/arrow-left.svg'>",
    ],
    autoplay: true,
  });

});
