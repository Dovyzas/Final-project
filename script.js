
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