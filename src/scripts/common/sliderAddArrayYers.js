function sliderAddArrayYers () {
    let arr = ['2019', '2018', '2017'];

    document.querySelectorAll('ul.slick-dots > li').forEach( (e, i) => {
        let span =  document.createElement('span');
        span.classList.add('year');
        span.innerText  = arr[i];
        e.append(span);
    });
   
}
module.exports = sliderAddArrayYers;