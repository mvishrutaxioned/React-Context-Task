import React, { useState, createContext } from 'react';
import languages from '../utils/languages';
import themes from '../utils/themes';
import fonts from '../utils/fonts';
import links from '../utils/links';

export const ThemeContext = createContext();

export const ContextProvider = (props) => {

    const [lang, setLang] = useState(languages.english);
    const [theme, setTheme] = useState(themes.theme1);
    const [font, setFont] = useState(fonts.font1);
    const data = { theme, setTheme, themes, lang, setLang, languages, font, setFont, fonts, links }

  return (
    <ThemeContext.Provider value={data}>
        {props.children}
    </ThemeContext.Provider>
  );
};
