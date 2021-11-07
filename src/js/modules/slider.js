export default class Slider{
	constructor(sliderSelector, btns) {
		this.slider			= document.querySelector(sliderSelector);
		this.slides			= this.slider.children;
		this.btns			= document.querySelectorAll(btns);
		this.slideIndex	= 1;
	}

	showSlide(n) {
		if (n > this.slides.length) {
			this.slideIndex = 1;
		}

		if (n < 1) {
			this.slideIndex = this.slides.length;
		}

		this.slides.forEach(element => {
			element.style.display = 'none';
		});

		this.slides[this.slideIndex - 1].style.display = '';
	}

	plusSlide(n) {
		this.showSlide(this.slideIndex += n);
	}

	render() {

		this.btns.forEach(element => {
			element.addEventListener('click', () => {
				this.plusSlide(1);
			});
			element.parentNode.previousElementSibling.addEventListener('click', () => {
				this.slideIndex = 1;
				this.showSlide(this.slideIndex);
			});
		});

		this.showSlide(this.slideIndex);
	}

}