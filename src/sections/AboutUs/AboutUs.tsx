import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';

function GridGallery() {
  return (
    <div className="flex flex-wrap md:basis-9/12">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full object-cover object-center"
          src="https://static.dezeen.com/uploads/2023/12/anfibio-bacana-studio-restaurant-lisbon-portugal-interiors_dezeen_2364_col_7-600x600.jpg"
        />
      </div>
      <div className="w-1/2 self-end p-1 md:p-2">
        <img
          alt="gallery"
          className="h-10/12 block w-10/12 object-cover object-center"
          src="https://bordeaux.intercontinental.com/wp-content/uploads/sites/4/2023/10/InterContinental-Bordeaux-Le-Grand-Hotel-Produit-Menu-du-marche-600x600.jpg"
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="h-10/12 float-right block w-10/12 object-cover object-center"
          src="https://p.turbosquid.com/ts-thumb/Pz/12zkw5/0YtOLG9M/thumb/jpg/1542267924/600x600/fit_q87/1a19a373c700bc54f4fab7e32c7c35be27209e64/thumb.jpg"
        />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full object-cover object-center"
          src="https://d33hx0a45ryfj1.cloudfront.net/transform/ea9d7c5b-01e1-497f-a57d-02396ecb3f1b/skylon-interior?io=transform:fill,width:600,height:600"
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
