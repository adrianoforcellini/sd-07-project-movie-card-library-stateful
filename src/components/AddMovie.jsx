import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.addMovie = this.addMovie.bind(this);
    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changingInputsState = (event) => {
    const { name, valeu } = event.target;
    this.setState({ [name]: valeu });
  };

  render() {
    return (
      <form>
        <label htmlFor="titleText" data-testid="title-input-label">
          Título
          <input
            name="titleText"
            type="text"
            value={this.title}
            data-testid="title-input"
            onChange={this.changingInputsState}
          />
        </label>
        <label htmlFor="subtitleText" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitleText"
            type="text"
            value={this.subtitle}
            data-testid="subtitle-input"
            onChange={this.changingInputsState}
          />
        </label>
        <label htmlFor="img" data-testid="image-input-label">
          Imagem
          <input
            name="img"
            type="text"
            value={this.imagePath}
            data-testid="image-input"
            onChange={this.changingInputsState}
          />
        </label>
        <label htmlFor="storylineTxt" ddata-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storylineTxt"
            value={this.storyline}
            data-testid="storyline-input"
            onChange={this.changingInputsState}
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
