import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flicking from '@egjs/react-flicking';
import { AutoPlay, Fade, Perspective } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';

const plugins = [
  new AutoPlay({
    duration: 4000,
    direction: 'NEXT',
    stopOnHover: false,
  }),
  new Perspective({ rotate: 0, scale: 0.5 }),
  new Fade(),
];

interface TestimonialFromI18n {
  clientName: string;
  description: string;
}

interface Testimonial {
  userImage: string;
  name: string;
  description: string;
}

function CenterMode() {
  const [panelsPerView, setPanelsPerView] = useState(getPanelsPerView());
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { t, i18n } = useTranslation();

  function getPanelsPerView() {
    const width = window.innerWidth;
    if (width >= 1200) return 3; // Pantallas grandes
    if (width >= 900) return 3; // Pantallas medianas
    if (width >= 600) return 2; // Pantallas pequeñas
    return 1; // Pantallas muy pequeñas
  }

  useEffect(() => {
    function handleResize() {
      setPanelsPerView(getPanelsPerView());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const testimonialsFromI18n = t('testimonials.elements', {
      returnObjects: true,
    }) as TestimonialFromI18n[];

    const testimonialsMapped: Testimonial[] = testimonialsFromI18n.map(
      (testimonial, i) => ({
        name: testimonial.clientName,
        description: testimonial.description,
        userImage: `https://randomuser.me/api/portraits/men/${i}.jpg`,
      }),
    );

    setTestimonials(testimonialsMapped);
  }, [i18n, t]);

  return (
    <section className="pb-16 pt-12">
      <div className="mb-8 text-center">
        <p className="mb-4 font-pacifico text-2xl text-primary sm:text-3xl">
          {t('testimonials.title')}
        </p>
        <p className="title-font mb-4 font-nunito text-2xl font-extrabold text-gray-600 sm:text-3xl dark:text-white">
          {t('testimonials.description')}
        </p>
      </div>
      <div className="md:px0 container mx-auto px-4">
        <Flicking
          align="center"
          circular={true}
          panelsPerView={panelsPerView}
          plugins={plugins}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="md:w-1/2 w-full card-panel text-dark h-full rounded-lg px-8 py-6 dark:text-white dark:bg-slate-800 bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-primaryLight mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6 text-lg">
                {testimonial.description}
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial.userImage}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </span>
                </span>
              </a>
            </div>
          ))}
        </Flicking>
      </div>
    </section>
  );
}

export default CenterMode;
