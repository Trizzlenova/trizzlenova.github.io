$(window).scroll(function(){
  $("header").css("opacity", 1 - $(window).scrollTop() / 560);
});

$(document).on('scroll', function(){
  var currPos = $(document).scrollTop();
  var fader = $('.fader');

  fader.each(function(){
    var offset = $(this).offset().top;

    if(currPos > offset) {
      $(this).css('opacity', 1 - (currPos - offset) / 300);
    }
  })
})

// console.log("works!")

// $(".fadeScroll").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 1000,
//   fade: true,
//   arrows: true,
//   dots: false,
// });

$('.fadeScroll').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 650);
    return false;
});


// Play a music note for each picture
// that you scroll over. Need to create
// an object library for each image
// I also need to find a js music library


//

// $('#projects img').on('mouseenter', function(){
//   console.log("hover")
//   var sound = new Audio('sounds/exampleNote.wav');
//   sound.play();
// });
