import { charityArray } from './charity_array';
import { imageArray } from './image_array';
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
const charityContainer = document.querySelector('.swiper-wrapper');

function createTemplate(objectArray, imageArray) {
  return objectArray.map(({ url, title }, index) => {
    const { [`image${index + 1}`]: image1x, [`image${index + 1}x2`]: image2x } = imageArray[index];
    return `
      <li class="swiper-slide">
        <a class="charity-link" rel="nofollow noreferrer noopener" target="_blank" href="${url}">
          <img src="${image1x}" srcset="${image2x} 2x" class="charity-img" alt="${title}" />
        </a>
      </li>
    `;
  }).join('');
};

let template = createTemplate(charityArray, imageArray);
charityContainer.insertAdjacentHTML('beforeend', template);

const swiperOptions = {
  direction: 'vertical',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  observer: true,
  observeParents: true,
  slidesPerColumnFill: 'row',
  breakpoints: {
    320: {
      slidesPerView: 4,
    },
    780: {
      slidesPerView: 6,
    },
    1440: {
      slidesPerView: 6,
    },
  },
};

const swiper = new Swiper('.swiper', swiperOptions);
const upBtn = document.querySelector('.swiper-button-up');
  upBtn.addEventListener('click', () => {
  swiper.slideTo(0, 800);
  upBtn.classList.add('is-hidden');
});

swiper.on('slideChange', () => {
  const activeSlideIndex = swiper.activeIndex;
  const totalSlides = swiper.slides.length;

  let slideNumberToGoUp = totalSlides - getNumberOfClicksForSwiper(swiperOptions);

  if (activeSlideIndex === slideNumberToGoUp) {
    upBtn.classList.remove('is-hidden');
  }
});

function getNumberOfClicksForSwiper(options) {
  const { innerWidth: windowWidth } = window;
  let currentSlidesPerView;

  if (windowWidth >= 1440) {
    currentSlidesPerView = options.breakpoints[1440].slidesPerView;
  } else if (windowWidth >= 780) {
    currentSlidesPerView = options.breakpoints[780].slidesPerView;
  } else {
    currentSlidesPerView = options.breakpoints[320].slidesPerView;
  }
  return currentSlidesPerView;
};
