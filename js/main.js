$(window).scroll(function(){
  $("header").css("opacity", 1 - $(window).scrollTop() / 560);
  // $("#about").css("opacity", 1 - $(window)
});

$(window).scroll(function(){
});

// console.log("works!")

$(".fadeScroll").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  fade: true,
  prevArrow: false,
  nextArrow: false
});
