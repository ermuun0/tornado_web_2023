function openForm(){
    document.getElementById('myForm').style.display='block';

    document.addEventListener('click', closeFormOutside);
}

function closeForm(){
    document.getElementById('myForm').style.display='none';

    document.removeEventListener('click', closeFormOutside);
}

function closeFormOutside(event){
    const form = document.getElementById('myForm');
    if(!form.contains(event.target) && event.target !== document.getElementById('openBtn')){
        closeForm();
    }
}
let currenSlide = 0;

function showSlide(index){
    const slider = document.getElementById('slider');
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