// implement AddMovie component here
import React from 'react';

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="addTitle" data-testid="title-input-label">
            Título
          </label>
          <input
            type="text"
            name=""
            id="addTitle"
            data-testid="title-input"
            value={this.state.title}
          />
          <label htmlFor="addSubtitle" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            type="text"
            name=""
            id="addSubtitle"
            data-testid="subtitle-input"
            value={this.state.subtitle}
          />
          <label htmlFor="addImage" data-testid="image-input-label">
            Imagem
          </label>
          <input
            type="text"
            name=""
            id="addImage"
            data-testid="image-input"
            value={this.state.imagePath}
          />
          <label htmlFor="addStoryline" data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea
            name=""
            id="addStoryline"
            data-testid="storyline-input"
            cols="30"
            rows="10"
            value={this.state.storyline}
          />
          <label htmlFor="addRating" data-testid="rating-input-label">
            Avaliação
          </label>
          <input
            type="number"
            name=""
            id="addRating"
            data-testid="rating-input"
            value={this.state.rating}
          />
          <label htmlFor="addGender" data-testid="genre-input-label">
            Gênero
          </label>
          <select
            name=""
            id="addGender"
            value={this.state.genre}
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button data-testid="send-button" onClick={this.handleMovie}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
