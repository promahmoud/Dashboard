$(function () {
    'use strict';
	
    $('#side-nav').scroll(function () {
        if ($(this).scrollTop() >= 10) {
            $('.arrow-nav').fadeOut(600)
            
        } else {
            $('.arrow-nav').fadeIn(600);
        }
    });
    // tooltip
    $('[data-toggle="tooltip"]').tooltip();
});