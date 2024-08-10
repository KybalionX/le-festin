import { useState, useEffect } from 'react';
import LocalStorage from '../constants/LocalStorage';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export default function useTailwindTheme() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const themeFromLocalStorage: Theme =
      (localStorage.getItem(LocalStorage.Theme) as Theme) || Theme.Light;

    setCurrentTheme(themeFromLocalStorage);
    changeThemeInDOM(themeFromLocalStorage);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
    localStorage.setItem(LocalStorage.Theme, newTheme);
    setCurrentTheme(newTheme);
    changeThemeInDOM(newTheme);
  };

  const changeThemeInDOM = (theme: Theme) => {
    const htmlNode: HTMLHtmlElement | null = document.querySelector('html');
    if (!htmlNode) return;
    htmlNode.className = theme;
  };

  return {
    currentTheme,
    toggleTheme,
  };
}
