import Accordion from "./modules/accordion";
import Difference from "./modules/difference";
import Download from "./modules/download";
import Form from "./modules/form";
import Player from "./modules/playVideo";
import SliderMain from "./modules/slider/main-slider";
import MiniSlider from "./modules/slider/mini-slider";




window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	const sliderMain = new SliderMain({sliderSelector: '.page', next: '.next', sliderButtonMain: '.sidecontrol > a'});
	sliderMain.render();

	const sliderModulesMain = new SliderMain({sliderSelector: '.moduleapp', next: '.next', prev:'.prev', sliderButtonMain: '.sidecontrol > a'});
	sliderModulesMain.render();

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

	new Player('.showup .play', '.overlay').play();
	new Player('.module .play', '.overlay').play();

	new Difference('.officerold', '.officernew', '.officer__card-item').init();

	new Form('form', 'form input[name=email]').init();

	new Accordion('.plus', '.msg').init();

	new Download('.download').init();
});