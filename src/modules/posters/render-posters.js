import Posters from '../../Classes/Poster';

function generatePosters(data) {
  const posterList = [];
  data.Search.forEach((Attributes) => posterList.push(new Posters(Attributes)));
  return posterList;
}

export default function renderPostersToDom(data) {
  const sliderContainer = document.querySelector('.swiper-wrapper');
  generatePosters(data).forEach((poster) => {
    sliderContainer.append(poster.generatePoster());
  });
}
