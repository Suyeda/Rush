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

  if(wScroll > $('#portfolio').offset().top - $(window).height()){

     var offset = (Math.min(0, wScroll - $('#portfolio').offset().top +$(window).height() - 850)).toFixed();

     $('.post1').css({'transform': 'translate('+ offset + "." + 1 + 'px, '+ Math.abs(offset * 0.1) +'px)'});

     var offset2 = (Math.min(0, wScroll - $('#portfolio').offset().top +$(window).height() - 950)).toFixed();

     $('.post2').css({'transform': 'translate('+ offset2 + "." + 2 + 'px, '+ Math.abs(offset2 * 0.1) +'px)'});

      var offset3 = (Math.min(0, wScroll - $('#portfolio').offset().top +$(window).height() - 1050)).toFixed();

     $('.post3').css({'transform': 'translate('+ offset3 + "." + 3 + 'px, '+ Math.abs(offset * 0.1) +'px)'});

   }



})
