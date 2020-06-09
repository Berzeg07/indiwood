$(document).ready(function() {

    var galleryAbout = new Swiper('.about-slider', {
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        // loop:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var galleryTeamThumbs = new Swiper('.team-gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 6,
        // freeMode: true,
        // slidesPerView: 2,
        // loop: true,
        centeredSlides: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        hashNavigation: {
            watchState: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 10,
            }
        }
    });

    var galleryTeam = new Swiper('.team-gallery', {
        spaceBetween: 10,
        // loop:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryTeamThumbs,
        }
    });



    var swiper = new Swiper('.scroll-slider', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });

    var swiper = new Swiper('.product-list-slider', {
        slidesPerView: 4,
        spaceBetween: 15,
        breakpoints: {
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            499: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });

    var swiper = new Swiper('.tab-links_mob', {
        slidesPerView: 5,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            499: {
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });

    var swiper = new Swiper('.gallery-indiwood', {
        slidesPerView: 3,
        spaceBetween: 50,
        // slidesPerView: 'auto',
        //   centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 15,
            }
        }
    });

    $('.loop').click(function() {
        $(this).parents('li').find('.product-thumb__show').css({
            'display': 'none'
        });
        $(this).parents('li').find('.product-thumb__hidden').fadeIn();
    });
    $('.loop-close').click(function() {
        $(this).parents('li').find('.product-thumb__show').fadeIn();
        $(this).parents('li').find('.product-thumb__hidden').css({
            'display': 'none'
        });
    });

    $('.select-cat').selectric();

    var swiperBanner = new Swiper('.banner-slider', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiperBanner = new Swiper('.product-slider-mob', {
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
        $('.header').removeClass('header-opacity');
    }

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 1) {
                $('.header').removeClass('header-opacity');
            } else {
                $('.header').addClass('header-opacity');
            }
        });
    });

    $('.burger').click(function() {
        $(this).toggleClass('is-active');
        $('.dropdown-menu').toggleClass('is-active');
    });

    $('.close-menu').click(function() {
        $('.burger').removeClass('is-active');
        $('.dropdown-menu').removeClass('is-active');
    });




});
