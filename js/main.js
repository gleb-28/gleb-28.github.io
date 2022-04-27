// const swiper = new Swiper('.swiper', {
 
//   simulateTouch: false,
//   autoHeight: true,


// });


// document.querySelector('.slide-to1').addEventListener('click', () => {
//   document.getElementById("s2").classList.remove('portfolio__slide-switch--active');
//   document.getElementById("s3").classList.remove('portfolio__slide-switch--active');
//   swiper.slideTo(0);
//   document.querySelector('.slide-to1').classList.add('portfolio__slide-switch--active');


// });

// document.querySelector('.slide-to2').addEventListener('click', () => {
//   document.getElementById("s1").classList.remove('portfolio__slide-switch--active');
//   document.getElementById("s3").classList.remove('portfolio__slide-switch--active');
//   swiper.slideTo(1);
//   document.querySelector('.slide-to2').classList.add('portfolio__slide-switch--active');


// });

// document.querySelector('.slide-to3').addEventListener('click', () => {
//   document.getElementById("s1").classList.remove('portfolio__slide-switch--active');
//   document.getElementById("s2").classList.remove('portfolio__slide-switch--active');
//   swiper.slideTo(2);
//   document.querySelector('.slide-to3').classList.add('portfolio__slide-switch--active');

// });


let switcher = UIkit.switcher('.uk-switcher', {
    
  swiping: true,

});


UIkit.switcher('swiping', 'true');










// var switcher = document.getElementById("ss");
// var btns = switcher.getElementsByClassName('portfolio__slide-switch');
//   for (var i = 0; i < btns.length; i++){
//       btns[i].addEventListener('click', function(){
//         var current = document.getElementsByClassName('portfolio__slide-switch--active');
//         current[0].className = current[0]className.replace('portfolio__slide-switch--active');
//         swiper.slideTo(this);
//         this.className += 'portfolio__slide-switch--active';
//       });
//   };


// function activeLink(){
//   switcher.forEach( link =>
//     link.classList.remove('portfolio__slide-switch--active'));
//     swiper.slideTo(this);
//     this.classList.add('portfolio__slide-switch--active');
//   }
//   switcher.forEach( link =>
//   link.addEventListener('click',activeLink));
