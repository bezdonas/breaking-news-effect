/*
 *  "Breaking news" effect popup for realization of
 *  growing and twisting block like here:
 *  http://www.youtube.com/watch?v=VXyE7UD4xXw&feature=youtu.be&t=44s
 *  via html css3 and javascript.
 *	To be concrete, I'm using css3-transitions
 *  and jQuery plugin jquery.transit.js
 *  fallbacking to jQuery animate method
 *
 *  
 *  @author	Aliev Ramil
 *  @email bezdonas@gmail.com
 *
 *  https://github.com/bezdonas/breaking-news-effect/
 */



// Global variable
var g = {};



// Module of "Breaking effect"
g.Breaking = function () {

	// Private zone

	// Variables
	var link = $('#thumb1'),
		full = link.attr('href'),
		img = link.find('.thumbnail__img');


	// Funcs



	return  {

		// Common zone

		// Variables
		s: {

		},

		// Funcs
		init: function() {
			this.preloadFull();
			this.bindClick();
		},

		preloadFull: function() {
			var fullImg = new Image;
			fullImg.src = full;
			fullImg = $(fullImg);
		},

		bindClick: function() {
			var me = this;

			link.on('click', function() {
				me.startAnimation();
				return false;
			});
		},

		startAnimation: function() {

			// Variables
			var w = $(window),
				b = $('body'),
				wHeight = w.height(),
				wWidth = w.width(),
				imgHeight = img.height(),
				imgWidth = img.width(),
				imgRatio = imgWidth / imgHeight,
				afterMarginLeft = -(imgWidth / 2),
				afterWidth = wHeight * imgRatio,
				afterMarginLeft = -(afterWidth / 2);

			b.addClass('body_overflow_hidden');

			link.addClass('thumbnail__link_hover_disabled');
			img.attr('src', full);

			link.transition({

				'height': wHeight + 'px',
				'top': '0px',
				'width': afterWidth + 'px',
				'margin-top': '0px',
				'margin-left': afterMarginLeft + 'px',
				'rotate': '1800deg'

			}, 1000, 'easeOutCubic', function() {

				// for some reason just callback is not enough
				window.setTimeout(function() {
					b.removeClass('body_overflow_hidden');
				}, 500)

			});

		}


	};

}();



// Kick-out party

// No transitions? Then use jQuery animations
if (!Modernizr.csstransitions) {
	$.fn.transition = $.fn.animate
}

// Init of main module
g.Breaking.init()