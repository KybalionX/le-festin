import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Button from '../Button/Button';
import NavBar from '../Navbar/Navbar';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        styles.heroContainer,
        'max-lg:min-h-screen',
        'lg:max-h-[800px]',
        'lg:min-h-[720px]',
        'overflow-hidden',
      )}
    >
      <NavBar />
      <div className="flex h-full place-content-center">
        <div
          className={clsx(
            'mx-16',
            'mt-20',
            'flex',
            'max-w-7xl',
            'gap-16',
            'p-10',
            'max-lg:mx-0',
            'max-lg:flex-col',
            'max-lg:items-center',
            'max-lg:gap-12',
            'max-lg:pt-16',
            'max-lg:text-center',
            'lg:mt-24',
          )}
        >
          <div className="content-center" id="mainTitle" data-aos="fade-down">
            <p
              className={clsx(
                'font-nunito',
                'text-5xl',
                'font-extrabold',
                'text-white',
                'lg:text-5xl',
                'xl:text-6xl',
              )}
            >
              {t('hero.title')}
            </p>
            <p className="my-8 text-white text-xl">{t('hero.subtitle')}</p>
            <Button label={t('reserveHere')} />
          </div>
          <img
            id="plateImage"
            src="./images/plate-1.webp"
            alt="plate-1"
            className={clsx(
              'h-[28rem]',
              'w-[28rem]',
              'max-lg:h-fit',
              'max-lg:w-[20rem]',
              styles.plateImage,
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
