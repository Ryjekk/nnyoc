import {useEffect, useState} from 'react';

export const useDarkMode = () => {
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
    if (localMode === undefined || localMode === null) {
      setTheme('light');
      window.localStorage.setItem('THEME_MODE', 'light');
    } else {
      setTheme(localMode);
      localMode === 'dark' && setBgAnimation('animateDark')
    }
  }, [theme]);

  return [theme, bgAnimation, toggleTheme];
};
