$(function() {
	if (!lastTop) {
		var lastTop = 0;
	}

  $(window).scroll(function() {
    var top = $(this).scrollTop(),
    		$nav = $('.nav');
    if (top > lastTop && (top > 0)) {
    	$nav.addClass('nav-hide');
    	$nav.removeClass('nav-show');
    } else {
    	$nav.addClass('nav-show');
    	$nav.removeClass('nav-hide');
    }

    lastTop = top;
  });
});