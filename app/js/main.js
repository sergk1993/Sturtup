$(function(){

$('.about__slider').slick({
    slidesToShow:4,
    slidesToScroll:1,
    prevArrow:' <button class="about__arrow about__arrow-prev"><img src="images/about-arrow-prev.svg" alt=""></button>',
    nextArrow:' <button class="about__arrow about__arrow-next"><img src="images/about-arrow-next.svg" alt=""></button>',
});

var mixer = mixitup('.works__inner');
mixer.filter('.all');
  
});