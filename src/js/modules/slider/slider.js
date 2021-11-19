export default class Slider{
	constructor({
		sliderSelector = null,
		sliderButtonMain = null,
		btns = null,
		next = null,
		prev = null,
		activeClass = '',
		autoDrug = false,
	} ={}) {

		this.sliderButtonMain	= document.querySelectorAll(sliderButtonMain);
		this.slider					= document.querySelector(sliderSelector);
		try {this.slides			= this.slider.children;} catch (error) {}
		this.btns					= document.querySelectorAll(btns);
		this.slideIndex			= 1;
		this.next					= document.querySelectorAll(next);
		this.prev					= document.querySelectorAll(prev);
		this.activeClass			= activeClass;
		this.autoDrug				= autoDrug;
	}
}