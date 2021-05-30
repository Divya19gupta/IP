function marg1(){
    var slider = document.querySelector('#slider');
    slider.style.marginLeft = '-100%';
    function marg2(){
        var slider = document.querySelector('#slider');
        slider.style.marginLeft = '-200%';
        function marg2(){
            var slider = document.querySelector('#slider');
            slider.style.marginLeft = '0';
            setTimeout(marg1, 8000);
        }
        setTimeout(marg0, 8000);
    }
    setTimeout(marg2, 8000);
}


setInterval(slid , 7500);
setInterval(para , 7200);
setInterval(head , 7200);
setInterval(line , 7300);
setTimeout(marg1, 8000);
setInterval(slid2 , 8500);
setInterval(head2 , 8700);
setInterval(para2 , 8700);
setInterval(line2 , 8600);

function slid(){
    var s = document.querySelectorAll('.slid');
    var i ;
    for(i=0;i<s.length;i++){
        s[i].style.transform = 'scale(.8)';
    }
}

function slid2(){
    var s = document.querySelectorAll('.slid');
    var i ;
    for(i=0;i<s.length;i++){
        s[i].style.transform = 'scale(1)';
    }
}

function head(){
    var h = document.querySelectorAll('h1');
    var i ;
    for(i=0;i<h.length;i++){
        h[i].style.top = '70px';
    }
}

function head2(){
    var h = document.querySelectorAll('h1');
    var i ;
    for(i=0;i<h.length;i++){
        h[i].style.top = '0';
       
    }
}

function para(){
    var p = document.querySelectorAll('p');
    var i ;
    for(i=0;i<h.length;i++){
        p[i].style.bottom = '40px';
    }
}

function para2(){
    var p = document.querySelectorAll('p');
    var i ;
    for(i=0;i<h.length;i++){
        p[i].style.bottom = '0';
    }
}

function line(){
    var l = document.querySelector('.line');
    for(i=0;i<s.length;i++){
        s[i].style.transform = 'scale(0)';
    }
}

function line2(){
    var l = document.querySelector('.line');
    l.style.transform = 'scale(1)';
}

function scrollAppear(){
    var sectiononeh1 = document.querySelector('.sectiononeh1');
    var sectiononeh1Post = sectiononeh1.getBoundingClientRect().top;
    var screenpos = window.innerHeight;

    if(sectiononeh1Post < screenpos){
        sectiononeh1.classList.add('sectiononeh1-appear');
    }
}
window.addEventListener('scroll',scrollAppear);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}