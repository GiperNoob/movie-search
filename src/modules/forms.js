const forms = () => {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const apikey = '2f43328c';


  const getMovieTitle = async (page, movie) => {
    const url = `https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${apikey}`;
    document.querySelector('.loading').style.display = 'block';

    const res = await fetch(url, {
      method: 'POST',
    });
    const data = await res.json();
    window.console.log(data);
    return data;
  };

  const clearInput = () => {
    input.value = '';
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const statusLoading = document.createElement('span');
    statusLoading.classList.add('loading');
    statusLoading.style.display = 'none';
    form.append(statusLoading);

    // const formData = new FormData(form);

    getMovieTitle(1, input.value)
      .then((res) => {
        window.console.log(res.Search[0].Title);
        window.console.log(input.value);
        document.querySelector('.loading').style.display = 'none';
      })
      .catch(() => {
        document.querySelector('.error').innerHTML = `by request ${input.value} nothing found`;
      })
      .finally(() => {
        clearInput();
      });
  });
};

export default forms;
