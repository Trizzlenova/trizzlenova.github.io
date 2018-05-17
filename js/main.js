$(window).scroll(function(){
  $("header").css("opacity", 1 - $(window).scrollTop() / 560);
});

$(document).on('scroll', function(){
  var currPos = $(document).scrollTop();
  var fader = $('.fader');

  fader.each(function(){
    var offset = $(this).offset().top;

    if(currPos > offset) {
      $(this).css('opacity', 1 - (currPos - offset) / 200)
    }
  })
})

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




Play a music note for each picture
that you scroll over. Need to create
an object library for each image
I also need to find a js music library

