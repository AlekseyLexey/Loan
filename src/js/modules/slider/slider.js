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
		try {this.slides	= this.slider.children;} catch (error) {}
		this.btns			= document.querySelectorAll(btns);
		this.slideIndex	= 1;
		this.next			= document.querySelector(next);
		this.prev			= document.querySelector(prev);
		this.activeClass	= activeClass;
		this.autoDrug		= autoDrug;
	}
}