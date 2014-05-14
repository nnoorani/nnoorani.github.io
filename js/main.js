$(function() {
  $(window).scroll(function() {
    var self = this;
    this.topOfWindow = $(window).scrollTop();
    $('.about-column').each(function() {
    var imagePos = $(this).offset().top;

      if (imagePos < self.topOfWindow+500) {
        $(this).addClass("animated fadeIn");
      }
    });

    $('.og-grid > li > a').each(function() {
    var imagePos = $(this).offset().top;
      if (imagePos < self.topOfWindow+500) {
        $(this).addClass("animated fadeInDown");
      }
    });

    // $('.wrapper').each(function() {
    //   if ( self.topOfWindow < $(this).height()) {
    //     if ($(this).height() > 50 ) {
    //       var top = $(window).scrollTop();
    //       $( this ).height( $(this).height() - top);
    //       window.console.log($(this).height(), top)
    //     }
    //   } else {
    //     $(this).fadeOut();
    //     window.console.log('hi')
    //   }
    // });
  });
});