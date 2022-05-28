// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second



// Carousels

$(document).ready(function () {



  let counter = function () {
    let year = new Date().getFullYear()
    let countDownDate = new Date(`Dec 31, ${year} 23:59:59`).getTime();
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    $(".days span").html(days);
    $(".hours span").html(hours);
    $(".minutes span").html(minutes);
    $(".seconds span").html(seconds);
    if (dateDiff < 0) {
      clearInterval(counter);
    }
  }

  counter();

  setInterval(counter, 100)



  $("#landing-carousel").owlCarousel({
    nav: true,
    items: 1,
    rtl: true,
    dots: false,
    loop: true,
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
    dots: true,
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

