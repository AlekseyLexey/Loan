export default class Form {
	constructor(forms, emailInputs) {
		this.forms				= document.querySelectorAll(forms);
		this.emailInputs		= document.querySelectorAll(emailInputs);
	}

	validationEmail (input) {
		input.addEventListener('keypress', (e) => {
			if (/[^A-Z 0-9 @ \.]/ig.test(e.key)) {
				e.preventDefault();
			}
		});
	}

	mask() {

		let setCursorPosition = (pos, elem) => {
			elem.focus();
	
			if (elem.setSelectionRange) {
				elem.setSelectionRange(pos, pos);
			} else if (elem.createTextRange) {
				let range = elem.createTextRange();
	
				range.collapse(true);
				range.moveStart('character', pos);
				range.moveEnd('character', pos);
				range.select();
			}
		};
	
		function createMask(event) {
			let matrix = '+1 (___) ___-____',
				i = 0,
				def = matrix.replace(/\D/g, ''),
				val = this.value.replace(/\D/g, '');

			if (def.length >= val.length) {
				val = def;
			}
	
			this.value = matrix.replace(/./g, function(a) {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
			});
	
			if (event.type === 'blur') {
				if (this.value.length == 2) {
					this.value = '';
				}
			} else {
				setCursorPosition(this.value.length, this);
			}
		}
	
		let input = document.getElementById('phone');

		input.addEventListener('input', createMask);
		input.addEventListener('blur', createMask);
		input.addEventListener('focus', createMask);
	}

	async processingPostData(url, data) {
		let res = await fetch(url, {
			method: "POST",
			body: data
		});
	
		return await res.text();
	}

	postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData						= new FormData(form);

			this.processingPostData('assets/question.php', formData)
				.then(data => {
					console.log(data);
					// statusImg.setAttribute('src', message.ok);
					// textMessage.textContent = message.success;
				})
				.catch(() => {
					// statusImg.setAttribute('src', message.fail);
					// textMessage.textContent = message.failure;
				})
				.finally(() => {
				form.reset();
				// setTimeout(() => {
				// 	statusMessage.remove();
				// 	form.style.display = 'block';
				// 	form.classList.remove('fadeOutUp');
				// 	form.classList.add('fadeInUp');
				// }, 5000);
			});
		});
	}

	init() {
		this.emailInputs.forEach(item => {
			this.validationEmail(item);
		});
		this.mask();

		this.forms.forEach(item => {
			this.postData(item);
		});
	}
}