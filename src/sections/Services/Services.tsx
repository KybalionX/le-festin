import { FaUser, FaUtensils, FaCartPlus, FaHeadset } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import colors from '../../theme/colors.theme';
import ServiceCard from './Components/ServiceCard';

function Services() {
  const { t } = useTranslation();

  const translations: { title: string; subtitle: string }[] = t('services', {
    returnObjects: true,
  });

  const servicesList = [
    {
      icon: <FaUser size={48} color={colors.primary} />,
      title: translations[0].title,
      label: translations[0].subtitle,
    },
    {
      icon: <FaUtensils size={48} color={colors.primary} />,
      title: translations[1].title,
      label: translations[1].subtitle,
    },
    {
      icon: <FaCartPlus size={48} color={colors.primary} />,
      title: translations[2].title,
      label: translations[2].subtitle,
    },
    {
      icon: <FaHeadset size={48} color={colors.primary} />,
      title: translations[3].title,
      label: translations[3].subtitle,
    },
  ];

  return (
    <section className="body-font text-gray-400">
      <div className="container mx-auto px-5 py-8">
        <div className="-m-4 flex flex-wrap justify-center">
          {servicesList.map((service, i) => (
            <ServiceCard {...service} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
