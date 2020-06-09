$(document).ready(function(){
	$('.calculate__select select').selectric();
	$('.terras-calculate__select select').selectric();
});

// var galleryThumbs1 = new Swiper('.gallery-thumbs-one', {
// 	spaceBetween: 50,
// 	loop: true,
// 	centeredSlides: true,
// 	watchSlidesVisibility: true,
// 	watchSlidesProgress: true,
// 	hashNavigation: {
// 		watchState: true,
// 	},
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// 	breakpoints: {
// 		599: {
// 			slidesPerView: 2.5,
// 		},
// 		767: {
// 			slidesPerView: 4,
// 		},
// 		992: {
// 			slidesPerView: 3.5,
// 			slidesOffsetBefore: -110
// 		},
// 		1199: {
// 			slidesPerView: 4.5,
// 		},
// 		1919: {
// 			spaceBetween: 50,
// 			slidesPerView: 5
// 		},
// 		2000: {
// 			slidesPerView: 7.5,
// 			slidesOffsetBefore: -60,
// 			centeredSlides: false
// 		}
// 	}
// });

// var galleryTop1 = new Swiper('.terras-slider-up-one', {
// 	spaceBetween: 10,
// 	loop:true,
// 	navigation: {
// 		nextEl: '.calculate-gallery-top .swiper-button-next',
// 		prevEl: '.calculate-gallery-top .swiper-button-prev',
// 	},
// 	thumbs: {
// 		swiper: galleryThumbs1,
// 	},
// });

var fenceGalleryThumbs1 = new Swiper('.fence-gallery_thumbs-one', {
	spaceBetween: 10,
	slidesPerView: 2,
	loop: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	hashNavigation: {
		watchState: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	}
});

var fenceGalleryTop = new Swiper('.fence-slider_up-one', {
	spaceBetween: 10,
	loop:true,
	navigation: {
		nextEl: '.calculate-gallery-top .swiper-button-next',
		prevEl: '.calculate-gallery-top .swiper-button-prev',
	},
	thumbs: {
		swiper: fenceGalleryThumbs1,
	},
});


var fenceGalleryThumbs2 = new Swiper('.fence-gallery_thumbs-two', {
	spaceBetween: 30,
	slidesPerView: 4,
	loop: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	slidesOffsetBefore: 0,

	scrollbar: {
		el: '.swiper-scrollbar',
	},
	breakpoints: {
		499: {
			spaceBetween: 20,
			slidesPerView: 2.5,
			slidesOffsetBefore: -40,
		},
		767: {
			slidesPerView:3,
			slidesOffsetBefore: 0,
		},
		991: {
			spaceBetween: 0,
			slidesPerView: 3.5,
			slidesOffsetBefore: -70,
		},
		1199: {
			slidesPerView: 4,
			slidesOffsetBefore: -70,
		}
	}
});

var fenceGalleryTop2 = new Swiper('.fence-slider_up-two', {
	spaceBetween: 10,
	loop:true,
	navigation: {
		nextEl: '.calculate-gallery-top .swiper-button-next',
		prevEl: '.calculate-gallery-top .swiper-button-prev',
	},
	thumbs: {
		swiper: fenceGalleryThumbs2,
	},
});

var fenceGalleryThumbs3 = new Swiper('.fence-gallery_thumbs-three', {
	spaceBetween: 10,
	slidesPerView: 2,
	loop: true,
	centeredSlides: false,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	hashNavigation: {
		watchState: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	}
});

var fenceGalleryTop3 = new Swiper('.fence-slider_up-three', {
	spaceBetween: 10,
	loop:true,
	navigation: {
		nextEl: '.calculate-gallery-top .swiper-button-next',
		prevEl: '.calculate-gallery-top .swiper-button-prev',
	},
	thumbs: {
		swiper: fenceGalleryThumbs3,
	},
});





// new Swiper('.fence-slider_up-four', {
// 	spaceBetween: 10,
// 	loop:true,
// 	navigation: {
// 		nextEl: '.calculate-gallery-top .swiper-button-next',
// 		prevEl: '.calculate-gallery-top .swiper-button-prev',
// 	}
// });


var fenceGalleryThumbs5 = new Swiper('.fence-gallery_thumbs-five', {
	spaceBetween: 10,
	slidesPerView: 2,
	loop: true,
	centeredSlides: false,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	hashNavigation: {
		watchState: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	}
});

var fenceGalleryTop5 = new Swiper('.fence-slider_up-five', {
	spaceBetween: 10,
	loop:true,
	navigation: {
		nextEl: '.calculate-gallery-top .swiper-button-next',
		prevEl: '.calculate-gallery-top .swiper-button-prev',
	},
	thumbs: {
		swiper: fenceGalleryThumbs5,
	},
});


