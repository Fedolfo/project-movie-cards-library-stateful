import React from 'react';
import PropTypes from 'prop-types';

class SelectOption extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="genre"
        className="form-label"
        data-testid="genre-input-label"
      >
        Gênero:
        <select
          name="genre"
          id="genre"
          className="form-select"
          value={ value }
          onChange={ onChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SelectOption.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SelectOption;
