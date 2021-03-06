/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form action="#" data-testid="search-bar-form" className="main-form-searchBar mb-3">
        <label htmlFor="searchText" data-testid="text-input-label">
          Filtre por nome:
          <input
            className="form-control"
            type="text"
            name="searchText"
            id="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label" className="mb-3 form-check-label form-check">
          Mostrar somente favoritos
          <input
            className="form-check-input"
            type="checkbox"
            name="bookmarkedOnly"
            id="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="selectedGenre" data-testid="select-input-label" className="mb-3">
          Filtrar por gênero:
          <select
            className="form-select"
            name="selectedGenre"
            id="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: 'function',
  bookmarkedOnly: true,
  onBookmarkedChange: 'function',
  selectedGenre: '',
  onSelectedGenreChange: 'function',
}.isRequired;

export default SearchBar;
