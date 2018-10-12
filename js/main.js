// ---------------------------------
// Navigation Bar
// ---------------------------------

$('#hamburger').on('click', function(){
  $('#hamburger').css('display', 'none');
  $('#sticky').css('display','block');
});

// ---------------------------------
// Header Fade
// ---------------------------------

$(window).scroll(function(){
  $("header").css("opacity", 1 - $(window).scrollTop() / 400);
});

// ---------------------------------
// Carousel
// ---------------------------------

$('.fadeScroll').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false
});

$('.slickGallery').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: true,
  fade: true,
  cssEase: 'linear'
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 650);
    return false;
});

// ---------------------------------
// Image Zoom
// ---------------------------------

// $('#projects img').on('mouseenter', function() {
//   $(this).toggleClass('zoom');
// });

// ---------------------------------
// Music Idea
// ---------------------------------

// Play a music note for each picture
// that you scroll over. Need to create
// an object library for each image
// I also need to find a js music library

// $('#projects img').on('mouseenter', function(){
//   console.log("hover")
//   var sound = new Audio('sounds/exampleNote.wav');
//   sound.play();
// });



// ---------------------------------
// NASA API
// ---------------------------------

var url = "https://api.nasa.gov/planetary/apod?api_key=taN7yRSSTWnRu4IeLrwlfaZJuD70ldfEFMyIdXm7";

$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: url,
    success: function (response) {
      $('#space h1').append(response.title);
      $('#space h3').append(response.date);
      $('#space p').append(response.explanation);
      if(response.media_type === "video") {
        $('#spaceHead').css('display', 'none');
        $("#spaceHead").attr('src', response.url);
        console.log(response.url);
      } else {
        $('#spaceVid').css('display', 'none');
        $('#spacePic').attr('src', response.url);
      }
    }
  });
})

