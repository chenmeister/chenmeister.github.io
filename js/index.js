$(document).ready(function(){

	$('.jumbotron .container').one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend',   
		function(e) {

			function getBgUrl(el) {
				var bg = "";
				if (el.currentStyle) { // IE
						bg = el.currentStyle.backgroundImage;
				} else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
						bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
				} else { // try and get inline style
						bg = el.style.backgroundImage;
				}
				return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
			}

			var image = document.createElement('img');
			image.src = getBgUrl(document.getElementById('landing'));
			image.onload = function () {
				$('.layover').fadeTo(2500, 0.0);
			};
	});

});