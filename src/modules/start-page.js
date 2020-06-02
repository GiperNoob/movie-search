import getPoster from './posters/get-poster';
import renderPostersToDom from './posters/render-posters';


export default function startPage() {
  return getPoster(1, 'dream', '2f43328c')
    .then((res) => {
      renderPostersToDom(res);
    });
}
