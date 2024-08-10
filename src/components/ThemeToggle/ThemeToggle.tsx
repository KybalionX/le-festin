import { FaMoon } from 'react-icons/fa6';
import { MdSunny } from 'react-icons/md';
import useTailwindTheme, { Theme } from '../../hooks/useTailwindTheme';

function ThemeToggle() {
  const { currentTheme, toggleTheme } = useTailwindTheme();

  return (
    <button onClick={toggleTheme}>
      {currentTheme === Theme.Dark ? <MdSunny /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
