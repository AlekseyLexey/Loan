export default class Accordion {
	constructor(triggers, msg) {
		this.triggers			= document.querySelectorAll(triggers);
		this.msg					= document.querySelectorAll(msg);
	}

	init() {
		try {
			this.triggers.forEach((item, i) => {
				item.addEventListener('click', () => {
					item.classList.toggle('active-contant-show');
					if (item.classList.contains('active-contant-show')) {
						this.msg[i].style.cssText = `
						max-height: 0;
						opacity: 0;
						`;
					} else {
						this.msg[i].style.opacity = 1;
						this.msg[i].style.maxHeight = this.msg[i].scrollHeight + 20 + 'px';
					}
				});
			});
		} catch (error) {}
	}
}