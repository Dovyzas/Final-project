
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