function showMenuMobile () {
    $('#nav-icon2').on('click', ()=> {
        $('#nav-icon2').toggleClass('open');
        $('.menu__mobile').toggleClass('menu__mobile--show');
    });
    window.addEventListener("resize", function () {
        
        if (innerWidth > 992) {
            $('#nav-icon2').removeClass('open');
            $('.menu__mobile').removeClass('menu__mobile--show');
        }
    }, false);


}
module.exports = showMenuMobile;