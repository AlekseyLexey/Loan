import Slider from "./modules/slider";




window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	const sliderMain = new Slider('.page', '.next');
	sliderMain.render();
});