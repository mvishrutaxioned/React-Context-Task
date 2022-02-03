import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { StyledTextSection, StyledText } from './styles/Text.styles';
import { Row, Button1, Button2, DropDown } from './styles/Button.styles';
import { useThemeContext, useLanguageContext, useFontContext } from '../context/Context';

const Text = () => {

  const themeValue = useThemeContext();
  const langValue = useLanguageContext();
  const fontValue = useFontContext();
  const [fontsArr, setFontsArr] = useState(['font1', 'font2', 'font3']);
  // eslint-disable-next-line

  const handleThemeChange = (e) => {
    e.preventDefault();
    const term = e.target.value;
    themeValue.setTheme(themeValue.themes[term]);
    const num = term.slice(5,6);
    fontValue.setFont(fontValue.fonts[fontsArr[num-1]]);
  }

  const handleLanguageChange = (e) => {
    e.preventDefault();
    const term = e.target.value;
    langValue.setLang(langValue.languages[term]);
  }

  return (
      <>
        <StyledTextSection>
            <StyledText color1={themeValue.theme.color1} color2={themeValue.theme.color2} textStyle={fontValue.font}>{ langValue.lang.line1 } <Link to="#FIXME">create-react-app</Link></StyledText>
            <StyledText color1={themeValue.theme.color1} color2={themeValue.theme.color2} textStyle={fontValue.font}>{ langValue.lang.line2 } <Link to="#FIXME">styled-components</Link></StyledText>
            <StyledText color1={themeValue.theme.color1} color2={themeValue.theme.color2} textStyle={fontValue.font}>{ langValue.lang.line3 } <Link to="#FIXME">fontjoy.com</Link></StyledText>
        </StyledTextSection>
        <StyledTextSection>
          <Row>
            <Button1 color1={themeValue.theme.color1} color2={themeValue.theme.color2} textStyle={fontValue.font}>Normal Button</Button1>
            <Button2 color1={themeValue.theme.color1} color2={themeValue.theme.color2} textStyle={fontValue.font}>Primary Button</Button2>
          </Row>
          <Row>
            <DropDown onChange={handleThemeChange}>
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </DropDown>
            <DropDown onChange={handleLanguageChange}>
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
