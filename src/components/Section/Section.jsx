import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
