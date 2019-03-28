const jquery = require("jquery");
const menuMobile = require("./common/menuMobile");
const showMenuMobile = require("./common/showMenuMobile");
const slick = require("./slick/slick");
const sliderAddArrayYers = require("./common/sliderAddArrayYers");
const fancyboxShow = require("./fancybox/fancybox");
const $ = require("jquery");
const jQuery = require("jquery");
window.jQuery = $;
const fancybox = require("@fancyapps/fancybox");

if(document.querySelector('.wrapper')) {
    slick();
    sliderAddArrayYers();
    menuMobile();
    showMenuMobile();
    fancyboxShow();
}
