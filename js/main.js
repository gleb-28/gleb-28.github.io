const swiper = new Swiper('.swiper', {
 
  simulateTouch: false,
  autoHeight: true,


});


document.querySelector('.slide-to1').addEventListener('click', () => {
  document.getElementById("s2").classList.remove('portfolio__slide-switch--active');
  document.getElementById("s3").classList.remove('portfolio__slide-switch--active');
  swiper.slideTo(0);
  document.querySelector('.slide-to1').classList.add('portfolio__slide-switch--active');


});

document.querySelector('.slide-to2').addEventListener('click', () => {
  document.getElementById("s1").classList.remove('portfolio__slide-switch--active');
  document.getElementById("s3").classList.remove('portfolio__slide-switch--active');
  swiper.slideTo(1);
  document.querySelector('.slide-to2').classList.add('portfolio__slide-switch--active');


});

document.querySelector('.slide-to3').addEventListener('click', () => {
  document.getElementById("s1").classList.remove('portfolio__slide-switch--active');
  document.getElementById("s2").classList.remove('portfolio__slide-switch--active');
  swiper.slideTo(2);
  document.querySelector('.slide-to3').classList.add('portfolio__slide-switch--active');

});



// document.getElementsByClassName('.contact__input--name').addEventListener("focus", function(e){
//   document.getElementsByClassName('.contact__input--name').placeholder = "";
// })

// document.querySelector('.header__lang-switcher').addEventListener('click', function (e) => {
//   document.querySelector('.header__lang-switch-wrapper').style.display = 'block';
//   document.querySelector('.header__lang-switcher').style.display = 'none';



// });

