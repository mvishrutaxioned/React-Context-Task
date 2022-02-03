import React from 'react';
import { Link } from 'react-router-dom'
import { StyledTextSection, StyledText } from './styles/Text.styles';
import { Row, Button1, Button2, DropDown } from './styles/Button.styles';

const Text = () => {
  return (
      <>
        <StyledTextSection>
            <StyledText>Bootstrap with <Link to="#FIXME">create-react-app</Link></StyledText>
            <StyledText>Components styled with <Link to="#FIXME">styled-components</Link></StyledText>
            <StyledText>Fonts picked with <Link to="#FIXME">fontjoy.com</Link></StyledText>
        </StyledTextSection>
        <StyledTextSection>
          <Row>
            <Button1>Normal Button</Button1>
            <Button2>Primary Button</Button2>
          </Row>
          <Row>
          <DropDown>
            <option value="Blue">Theme 1</option>
            <option value="Red">Theme 2</option>
            <option value="dark">Theme 3</option>
          </DropDown>
          <DropDown>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="korean">Korean</option>
          </DropDown>
          </Row>
        </StyledTextSection>
      </>
  );
};

export default Text;
