var flagDown = true;  //show side panel flag
var scrollTime = 1000;  // scrolling page time

var offset = 0; // offset page

$(window).scroll(function() {
    offset = $(window).scrollTop();

    if(offset <= 300) {         
      offset     = offset / 3.33;
      $('#toTopImg').css({
          'transform': 'rotate(' + offset + 'deg)'
      });
    }
});
     
$('#toTopImg').click(function() {   
  if (offset > 0) {
    $('body, html, footer').animate({scrollTop:0}, scrollTime);   
  } else {
    history.back();
  } 
});   
