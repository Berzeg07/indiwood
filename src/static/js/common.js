$(document).ready(function(){
	$('.calculate__select select').selectric();
	$('.terras-calculate__select select').selectric();

});

var galleryThumbs1 = new Swiper('.gallery-thumbs1', {
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

var galleryTop = new Swiper('.gallery-top1', {
	spaceBetween: 10,
	loop:true,
	navigation: {
		nextEl: '.gallery-top1 .swiper-button-next',
		prevEl: '.gallery-top1 .swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs1,
	},
});
