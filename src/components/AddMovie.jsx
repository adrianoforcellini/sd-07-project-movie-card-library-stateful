// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = this.state;
    this.handlerTextAreaChange = this.handlerTextAreaChange.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyPath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }
  handlerTextAreaChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  buttonHandler() {
    this.setState(this.state);
    const { onClick } = this.props;
    onClick();
  }
  render() {
    const {
        subtitle,
        title,
        imagePath,
        storyline,
        rating,
        genre,
      } = this.state;
    return (
      <form>
        <label htmlFor="titulo" data-testid="title-input-label">Titulo</label>
        <input
          id="titulo"
          type="text"
          data-testid="title-input"
          value={title}
          onChange={this.handlerTextAreaChange}
        />
        <label htmlFor="subtitulo" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          id="subtitulo"
          type="text"
          data-testid="subtitle-input"
          value={subtitle}
        />
        <label htmlFor="photo" data-testid="image-input-label">Imagem</label>
        <input
          id="photo"
          type="text"
          data-testid="image-input"
          value={imagePath}
        />
        <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse</label>
        <input
          id="sinopse"
          data-testid="storyline-input"
          type="textarea"
          value={storyline}
        />
        <label htmlFor="avaliacao" data-testid="rating-input-label">Avaliação</label>
        <input
          id="avaliaçao"
          data-testid="rating-input"
          type="number"
          value={rating}
        />
        <label htmlFor="genero" data-testid="genre-input-label">Gênero</label>
        <select data-testid="genre-input" value={genre}>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button
          data-testid="send-button"
          onClick={this.buttonHandler}
        >Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}.isRequired;

export default AddMovie;
