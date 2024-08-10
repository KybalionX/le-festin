import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import SettingsMenu from '../SettingsMenu/SettingsMenu';

interface Link {
  href: string;
  label: string;
}

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);
  const [userIsAtTop, setUserIsAtTop] = useState<boolean>(true);
  const { t } = useTranslation();

  const links: Link[] = t('navigation.tabs', { returnObjects: true });

  useEffect(() => {
    const handleScroll = () => {
      setUserIsAtTop(window.scrollY < 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleOpen = () => setOpen(!open);

  return (
    <nav
      className={clsx(
        'fixed',
        'z-10',
        'w-full',
        'transition-all',
        'duration-500',
        'ease-in-out',
        !userIsAtTop && 'bg-background',
        !userIsAtTop && 'bg-opacity-80',
      )}
    >
      <div
        className={clsx(
          'mx-auto',
          'flex',
          'max-w-screen-xl',
          'flex-wrap',
          'items-center',
          'justify-between',
          'px-8',
          'py-4',
        )}
      >
        <img alt='le-festin-logo' src="./images/le-festin-logo.png" className="h-12" />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={clsx(
            'inline-flex',
            'h-10',
            'w-10',
            'items-center',
            'justify-center',
            'rounded-lg',
            'p-2',
            'text-sm',
            'text-gray-300',
            'lg:hidden',
          )}
          aria-controls="navbar-default"
          aria-expanded={open}
          onClick={toggleOpen}
        >
          <span className={clsx('sr-only')}>Open main menu</span>
          <svg
            className="h-10 w-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={clsx(
            open ? '' : 'hidden',
            'w-full',
            'lg:block',
            'lg:w-auto',
          )}
          id="navbar-default"
        >
          <ul
            className={clsx(
              'mt-4',
              'flex',
              'flex-col',
              'rounded-lg',
              'bg-slate-800',
              'bg-opacity-80',
              'text-white',
              'p-4',
              'font-medium',
              'lg:mt-0',
              'lg:flex-row',
              'lg:space-x-8',
              'lg:border-0',
              'lg:bg-transparent',
              'lg:p-0',
              'rtl:space-x-reverse',
              'lg:dark:bg-transparent',
            )}
          >
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className={clsx(
                    'block',
                    'rounded',
                    'px-3',
                    'py-2',
                    'hover:cursor-pointer',
                    'hover:text-primaryLight',
                    'md:bg-transparent',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="content-center">
              <SettingsMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
