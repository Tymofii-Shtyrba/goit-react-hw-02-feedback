import React from 'react';
import PropTypes from 'prop-types';
import { StyledOptions } from './Feedbackoptions.styled';

export default function FeadbackOptions({ options, onLeaveFeedback }) {
  return (
    <StyledOptions>
      {options.map(label => {
        return (
          <li key={label}>
            <button name={label} onClick={onLeaveFeedback}>
              {label}
            </button>
          </li>
        );
      })}
    </StyledOptions>
  );
}

FeadbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
