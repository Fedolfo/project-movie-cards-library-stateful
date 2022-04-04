import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="rating"
        className="form-label"
        data-testid="rating-input-label"
      >
        Avaliação:
        <input
          type="number"
          name="rating"
          id="rating"
          max="5"
          min="1"
          step="0.1"
          value={ value }
          onChange={ onChange }
          className="form-control"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default RatingInput;
