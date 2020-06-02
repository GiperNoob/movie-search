/* eslint-disable no-unused-vars */
import Swiper from 'swiper';
import renderPostersToDom from './posters/render-posters';
import getPoster from './posters/get-poster';


const forms = () => {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const apikey = '2f43328c';

  input.focus();

  const clearInput = () => {
    input.value = '';
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const statusLoading = document.createElement('span');
    statusLoading.classList.add('loading');
    statusLoading.style.display = 'none';
    form.append(statusLoading);

    getPoster(1, input.value, apikey)
      .then((res) => {
        document.querySelector('.swiper-wrapper').innerHTML = '';
        renderPostersToDom(res);
        const mySwiper = new Swiper('.swiper-container', {
          slidesPerView: 4,
          spaceBetween: 25,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.error').innerHTML = '';
      })
      .catch(() => {
        document.querySelector('.error').innerHTML = `by request "${input.value}" nothing found`;
        document.querySelector('.loading').style.display = 'none';
      })
      .finally(() => {
        clearInput();
      });
  });
};

export default forms;
