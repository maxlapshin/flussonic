import $ from 'jquery';
window.$ = window.jQuery = $;
import ScrollMagic from 'scrollmagic';
import buildContentFadeScenes from './fade-in-scenes.js';
import svg4everybody from 'svg4everybody';

buildContentFadeScenes();
svg4everybody();

// accord
var acord 		= $('.js-accord'),
	acordBlock  = $('.js-accord-block');
$('.js-accord-top').on('click', function(){
	var this_ 	= $(this),
		parent 	= this_.parents('.js-accord'),
		block 	= parent.find('.js-accord-block');
	if (parent.hasClass('is-active')) {
		parent.removeClass('is-active');
		block.slideUp(300);
	}
	else {
		acord.removeClass('is-active');
		acordBlock.slideUp(300);
		parent.addClass('is-active');
		block.slideDown(300);
	}
	setTimeout(function() {header_bg();}, 350);
	return false;
});
acord.each(function(){
	var accord = $(this),
		accordBlock = accord.find(acordBlock);
	if (accord.hasClass('is-active')) {
		accordBlock.show();
	};
});

innerHeaderScroll();

$('.js-search-btn').on('click', function () {
    var btn = $(this),
        parent = btn.parents('.js-right-parent'),
        input = parent.find('.js-search-input'),
        wrap = parent.find('.js-search-wrap');
    parent.toggleClass('is-active');
    wrap.toggleClass('is-active');
    input.focus();
});
$('.js-right-parent').on('click', function (event) {
    event.stopPropagation();
});

$('body').on('click', function () {
    $('.js-right-parent').removeClass('is-active');
    $('.js-search-wrap').removeClass('is-active');
});
