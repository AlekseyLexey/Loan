export default class Player{
	constructor(triggers, modal) {
		this.bnts			= document.querySelectorAll(triggers);
		this.modal			= document.querySelector(modal);
		this.close			= this.modal.querySelector('.close');
	}

	closePlay() {
		this.modal.style.cssText = `
			width: 0;
			height: 0;
			top: 50%;
			left: 50%;
		`;
		try {
			try {
				if (this.player.getPlayerState() === 0) {
					this.unblockVideo(this.activeBtn);
				}
			} catch (error) {}
			this.player.stopVideo();
		} catch (error) {}
	}

	closePlayWithModal() {
		this.modal.addEventListener('click', (e) => {
			const target = e.target;
			if (target && target.classList.contains('overlay')) {
				this.closePlay();
			}
		});
	}

	createPlayer(url) {
		this.player = new YT.Player('frame', {
			height: '100%',
			width: '100%',
			videoId:`${url}`
		});
	}

	unblockVideo(activeItem) {
			const closeBlock	= activeItem.parentNode.nextElementSibling,
					cloneIcon	= activeItem.querySelector('svg').cloneNode(true);

			closeBlock.style.cssText = `
				opacity: 1;
				filter: none;
			`;
			closeBlock.querySelector('.play__circle').classList.remove('closed');
			closeBlock.querySelector('svg').remove();
			closeBlock.querySelector('.play__circle').appendChild(cloneIcon);
			closeBlock.querySelector('.play__text').classList.remove('attention');
			closeBlock.querySelector('.play__text').textContent = 'play video';
		}

	triggerPlay() {
		this.bnts.forEach(item => {
			
			item.addEventListener('click', () => {
				if (!item.querySelector('.play__circle').classList.contains('closed')) {
					this.activeBtn = item;
				
					if (!document.querySelector('iframe#frame')) {
						this.path = item.getAttribute('data-url');
						this.createPlayer(this.path);
					}
					if (this.path !== item.getAttribute('data-url')) {
						this.path = item.getAttribute('data-url');
						this.player.loadVideoById({videoId: this.path});
					}
	
					this.modal.style.cssText = `
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
					`;
				}
			});
		});
	}

	play() {

		const tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		this.triggerPlay();
		this.close.addEventListener('click', () => {
			this.closePlay();
		});
		this.closePlayWithModal();
	}
}