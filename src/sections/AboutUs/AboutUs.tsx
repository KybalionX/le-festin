import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';

function GridGallery() {
  return (
    <div className="flex flex-wrap md:basis-9/12">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery-image-1"
          className="block h-full w-full object-cover object-center"
          src="./images/gallery/1.webp"
        />
      </div>
      <div className="w-1/2 self-end p-1 md:p-2">
        <img
          alt="gallery-image-2"
          className="h-10/12 block w-10/12 object-cover object-center"
          src="./images/gallery/2.webp"
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery-image-3"
          className="h-10/12 float-right block w-10/12 object-cover object-center"
          src="./images/gallery/3.webp"
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery-image-4"
          className="block h-full w-full object-cover object-center"
          src="./images/gallery/4.webp"
        />
      </div>
    </div>
  );
}

function AboutUs() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-8 px-5 py-8 xl:flex-row">
        <GridGallery />
        <div className="basis-2/3 content-center">
          <h1 className="font-pacifico text-4xl text-primary">
            {t('aboutUs.label')}
          </h1>
          <p className="mt-3 flex gap-4 font-nunito text-5xl font-bold dark:text-white">
            {t('aboutUs.title')}
          </p>
          <p className="mt-6 dark:text-white">{t('aboutUs.description')}</p>
          <br />
          <Button label={t('reserveHere')} />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
