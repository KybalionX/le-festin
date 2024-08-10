import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';

function Reservation() {
  const { t } = useTranslation();
  return (
    <section className="body-font bg-white-300 relative pb-8 pt-16 text-gray-800">
      <div className="flex flex-wrap sm:flex-nowrap">
        <div
          className="relative flex justify-start overflow-hidden sm:w-1/4 md:w-1/4 lg:w-2/5"
          data-aos="fade"
          data-aos-offset="300"
        >
          <img
            alt='reservation-image'
            src="./images/reservation-bg.webp"
            className="object-cover"
          />
        </div>
        <div
          className="mt-0 flex w-full flex-col px-6 py-6 sm:w-3/4 md:ml-auto md:w-3/4 md:px-8 lg:w-3/5 dark:text-white"
          data-aos="fade"
          data-aos-offset="300"
        >
          <p className="mb-1 font-pacifico text-3xl font-medium text-primary">
            {t('reservation.label')}
          </p>
          <p className="mt-2 font-nunito text-4xl font-extrabold">
            {t('reservation.title')}
          </p>
          <div className="relative mb-4 mt-3">
            <label htmlFor='name' className="text-sm leading-7 text-gray-600 dark:text-gray-300">
              {t('reservation.inputs.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor='email' className="text-sm leading-7 text-gray-600 dark:text-gray-300">
              {t('reservation.inputs.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor='message' className="text-sm leading-7 text-gray-600 dark:text-gray-300">
              {t('reservation.inputs.message')}
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            ></textarea>
          </div>
          {/* <button className="rounded border-0 bg-primaryLight px-6 py-2 text-lg text-white focus:outline-none">
            BOOK NOW
          </button> */}
          <Button label={t('reserveHere')} />
        </div>
      </div>
    </section>
  );
}

export default Reservation;
