export default class Player{
	constructor(triggers, modal) {
		this.bnts			= document.querySelectorAll(triggers);
		this.modal			= document.querySelector(modal);
		this.close			= this.modal.querySelector('.close');
	}

	closePlay() {
		this.close.addEventListener('click', () => {
			this.modal.style.display = '';

			this.player.stopVideo();
		});
	}

	createPlayer(url) {
		this.player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId: `${url}`
		});
	}

	triggerPlay() {
		this.bnts.forEach(item => {
			item.addEventListener('click', () => {

				if (!document.querySelector('iframe#frame')) {
					const path = item.getAttribute('data-url');
					this.createPlayer(path);
				}
				this.modal.style.display = 'flex';
			});
		});
	}

	play() {

		const tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		this.triggerPlay();
		this.closePlay();
	}
}