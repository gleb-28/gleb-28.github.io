// dropdown
const dropdownButtons = document.querySelectorAll('.dropdown__button');
const body = document.querySelector('body');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle("dropdown__list--visible");

    body.addEventListener('click', () => {
      if (button.nextElementSibling.classList.contains('dropdown__list--visible') &&
        !event.target.matches('.dropdown__button')) {
        button.nextElementSibling.classList.remove('dropdown__list--visible');
      };
    });
  });
});


//tabs
const tabsWrappers = document.querySelectorAll('.tabs-wrapper');

tabsWrappers.forEach(tabsWrapper => {
    const tabsBtns = tabsWrapper.querySelectorAll('.tabs__button');
    const tabsItems = tabsWrapper.querySelectorAll('.tabs__item');

    tabsBtns.forEach(tabBtn => {
        tabBtn.addEventListener('click', () => {
            let tabId = tabBtn.getAttribute('data-tab');
            let currentItem = tabsWrapper.querySelector(tabId);

            if (!tabBtn.classList.contains('tabs__button--active')) {
                tabsBtns.forEach(tabBtn => {
                    tabBtn.classList.remove('tabs__button--active');
                });

                tabsItems.forEach(item => {
                    item.classList.remove('tabs__item--active');
                });

                tabBtn.classList.add('tabs__button--active');
                currentItem.classList.add('tabs__item--active');
            };
        });
    });

    tabsWrapper.querySelector('.tabs__button').click();
});


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