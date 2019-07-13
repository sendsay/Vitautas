var flagDown = false;  //show side panel flag
var scrollTime = 1000;  // scrolling page time
var year = new Date();      // get date (for year)
var pageName = location.href;  //get page name
var offset = 0; // offset page

//always get page name
pageName = pageName.substr(pageName.lastIndexOf("/")); 
//set year to footer
document.getElementById("year").innerHTML = year.getFullYear();

//show buttons toTop and iconBar
$(window).scroll(function() { 
  switch (pageName) {
    case "/index.html" : {
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
    } 
    break;

    //rotate button toTop on page
    case "/aboutme.html" : {
      offset = $(window).scrollTop();
      if(offset <= 300) {         
        offset     = offset / 3.33;
        $('#toTopImg').css({
            'transform': 'rotate(' + offset + 'deg)'
        });
      }
    } 
    break;
  
    default:
      break;
  }
});
     
//click toTOP
$('#toTop').click(function() {
  switch (pageName) {
    case "/index.html":
      $('body, html, footer').animate({scrollTop:0}, scrollTime);
      break;
  
    default:
      if (offset > 0) {
        $('body, html, footer').animate({scrollTop:0}, scrollTime);   
      } else {
        history.back();
      } 
      break;
  } 

        
});   

// click SHOP ICONS (index.html)
$('.section-shop').click(function() {
  document.location.href = "shop_select.html";
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
