import React, { useContext } from 'react';
import { StyledHeader, ReactLogo } from './Header.styles';
import { ThemeContext } from '../../context/Context';

const Header = () => {
  const value = useContext(ThemeContext);

  return (
    <StyledHeader headerBg={value.theme.color1} headerFont={value.font}>
        <ReactLogo>
            <img src="./react.png" alt="React Logo" />
        </ReactLogo>
        <h1>Welcome to React</h1>
    </StyledHeader>
  );
};

export default Header;
