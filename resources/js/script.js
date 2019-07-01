var flagDown = false;  //show side panel flag
var scrollTime = 1000;  // scrolling page time

$(function() { 
    $(window).scroll(function() {   
      if($(this).scrollTop() > 300) { 
        if (flagDown == false) {
          $('.icon-bar').animate({ left: "0px" });
          $('#toTop').animate({ bottom: "10px"});  
          flagDown = true;
        }    
      } else {   
        if (flagDown == true) {
          $('.icon-bar').animate({ left: "-60px" });
          $('#toTop').animate({ bottom: "-90px"});          
          flagDown = false;
        }
      }         
    });
     
    $('#toTop').click(function() {   
      $('body, html, footer').animate({scrollTop:0}, scrollTime);      
    });   
});

// scroll for all anchors
$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, scrollTime);
    e.preventDefault();
    });
    return false;
});
