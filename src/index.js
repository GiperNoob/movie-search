import './styles/clear-style.css';
import './styles/style.css';
import './modules/swiper/swiper.min.css';
import './modules/swiper/swiper.css';
import Swiper from 'swiper';
import getPoster from './modules/posters/get-poster';
import renderPostersToDom from './modules/posters/render-posters';


const form = document.querySelector('form');
const input = document.querySelector('input');
const apikey = '2f43328c';
let page = 1;
let currentWord = 'dream';
let countPoster = 6;

const clearInput = () => {
  input.value = '';
};

let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 25,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 25,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
      },
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 8,
      },
    },
  },
});

function nextPage() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  // eslint-disable-next-line no-unused-vars
  function handleImg(myImg, observer) {
    myImg.forEach((element) => {
      if (element.intersectionRatio > 0.7) {
        page += 1;
        countPoster += 10;
        getPoster(page, currentWord, apikey)
          .then((res) => {
            renderPostersToDom(res);
          })
          .then(() => {
            mySwiper.update();
          });
      }
    });
  }

  const slider = document.querySelector('.swiper-wrapper');
  const posters = slider.querySelectorAll('.swiper-slide');

  const observer = new IntersectionObserver(handleImg, options);
  const target = posters[countPoster];
  observer.observe(target);
}

getPoster(page, currentWord, apikey)
  .then((res) => {
    input.focus();
    renderPostersToDom(res);
  })
  .then(() => {
    mySwiper.update();
  })
  .then(() => {
    document.querySelector('.slider-container').addEventListener('click', () => {
      nextPage();
    });
  })
  .then(() => {
    form.addEventListener('submit', (event) => {
      countPoster = 6;
      page = 1;
      event.preventDefault();

      const statusLoading = document.createElement('span');
      statusLoading.classList.add('loading');
      statusLoading.style.display = 'block';

      currentWord = input.value;

      getPoster(page, currentWord, apikey)
        .then((res) => {
          document.querySelector('.swiper-wrapper').innerHTML = '';

          form.append(statusLoading);

          renderPostersToDom(res);
        })
        .then(() => {
          mySwiper.destroy();
          mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 25,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 8,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });

          clearInput();

          statusLoading.remove();
          document.querySelector('.error').innerHTML = '';
        })
        .catch(() => {
          document.querySelector('.error').innerHTML = `by request "${input.value}" nothing found`;
          statusLoading.remove();
        });
    });
  })
  .catch(() => {
    document.querySelector('.error').innerHTML = 'something went wrong, try again';
  });

document.querySelector('.clear-search').addEventListener('click', () => {
  input.value = '';
  input.focus();
});
