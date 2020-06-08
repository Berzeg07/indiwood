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
	let answer = this.parentElement.querySelectorAll('.answer');
	let newAnswer = answer.innerHTML.split(',').join('.');
	answer.innerHTML = (Number(newAnswer)+0.1).toFixed(1).split('.').join(',');

}

tabsLink.forEach((item) => {
	item.addEventListener('click', function(e) {
		e.preventDefault();
	});
});

buttonFence.onclick = function() {
	if(num == 5) {
		num = 1;
		document.querySelector('.calculate__block').style.display = 'block'
	} else {
		num += 1;
		document.querySelector('.calculate__block').style.display = 'none'
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


