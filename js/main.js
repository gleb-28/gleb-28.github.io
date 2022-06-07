// dropdown
const dropdownButton = document.querySelector('.dropdown__button');
const body = document.querySelector('body');

dropdownButton.addEventListener('click', function() {
  document.querySelector(".dropdown__list").classList.toggle("dropdown__list--visible");
});

body.addEventListener('click', function() {
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
});


//tabs
const tabsBtn = document.querySelectorAll(".tabs__button");
const tabsItem = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('tabs__button--active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('tabs__button--active');
            });
    
            tabsItem.forEach(function(item) {
                item.classList.remove('tabs__item--active');
            });
    
            currentBtn.classList.add('tabs__button--active');
            currentTab.classList.add('tabs__item--active');
        }
    });
}

document.querySelector('.tabs__button').click();


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
    // form.requestSubmit();
    alert("This is a test form! The message has not been sent!");
    },7000);
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