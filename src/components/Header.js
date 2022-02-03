import React from 'react';
import { StyledHeader, ReactLogo } from './styles/Header.styles';
import { useThemeContext, useFontContext } from '../context/Context';

const Header = () => {
  const themeValue = useThemeContext();
  const fontValue = useFontContext();

  return (
    <StyledHeader headerBg={themeValue.theme.color1} headerFont={fontValue.font.font1}>
        <ReactLogo>
            <img src="./react.png" alt="React Logo" />
        </ReactLogo>
        <h1>Welcome to React</h1>
    </StyledHeader>
  );
};

export default Header;
