import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";

const swiper = new Swiper('.reviews-container-ul', {
  slidesPerView: 1,
  loopedSlides: 6,
  slidesPerGroup: 1,
  spaceBetween: 16,
  navigation: {
        nextEl: '.swiper-button-next-control',
        prevEl: '.swiper-button-prev-control',
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
  watchOverflow: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
      
    },
  },
});

const reviewsList = document.getElementById('reviews-list');
const foo = async () => {
    try {
        const { data } = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
        console.log(data);
        data.map(review => {
            const li = document.createElement('li');
            li.classList.add('swiper-slide');
  
            const avatar = document.createElement('img');
            avatar.src = review.avatar_url;
            avatar.alt = `${review.author}'s avatar`;
  
            const author = document.createElement('h2');
            author.textContent = review.author;
  
            const text = document.createElement('p');
            text.textContent = review.review;
            li.classList.add('swiper-slide');
            li.appendChild(avatar);
            li.appendChild(author);
            li.appendChild(text);
  
            reviewsList.appendChild(li);
        })
    } catch (error) {
       showError('Failed to load reviews. Please try again later.');
    }

    const showError = (message) => {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
    errorContainer.style.color = 'red';
    errorContainer.style.textAlign = 'center';
    };
}
foo();