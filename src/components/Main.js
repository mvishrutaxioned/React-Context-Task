import React from 'react';
import { Link } from 'react-router-dom'
import { StyledTextSection, StyledText } from './styles/Text.styles';

const Text = () => {
  return (
      <StyledTextSection>
          <StyledText>Bootstrap with <Link to="#FIXME">create-react-app</Link></StyledText>
          <StyledText>Components styled with <Link to="#FIXME">styled-components</Link></StyledText>
          <StyledText>Fonts picked with <Link to="#FIXME">fontjoy.com</Link></StyledText>
      </StyledTextSection>
  );
};

export default Text;
