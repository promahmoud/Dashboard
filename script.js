$(function () {
    'use strict';
	
    $('#side-nav').scroll(function () {
        if ($(this).scrollTop() >= 10) {
            $('.arrow').fadeOut(600)
            
        } else {
            $('.arrow').fadeIn(600);
        }
    });
    // tooltip
    $('[data-toggle="tooltip"]').tooltip();
});