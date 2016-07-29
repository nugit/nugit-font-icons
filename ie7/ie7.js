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
		el.innerHTML = '<span style="font-family: \'Nugit-Font-Icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ng-preview': '&#xe928;',
		'ng-add': '&#xe900;',
		'ng-arrow-back': '&#xe901;',
		'ng-arrow-drop-right': '&#xe902;',
		'ng-arrow-drop-up': '&#xe903;',
		'ng-arrow-forward': '&#xe904;',
		'ng-check-box': '&#xe905;',
		'ng-check-circle-outline': '&#xe906;',
		'ng-check': '&#xe907;',
		'ng-clear': '&#xe908;',
		'ng-credit-card': '&#xe909;',
		'ng-default-avatar': '&#xe90a;',
		'ng-delete': '&#xe90b;',
		'ng-download': '&#xe90c;',
		'ng-drive-ms-powerpoint-copy': '&#xe90d;',
		'ng-edit': '&#xe90e;',
		'ng-error': '&#xe90f;',
		'ng-event': '&#xe910;',
		'ng-expand': '&#xe911;',
		'ng-filter': '&#xe912;',
		'ng-group': '&#xe913;',
		'ng-help': '&#xe914;',
		'ng-invite': '&#xe915;',
		'ng-keyboard-arrow-down': '&#xe916;',
		'ng-keyboard-arrow-left': '&#xe917;',
		'ng-keyboard-arrow-right': '&#xe918;',
		'ng-keyboard-arrow-up': '&#xe919;',
		'ng-laptop': '&#xe91a;',
		'ng-mail': '&#xe91b;',
		'ng-menu': '&#xe91c;',
		'ng-more-vert': '&#xe91d;',
		'ng-news': '&#xe91e;',
		'ng-phone': '&#xe91f;',
		'ng-remove': '&#xe920;',
		'ng-reply': '&#xe921;',
		'ng-search': '&#xe922;',
		'ng-send': '&#xe923;',
		'ng-settings': '&#xe924;',
		'ng-sort': '&#xe925;',
		'ng-tablet': '&#xe926;',
		'ng-warning': '&#xe927;',
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
