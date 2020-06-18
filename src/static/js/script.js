$(document).ready(function() {

    var mainEl = document.querySelector('.card-top');
    if (mainEl) {
        var cardTop = $(".card-top").offset().top;
        var catalogTop = $(".catalog-top").offset().top;
        var applicationTop = $(".application-block").offset().top;
        var calcTop = $(".calculate").offset().top;
        var serviceTop = $(".service-block").offset().top;
        var galleryTop = $(".gallery-block").offset().top;
        var aboutTop = $(".about-block").offset().top;
        var teamTop = $(".team-block").offset().top;
        var newsTop = $(".news-block").offset().top;
        var seoTop = $(".seo-block").offset().top;
        var contactTop = $(".contact-block").offset().top;
        var mapTop = $(".map-block").offset().top;

        $(window).on("scroll", function() {
            console.log(cardTop);
            var scroll = $(window).scrollTop();
            if (scroll < cardTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-1').addClass('is-active');
            }
            if (scroll >= cardTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-2').addClass('is-active');
            }
            if (scroll >= catalogTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-3').addClass('is-active');
            }
            if (scroll >= applicationTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-4').addClass('is-active');
            }
            if (scroll >= calcTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-5').addClass('is-active');
            }
            if (scroll >= serviceTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-6').addClass('is-active');
            }
            if (scroll >= galleryTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-7').addClass('is-active');
            }
            if (scroll >= aboutTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-8').addClass('is-active');
            }
            if (scroll >= teamTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-9').addClass('is-active');
            }
            if (scroll >= newsTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-10').addClass('is-active');
            }
            if (scroll >= seoTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-11').addClass('is-active');
            }
            if (scroll >= contactTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-12').addClass('is-active');
            }
            if (scroll >= mapTop) {
                $('.scroll-indicate__link').removeClass('is-active');
                $('.link-13').addClass('is-active');
            }
        });

        $(function() {
            $(".scroll-indicate a").click(function(e) {
                e.preventDefault();
                var currentBlock = $(this).attr("href");
                $(".scroll-indicate__link").removeClass('is-active');
                $(this).addClass('is-active');
                var currentBlockoffset = $(currentBlock).offset().top;
                $("html, body").animate({
                    scrollTop: currentBlockoffset
                }, 500);
            });
        });
    }

    $(".application-block__btn").click(function() {
        var currentBlockoffset = $('.calculate').offset().top;
        $("html, body").animate({
            scrollTop: currentBlockoffset
        }, 500);
    });

    $('.call-btn').click(function() {
        $('.recall-modal').fadeIn();
        $('.overlay').fadeIn();
    });

    $('.close-modal').click(function() {
        $('.modal').fadeOut();
        $('.overlay').fadeOut();
    });

    var mapEl = document.querySelector('#mapmain');

    var YaMapsShown = false;
    if (mapEl) {

        $(window).scroll(function() {
            if (!YaMapsShown) {
                // if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
                if ($(window).scrollTop() > 500) {

                    var elem = document.createElement('script');
                    elem.type = 'text/javascript';
                    elem.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
                    // console.log(elem);
                    $('body').append(elem);
                    YaMapsShown = true;
                    setTimeout(function() {
                        ymaps.ready(init);

                        function init() {

                            var center = [55.763240, 37.651825];
                            var myMap = new ymaps.Map('mapmain', {
                                center: center,
                                controls: [],
                                zoom: 16
                            }, {
                                searchControlProvider: 'yandex#search'
                            });

                            myMap.behaviors.disable('scrollZoom');
                            // myMap.behaviors.disable('multiTouch');
                            // myMap.behaviors.disable('drag')

                            var myPlacemark = new ymaps.Placemark(center, {
                                balloonContent: 'Москва, ул. Покровка, 43, стр 8',
                                hintContent: 'Москва, ул. Покровка, 43, стр 8'
                            }, {
                                iconLayout: 'default#image',
                                iconImageHref: 'img/baloon.png',
                                iconImageSize: [59, 81]
                            });

                            myMap.geoObjects.add(myPlacemark);
                        }
                    }, 500);
                }
            }
        });
    }

    // if (mapEl) {
    //
    //     ymaps.ready(init);
    //
    //     function init() {
    //         var center = [55.59113656911934, 37.88662649999996];
    //         var myMap = new ymaps.Map('mapmain', {
    //             center: center,
    //             controls: [],
    //             zoom: 16
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         });
    //
    //         myMap.behaviors.disable('scrollZoom');
    //
    //         var myPlacemark = new ymaps.Placemark(center, {
    //             // Свойства.
    //             // Содержимое иконки, балуна и хинта.
    //             balloonContent: 'MOSCOW / SW1A 2AA, 10 Downing Street 5/2 9:00 - 18:00',
    //             hintContent: 'MOSCOW / SW1A 2AA, 10 Downing Street 5/2 9:00 - 18:00'
    //         }, {
    //             // Опции.
    //             iconLayout: 'default#image',
    //             iconImageHref: 'img/baloon.png',
    //             iconImageSize: [59, 81]
    //             // preset: 'twirl#violetIcon'
    //         });
    //
    //         myMap.geoObjects.add(myPlacemark);
    //     }
    // }


    $('.tab-links_desc a').click(function(e) {
        e.preventDefault();
        $('.tab-links_desc a').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.tab-block').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.tab-links_desc a:first').click();

    $('.service-tabs a').click(function(e) {
        e.preventDefault();
        $('.service-tabs a').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.service-info__tab').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.service-tabs a:first').click();

    $('.tab-links_mob').on('click', 'a', function(e) {
        e.preventDefault();
        $('.tab-links_mob a').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.tab-block').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });

    $('.service-tabs-mob').on('click', 'a', function(e) {
        e.preventDefault();
        $('.service-tabs-mob a').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.service-info__tab').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });

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

        breakpoints: {
            1199: {
                direction: 'horizontal',
            }
        }
    });

    var swiper = new Swiper('.product-list-slider', {
        slidesPerView: 4,
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

    var swiper = new Swiper('.service-list-slider', {
        slidesPerView: 5,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            991: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
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
        slidesPerView: 2,
        spaceBetween: 50,
        // slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: false,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 15,
                centeredSlides: false,
            }
        }
    });

    $('.loop').click(function() {
        $(this).parents('.product-thumb').find('.product-thumb__show').css({
            'display': 'none'
        });
        $(this).parents('li').find('.product-thumb__hidden').fadeIn();
    });
    $('.loop-close').click(function() {
        $(this).parents('.product-thumb').find('.product-thumb__show').fadeIn();
        $(this).parents('.product-thumb').find('.product-thumb__hidden').css({
            'display': 'none'
        });
    });

    $('.select-cat').selectric();
    // $('.time-select').selectric();

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

    var swiperBanner = new Swiper('.service-slider-mob', {
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
        $('.header-main').removeClass('header-opacity');
    }

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 1) {
                $('.header-main').removeClass('header-opacity');
            } else {
                $('.header-main').addClass('header-opacity');
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
