$(document).ready(function() {

    $('.loop').click(function() {
        $(this).parents('li').find('.product-thumb__show').addClass('hidden');
        $(this).parents('li').find('.product-thumb__hidden').addClass('show');
    });

    $('.loop-close').click(function() {
        $(this).parents('li').find('.product-thumb__show').removeClass('hidden');
        $(this).parents('li').find('.product-thumb__hidden').removeClass('show');
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
