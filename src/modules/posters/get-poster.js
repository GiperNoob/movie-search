async function getPoster(page, movie, key) {
  const url = `https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${key}`;
  const res = await fetch(url);

  const data = await res.json();
  return data;
}

export default getPoster;
