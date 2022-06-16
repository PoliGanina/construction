$(document).ready(function(){
 
    $('.slider').slick({
        appendArrows: $('.news__navig'),
        prevArrow: '<div class="news__navig-left"><img class="news__navig-icon" src="./icons/left.svg" alt="иконка назад"></div>',
        nextArrow: '<div class="news__navig-right"><img class="news__navig-icon" src="./icons/right.svg" alt="иконка вперед"></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
        
    })

    // $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
    //     $(this)
    //       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    //       .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    // });
    
    // function toggleSlide(item) {
    //     $(item).each(function(i) {
    //         $(this).on('click', function(e) {
    //             e.preventDefault();
    //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //         })
    //     });
    // };

    // toggleSlide('.catalog-item__link');
    // toggleSlide('.catalog-item__back');

    // Modal

    // $('[data-modal=consultation]').on('click', function() {
    //     $('.overlay, #consultation').fadeIn('fast');
    // });
    // $('.modal__close').on('click', function() {
    //     $('.overlay, #consultation, #order, #thans').fadeOut('fast');
    // });
    // $('.button_catalog').each(function(i) {
    //     $(this).on('click', function() {
    //         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    //         $('.overlay, #order').fadeIn('fast');
    //     })
    // })

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: "required",
                mail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                },
                phone: "Пожалуйста, введите свой номер телефона",
                mail: {
                    required: "Пожалуйста, введите свою электронную почту",
                    email: "Почта должна быть в формате name@domain.com"
                },
            },
        });
    };

    validateForm('#partner-form')

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    new WOW().init();

  });