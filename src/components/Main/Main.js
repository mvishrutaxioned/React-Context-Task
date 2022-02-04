import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { StyledTextSection, StyledText } from './Text.styles';
import { Row, Button1, Button2 } from './Button.styles';
import { ThemeContext } from '../../context/Context';
import DropDown from './DropDown';

const Text = () => {
  const value = useContext(ThemeContext);
  const fontsArr = ['font1', 'font2', 'font3'];

  const handleThemeChange = (e) => {
    e.preventDefault();
    const term = e.target.value;
    value.setTheme(value.themes[term]);
    const num = term.slice(5,6);
    value.setFont(value.fonts[fontsArr[num-1]]);
  }

  const handleLanguageChange = (e) => {
    e.preventDefault();
    const term = e.target.value;
    value.setLang(value.languages[term]);
  }

  return (
      <>
        <StyledTextSection>
          {Object.entries(value.lang).map((e, i) => {
            return <StyledText key={i} color1={value.theme.color1} color2={value.theme.color2} textStyle={value.font}>{ e[1] } <Link to="#FIXME">{value.links[i]}</Link></StyledText>
          })}
        </StyledTextSection>
        <StyledTextSection>
          <Row>
            <Button1 color1={value.theme.color1} color2={value.theme.color2} textStyle={value.font}>Normal Button</Button1>
            <Button2 color1={value.theme.color1} color2={value.theme.color2} textStyle={value.font}>Primary Button</Button2>
          </Row>
          <Row>
              <DropDown handleChange={handleThemeChange} data={value.themes} />
              <DropDown handleChange={handleLanguageChange} data={value.languages} />
          </Row>
        </StyledTextSection>
      </>
  );
};

export default Text;
