function menuMobile () {
    $('.header__menu--link').on('click', (e)=>{
        e.preventDefault();
        const target = getCurrentZone(e.target);
        const attr = $(target).attr('data-id');
        const elem = $('#'+attr);

        if($(elem).length != 0) {

            if($('.menu__mobile').hasClass('menu__mobile--show')) {
                $('#nav-icon2').removeClass('open');
                $('.menu__mobile').removeClass('menu__mobile--show');
            }

            $('body,html').animate({ scrollTop: $(elem).offset().top }, 500); 
        }
    });
    function getCurrentZone(from) {
        do {
            if (from.classList.contains('header__menu--link')) {
                return from;
            }
        } while (from = from.parentElement);
    }
}
module.exports = menuMobile;