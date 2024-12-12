import { useState } from 'react';

type Theme = 'light' | 'dark';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const handleSwitchTheme = () => {
    let currentTheme: Theme = theme;
    if (currentTheme === 'light') {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
    setTheme(currentTheme);
  };

  return (
    <button onClick={handleSwitchTheme} className='absolute bottom-10 right-10'>
      {theme}
    </button>
  );
};
