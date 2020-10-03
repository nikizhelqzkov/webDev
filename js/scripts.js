$(document).ready(function () {
  $('#mycarousel').carousel({interval: 2000});
  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#carouselButton').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
      $('#carouselButton').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }
  });

  $('#loginModalToggle').click(function () {
    $('#loginModal').modal('toggle');
  });


  $('#reserveModalToggle').click(function () {
    $('#reserve').modal('toggle');
  });

  $('#cancelLogin').click(function () {
    $('#loginModal').modal('toggle');
  });

  $('#cancelLogin2').click(function () {
    $('#loginModal').modal('toggle');
  });
  
  $('#cancelReserve').click(function () {
    $('#reserve').modal('toggle');
  });

  $('#cancelReserve2').click(function () {
    $('#reserve').modal('toggle');
  });
});
