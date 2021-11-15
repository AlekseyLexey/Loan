import Slider from "./slider";

export default class SliderMain extends Slider {
	constructor(sliderSelector, next, prev) {
		super(sliderSelector, next, prev);
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

		try {
			this.hanson.style.opacity = 0;
			this.hanson.style.visibility = 'hidden';
			this.hanson.classList.add('animated');
			if (this.slideIndex === 3) {
				setTimeout(() => {
				this.hanson.style.opacity = 1;
				this.hanson.style.visibility = 'visible';
				this.hanson.classList.add('slideInUp');
				}, 3000);
			} else {
				this.hanson.classList.remove('slideInUp');
			}
		} catch (error) {
			
		}
	}

	plusSlide(n) {
		this.showSlide(this.slideIndex += n);
	}

	render() {
		if (this.slider) {
			try {
				this.hanson = document.querySelector('.hanson');
			} catch (error) {}

			this.next.forEach(item => {
				item.addEventListener('click', () => {
					this.plusSlide(1);
					if (item.parentNode.classList.contains('sidecontrol__controls')) {
						item.parentNode.previousElementSibling.addEventListener('click', () => {
							this.slideIndex = 1;
							this.showSlide(this.slideIndex);
						});
					}
	
				});
			});

			this.prev.forEach(item => {
				item.addEventListener('click', () => {
					this.plusSlide(-1);
				});
			});


			// this.btns.forEach(element => {
			// 	element.addEventListener('click', () => {
			// 	});
			// 	element.parentNode.previousElementSibling.addEventListener('click', () => {
			// 		this.slideIndex = 1;
			// 		this.showSlide(this.slideIndex);
			// 	});
			// });

			this.showSlide(this.slideIndex);
		}
	}
}