const openModal = document.querySelector('.burger');
const closeModal = document.querySelector('.close-menu');
const modal = document.querySelector('.menu-overlay');
const navigation = document.querySelector('.nav-list-modal');
const navTablet = document.querySelector('.nav-tab');
const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const workModal = document.querySelector('.work-together');

openModal.addEventListener('click', openModalFoo);

function openModalFoo() {
  modal.classList.add('is-open');
}

closeModal.addEventListener('click', closeModalFoo);

function closeModalFoo() {
  modal.classList.remove('is-open');
}

workModal.addEventListener('click', closeModalFoo);

navigation.addEventListener('click', openNavFoo);

function openNavFoo(event) {
  if (!event.target.classList.contains('nav-link')) {
    return;
  }
  modal.classList.remove('is-open');
}

menu.addEventListener('click', openMenuFoo);

function openMenuFoo() {
  if (!navTablet.classList.contains('visually-hidden')) {
    setTimeout(() => {
      navTablet.classList.add('visually-hidden');
    }, 250);
    return;
  }
  setTimeout(() => {
    navTablet.classList.remove('visually-hidden');
  }, 250);
}

navList.addEventListener('click', scrollFoo);

function scrollFoo(event) {
  if (!event.target.classList.contains('nav-link')) {
    return;
  }
  if (navTablet.classList.contains('visually-hidden')) {
    return;
  }
  navTablet.classList.add('visually-hidden');
}
