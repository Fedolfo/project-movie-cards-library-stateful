import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          value={ value }
          onChange={ onChange }
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