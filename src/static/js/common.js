	$(document).ready(function(){
		$('.calculate__select select').selectric();
		$('.terras-calculate__select select').selectric();
		$('.terras-calc select').selectric();

		$('.calculate__select select').on('selectric-change', function(event, element, selectric) {
			changeCalculate();
		});
	});

	function changeCalculate() {
		if(document.querySelector('.calculate__select .label').innerHTML == 'Заборов') {
			if(document.querySelector('.fence-calculate').classList.contains('hide')) {
				document.querySelector('.fence-calculate').classList.remove('hide')
				document.querySelector('.terras-calculate').classList.add('hide');
			}

		} else {
			if(document.querySelector('.terras-calculate').classList.contains('hide')) {
				document.querySelector('.terras-calculate').classList.remove('hide');
				document.querySelector('.fence-calculate').classList.add('hide');
			}
		}
	}

	/*Кнопки для 06.выберите модель*/
	let btnStepPlus = document.querySelectorAll('.terras-steps .plus');
	let btnStepMinus = document.querySelectorAll('.terras-steps .minus');
	let btnWidthPlus = document.querySelectorAll('.terras-width .plus');
	let btnWidthMinus = document.querySelectorAll('.terras-width .minus');


	btnStepPlus.forEach((item) => {
		item.onclick = function() {
			let btnStepNum = document.querySelector('.swiper-slide-active .terras-steps .num').innerHTML;
			document.querySelector('.swiper-slide-active .terras-steps .num').innerHTML = Number(btnStepNum)+1;
		}
	});

	btnStepMinus.forEach((item) => {
		item.onclick = function() {
			let btnStepNum = document.querySelector('.swiper-slide-active .terras-steps .num').innerHTML;
			if(btnStepNum > 0) {
				document.querySelector('.swiper-slide-active .terras-steps .num').innerHTML = Number(btnStepNum)-1;
			}
		}
	});

	btnWidthPlus.forEach((item) => {
		item.onclick = function() {
			let btnStepNum = document.querySelector('.swiper-slide-active .terras-width .num').innerHTML.split(',').join('.');
			let answer = (Number(btnStepNum)+0.1).toFixed(1);
			document.querySelector('.swiper-slide-active .terras-width .num').innerHTML = String(answer).split('.').join(',');
		}
	});

	btnWidthMinus.forEach((item) => {
		item.onclick = function() {
			let btnStepNum = document.querySelector('.swiper-slide-active .terras-width .num').innerHTML.split(',').join('.');
			if(btnStepNum > 0) {
				let answer = (Number(btnStepNum)-0.1).toFixed(1);

				document.querySelector('.swiper-slide-active .terras-width .num').innerHTML = String(answer).split('.').join(',');
			}
		}
	});

	var galleryThumbs1 = new Swiper('.terras-gallery-thumbs-one', {
		spaceBetween: 50,
		loop: true,
		centeredSlides: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		hashNavigation: {
			watchState: true,
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		breakpoints: {
			599: {
				slidesPerView: 2.5,
			},
			767: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3.5,
				slidesOffsetBefore: -110
			},
			1199: {
				slidesPerView: 4.5,
			},
			1919: {
				spaceBetween: 50,
				slidesPerView: 5
			},
			2000: {
				slidesPerView: 7.5,
				slidesOffsetBefore: -60,
				centeredSlides: false
			}
		}
	});

	var galleryTop1 = new Swiper('.terras-slider-up-one', {
		spaceBetween: 10,
		loop:true,
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs1,
		},
	});

	var terrasGalleryThumbs2 = new Swiper('.terras-gallery-thumbs-two', {
		spaceBetween: 30,
		slidesPerView: 4,
		loop: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slidesOffsetBefore: 0,

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
				spaceBetween: 30,
				slidesPerView: 3.5,
				slidesOffsetBefore: -60,
			},
			1199: {
				slidesPerView: 4
			}
		}
	});

	var terraseGalleryTop2 = new Swiper('.terras-slider-up-two', {
		spaceBetween: 10,
		loop:true,
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
		},
		thumbs: {
			swiper: terrasGalleryThumbs2,
		},
	});


	var terrasGalleryThumbs3 = new Swiper('.terras-gallery-thumbs-three', {
		spaceBetween: 30,
		slidesPerView: 3,
		loop: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slidesOffsetBefore: 0,

		breakpoints: {
			499: {
				slidesPerView: 2.5,
				slidesOffsetBefore: -40
			},
			767: {
				slidesPerView:3
			},
			1199: {
				slidesPerView: 3
			}
		}
	});

	var terraseGalleryTop3 = new Swiper('.terras-slider-up-three', {
		spaceBetween: 10,
		loop:true,
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
		},
		thumbs: {
			swiper: terrasGalleryThumbs3,
		},
	});

	var terrasGalleryThumbs4 = new Swiper('.terras-gallery-thumbs-four', {
		spaceBetween: 30,
		slidesPerView: 2,
		loop: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slidesOffsetBefore: 0
	});

	var terraseGalleryTop4 = new Swiper('.terras-slider-up-four', {
		spaceBetween: 10,
		loop:true,
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		thumbs: {
			swiper: terrasGalleryThumbs4,
		},
	});

	var terrasGalleryThumbs41 = new Swiper('.terras-gallery-thumbs-four2', {
		spaceBetween: 30,
		slidesPerView: 2,
		loop: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slidesOffsetBefore: 0
	});

	var terraseGalleryTop41 = new Swiper('.terras-slider-up-four2', {
		spaceBetween: 10,
		loop:true,
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		thumbs: {
			swiper: terrasGalleryThumbs41,
		},
	});

	var terrasGalleryThumbs6 = new Swiper('.terras-gallery-thumbs-six', {
		spaceBetween: 30,
		slidesPerView: 2,
		loop: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slidesOffsetBefore: 0
	});

	var terraseGalleryTop6 = new Swiper('.terras-slider-up-six', {
		spaceBetween: 10,
		loop:true,
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
		},
		thumbs: {
			swiper: terrasGalleryThumbs6,
		},
	});


	var terrasGalleryThumbs5 = new Swiper('.terras-gallery-thumbs-five', {
		spaceBetween: 30,
		slidesPerView: 4,
		slidesOffsetBefore: 0,
		loop: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,

		breakpoints: {
			400: {
				slidesPerView:2.5,
				slidesOffsetBefore: -40
			},
			767: {
				slidesPerView:3,
				slidesOffsetBefore: 0
			},
			1199: {
				slidesPerView: 3.5,
				slidesOffsetBefore: -80,
				spaceBetween: 100,
			}
		}
	});

	var terraseGalleryTop5 = new Swiper('.terras-slider-up-five', {
		spaceBetween: 10,
		loop:true,
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
		},
		thumbs: {
			swiper: terrasGalleryThumbs5,
		},
	});


	let tabsLinkTerras = document.querySelectorAll('.terras-calculate .calculate-tabs li');
	let buttonTerras = document.querySelector('.terras-calculate .calculate-up-button');
	let galleryTopTerras = document.querySelectorAll('.terras-calculate .calculate-gallery-top');
	let galleryBottomTerras= document.querySelectorAll('.terras-calculate .calculate-gallery-thumbs');
	let num1 = 1;

	/*Кнопки для последнего слайда*/
	let btnNo = document.querySelectorAll('.terras-btn-no');
	let btnYes = document.querySelectorAll('.terras-btn-yes');

	btnNo.forEach((item) => {
		item.onclick = function() {
			document.querySelector('.calculate').classList.add('hide');
			document.querySelector('.fence-form').classList.add('show');
			buttonTerras.setAttribute('data-num', 8);
			calculateTerras();
			formCalculate2();
		};
	});

	btnYes.forEach((item) => {
		item.onclick = function() {
			document.querySelectorAll('.terras-top1-question_one').forEach((item) => {
				item.style.display = 'none';
			});

			document.querySelectorAll('.terras-top1-question_two').forEach((item) => {
				item.style.display = 'block';
			});

			buttonTerras.removeAttribute('disabled');
			buttonTerras.removeAttribute('style');
			buttonTerras.setAttribute('data-num', 9);
			num1 = 8;
		}

	})

	/*Табы для террасы*/
	tabsLinkTerras.forEach((item) => {
		item.addEventListener('click', function(e) {
			e.preventDefault();
		});
	});

	/*Кнопки 05. формы и замера террасы*/
	let fiveTerrasBtn = document.querySelectorAll('.terras-top-five-width .js-btn-five');

	fiveTerrasBtn.forEach((item) => {
		item.onfocus = function() {
			if(this.getAttribute('data-input')) {
				let fiveTerrasImg = this.parentElement.parentElement.parentElement.querySelector('img');
				fiveTerrasImg.setAttribute('src', 'img/terras-five'+this.getAttribute('data-input')+'.png');
			}

			fiveTerrasBtn.forEach((item) => {
				if(item.parentElement.getAttribute('style')) {
					item.parentElement.removeAttribute('style');
				}
			});

			item.parentElement.style.backgroundColor = '#5b5b44';

		};
	});

	/*Отслеживаем input*/

	fiveTerrasBtn.forEach((item) => {

		item.onchange = function() {
			let fiveTerrasBtn = document.querySelectorAll('.swiper-slide-active .terras-top-five-width .js-btn-five');
			let sum = 0;
			let num = 0;

			fiveTerrasBtn.forEach((item) => {
				if(item.value == '') {
					num +=1;
				} else {
					sum += Number(item.value);
				}
			});

			if(num == 0) {
				document.querySelector('.swiper-slide-active .terras-top-five-width .js-btn-sum-five').value = sum*4;
			} else {
				buttonTerras.setAttribute('data-num', 6);
			}

		}


	});


	buttonTerras.onclick = function() {

		if(document.querySelector('.terras-calculate .calculate-up').classList.contains('up-title')) {
			document.querySelector('.terras-calculate .calculate-up').classList.remove('up-title');
		}

		if(this.getAttribute('data-num') == 8) {
			document.querySelector('.calculate').classList.add('hide');
			document.querySelector('.fence-form').classList.add('show');
		}

		if(this.getAttribute('data-num') == 9) {
			document.querySelector('.calculate').classList.add('hide');
			document.querySelector('.fence-form').classList.add('show');
			calculateTerras();
			formCalculate2();
		}

		if(this.getAttribute('data-num') == 6){

			if((document.querySelector('.swiper-slide-active .terras-top-five-width .js-btn-sum-five').value) == '') {
				let numFive = 0;
				let btnFive = document.querySelectorAll('.swiper-slide-active .terras-top-five-width .js-btn-five');

				btnFive.forEach((item) => {
					if(item.value == '') {
						numFive += 1;
						item.parentElement.style.border = '1px solid red';
					} else {
						item.parentElement.removeAttribute('style');
					}
				});

				if(numFive) {
					return;
				}

			}
		}

		if(num1 < 7) {
			num1 += 1;
			document.querySelector('.calculate__block').style.display = 'none';

			buttonTerras.setAttribute('data-num', num1);
			calculateTerras();
		}

		galleryTopTerras.forEach((item) => {
			if(item.getAttribute('data-item') == num1) {
				item.classList.remove('hide');
				item.classList.add('show');
				document.querySelector('.terras-calculate h2').innerHTML = item.getAttribute('data-title');
			} else {
				item.classList.remove('show');
				item.classList.add('hide');
			}
		});

		galleryBottomTerras.forEach((item) => {
			if(item.getAttribute('data-item') == num1) {
				item.classList.remove('hide');
				item.classList.add('show');
			} else {
				item.classList.remove('show');
				item.classList.add('hide');
			}
		});

		if(num1 == 5) {
			tabsLinkTerras.forEach((item) => {
				if(item.getAttribute('data-item') == 4) {
					item.classList.add('calculate-tabs_active');
				} else {
					item.classList.remove('calculate-tabs_active');
				}
			});
		} else if(num1 == 6) {
			tabsLinkTerras.forEach((item) => {
				if(item.getAttribute('data-item') == 5) {
					item.classList.add('calculate-tabs_active');
				} else {
					item.classList.remove('calculate-tabs_active');
				}
			});

		}else if(num1 == 7) {
			tabsLinkTerras.forEach((item) => {
				if(item.getAttribute('data-item') == 6) {
					item.classList.add('calculate-tabs_active');
				} else {
					item.classList.remove('calculate-tabs_active');
				}
			});

		} else {
			tabsLinkTerras.forEach((item) => {
				if(item.getAttribute('data-item') == num1) {
					item.classList.add('calculate-tabs_active');
				} else {
					item.classList.remove('calculate-tabs_active');
				}
			});
		}

		if(num1 == 7) {
			buttonTerras.setAttribute('disabled', 'disabled');
			buttonTerras.style.opacity = "0.2";
		}


	}
	let modelTerrasTitle, modelTerrasSize, modelTerrasColor, textureTerras, whereWood, howWood, formTerras, aTerras, bTerras, cTerras, dTerras, sTerras, noTerras,titleColTerras, stepColTerras,
	widthColTerras, colorColTerras;


	/*Занести данные в переменные Terras*/
	function calculateTerras() {
		let btnNum = document.querySelector('.calculate-up-button').getAttribute('data-num');

		if(btnNum == 2) {
			modelTerrasTitle = document.querySelector('.terras-slider-up-one .swiper-slide-active h3').innerHTML;
			modelTerrasSize = document.querySelector('.terras-slider-up-one .swiper-slide-active .terras-calculate__select .label').innerHTML;
		}else if (btnNum == 3) {
			modelTerrasColor = document.querySelector('.terras-slider-up-two .swiper-slide-active h3').innerHTML;
		} else if(btnNum == 4) {
			textureTerras = document.querySelector('.terras-slider-up-three .swiper-slide-active h3').innerHTML;
		} else if(btnNum == 5) {
			whereWood = document.querySelector('.terras-slider-up-four .swiper-slide-active h3').innerHTML;
		} else if(btnNum == 6) {
			howWood = document.querySelector('.terras-slider-up-four2 .swiper-slide-active h3').innerHTML;
		} else if(btnNum == 7) {
			formTerras = document.querySelector('.terras-slider-up-five .swiper-slide-active h3').innerHTML;
			aTerras = document.querySelector('.terras-slider-up-five .swiper-slide-active .terras-a').value;
			bTerras = document.querySelector('.terras-slider-up-five .swiper-slide-active .terras-b').value;
			cTerras = document.querySelector('.terras-slider-up-five .swiper-slide-active .terras-c').value;
			dTerras = document.querySelector('.terras-slider-up-five .swiper-slide-active .terras-d').value;
			sTerras = document.querySelector('.terras-slider-up-five .swiper-slide-active .terras-s').value;
		} else if(btnNum == 8) {
			noTerras = document.querySelector('.terras-slider-up-six .swiper-slide-active .terras-btn-no').innerHTML;
		} else if(btnNum == 9) {
			titleColTerras = document.querySelector('.terras-slider-up-six .swiper-slide-active .terras-top1-question_two h3').innerHTML;
			stepColTerras = document.querySelector('.terras-slider-up-six .swiper-slide-active .terras-top1-question_two .terras-steps .num').innerHTML;
			widthColTerras = document.querySelector('.terras-slider-up-six .swiper-slide-active .terras-top1-question_two .terras-width .num').innerHTML;
			colorColTerras = document.querySelector('.terras-slider-up-six .swiper-slide-active .terras-top1-question_two .terras-calc .label').innerHTML;
		}

	}


	var fenceGalleryThumbs1 = new Swiper('.fence-gallery_thumbs-one', {
		spaceBetween: 10,
		slidesPerView: 2,
		loop: true,
		observer: true,
		observeParents: true,
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
		observer: true,
		observeParents: true,
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
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
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





	new Swiper('.fence-slider_up-four', {
		spaceBetween: 10,
		loop:true,
		navigation: {
			nextEl: '.calculate-gallery-top .swiper-button-next',
			prevEl: '.calculate-gallery-top .swiper-button-prev',
		}
	});


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
	let galleryTop = document.querySelectorAll('.fence-calculate .calculate-gallery-top');
	let galleryBottom = document.querySelectorAll('.fence-calculate .calculate-gallery-thumbs');
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
		if(document.querySelector('.fence-calculate .calculate-up').classList.contains('up-title')) {
			document.querySelector('.fence-calculate .calculate-up').classList.remove('up-title');
		}

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
			aCalculate = document.querySelector('.fence-slider_up-four .swiper-slide-active .fence-a').value;
			bCalculate = document.querySelector('.fence-slider_up-four .swiper-slide-active .fence-b').value;
			needDoor = document.querySelector('.fence-slider_up-four .swiper-slide-active .fence-top-four-gate_active').innerHTML;
			needDoor2 = document.querySelector('.fence-slider_up-four .swiper-slide-active .fence-top-wicket_active').innerHTML;
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

	function createFiles() {
		filesBlock.innerHTML = "";
		let inp = document.createElement('input');
		let label = document.createElement('label');
		inp.setAttribute('type', 'file');
		inp.setAttribute('placeholder', 'Прикрепить свои файлы');
		inp.setAttribute('multiple', 'multiple');
		inp.setAttribute('accept', 'image/*,image/jpeg');
		inp.setAttribute('id', 'files');
		inp.setAttribute('class', 'fence-form__files');
		filesBlock.appendChild(inp);
		label.setAttribute('for', 'files');
		label.innerHTML = 'Прикрепить свои файлы';
		filesBlock.appendChild(label);


	}


	//Удаление файлов
	function deleteFiles() {
		console.log("Пока не реализована, нужен бэкенд");
	}

	/*Шаг назад*/
	let backBtn = document.querySelector('.fence-form__back');


	/*Начать заново*/
	let againBtn = document.querySelector('.fence-form__again');


	/*Включить первый слайдер*/
	function againSlider() {
		num1 = 1;
		document.querySelector('.calculate-up-button').setAttribute('data-num', 1);
		document.querySelector('.calculate__block').style.display = 'block';
		document.querySelector('.calculate-up-button').removeAttribute('style');
		document.querySelector('.calculate-up-button').removeAttribute('disabled');
		document.querySelector('.fence-form').classList.remove('show');
		document.querySelector('.calculate').classList.remove('hide');
		document.querySelector('.fence-form__send button').removeAttribute('style');
		document.querySelector('.fence-form__send button').removeAttribute('disabled');
		document.querySelector('.fence-form__send button').innerHTML = "Отправить расчет на почту";
		createFiles();

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

	function againSlider2() {
		num1 = 1;
		document.querySelector('.calculate-up-button').setAttribute('data-num', 1);
		document.querySelector('.calculate-up-button').removeAttribute('style');
		document.querySelector('.calculate-up-button').removeAttribute('disabled');
		document.querySelector('.fence-form__send button').removeAttribute('style');
		document.querySelector('.fence-form__send button').removeAttribute('disabled');
		document.querySelector('.fence-form__send button').innerHTML = "Отправить расчет на почту";
		document.querySelectorAll('.terras-top1-question_one').forEach((item) => {
			item.removeAttribute('style');
		});
		document.querySelectorAll('.terras-top1-question_two').forEach((item) => {
			item.removeAttribute('style');
		});
		createFiles();

		document.querySelector('.calculate__block').style.display = 'block';
		document.querySelector('.fence-form').classList.remove('show');
		document.querySelector('.calculate').classList.remove('hide');

		galleryTopTerras.forEach((item) => {
			if(item.getAttribute('data-item') == 1) {
				item.classList.remove('hide');
				item.classList.add('show');
				document.querySelector('.fence-calculate_top h2').innerHTML = item.getAttribute('data-title');
			} else {
				item.classList.remove('show');
				item.classList.add('hide');
			}
		});

		galleryBottomTerras.forEach((item) => {
			if(item.getAttribute('data-item') == 1) {
				item.classList.remove('hide');
				item.classList.add('show');
			} else {
				item.classList.remove('show');
				item.classList.add('hide');
			}
		});

		tabsLinkTerras.forEach((item) => {
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
		document.querySelector('.fence-form__square span').innerHTML = Number(fenceSquare);

		sumFence = document.querySelector('.fence-form__sum-origin span').innerHTML;

		againBtn.onclick = function(e) {
			if(!document.querySelector('.fence-calculate .calculate-up').classList.contains('up-title')) {
				document.querySelector('.fence-calculate .calculate-up').classList.add('up-title');
			}

			e.preventDefault();
			againSlider();
		}

		backBtn.onclick = function(e) {
			e.preventDefault();
			document.querySelector('.fence-form').classList.remove('show');
			document.querySelector('.calculate').classList.remove('hide');

		}


		takeIfnoFence(1);
	}


	/*Изменение формы Terras*/
	function formCalculate2() {
		fenceSquare = 4*(Number(aTerras)+Number(bTerras)+Number(cTerras)+Number(dTerras));
		document.querySelector('.fence-form__square span').innerHTML = Number(fenceSquare);

		sumFence = document.querySelector('.fence-form__sum-origin span').innerHTML;

		againBtn.onclick = function(e) {
			if(!document.querySelector('.fence-calculate .calculate-up').classList.contains('up-title')) {
				document.querySelector('.fence-calculate .calculate-up').classList.add('up-title');
			}

			e.preventDefault();
			againSlider2();
		}

		backBtn.onclick = function(e) {
			e.preventDefault();
			document.querySelector('.fence-form').classList.remove('show');
			document.querySelector('.calculate').classList.remove('hide');
			document.querySelector('.calculate-up-button').removeAttribute('style');
			document.querySelector('.calculate-up-button').removeAttribute('disabled');
			document.querySelector('.calculate-up-button').setAttribute('data-num', 7);
			num1 = 7;

			galleryTopTerras.forEach((item) => {
				if(item.getAttribute('data-item') == 7) {
					item.classList.remove('hide');
					item.classList.add('show');
					document.querySelector('.fence-calculate_top h2').innerHTML = item.getAttribute('data-title');
				} else {
					item.classList.remove('show');
					item.classList.add('hide');
				}
			});

			galleryBottomTerras.forEach((item) => {
				if(item.getAttribute('data-item') == 7) {
					item.classList.remove('hide');
					item.classList.add('show');
				} else {
					item.classList.remove('show');
					item.classList.add('hide');
				}
			});

			tabsLinkTerras.forEach((item) => {
				if(item.getAttribute('data-item') == 6) {
					item.classList.add('calculate-tabs_active');
				} else {
					item.classList.remove('calculate-tabs_active');
				}
			});

		}

		takeIfnoFence(2);
	}

	let fenceName, fencePhone, fenceEmail, fenceMessage, fenceOptions='';

	/*Отправка формы*/
	function takeIfnoFence(myNum) {
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


			if(myNum == 1) {
				sendMail();
			} else {
				sendMailTerras();
			}

		}
	}

	function sendMail() {
		let formData = new FormData();

		formData.append('name', fenceName);
		formData.append('phone', fencePhone);
		formData.append('email', fenceEmail);
		formData.append('message', fenceMessage);
		formData.append('square', fenceSquare);
		formData.append('price', sumFence);
		formData.append('files', filesListFence);
		formData.append('model', title1Calculate);
		formData.append('size', size1Calculate);
		formData.append('color', title2Calculate);
		formData.append('texture', title3Calculate);
		formData.append('length', aCalculate);
		formData.append('width', bCalculate);
		formData.append('door', needDoor);
		formData.append('door2', needDoor2);
		formData.append('options', fenceOptions);

		var xhr = new XMLHttpRequest();

	// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
	xhr.open('POST', 'sendmessage.php');

	// 3. Отсылаем запрос
	xhr.send(formData);

	document.querySelector('.fence-form-input_box .js-name').value = '';
	document.querySelector('.fence-form-input_box .js-phone').value = '';
	document.querySelector('.fence-form-input_box .js-email').value = '';
	document.querySelector('.fence-form__textarea').value = '';

	document.querySelector('.fence-form__send button').innerHTML = 'Отправлено!';
	document.querySelector('.fence-form__send button').style.color = '#ffffff';
	document.querySelector('.fence-form__send button').style.backgroundColor = 'transparent';
	document.querySelector('.fence-form__send button').style.border = '1px solid #93856f';
	document.querySelector('.fence-form__send button').setAttribute('disabled', 'disabled');


}

function sendMailTerras() {
	let formData = new FormData();

	formData.append('name', fenceName);
	formData.append('phone', fencePhone);
	formData.append('email', fenceEmail);
	formData.append('message', fenceMessage);
	formData.append('square', fenceSquare);
	formData.append('price', sumFence);
	formData.append('files', filesListFence);
	formData.append('model', modelTerrasTitle);
	formData.append('size', modelTerrasSize);
	formData.append('color', modelTerrasColor);
	formData.append('texture', textureTerras);
	formData.append('where', whereWood);
	formData.append('how', howWood);
	formData.append('forma', formTerras);
	formData.append('aside', aTerras);
	formData.append('bside', bTerras);
	formData.append('cside', cTerras);
	formData.append('dside', dTerras);


	if(noTerras != undefined) {
		formData.append('noterras', noTerras);
	} else {
		formData.append('yesterras', 'Да');
		formData.append('stepmodel', titleColTerras);
		formData.append('stepscol', stepColTerras);
		formData.append('lengthstep', widthColTerras);
		formData.append('colorstep', widthColTerras);
	}
	formData.append('options', fenceOptions);


	var xhr = new XMLHttpRequest();

	// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
	xhr.open('POST', 'message.php');

	// 3. Отсылаем запрос
	xhr.send(formData);

	document.querySelector('.fence-form-input_box .js-name').value = '';
	document.querySelector('.fence-form-input_box .js-phone').value = '';
	document.querySelector('.fence-form-input_box .js-email').value = '';
	document.querySelector('.fence-form__textarea').value = '';


	document.querySelector('.fence-form__send button').innerHTML = 'Отправлено!';
	document.querySelector('.fence-form__send button').style.color = '#ffffff';
	document.querySelector('.fence-form__send button').style.backgroundColor = 'transparent';
	document.querySelector('.fence-form__send button').style.border = '1px solid #93856f';
	document.querySelector('.fence-form__send button').setAttribute('disabled', 'disabled');

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



