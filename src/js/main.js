import Player from "./modules/playVideo";
import Slider from "./modules/slider";




window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	const sliderMain = new Slider('.page', '.next');
	sliderMain.render();

	const player = new Player('.play', '.overlay');
	player.play();
});