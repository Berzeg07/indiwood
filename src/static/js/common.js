$(document).ready(function(){
	$('.calculate__select select').selectric();
	$('.terras-calculate__select select').selectric();

});

 var galleryThumbs1 = new Swiper('.gallery-thumbs1', {
      spaceBetween: 50,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
      	500: {
      		slidesPerView: 3,
      		spaceBetween: 60
      	},
      	768: {
      		slidesPerView: 5,
      		spaceBetween: 30
      	}
      }
    });

    var galleryTop = new Swiper('.gallery-top1', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.gallery-top1 .swiper-button-next',
        prevEl: '.gallery-top1 .swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs1,
      },
    });
