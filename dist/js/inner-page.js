webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _jquery = __webpack_require__(1);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _scrollmagic = __webpack_require__(2);\n\nvar _scrollmagic2 = _interopRequireDefault(_scrollmagic);\n\nvar _fadeInScenes = __webpack_require__(3);\n\nvar _fadeInScenes2 = _interopRequireDefault(_fadeInScenes);\n\nvar _svg4everybody = __webpack_require__(6);\n\nvar _svg4everybody2 = _interopRequireDefault(_svg4everybody);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.$ = window.jQuery = _jquery2.default;\n\n\n(0, _fadeInScenes2.default)();\n(0, _svg4everybody2.default)();\n\n(0, _jquery2.default)('.menu-button').on('click touchend', function (e) {\n\te.preventDefault();\n\t(0, _jquery2.default)(this).parents('.header').toggleClass('is-show-menu');\n});\n\nfunction innerHeaderScroll() {\n\n\tvar controller = new _scrollmagic2.default.Controller({\n\t\tcontainer: 'body',\n\t\tloglevel: 2\n\t});\n\n\tvar header = (0, _jquery2.default)('.header');\n\n\tvar scene = new _scrollmagic2.default.Scene({\n\t\toffset: 100,\n\t\ttriggerElement: 'body',\n\t\ttriggerHook: 'onLeave'\n\t}).on('start', function () {\n\t\theader.toggleClass('scrolled');\n\t}).addTo(controller);\n}\n\ninnerHeaderScroll();\n\n// accord\nvar acord = (0, _jquery2.default)('.js-accord'),\n    acordBlock = (0, _jquery2.default)('.js-accord-block');\n(0, _jquery2.default)('.js-accord-top').on('click', function () {\n\tvar this_ = (0, _jquery2.default)(this),\n\t    parent = this_.parents('.js-accord'),\n\t    block = parent.find('.js-accord-block');\n\tif (parent.hasClass('is-active')) {\n\t\tparent.removeClass('is-active');\n\t\tblock.slideUp(300);\n\t} else {\n\t\tacord.removeClass('is-active');\n\t\tacordBlock.slideUp(300);\n\t\tparent.addClass('is-active');\n\t\tblock.slideDown(300);\n\t}\n\tsetTimeout(function () {\n\t\theader_bg();\n\t}, 350);\n\treturn false;\n});\nacord.each(function () {\n\tvar accord = (0, _jquery2.default)(this),\n\t    accordBlock = accord.find(acordBlock);\n\tif (accord.hasClass('is-active')) {\n\t\taccordBlock.show();\n\t};\n});\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvanMvaW5uZXItcGFnZS5qcz8yZGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xuaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljJztcbmltcG9ydCBidWlsZENvbnRlbnRGYWRlU2NlbmVzIGZyb20gJy4vZmFkZS1pbi1zY2VuZXMuanMnO1xuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XG5cbmJ1aWxkQ29udGVudEZhZGVTY2VuZXMoKTtcbnN2ZzRldmVyeWJvZHkoKTtcblxuJCgnLm1lbnUtYnV0dG9uJykub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS50b2dnbGVDbGFzcygnaXMtc2hvdy1tZW51Jyk7XG59KTtcblxuZnVuY3Rpb24gaW5uZXJIZWFkZXJTY3JvbGwoKSB7XG5cbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKHtcbiAgICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICAgIGxvZ2xldmVsOiAyXG4gICAgfSk7XG5cblx0dmFyIGhlYWRlciA9ICQoJy5oZWFkZXInKTtcblxuXHRjb25zdCBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG5cdCAgICBvZmZzZXQ6IDEwMCxcblx0ICAgIHRyaWdnZXJFbGVtZW50OiAnYm9keScsXG5cdCAgICB0cmlnZ2VySG9vazogJ29uTGVhdmUnXG5cdH0pLm9uKCdzdGFydCcsICgpID0+IHtcblx0ICAgIGhlYWRlci50b2dnbGVDbGFzcygnc2Nyb2xsZWQnKTtcblx0fSkuYWRkVG8oY29udHJvbGxlcik7XG5cbn1cblxuaW5uZXJIZWFkZXJTY3JvbGwoKTtcblxuLy8gYWNjb3JkXG52YXIgYWNvcmQgXHRcdD0gJCgnLmpzLWFjY29yZCcpLFxuXHRhY29yZEJsb2NrICA9ICQoJy5qcy1hY2NvcmQtYmxvY2snKTtcbiQoJy5qcy1hY2NvcmQtdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0dmFyIHRoaXNfIFx0PSAkKHRoaXMpLFxuXHRcdHBhcmVudCBcdD0gdGhpc18ucGFyZW50cygnLmpzLWFjY29yZCcpLFxuXHRcdGJsb2NrIFx0PSBwYXJlbnQuZmluZCgnLmpzLWFjY29yZC1ibG9jaycpO1xuXHRpZiAocGFyZW50Lmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuXHRcdHBhcmVudC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cdFx0YmxvY2suc2xpZGVVcCgzMDApO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGFjb3JkLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblx0XHRhY29yZEJsb2NrLnNsaWRlVXAoMzAwKTtcblx0XHRwYXJlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHRcdGJsb2NrLnNsaWRlRG93bigzMDApO1xuXHR9XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7aGVhZGVyX2JnKCk7fSwgMzUwKTtcblx0cmV0dXJuIGZhbHNlO1xufSk7XG5hY29yZC5lYWNoKGZ1bmN0aW9uKCl7XG5cdHZhciBhY2NvcmQgPSAkKHRoaXMpLFxuXHRcdGFjY29yZEJsb2NrID0gYWNjb3JkLmZpbmQoYWNvcmRCbG9jayk7XG5cdGlmIChhY2NvcmQuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG5cdFx0YWNjb3JkQmxvY2suc2hvdygpO1xuXHR9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL2pzL2lubmVyLXBhZ2UuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQURBO0FBYkE7QUFDQTtBQWtCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
]);