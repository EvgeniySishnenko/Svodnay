function sliderAddArrayYers () {
    let arr = ['2019', '2018', '2017'];


   $('ul.slick-dots > li').each( (i, e) => {
    // document.querySelectorAll('ul.slick-dots > li').forEach( (e, i) => {
        // $('ul.slick-dots > li').each( (e, i) => {
        let span =  document.createElement('span');
        span.classList.add('year');
        span.innerText  = arr[i];
        // e.append(span);
        // e.textContent(span);
        $(e).append(span);
        // console.log(i);
    });
   
}
module.exports = sliderAddArrayYers;