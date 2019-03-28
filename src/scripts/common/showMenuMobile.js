function showMenuMobile () {
    $('#nav-icon2').on('click', ()=> {
        $('#nav-icon2').toggleClass('open');
        $('.block__menu').toggleClass('block__menu--active');
    });
    window.addEventListener("resize", function () {
        
        if (innerWidth > 992) {
            $('#nav-icon2').removeClass('open');
            $('.block__menu').removeClass('block__menu--active');
        }
    }, false);


}
module.exports = showMenuMobile;