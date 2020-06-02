export default class Posters {
  constructor({ Title, Poster, Year }) {
    this.title = Title;
    this.poster = Poster;
    this.year = Year;
  }

  generatePoster() {
    const containerPosters = document.createElement('div');
    containerPosters.className = 'container';
    let template = '';
    if (this.title) {
      template += '<div>';
      template += `<span>${this.title}</span>`;
      template += '</div>';
    }

    if (this.poster) {
      template += '<div>';
      template += `<img src=${this.poster}>`;
      template += '</div>';
    }

    if (this.year) {
      template += '<div>';
      template += `<span>${this.year}</span>`;
      template += '</div>';
    }

    containerPosters.innerHTML = template;
    return containerPosters;
  }
}
