import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();
const LanguageContext = createContext();
const FontContext = createContext();

export function useThemeContext() {
    return useContext(ThemeContext)
}

export function useLanguageContext() {
    return useContext(LanguageContext)
}

export function useFontContext() {
    return useContext(FontContext)
}

export const ContextProvider = (props) => {

    const languages = {
        english: {
            line1: 'Bootstrap with',
            line2: 'Components styled with',
            line3: 'Fonts picked with'
        },
        spanish: {
            line1: 'Arrancar con',
            line2: 'Componentes diseñados con',
            line3: 'Fuentes seleccionadas con'
        },
        korean: {
            line1: '부트스트랩',
            line2: '다음으로 스타일이 지정된 구성요소',
            line3: '선택한 글꼴'
        }
    }

    const themes = {
        theme1: {
            color1: '#0000ff',
            color2: '#d6dcd5',
        },
        theme2: {
            color1: '#f8512c',
            color2: '#f8d32c',
        },
        theme3: {
            color1: '#404240',
            color2: '#f037e8',
        }
    }

    const fonts = {
        font1: "Verdana, Geneva, Tahoma, sans-serif",
        font2: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        font3: "'Times New Roman', Times, serif",
    }

    const [lang, setLang] = useState(languages.english);
    const [theme, setTheme] = useState(themes.theme1);
    const [font, setFont] = useState(fonts.font1);

  return (
    <ThemeContext.Provider value={{theme, setTheme, themes}}>
        <LanguageContext.Provider value={{lang, setLang, languages}}>
            <FontContext.Provider value={{font, setFont, fonts}}>
                {props.children}
            </FontContext.Provider>
        </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};
