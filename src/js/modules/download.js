export default class Download {
	constructor(triggers) {
		this.buttons		= document.querySelectorAll(triggers);
		this.path			= 'assets/img/Bitmap.jpg';
	}

	downloadActive(path) {
		const downloadLink = document.createElement('a');

		downloadLink.setAttribute('href', path);
		downloadLink.setAttribute('download', 'download');
		downloadLink.style.display = 'none';
		document.body.appendChild(downloadLink);
		downloadLink.click();
		downloadLink.remove();
	}

	init() {
		try {
			this.buttons.forEach(item => {
				item.addEventListener('click', () => {
					this.downloadActive(this.path);
				});
			});
		} catch (error) {}
	}
}