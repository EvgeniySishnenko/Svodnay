function menuMobile () {
    $('.header__menu--link').on('click', (e)=>{
        e.preventDefault();
        const target = getCurrentZone(e.target);
        const attr = $(target).attr('data-id');
        const elem = $('#'+attr);

        if($(elem).length != 0) {

            if($('.block__menu').hasClass('block__menu--active')) {
                $('#nav-icon2').removeClass('open');
                $('.block__menu').removeClass('block__menu--active');
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