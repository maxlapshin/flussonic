webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _jquery = __webpack_require__(1);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _scrollmagic = __webpack_require__(2);\n\nvar _scrollmagic2 = _interopRequireDefault(_scrollmagic);\n\nvar _fadeInScenes = __webpack_require__(3);\n\nvar _fadeInScenes2 = _interopRequireDefault(_fadeInScenes);\n\nvar _svg4everybody = __webpack_require__(6);\n\nvar _svg4everybody2 = _interopRequireDefault(_svg4everybody);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.$ = window.jQuery = _jquery2.default;\n\n\n(0, _fadeInScenes2.default)();\n(0, _svg4everybody2.default)();\n\n// accord\nvar acord = (0, _jquery2.default)('.js-accord'),\n    acordBlock = (0, _jquery2.default)('.js-accord-block');\n(0, _jquery2.default)('.js-accord-top').on('click', function () {\n\tvar this_ = (0, _jquery2.default)(this),\n\t    parent = this_.parents('.js-accord'),\n\t    block = parent.find('.js-accord-block');\n\tif (parent.hasClass('is-active')) {\n\t\tparent.removeClass('is-active');\n\t\tblock.slideUp(300);\n\t} else {\n\t\tacord.removeClass('is-active');\n\t\tacordBlock.slideUp(300);\n\t\tparent.addClass('is-active');\n\t\tblock.slideDown(300);\n\t}\n\tsetTimeout(function () {\n\t\theader_bg();\n\t}, 350);\n\treturn false;\n});\nacord.each(function () {\n\tvar accord = (0, _jquery2.default)(this),\n\t    accordBlock = accord.find(acordBlock);\n\tif (accord.hasClass('is-active')) {\n\t\taccordBlock.show();\n\t};\n});\n\ninnerHeaderScroll();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvanMvdHlwZS1wYWdlLmpzPzFjOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9ICQ7XG5pbXBvcnQgU2Nyb2xsTWFnaWMgZnJvbSAnc2Nyb2xsbWFnaWMnO1xuaW1wb3J0IGJ1aWxkQ29udGVudEZhZGVTY2VuZXMgZnJvbSAnLi9mYWRlLWluLXNjZW5lcy5qcyc7XG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcblxuYnVpbGRDb250ZW50RmFkZVNjZW5lcygpO1xuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4vLyBhY2NvcmRcbnZhciBhY29yZCBcdFx0PSAkKCcuanMtYWNjb3JkJyksXG5cdGFjb3JkQmxvY2sgID0gJCgnLmpzLWFjY29yZC1ibG9jaycpO1xuJCgnLmpzLWFjY29yZC10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHR2YXIgdGhpc18gXHQ9ICQodGhpcyksXG5cdFx0cGFyZW50IFx0PSB0aGlzXy5wYXJlbnRzKCcuanMtYWNjb3JkJyksXG5cdFx0YmxvY2sgXHQ9IHBhcmVudC5maW5kKCcuanMtYWNjb3JkLWJsb2NrJyk7XG5cdGlmIChwYXJlbnQuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG5cdFx0cGFyZW50LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblx0XHRibG9jay5zbGlkZVVwKDMwMCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0YWNvcmQucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHRcdGFjb3JkQmxvY2suc2xpZGVVcCgzMDApO1xuXHRcdHBhcmVudC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cdFx0YmxvY2suc2xpZGVEb3duKDMwMCk7XG5cdH1cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtoZWFkZXJfYmcoKTt9LCAzNTApO1xuXHRyZXR1cm4gZmFsc2U7XG59KTtcbmFjb3JkLmVhY2goZnVuY3Rpb24oKXtcblx0dmFyIGFjY29yZCA9ICQodGhpcyksXG5cdFx0YWNjb3JkQmxvY2sgPSBhY2NvcmQuZmluZChhY29yZEJsb2NrKTtcblx0aWYgKGFjY29yZC5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcblx0XHRhY2NvcmRCbG9jay5zaG93KCk7XG5cdH07XG59KTtcblxuaW5uZXJIZWFkZXJTY3JvbGwoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC9qcy90eXBlLXBhZ2UuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
]);