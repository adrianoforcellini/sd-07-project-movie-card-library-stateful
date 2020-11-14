import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]:value
    });
  }

  render() {
    return (
      <div>
        <form>
        <label data-testid="title-input-label" htmlFor="text-input">
            Título
            <input
              data-testid="title-input"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="subtitle-input-label" htmlFor="text-input">
            Subtítulo
            <input
              data-testid="subtitle-input"
              type="text"
              value={this.state.subtitle}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="image-input-label" htmlFor="text-input">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="storyline-input-label" htmlFor="text-input">
            Sinopse
            <textarea
              data-testid="storyline-input"
              required
              value={this.state.storyline}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="rating-input-label" htmlFor="text-input">
            Avaliação
            <input
              data-testid="rating-input"
              type="number"
              value={this.state.rating}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="genre-input-label" htmlFor="text-input">
           Gênero
           <select
             data-testid="genre-input"
             value={this.state.genre}
             onChange={this.handleChange}
           >
             <option data-testid="genre-option" value="action">Ação</option>
             <option data-testid="genre-option" value="comedy">Comédia</option>
             <option data-testid="genre-option" value="thriller">Suspense</option>
           </select>
          </label>

          <button
            data-testid="send-button"
            type="button"
          >Adicionar filme</button>

        </form>
      </div>
    )
  }
}

export default AddMovie;

