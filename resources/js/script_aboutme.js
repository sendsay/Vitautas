var flagDown = true;  //show side panel flag
var offset = 0; // offset page

    $(window).scroll(function() {
        offset = $(window).scrollTop();

        if(offset <= 300) {         
          offset     = offset / 3.33;
          $('#toTop').css({
              'transform': 'rotate(' + offset + 'deg)'
          });
        }
    });

     
    $('#toTop').click(function() {   
      if (offset > 0) {
        $('body, html, footer').animate({scrollTop:0},1000);   
      } else {
        history.back();
      } 
    });   
