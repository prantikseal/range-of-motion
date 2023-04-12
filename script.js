$(window).scroll(function() {
    $('.animate').each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("show");
      }
        if (pos > winTop + 600) {
        $(this).removeClass("show");
        }
    });
    });