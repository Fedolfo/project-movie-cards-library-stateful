import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="storyline"
        className="form-label"
        data-testid="storyline-input-label"
      >
        Sinopse:
        <textarea
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          className="form-control"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default StorylineInput;
