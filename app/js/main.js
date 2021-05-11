$(function(){

$('.about__slider').slick({
    slidesToShow:4,
    slidesToScroll:1,
    prevArrow:' <button class="about__arrow about__arrow-prev"><img src="images/about-arrow-prev.svg" alt=""></button>',
    nextArrow:' <button class="about__arrow about__arrow-next"><img src="images/about-arrow-next.svg" alt=""></button>',
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
          }
        },
        {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          },
    ]
});

var mixer = mixitup('.works__inner');
mixer.filter('.all');

$('.company__inner').slick({
    arrows:false,
    dots:true,
    fade:true,
    autoplay:true
});

    $('.header__button').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });
  
    new WOW().init();

});