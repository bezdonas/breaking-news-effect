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
		img = $('#full1');


	// Funcs



	return  {

		// Common zone

		// Variables


		// Funcs
		init: function() {
			this.preloadFull();
			this.bindClick();
		},

		preloadFull: function() {
			var img = new Image;
			img.src = full;
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
				wHeight = w.height(),
				wWidth = w.width();

			console.log(wHeight);
			console.log(wWidth);
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