import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.skills', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.btn-next',
  },
  modules: [Navigation],
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
});
