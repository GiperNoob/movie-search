import getPoster from './get-poster';
import renderPostersToDom from './render-posters';


export default function startPage() {
  getPoster(1, 'dream', '2f43328c')
    .then((res) => {
      renderPostersToDom(res);
    });
}
