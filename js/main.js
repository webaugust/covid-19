$(function () {

    const nav = $('#nav');
    const navToggle = $('#navToggle');

    $("[data-scroll]").on("click", function(e) {
        e.preventDefault();
        const idElement = $(this).attr('href');

        nav.removeClass("show");

        $('html, body').stop().animate({
            scrollTop: $(idElement).offset().top
        }, 1000);
    });

    $(".menu__list-item__link").on("click", function(e) {
        navToggle.removeClass("active");
    });


    $(window).scroll(function () {
        const top = $(document).scrollTop();
        if (top < 100) $(".header").css({
            top: '0',
            position: 'relative'

        });
        else $(".header").css({
            top: '0',
            position: 'fixed',
            width: '100%',
            'border-bottom': '1px solid #ccc'
        });
    });

    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    navToggle.on('click', function(e) {
        e.preventDefault();
        nav.toggleClass("show");
        $(['.header__burger', '.menu']).toggleClass('active');
    });

});