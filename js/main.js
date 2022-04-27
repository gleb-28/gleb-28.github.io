let switcher = UIkit.switcher('.uk-switcher');

let ContactBody = document.querySelector('.contact__body');
let form = document.querySelector('.contact__form');

form.onsubmit=function(event) { 
  event.preventDefault();
    ContactBody.classList.add("animation--fly-out");
    setTimeout(function(){
      document.querySelector('.animation--fly-in').style.display = "flex";
     },3000);
  setTimeout(function(){
    form.requestSubmit();
     },2000);     
};