/*FENCE CALCULATE*/
let tabsLink = document.querySelectorAll('.fence-calculate .calculate-tabs li');
let buttonFence = document.querySelector('.fence-calculate .calculate-up-button');
let galleryTop = document.querySelectorAll('.calculate-gallery-top');
let galleryBottom = document.querySelectorAll('.calculate-gallery-thumbs');
let num = 1;
let minus = document.querySelectorAll('.fence-five-door_calc .minus');
let plus = document.querySelectorAll('.fence-five-door_calc .plus');


minus.forEach((item) => {
	item.addEventListener('click', minusNum);
});

plus.forEach((item) => {
	item.addEventListener('click', plusNum);
});


function minusNum() {
	let answer = this.parentElement.querySelector('.answer');
	let newAnswer = answer.innerHTML.split(',').join('.');

	if (Number(newAnswer) >= 0.1) {
		answer.innerHTML = (Number(newAnswer)-0.1).toFixed(1).split('.').join(',');
	}
}

function plusNum() {
	let answer = this.parentElement.querySelector('.answer');
	let newAnswer = answer.innerHTML.split(',').join('.');
	answer.innerHTML = (Number(newAnswer)+0.1).toFixed(1).split('.').join(',');

}

tabsLink.forEach((item) => {
	item.addEventListener('click', function(e) {
		e.preventDefault();
	});
});

/*Данные на отправку Fence*/
let titleCalculate, title1Calculate, size1Calculate, title2Calculate, title3Calculate, aCalculate, bCalculate, needDoor, needDoor2, title5Calculate, size5Calculate;

buttonFence.onclick = function() {
	if(num == 5) {
		document.querySelector('.calculate').classList.add('hide');
		document.querySelector('.fence-form').classList.add('show');


		buttonFence.setAttribute('data-num', 6);
		calculateFence.call(buttonFence);
		formCalculate();

	} else {
		num += 1;
		document.querySelector('.calculate__block').style.display = 'none';

		buttonFence.setAttribute('data-num', num);
		calculateFence.call(buttonFence);
	}


	galleryTop.forEach((item) => {
		if(item.getAttribute('data-item') == num) {
			item.classList.remove('hide');
			item.classList.add('show');
			document.querySelector('.fence-calculate_top h2').innerHTML = item.getAttribute('data-title');
		} else {
			item.classList.remove('show');
			item.classList.add('hide');
		}
	});

	galleryBottom.forEach((item) => {
		if(item.getAttribute('data-item') == num) {
			item.classList.remove('hide');
			item.classList.add('show');
		} else {
			item.classList.remove('show');
			item.classList.add('hide');
		}
	});

	tabsLink.forEach((item) => {
		if(item.getAttribute('data-item') == num) {
			item.classList.add('calculate-tabs_active');
		} else {
			item.classList.remove('calculate-tabs_active');
		}
	});

}



/*Занести данные в переменные Fence*/
function calculateFence() {
	let btnNum = buttonFence.getAttribute('data-num');

	if(btnNum == 2) {
		titleCalculate = document.querySelector('.calculate__block .label').innerHTML;
		title1Calculate = document.querySelector('.fence-slider_up-one .swiper-slide-active .js-title1').innerHTML;
		size1Calculate = document.querySelector('.fence-slider_up-one .swiper-slide-active .selectric-js-size1 .label').innerHTML;
	}else if (btnNum == 3) {
		title2Calculate = document.querySelector('.fence-slider_up-two .swiper-slide-active .calculate-subtitle').innerHTML;
	} else if(btnNum == 4) {
		title3Calculate = document.querySelector('.fence-slider_up-three .swiper-slide-active h3').innerHTML;
	} else if(btnNum == 5) {
		aCalculate = document.querySelector('.fence-a').value;
		bCalculate = document.querySelector('.fence-b').value;
		needDoor = document.querySelector('.fence-top-four-select .fence-top-four-gate_active').innerHTML;
		needDoor2 = document.querySelector('.fence-top-four-select .fence-top-wicket_active').innerHTML;
	} else if(btnNum == 6) {
		title5Calculate = document.querySelector('.fence-slider_up-five .swiper-slide-active h3').innerHTML;
		size5Calculate = document.querySelector('.fence-slider_up-five .swiper-slide-active .answer').innerHTML;
	}

}



/*Добавление файлов*/
let filesBlock = document.querySelector('.fence-form__files-block');
let files = document.querySelector('.fence-form__files');
let filesListFence = '';


files.onchange = function() {
	filesBlock.querySelector('label').style.display = 'none';

	setFiles();
}

