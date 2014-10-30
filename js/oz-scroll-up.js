/*
	Plugin Name : oz-scroll-up
	Created By : Osama Elzero
	Website : elzero.info
*/

$(function() {
	var $ele = $('#oz-scroll');
    $(window).scroll(function() {
        $(this).scrollTop() >= 200 ? $ele.show(10).animate({ right : '15px' }, 10) : $ele.animate({ right : '-80px' }, 10);
    });
    $ele.click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });
});
  
