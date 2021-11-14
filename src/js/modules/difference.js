export default class Difference{
	constructor(officerOld, officerNew, items) {
		this.officerOld			= document.querySelector(officerOld);
		this.officerNew			= document.querySelector(officerNew);
		this.oldItems				= this.officerOld.querySelectorAll(items);
		this.newItems				= this.officerNew.querySelectorAll(items);
		this.countOld				= 0;
		this.countNew				= 0;
	}

	showItem(container, items, counter) {
		container.querySelector('.plus').addEventListener('click', () => {
			if (counter !== items.length - 2) {
				items[counter].style.display = '';
				counter++;
			} else {
				items[counter].style.display = '';
				items[items.length - 1].remove();
			}
		});
	}

	hideItems(items) {
		items.forEach((item, i, arr) => {
			if (i !== arr.length - 1) {
				item.style.display = 'none';
				item.classList.add('animated', 'fadeIn');
			}
		});
	}

	init() {

		this.hideItems(this.oldItems);
		this.hideItems(this.newItems);

		this.showItem(this.officerOld, this.oldItems, this.countOld);
		this.showItem(this.officerNew, this.newItems, this.countNew);
	}
}