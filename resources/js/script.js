

$(function() { 
    $(window).scroll(function() {   
      if($(this).scrollTop() > 300) {   
        $('.icon-bar').animate({left: "0px"});  //hide side panel
        $('#toTop').fadeIn(300);  
      } else {   
        if($(this).scrollTop() < 10) {
        $('.icon-bar').animate({left: "-60px"});  //hide side panel
        $('#toTop').fadeOut(300);   
        }
      }         
    });
     
    $('#toTop').click(function() {   
      $('body, html, footer').animate({scrollTop:0},1000);
      $('.icon-bar').animate({left: "-60px"});  //hide side panel   
      
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
