import Player from "./modules/playVideo";
import SliderMain from "./modules/slider/main-slider";
import MiniSlider from "./modules/slider/mini-slider";




window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	const sliderMain = new SliderMain({sliderSelector: '.page', btns: '.next'});
	sliderMain.render();

	const showUpSlider = new MiniSlider({
		sliderSelector: '.showup__content-slider',
		next: '.showup__next',
		prev: '.showup__prev',
		activeClass: 'card-active'
	});
	showUpSlider.init();

	const modulesContentSlider = new MiniSlider({
		sliderSelector: '.modules__content-slider',
		next: '.modules__info-btns .slick-next',
		prev: '.modules__info-btns .slick-prev',
		activeClass: 'card-active',
		autoDrug: true,
		btns: '.modules__info-btns button'
	});
	modulesContentSlider.init();

	const feedSlider = new MiniSlider({
		sliderSelector: '.feed__slider-wrapper',
		next: '.feed__slider .slick-next',
		prev: '.feed__slider .slick-prev',
		activeClass: 'feed__item-active',
	});
	feedSlider.init();

	const player = new Player('.play', '.overlay');
	player.play();
});