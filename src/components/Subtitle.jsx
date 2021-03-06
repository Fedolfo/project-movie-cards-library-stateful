import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="subtitle"
        className="form-label"
        data-testid="subtitle-input-label"
      >
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          className="form-control"
          id="subtitle"
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SubtitleInput;
