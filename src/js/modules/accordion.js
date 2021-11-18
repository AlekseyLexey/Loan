export default class Accordion {
	constructor(triggers, contents) {
		this.trigger			= document.querySelectorAll(triggers);
		this.msg					= document.querySelectorAll(contents);
	}

	showMsg() {
		this.trigger.forEach((item, i) => {
			item.addEventListener('click', () => {
				item.classList.toggle('show-content-accordion');

				if (item.classList.contains('show-content-accordion')) {
					this.msg[i].style.maxHeight = this.msg[i].scrollHeight + 20 + 'px';
					this.msg[i].style.opacity = '1';
					console.log('yesa');
				} else {
					this.msg[i].style.cssText = `
					maxHeight: 0px;
					opacity: 0;
					`;
				}
			});
		});
	}

	init() {
		this.showMsg();
	}
}