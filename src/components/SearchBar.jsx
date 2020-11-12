import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, 
      bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">

        <fieldset>
          <label htmlFor="text" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="checkbox" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input type="checkbox" data-testid="checkbox-input" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </fieldset>

      </form>
    );
  }
}

export default SearchBar;
