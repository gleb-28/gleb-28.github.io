// let switcher = UIkit.switcher('.uk-switcher');

let ContactBody = document.querySelector('.contact__body');
let form = document.querySelector('.contact__form');

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'error--field',
  errorLabelCssClass: 'error--label',
  focusInvalidField: false,
  lockForm: true,
});

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'this field is required:',
    },
  ])
  .addField('#social', [
    {
      rule: 'required',
      errorMessage: 'this field is required:',
    },
  ])
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'this field is required:',

    },
  ])

  .onSuccess((event) => {
    console.log('Validation passes and form submitted');
    ContactBody.classList.add("animation--fly-out");
    setTimeout(function(){
      document.querySelector('.animation--fly-in').style.display = "flex";
     },3000);
    setTimeout(function(){
    form.requestSubmit();
     },2000);
  });


// form.onsubmit=function(event) { 
//   event.preventDefault();
//     ContactBody.classList.add("animation--fly-out");
//     setTimeout(function(){
//       document.querySelector('.animation--fly-in').style.display = "flex";
//      },3000);
//     setTimeout(function(){
//     form.requestSubmit();
//      },2000);     
// };
