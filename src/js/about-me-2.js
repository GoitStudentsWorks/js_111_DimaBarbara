import Swiper from 'swiper';
<<<<<<< HEAD
import { Keyboard, Navigation } from 'swiper/modules';
=======
import { Navigation, Keyboard } from 'swiper/modules';
>>>>>>> 43c256442540072d9edaaeae8f29383f5e390e79
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const swiper = new Swiper('.skills', {
  slidesPerView: 2,
  loop: true,
  loopedSlides: 6,
  slidesPerGroup: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.btn-next',
  },
  modules: [Navigation, Keyboard],
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  watchOverflow: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
