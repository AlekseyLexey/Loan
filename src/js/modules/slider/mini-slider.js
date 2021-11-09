import Slider from "./slider";

export default class MiniSlider extends Slider {
	constructor(sliderSelector, next, prev) {
		super(sliderSelector, next, prev);
	}

	init() {
		this.slider.style.cssText = `
			display: flex;
			overflow: hidden;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: center;
		`;

		this.next.addEventListener('click', () => {
			this.slider.appendChild(this.slides[0]);
		});

		this.prev.addEventListener('click', () => {
			const lastSlide = this.slides.length - 1;
			this.slider.prepend(this.slides[lastSlide]);
		});
	}
}