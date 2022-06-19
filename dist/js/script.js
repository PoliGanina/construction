$(document).ready(function(){
     /* wow animate library */
    new WOW().init();

    $('.slider').slick({
        appendArrows: $('.news__navig'),
        prevArrow: '<div class="news__navig-left"><img class="news__navig-icon" src="./icons/left.svg" alt="иконка назад"></div>',
        nextArrow: '<div class="news__navig-right"><img class="news__navig-icon" src="./icons/right.svg" alt="иконка вперед"></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            {
                breakpoint: 992,
                settings: 'unslick'
            }
        ]
    })

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
    validateForm('#partner-form');
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    
    $('.dropdown-btn').on('click', () => {
        $('.dropdown').toggleClass('dropdown-active');
        $('.body').toggleClass('fixed__page');
    });


    $('.btn_burger').on('click', () => {
        $('.mobile-menu').toggleClass('mobile-menu-active');
        $('.body').toggleClass('fixed__page');
        $('.btn_burger').toggleClass('btn_close');
    });

  });