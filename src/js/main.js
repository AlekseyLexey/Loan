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
		prev: '.showup__prev'
	});
	showUpSlider.init();

	const player = new Player('.play', '.overlay');
	player.play();
});