function setFiles() {
	filesBlock.innerHTML = "";

	let files1 = files.files;
	let num = 0;
	let span = document.createElement('span');

	for(item of files1) {
		filesListFence +=' '+item.name;
	}

	for(item of files1) {
		filesListFence +=' '+item.name;

		if(num == 2) {
			num = 2;
			break;
		}

		let span = document.createElement('span');
		let btn = document.createElement('span');

		btn.classList.add('fence-form-btn');
		span.setAttribute('data-file', num);
		span.innerHTML = item.name.slice(0, 7)+'...';
		span.classList.add('fence-form-span_name', 'fence-form-span');
		btn.onclick = function() {
			deleteFiles.call(span);
		};
		span.appendChild(btn);
		filesBlock.appendChild(span);

		num+=1;

	}

	if((files1.length - num) != 0 && num == 2) {
		span.innerHTML = "+ "+(Number(files1.length)-num);
		span.classList.add('fence-form-span', 'fence-form-span_last');
		filesBlock.appendChild(span);
	}

}


//Удаление файлов
function deleteFiles() {
	console.log("Пока не реализована, нужен бэкенд");
}

/*Шаг назад*/
let backBtn = document.querySelector('.fence-form__back');

backBtn.onclick = function(e) {
	e.preventDefault();
	document.querySelector('.fence-form').classList.remove('show');
	document.querySelector('.calculate').classList.remove('hide');

}

/*Начать заново*/
let againBtn = document.querySelector('.fence-form__again');

againBtn.onclick = function(e) {
	e.preventDefault();
	num = 1;
	buttonFence.setAttribute('data-num', 1);
	document.querySelector('.calculate__block').style.display = 'block';
	document.querySelector('.fence-form').classList.remove('show');
	document.querySelector('.calculate').classList.remove('hide');

	galleryTop.forEach((item) => {
		if(item.getAttribute('data-item') == 1) {
			item.classList.remove('hide');
			item.classList.add('show');
			document.querySelector('.fence-calculate_top h2').innerHTML = item.getAttribute('data-title');
		} else {
			item.classList.remove('show');
			item.classList.add('hide');
		}
	});

	galleryBottom.forEach((item) => {
		if(item.getAttribute('data-item') == 1) {
			item.classList.remove('hide');
			item.classList.add('show');
		} else {
			item.classList.remove('show');
			item.classList.add('hide');
		}
	});

	tabsLink.forEach((item) => {
		if(item.getAttribute('data-item') == 1) {
			item.classList.add('calculate-tabs_active');
		} else {
			item.classList.remove('calculate-tabs_active');
		}
	});

}

let sumFence;
let fenceSquare = 0;

/*Изменение формы Fence*/
function formCalculate() {
	fenceSquare = aCalculate * bCalculate;
	document.querySelector('.fence-form__square span').innerHTML = fenceSquare;

	sumFence = document.querySelector('.fence-form__sum-origin span').innerHTML;
}

let fenceName, fencePhone, fenceEmail, fenceMessage, fenceOptions='';

/*Отправка формы*/
document.querySelector('.fence-form__form').onsubmit = function(e) {
	e.preventDefault();


	fenceName = document.querySelector('.fence-form-input_box .js-name').value;
	fencePhone = document.querySelector('.fence-form-input_box .js-phone').value;
	fenceEmail = document.querySelector('.fence-form-input_box .js-email').value;
	fenceMessage = document.querySelector('.fence-form__textarea').value;

	let inputs = document.querySelectorAll('.fence-form__checkbox input');

	inputs.forEach((item) => {
		if(item.checked) {
			fenceOptions += ' '+item.parentElement.querySelector('label').innerHTML;
		}
	});


 sendMail();

}

function sendMail() {
	console.log('Имя: ', fenceName);
	console.log('Телефон: ', fencePhone);
	console.log('Email: ', fenceEmail);
	console.log('Площадь: ', fenceSquare);
	console.log('Цена: ', sumFence);
	console.log('Файлы: ', filesListFence);
	console.log('Модель и размер: ', title1Calculate, size1Calculate);
	console.log('Цвет: ', title2Calculate);
	console.log('Текстура: ', title3Calculate);
	console.log('Длина и ширина: ', aCalculate, bCalculate);
	console.log('Нужны ворота: ', needDoor);
	console.log('Нужна ли калитка: ', needDoor2);

	alert('Спасибо что оставили заявку! Наш менеджер скоро вам перезвонит!');

}


/*Кнопки 4 таба калькулятор Fence*/
let btnGate = document.querySelectorAll('.js-gate span');
let btnWicket = document.querySelectorAll('.js-wicket span');

btnGate.forEach((item) => {
	item.onclick = function() {
		gateActive.call(item);
	}
});

function gateActive () {
	btnGate.forEach((item) => {
		item.classList.remove('fence-top-four-gate_active');
	});

	this.classList.add('fence-top-four-gate_active');
}


btnWicket.forEach((item) => {
	item.onclick = function() {
		wicketActive.call(item);
	}
});

function wicketActive () {
	btnWicket.forEach((item) => {
		item.classList.remove('fence-top-wicket_active');
	});

	this.classList.add('fence-top-wicket_active');
}
