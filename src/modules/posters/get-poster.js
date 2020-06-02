async function getPoster(page, movie, key) {
  const url = `https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${key}`;
  if (document.querySelector('.loading')) {
    document.querySelector('.loading').style.display = 'block';
  }
  const res = await fetch(url, {
    method: 'POST',
  });

  const data = await res.json();
  return data;
}

export default getPoster;
