// OWL CAROUSEL
$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop: false,
		nav: true,
		navText: ["<div class='nav-button owl-prev'><i class='fa-solid fa-angle-left'></i></div>", "<div class='nav-button owl-next'><i class='fa-solid fa-angle-right'></i></div>"],
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			640: {
				items: 2,
				margin: 16
			},
			768: {
				items: 2,
				margin: 19
			},
			1024: {
				items: 4,
				margin: 17
			},
			1280: {
				items: 4,
				margin: 20
			}
		}
	});
});

// JQUERY
$(document).ready(function() {
	// Main Navigation sub-categories
	$('li#category').hover(function() {
		$('ul#sub-category', this).stop().show().animate({right: '-34.2rem'}, 300);
	}, function() {
		$('ul#sub-category', this).stop().animate({right: '-35.5rem'}).hide();
	});

	// Accordion
	$('div#accordion-header').click(function() {
		if($(this).next('div#accordion-body').hasClass('active')) {
			$(this).next('div#accordion-body').removeClass('active').slideUp();
			$(this).children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
		} else {
			$('div#accordion-body').removeClass('active').slideUp();
			$('div#accordion-header i').removeClass('fa-angle-up').addClass('fa-angle-down');
			$(this).next('div#accordion-body').addClass('active').slideDown();
			$(this).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
		};
	});

	// Mobile Navigation
	$('button#mobile-navigation-open').click(function() {
		$('ul#mobile-navigation-content').animate({left: '0rem'}, 400);
	});
	$('button#mobile-navigation-close').click(function() {
		$('ul#mobile-navigation-content').animate({left: '-16.875rem'}, 400);
	});

	// Display sticky navigation & Back to top button on scroll
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('nav#sticky-navigation-bar').removeClass('top-[-3rem]').addClass('top-[0rem]');
			$('button#back-to-top-button').removeClass('right-[-2.75rem]').addClass('right-[1rem]');
		} else {
			// Hide the Sticky Navigation Content
			$('ul#sticky-navigation-content').slideUp(500);
			// Hide the Sticky Navigation Bar
			$('nav#sticky-navigation-bar').removeClass('top-[0rem]').addClass('top-[-3rem]');
			// Hide the Back to Top Button
			$('button#back-to-top-button').removeClass('right-[1rem]').addClass('right-[-2.75rem]');
		}
	});

	// Back to top
	$('button#back-to-top-button').click(function() {
		$('html').animate({scrollTop: 0}, 800);
	});

	// Sticky Navigation: Content
	$('button#sticky-navigation-button').click(function() {
		if(!$(this).hasClass('active')) {
			$(this).removeClass('rounded-md').addClass('active rounded-t-md');
			$('ul#sticky-navigation-content').stop().slideDown(500);
		} else {
			$(this).removeClass('active rounded-t-md').addClass('rounded-md');
			$('ul#sticky-navigation-content').stop().slideUp(500);
		};
	});

	// Mobile Navigation: Sub-category
	$('button#sub-category').click(function() {
		$(this).next('ul#sub-category-content').animate({left: '0rem'}, 400);
		
	});
	// Mobile Navigation: Back Button
	$('button#mobile-navigation-back').click(function() {
		$('ul#sub-category-content').animate({left: '-16.875rem'}, 400);
	});

	// Mobile Navigation: Search
	$('button#mobile-search-button').click(function() {
		$('input#mobile-search-input').fadeIn(500);
		$('button#mobile-search-submit').fadeIn(500);
		$('button#mobile-search-close').fadeIn(500);
	});
	$('button#mobile-search-close').click(function() {
		$('input#mobile-search-input').fadeOut(500);
		$('button#mobile-search-submit').fadeOut(500);
		$('button#mobile-search-close').fadeOut(500);
	});

	// Product - Product Description Tabs
	$('ul#product-description-tabs li').click(function() {
		$(this).addClass('text-[#191919]').siblings().removeClass('text-[#191919]');
		$('ul#product-description-tabs-content > li').hide();
		$($(this).data('value')).fadeIn();
	});

	// Product - Modal: Size Guide
	$('div#modal-show-size-guide').click(function() {
		$('div#modal-content-size-guide').fadeIn(500);
	});
	$('button#modal-close-size-guide').click(function() {
		$('div#modal-content-size-guide').fadeOut(500);
	});

	// Primary Navigation Toggle
	$('div#primary-navigation-button').click(function() {
		if(!$(this).hasClass('active')) {
			$('div#primary-navigation-button').addClass('active').removeClass('rounded-b-md');
			$('div#primary-navigation-toggle').stop().slideDown(500);
		} else {
			$('div#primary-navigation-button').addClass('rounded-b-md').removeClass('active');
			$('div#primary-navigation-toggle').stop().slideUp(500);
		}

		$(window).scroll(function() {
			if($(this).scrollTop() > 0) {
				$('div#primary-navigation-button').addClass('rounded-b-md').removeClass('active');
				$('div#primary-navigation-toggle').fadeOut();
			}
		});
	});

	// Checkouts - Mobile Order Summary
	$('button#mobile-order-summary').click(function() {
		if(!$('button#mobile-order-summary').hasClass('active')) {
			$('button#mobile-order-summary').addClass('active');
			$('button#mobile-order-summary i#arrow').removeClass('fa-angle-down').addClass('fa-angle-up');
			$('div#mobile-order-summary-content').slideDown(500);
		} else {
			$('button#mobile-order-summary').removeClass('active');
			$('button#mobile-order-summary i#arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
			$('div#mobile-order-summary-content').slideUp(500);
		}
	});
});