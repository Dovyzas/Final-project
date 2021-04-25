
// TABS SECTION

let tabNavigationBlocks = document.querySelectorAll('.tabs .container nav ul li');
let tabContentBlocks = document.querySelectorAll('.tabs .tab-content');

function removeActiveNavigation() {
  for (let tab of tabNavigationBlocks) {
    tab.classList.remove('active');
  }
}

function removeActiveTabs() {
  for (let tab of tabContentBlocks) {
    tab.classList.remove('active');
  }
}

for (let tab of tabNavigationBlocks) {
  tab.addEventListener('click', function() {
    removeActiveNavigation();
    removeActiveTabs();

    this.classList.add('active');

    let index = this.dataset.slide;

    document.querySelector('.tabs .tab-content[data-slide="'+index+'"]').classList.add('active');
    })
}

// Reviews section

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    autoHeight: true,

    breakpoints: {
        // when window width is >= 320px
        600: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        1000: {
          slidesPerView: 3,
        }
      },

    // autoplay: {
    //     delay: 5000
    // },

    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  });

  // Mobile menu section

  document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-bar').classList.toggle('active');
});

    document.getElementById('nav-element').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.remove('active');
        document.getElementById('nav-bar').classList.remove('active');
    });


  // Form Validation

  let firstName = document.getElementById('fname');
  let lastName = document.getElementById('lname');
  let phoneNumber = document.getElementById('number');
  let button = document.getElementById('submit');
  let subMonth = document.getElementById('sub-month'); 
  let subYear = document.getElementById('sub-year'); 
  let errorMsg = document.getElementById('error');
  let successMsg = document.getElementById('success');

button.addEventListener('click', function() {
    if (firstName.value && lastName.value && phoneNumber.value && (subMonth.checked || subYear.checked) ) {
        successMsg.classList.add("active");
        errorMsg.classList.remove("active");
    }
    else {
        errorMsg.classList.add("active");
        successMsg.classList.remove("active");
    }
});
 

//Contact form validation

let firstNameC = document.getElementById('fname-2');
let lastNameC = document.getElementById('lname-2');
let phoneNumberC = document.getElementById('number-2');
let buttonC = document.getElementById('submit-2');
let subMonthC = document.getElementById('sub-month-2'); 
let subYearC = document.getElementById('sub-year-2'); 
let errorMsgC = document.getElementById('error-2');
let successMsgC = document.getElementById('success-2');

buttonC.addEventListener('click', function() {
    if (firstNameC.value && lastNameC.value && phoneNumberC.value && (subMonthC.checked || subYearC.checked) ) {
        successMsgC.classList.add("active");
        errorMsgC.classList.remove("active");
    }
    else {
        errorMsgC.classList.add("active");
        successMsgC.classList.remove("active");
    }
});
