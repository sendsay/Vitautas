var flagDown = true;  //show side panel flag

    $(window).scroll(function() {
        var offset = $(window).scrollTop();

        if(offset <= 300) {         
          offset     = offset / 3.33;
          $('#toTop').css({
              'transform': 'rotate(' + offset + 'deg)'
          });
        }
    });

     
    $('#toTop').click(function() {   
      $('body, html, footer').animate({scrollTop:0},1000);      
    });   
