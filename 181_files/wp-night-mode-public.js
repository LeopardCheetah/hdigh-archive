var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($) {
	'use strict';
	// Variables

	var wnmCookies = {
		setCookie: function setCookie(key, value, time, path) {
			var expires = new Date();
			expires.setTime(expires.getTime() + time);
			var pathValue = '';

			if (typeof path !== 'undefined') {
				pathValue = 'path=' + path + ';';
			}

			document.cookie = key + '=' + value + ';' + pathValue + 'expires=' + expires.toUTCString();
		},
		getCookie: function getCookie(key) {
			var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
			return keyValue ? keyValue[2] : null;
		}
	};

	// Call Functions
	document.addEventListener("DOMContentLoaded", function(event) {
		// wp_night_mode_turn_on_time();
		wp_night_mode_default();
		wp_night_mode_element_to_button();
		wp_night_mode_button_click();
		wp_night_mode_load_cookie();
	});

	function wp_night_mode_default() {
		if ('1' === wpnmObject.default && null === wnmCookies.getCookie('wpNightMode')) {
			wnmCookies.setCookie('wpNightMode', 'true', 2628000000, '/');
		}
	}

	// Functions
	function wp_night_mode_turn_on_time() {
		var server_time = wpnmObject.server_time;
		var turn_on_time = wpnmObject.turn_on_time;
		var turn_off_time = wpnmObject.turn_off_time;
		// var h = new Date().getHours();
		// var m = new Date().getMinutes();
		// var time = h + ':' + m;
		// console.log(wpnmObject);
		// console.log(server_time);

		// turn on
		if ( server_time >= turn_on_time && server_time <= turn_off_time ) {
			wnmCookies.setCookie('wpNightMode', 'true', 2628000000, '/');
		}
		// turn off
		// if ( server_time >= turn_off_time && server_time <= turn_on_time ) {
		// 	wnmCookies.setCookie('wpNightMode', 'false', 2628000000, '/');
		// }
	}

	function wp_night_mode_element_to_button() {
		var buttonHtml = '';
		var buttonClass = document.querySelectorAll('.wp-night-mode');

		buttonHtml = wpnmObject.button_html;

		for (var i = 0; i < buttonClass.length; i++) {
			buttonClass[i].innerHTML = buttonHtml;
		}
	}

	function wp_night_mode_button_click() {
		var nightModeButton = document.querySelectorAll('.wpnm-button');

		for (var i = 0; i < nightModeButton.length; i++) {
			nightModeButton.item(i).onclick = function (event) {
				event.preventDefault();
				document.body.classList.toggle('wp-night-mode-on');
				for (var i = 0; i < nightModeButton.length; i++) {
					nightModeButton[i].classList.toggle('active');
				}

				if (this.classList.contains('active')) {
					wnmCookies.setCookie('wpNightMode', 'true', 2628000000, '/');
				} else {
					wnmCookies.setCookie('wpNightMode', 'false', 2628000000, '/');
				}
			};
		}
	}

	function wp_night_mode_load_cookie() {
		var nightModeButton = document.querySelectorAll('.wpnm-button');

		if ('true' === wnmCookies.getCookie('wpNightMode')) {
			document.body.classList.add('wp-night-mode-on');
			for (var i = 0; i < nightModeButton.length; i++) {
				nightModeButton[i].classList.add('active');
			}
		} else {
			document.body.classList.remove('wp-night-mode-on');
			for (var i = 0; i < nightModeButton.length; i++) {
				nightModeButton[i].classList.remove('active');
			}
		}
	}
})(jQuery);


}
/*
     FILE ARCHIVED ON 12:52:23 Jan 04, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:50:49 Jan 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 86.757
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.062
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 63.395 (3)
  PetaboxLoader3.datanode: 116.744 (5)
  load_resource: 386.342 (2)
  PetaboxLoader3.resolve: 327.986 (2)
*/