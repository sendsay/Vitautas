

$(function() { 
    $(window).scroll(function() {   
      if($(this).scrollTop() > 300) {   
        $('.icon-bar').animate({left: "0px"});  //hide side panel
        $('#toTop').fadeIn();  
      } else {   
        if($(this).scrollTop() < 10) {
        $('.icon-bar').animate({left: "-60px"});  //hide side panel
        $('#toTop').fadeOut();   
        }
      }         
    });
     
    $('#toTop').click(function() {   
      $('body,html, footer').animate({scrollTop:0},600);
      $('.icon-bar').animate({left: "-60px"});  //hide side panel   
      
    });   
});
