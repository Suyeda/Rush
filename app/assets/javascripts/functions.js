$(window).scroll(function(){

  //Keeps track of how far THIS = WindowScroll has gone from the top
  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /8 + '%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll /4 + '%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, '+ wScroll /3 + '%)'
  });



})
