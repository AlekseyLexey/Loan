export default class Slider{
	constructor({
		sliderSelector = null,
		btns = null,
		next = null,
		prev = null,
		activeClass = '',
		autoDrug = false,
	} ={}) {

		this.slider			= document.querySelector(sliderSelector);
		this.slides			= this.slider.children;
		this.btns			= document.querySelectorAll(btns);
		this.slideIndex	= 1;
		this.next			= document.querySelector(next);
		this.prev			= document.querySelector(prev);
		this.activeClass	= activeClass;
		this.autoDrug		= autoDrug;
	}
}