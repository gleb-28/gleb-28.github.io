// dropdown
function dropdownFunction() {
  document.querySelector(".dropdown__list").classList.toggle("dropdown__list--visible");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown__button')) {
    var dropdowns = document.getElementsByClassName("dropdown__list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown__list--visible')) {
        openDropdown.classList.remove('dropdown__list--visible');
      };
    };
  };
};

// form
let ContactBody = document.querySelector('.contact__body');
let form = document.querySelector('.contact__form');

form.reset();

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