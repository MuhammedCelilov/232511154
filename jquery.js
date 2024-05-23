$(document).ready(function(){
    // Opaklık ayarla
    $("#btnFadeTo").click(function(){
      $("#myDiv").fadeTo("slow", 0.3);
    });
  
    // Animasyon uygula
    $("#btnAnimate").click(function(){
      $("#myDiv").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  
    // Class ekle
    $("#btnAddClass").click(function(){
      $("#myDiv").addClass("red-text");
    });
  
    // Class kaldır
    $("#btnRemoveClass").click(function(){
      $("#myDiv").removeClass("red-text");
    });
  
    // Class değiştir
    $("#btnToggleClass").click(function(){
      $("#myDiv").toggleClass("blue-background");
    });
  });
  $(document).ready(function(){
    // Div gizle
    $("#btnHide").click(function(){
      $("#myDiv").hide();
    });
  
    // Div göster
    $("#btnShow").click(function(){
      $("#myDiv").show();
    });
  
    // Div göster/gizle
    $("#btnToggle").click(function(){
      $("#myDiv").toggle();
    });
  
    // Yavaşça göster
    $("#btnFadeIn").click(function(){
      $("#myFadeDiv").fadeIn();
    });
  
    // Yavaşça gizle
    $("#btnFadeOut").click(function(){
      $("#myFadeDiv").fadeOut();
    });
  
    // Yavaşça göster/gizle
    $("#btnFadeToggle").click(function(){
      $("#myFadeDiv").fadeToggle();
    });
  
    // Aşağı kaydır
    $("#btnSlideDown").click(function(){
      $("#mySlideDiv").slideDown();
    });
  
    // Yukarı kaydır
    $("#btnSlideUp").click(function(){
      $("#mySlideDiv").slideUp();
    });
  
    // Kaydırarak göster/gizle
    $("#btnSlideToggle").click(function(){
      $("#mySlideDiv").slideToggle();
    });
  });