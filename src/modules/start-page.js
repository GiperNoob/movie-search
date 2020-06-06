import getPoster from './posters/get-poster';
import renderPostersToDom from './posters/render-posters';


export default async function startPage(count) {
  const res = await getPoster(count, 'dream', '2f43328c');
  renderPostersToDom(res);
}
