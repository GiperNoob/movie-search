export default class Posters {
  constructor({ Title, Poster, Year }) {
    this.title = Title;
    this.poster = Poster;
    this.year = Year;
  }

  generatePoster() {
    const containerPosters = document.createElement('div');
    containerPosters.className = 'swiper-slide card';
    let template = '';
    if (this.title) {
      template += '<div>';
      template += `<span class="title-poster">${this.title}</span>`;
      template += '</div>';
    }

    if (this.poster) {
      template += '<div class="poster">';
      template += `<img src=${this.poster}>`;
      template += '</div>';
    }

    if (this.year) {
      template += '<div class="year">';
      template += `<span>${this.year}</span>`;
      template += '</div>';
    }

    containerPosters.innerHTML = template;
    return containerPosters;
  }
}
