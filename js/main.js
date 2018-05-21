$(window).scroll(function(){
  $("header").css("opacity", 1 - $(window).scrollTop() / 560);
});

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

// $('#projects img').on('mouseenter', function(){
//   console.log("hover")
//   var sound = new Audio('sounds/exampleNote.wav');
//   sound.play();
// });

var url = "https://api.nasa.gov/planetary/apod?api_key=taN7yRSSTWnRu4IeLrwlfaZJuD70ldfEFMyIdXm7";


$(document).ready(function() {
  console.log("Let's get coding!");
  $.ajax({
    method: 'GET',
    url: url,
    success: function (response) {
      console.log(response);
      console.log(response.date);
      console.log(response.url);
      $('#space h1').append(response.title);
      $('#space h3').append(response.date);
      $('#space p').append(response.explanation);
      $('#spacePic').attr('src', response.url);
    }
  });
    // $('spacePic').attr('src', response.url);
    // $('space h1').text(response.title);
})

