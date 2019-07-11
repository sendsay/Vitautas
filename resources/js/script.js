var flagDown = false;  //show side panel flag
var scrollTime = 1000;  // scrolling page time
var year = new Date();      // get date (for year);

$(function() { 
    $(window).scroll(function() {   
      if($(this).scrollTop() > 300) { 
        if (flagDown == false) {
          $('.icon-bar').animate({ left: "0px" });
          $('#toTop').animate({ bottom: "30px"});  
          flagDown = true;
        }    
      } else {   
        if (flagDown == true) {
          $('.icon-bar').animate({ left: "-100px" });
          $('#toTop').animate({ bottom: "-80px"});          
          flagDown = false;
        }
      }         
    });
     
    $('#toTop').click(function() {   
      $('body, html, footer').animate({scrollTop:0}, scrollTime);      
    });   

    $('.section-shop').click(function() {
      document.location.href = "shop_select.html";
    });
});

// scroll for all anchors
$(document).ready(function(){
    $('a[href*=\\#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, scrollTime);
    e.preventDefault();
    });
    return false;
});

document.getElementById("year").innerHTML = year.getFullYear();
