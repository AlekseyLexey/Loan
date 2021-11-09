import Player from "./modules/playVideo";
import SliderMain from "./modules/slider/main-slider";




window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	const sliderMain = new SliderMain({sliderSelector: '.page', btns: '.next'});
	sliderMain.render();

	const player = new Player('.play', '.overlay');
	player.play();
});