import {createContext, useEffect, useState} from "react";

// Context
const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const [bgAnimation, setBgAnimation] = useState('animateLight');

    const toggleTheme = () => {
        if (theme === 'light') {
            setBgAnimation('animateDark');
            setTimeout(() => {
                window.localStorage.setItem('THEME_MODE', 'dark');
                setTheme('dark');
            }, 2000);
        } else {
            setBgAnimation('animateLight');
            setTimeout(() => {
                window.localStorage.setItem('THEME_MODE', 'light');
                setTheme('light');
            }, 2000);
        }
    };

    useEffect(() => {
        const localMode = window.localStorage.getItem('THEME_MODE');

        if (localMode === undefined || localMode === null || localMode === 'light') {
            setTheme('light');
            window.localStorage.setItem('THEME_MODE', 'light');
        } else {
            setTheme(localMode);
            localMode === 'dark' && setBgAnimation('animateDark')
        }
    }, [theme]);

    return (
        <DarkModeContext.Provider value={{theme, bgAnimation, toggleTheme}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export {DarkModeContext, DarkModeProvider};