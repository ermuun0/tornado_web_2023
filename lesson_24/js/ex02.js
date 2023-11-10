let currenSlide = 0;

function showSlide(index){
    const slider = document.getElementsByClassName('slider');
    const slides = document.getElementsByClassName('slide');
    if(index >= slides.length) {
        currenSlide = 0;
    }else if (index < 0) {
        currenSlide = slides.length -1;
    }else{
        currenSlide = index;
    }
    const translateValue = -currenSlide * 100 + '%';
    slider[0].setAttribute('style', 'transform: translateX(' + translateValue +')');
}

function prevSlide() {
    showSlide(currenSlide -1);
}
function nextSlide(){
    showSlide(currenSlide +1);
}