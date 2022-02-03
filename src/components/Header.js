import React from 'react';
import { StyledHeader, ReactLogo } from './styles/Header.styles';

const Header = () => {
  return (
    <StyledHeader headerBg="blue" headerFont="Verdana, Geneva, Tahoma, sans-serif">
        <ReactLogo>
            <img src="./react.png" alt="React Logo" />
        </ReactLogo>
        <h1>Welcome to React</h1>
    </StyledHeader>
  );
};

export default Header;
