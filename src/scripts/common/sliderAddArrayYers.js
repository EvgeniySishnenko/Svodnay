function sliderAddArrayYers () {
    let arr = ['2017', '2018', '2019'];

    document.querySelectorAll('ul.slick-dots > li').forEach( (e, i) => {
        let span =  document.createElement('span');
        span.classList.add('year');
        span.innerText  = arr[i];
        e.append(span);
    });
   
}
module.exports = sliderAddArrayYers;