/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Nugit-Icon-Font\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ng-keyboard-arrow-down': '&#xe908;',
		'ng-keyboard-arrow-left': '&#xe909;',
		'ng-keyboard-arrow-right': '&#xe90a;',
		'ng-keyboard-arrow-up': '&#xe90b;',
		'ng-Invite': '&#xe906;',
		'ng-edit': '&#xe900;',
		'ng-sort': '&#xe907;',
		'ng-phone': '&#xe901;',
		'ng-check-circle-outline': '&#xe902;',
		'ng-group': '&#xe903;',
		'ng-laptop': '&#xe904;',
		'ng-tablet': '&#xe905;',
		'ng-arrow-drop-right': '&#xe61d;',
		'ng-add': '&#xe600;',
		'ng-arrow-back': '&#xe601;',
		'ng-arrow-drop-up': '&#xe602;',
		'ng-arrow-forward': '&#xe603;',
		'ng-check-box': '&#xe604;',
		'ng-check': '&#xe605;',
		'ng-clear': '&#xe606;',
		'ng-credit-card': '&#xe607;',
		'ng-delete': '&#xe608;',
		'ng-drive-ms-powerpointcopy': '&#xe609;',
		'ng-error': '&#xe60a;',
		'ng-event': '&#xe60b;',
		'ng-filter': '&#xe60c;',
		'ng-headset-mic': '&#xe60d;',
		'ng-help': '&#xe60e;',
		'ng-mail': '&#xe60f;',
		'ng-menu': '&#xe610;',
		'ng-more-horiz': '&#xe611;',
		'ng-more-vert': '&#xe612;',
		'ng-news': '&#xe613;',
		'ng-remove': '&#xe614;',
		'ng-reply': '&#xe615;',
		'ng-search': '&#xe616;',
		'ng-send': '&#xe617;',
		'ng-settings': '&#xe618;',
		'ng-sms': '&#xe61b;',
		'ng-warning': '&#xe61c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ng-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
