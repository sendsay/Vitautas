
var flagDown = false;  //show side panel flag


$(function() { 
    $(window).scroll(function() {   
      if($(this).scrollTop() > 300) { 
        if (flagDown == false) {
          $('.icon-bar').animate({ left: "0px" });
          $('#toTop').animate({ bottom: "10px"});  
          flagDown = true;
        }    
        // $('#toTop').fadeIn(300);
      

      } else {   
        if($(this).scrollTop() < 1) {
            if (flagDown == true) {
              $('.icon-bar').animate({ left: "-60px" });
              $('#toTop').animate({ bottom: "-90px"});
              
              flagDown = false;
            }
          // $('#toTop').fadeOut(300);  
        //  $('#toTop').animate({ bottom: "-90px"});
        }
      }         
    });
     
    $('#toTop').click(function() {   
      $('body, html, footer').animate({scrollTop:0},1000);
   //   $('.icon-bar').animate({left: "-60px"});  //hide side panel   
      
    });   
});

// scroll for all anchors
$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    });
    return false;
});
