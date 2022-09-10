$(document).ready(function() {
  //to hide preloader
  $(".preloader").fadeOut();
  //preview image product
  $('.img-preview').magnificPopup({type:'image'});
  //owl slider
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:2
      },
      768:{
          items:3
      },
      1000:{
          items:4
      }
    }
  })
});
