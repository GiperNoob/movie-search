import Posters from '../Classes/Poster';

function generatePosters(data) {
  const posterList = [];
  data.Search.forEach((Attributes) => posterList.push(new Posters(Attributes)));
  return posterList;
}

export default function renderPostersToDom(data) {
  generatePosters(data).forEach((poster) => {
    document.body.append(poster.generatePoster());
  });
}
