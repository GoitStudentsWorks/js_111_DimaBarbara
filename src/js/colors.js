// color btns
const chekCol = document.querySelector('.color');
const collist = document.querySelector('.color-list');
const redBtn = document.querySelector('.dtn.red');
const bluBtn = document.querySelector('.dtn.blu');
const defBtn = document.querySelector('.dtn.def');
const yelBtn = document.querySelector('.dtn.yel');
const oreBtn = document.querySelector('.dtn.ore');
// elements
const colIt1 = document.querySelectorAll('.projects-link');
const colIt2 = document.querySelectorAll('.benefits-icons');
const colIt3 = document.querySelectorAll('.faq-button');
const colIt4 = document.querySelector('.footer-accent');
const colIt5 = document.querySelector('.footer-btn-send');
const colIt6 = document.querySelector('.subtitle-func');
const colIt7 = document.querySelectorAll('.accordion-button-up-down');
const colIt8 = document.querySelectorAll('.skill-item-circle');
const colIt9 = document.querySelector('.hero-container');
const colIt10 = document.querySelectorAll('.after-line');
const colIt11 = document.querySelector('.menu');
const colIt12 = document.querySelectorAll('.nav-link');
const colIt13 = document.querySelector('.order');
const colIt14 = document.querySelector('.menu-overlay');
const colIt15 = document.querySelector('.header-link.work-together');
const colIt16 = document.querySelector('.covers');
const colIt17 = document.querySelector('#scrollUp');
const ElemArr = [
  ...colIt1,
  ...colIt2,
  ...colIt3,
  ...colIt7,
  ...colIt8,
  ...colIt10,
  ...colIt12,
  chekCol,
  colIt4,
  colIt5,
  colIt6,
  colIt9,
  colIt11,
  colIt13,
  colIt14,
  colIt15,
  colIt16,
  colIt17,
];

let activCol = 'def';

chekCol.addEventListener('click', colorMenu);
function colorMenu(params) {
  collist.classList.toggle('hidden');
}
collist.addEventListener('click', chooseCol);
function chooseCol(event) {
  if (event.target.classList[1] === activCol) {
    collist.classList.toggle('hidden');
  } else {
    ElemArr.forEach(elem => {
      elem.classList.remove(activCol);
    });
    activCol = event.target.classList[1];
    ElemArr.forEach(elem => {
      elem.classList.add(activCol);
    });
    collist.classList.toggle('hidden');
  }
}
