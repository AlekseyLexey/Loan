import Slider from "./slider";

export default class MiniSlider extends Slider {
	constructor(sliderSelector, next, prev, activeClass, autoDrug, btns) {
		super(sliderSelector, next, prev, activeClass, autoDrug, btns);
	}

	activeSlide() {
		let firstSlide = this.slides[0];
		firstSlide.classList.add(this.activeClass);
		if (firstSlide.querySelector('.card__title') && firstSlide.querySelector('.card__controls-arrow')) {
			firstSlide.querySelector('.card__title').style.opacity = '1';
			firstSlide.querySelector('.card__controls-arrow').style.opacity = '1';
		}
	}

	sliderActive() {
		this.slides.forEach(slide => {
			slide.classList.remove(this.activeClass);
			if (slide.querySelector('.card__title') && slide.querySelector('.card__controls-arrow')) {
				slide.querySelector('.card__title').style.opacity = '';
				slide.querySelector('.card__controls-arrow').style.opacity = '';
			}
		});

		this.activeSlide();
	}

	nextSlide() {
		this.slider.appendChild(this.slides[0]);
		this.sliderActive();
	}

	druggingSlide() {
		return setInterval(() => this.nextSlide(), 5000);
	}

	init() {
		try {
			this.activeSlide();
			this.slider.style.cssText = `
				display: flex;
				overflow: hidden;
				align-items: flex-start;
				flex-wrap: wrap;
				max-height: 100%;
				justify-content: flex-start;
			`;
	
			let timerSlider;
			if (this.autoDrug) {
				timerSlider = this.druggingSlide();
	
				this.btns.forEach(btn => {
					btn.addEventListener('mouseenter', () => {
						clearInterval(timerSlider);
					});
	
					btn.addEventListener('mouseleave', () => {
						timerSlider = this.druggingSlide();
					});
				});
			}
	
			this.next.forEach(item => {
				item.addEventListener('click', () => {
					this.nextSlide();
				});
			});

	
			this.prev.forEach(item => {
				item.addEventListener('click', () => {
					let lastSlide = this.slides[this.slides.length - 1];
					this.slider.insertBefore(lastSlide, this.slides[0]);
					this.sliderActive();
				});
			});

		} catch (error) {}
	}
}