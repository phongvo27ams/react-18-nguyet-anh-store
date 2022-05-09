import $ from 'jquery';

// JQUERY
$(function() {
	// Account Options
	$(document).on('click', 'button#account', function() {
		if(!$('button#account').hasClass('active')) {
			$('button#account').addClass('active')
			$('ul#accountOptions').slideDown(500);
		} else {
			$('button#account').removeClass('active')
			$('ul#accountOptions').slideUp(500);
		}
	});

	// Mobile Navigation Show
	$(document).on('click', 'button#mobileNavigation', function() {
		$('div#mobileNavigation').animate({right: '0'});
	});
	// Mobile Navigation Hide
	$(document).on('click', 'button#mobileNavigationHide', function() {
		$('div#mobileNavigation').animate({right: '1024px'});
	});

	// Form Label Animation
	$(document).on('focus', 'label input', function() {
		$(this).prev('label span').removeClass('text-[#5d6778]').addClass('text-[13px] text-[#15a362] font-[600] px-[4px] top-[-10px]');
	});
});