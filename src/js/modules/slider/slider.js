export default class Slider{
	constructor({sliderSelector = '', btns = '', next = '', prev = ''} ={}) {
		this.slider			= document.querySelector(sliderSelector);
		this.slides			= this.slider.children;
		this.btns			= document.querySelectorAll(btns);
		this.slideIndex	= 1;
	}
}