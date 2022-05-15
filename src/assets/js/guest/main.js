import $ from 'jquery';

// JQUERY
$(function() {
	// Main Navigation sub-categories
	$(document).on('hover', 'li#category', function() {
		$('ul#sub-category', this).stop().show().animate({right: '-34.2rem'}, 300);
	}, function() {
		$('ul#sub-category', this).stop().animate({right: '-35.5rem'}).hide();
	});

	// Accordion
	$(document).on('click', 'div#accordion-header', function() {
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
	$(document).on('click', 'button#mobile-navigation-open', function() {
		$('ul#mobile-navigation-content').animate({left: '0rem'}, 400);
	});
	$(document).on('click', 'button#mobile-navigation-close', function() {
		$('ul#mobile-navigation-content').animate({left: '-16.875rem'}, 400);
	});

	// Display sticky navigation & Back to top button on scroll
	$(window).on('scroll', function() {
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
	$(document).on('click', 'button#back-to-top-button', function() {
		$('html').animate({scrollTop: 0}, 800);
	});

	// Sticky Navigation: Content
	$(document).on('click', 'button#sticky-navigation-button', function() {
		if(!$(this).hasClass('active')) {
			$(this).removeClass('rounded-md').addClass('active rounded-t-md');
			$('ul#sticky-navigation-content').stop().slideDown(500);
		} else {
			$(this).removeClass('active rounded-t-md').addClass('rounded-md');
			$('ul#sticky-navigation-content').stop().slideUp(500);
		};
	});

	// Mobile Navigation: Sub-category
	$(document).on('click', 'button#sub-category', function() {
		$(this).next('ul#sub-category-content').animate({left: '0rem'}, 400);
		
	});
	// Mobile Navigation: Back Button
	$(document).on('click', 'button#mobile-navigation-back', function() {
		$('ul#sub-category-content').animate({left: '-16.875rem'}, 400);
	});

	// Mobile Navigation: Search
	$(document).on('click', 'button#mobile-search-button', function() {
		$('input#mobile-search-input').fadeIn(500);
		$('button#mobile-search-submit').fadeIn(500);
		$('button#mobile-search-close').fadeIn(500);
	});
	$(document).on('click', 'button#mobile-search-close', function() {
		$('input#mobile-search-input').fadeOut(500);
		$('button#mobile-search-submit').fadeOut(500);
		$('button#mobile-search-close').fadeOut(500);
	});

	// Product - Product Description Tabs
	$(document).on('click', 'ul#product-description-tabs li', function() {
		$(this).addClass('text-[#191919]').siblings().removeClass('text-[#191919]');
		$('ul#product-description-tabs-content > li').hide();
		$($(this).data('value')).fadeIn();
	});

	// Product - Modal: Size Guide
	$(document).on('click', 'div#modal-show-size-guide', function() {
		$('div#modal-content-size-guide').fadeIn(500);
	});
	$(document).on('click', 'button#modal-close-size-guide', function() {
		$('div#modal-content-size-guide').fadeOut(500);
	});

	// Primary Navigation Toggle
	$(document).on('click', 'div#primary-navigation-button', function() {
		if(!$(this).hasClass('active')) {
			$('div#primary-navigation-button').addClass('active').removeClass('rounded-b-md');
			$('div#primary-navigation-toggle').stop().slideDown(500);
		} else {
			$('div#primary-navigation-button').addClass('rounded-b-md').removeClass('active');
			$('div#primary-navigation-toggle').stop().slideUp(500);
		}

		$(window).on('scroll', function() {
			if($(this).scrollTop() > 0) {
				$('div#primary-navigation-button').addClass('rounded-b-md').removeClass('active');
				$('div#primary-navigation-toggle').fadeOut();
			}
		});
	});

	// Checkouts - Mobile Order Summary
	$(window).on('click', 'button#mobile-order-summary', function() {
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