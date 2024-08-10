import { FaGear } from 'react-icons/fa6';
import { useState } from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './SettingsMenu.module.css';
import clsx from 'clsx';

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx('px-2 py-2', styles.dropdown)}>
      <FaGear
        size={25}
        onClick={toggleContent}
        className="hover:text-primary cursor-pointer"
      />
      <div
        className={clsx(
          'rounded-lg',
          'bg-background',
          'px-4 py-4',
          'top-12',
          !isOpen && 'hidden',
          styles.dropdownContent,
        )}
      >
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </div>
  );
}
