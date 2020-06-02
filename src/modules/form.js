import renderPostersToDom from './render-posters';
import getPoster from './get-poster';


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
        renderPostersToDom(res);
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
