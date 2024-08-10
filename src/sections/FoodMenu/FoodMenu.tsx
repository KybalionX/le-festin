import { useState } from 'react';
import { FaUtensils, FaStar, FaMedal } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import colors from '../../theme/colors.theme';
import Tabs from '../../components/Tabs/Tabs';

function FoodMenu() {
  const [tabSelected, setTabSelected] = useState<number>(0);
  const { t } = useTranslation();

  const menu = [
    {
      tab: {
        icon: <FaMedal color={colors.primary} size={28} />,
        title: t('menu.tabs.popular.title'),
        subtitle: t('menu.tabs.popular.subtitle'),
      },
      items: t('menu.plates.popular', { returnObjects: true }) as Record<
        string,
        string
      >[],
    },
    {
      tab: {
        icon: <FaStar color={colors.primary} size={28} />,
        title: t('menu.tabs.special.title'),
        subtitle: t('menu.tabs.special.subtitle'),
      },
      items: t('menu.plates.special', { returnObjects: true }) as Record<
        string,
        string
      >[],
    },
    {
      tab: {
        icon: <FaUtensils color={colors.primary} size={28} />,
        title: t('menu.tabs.lovely.title'),
        subtitle: t('menu.tabs.lovely.subtitle'),
      },
      items: t('menu.plates.lovely', { returnObjects: true }) as Record<
        string,
        string
      >[],
    },
  ];

  return (
    <section className="pt-8">
      <p className="text-center font-pacifico text-3xl text-primary">
        {t('menu.label')}
      </p>
      <p className="mt-3 text-center font-nunito text-4xl font-bold dark:text-white">
        {t('menu.title')}
      </p>
      <Tabs
        elements={menu.map((m) => m.tab)}
        initialSelected={tabSelected}
        onElementClick={(index) => setTabSelected(index)}
      />
      <div className="mt-6 flex flex-wrap sm:mx-auto lg:w-4/5">
        {menu[tabSelected].items.map((item, i) => (
          <div className="w-full p-2 sm:w-1/2" key={i} data-aos="fade-up">
            <div
              className="flex h-full items-center p-4"
              data-aos-delay={i * 100}
            >
              <img
                src={item.imageSrc}
                alt=""
                className="h-20 w-20 object-cover"
              />
              <div className="ml-6 w-full">
                <div className="flex justify-between">
                  <p className="font-nunito text-xl font-extrabold dark:text-white">
                    {item.title}
                  </p>
                  <p className="font-nunito text-xl font-extrabold text-primary">
                    ${item.price}
                  </p>
                </div>
                <hr className="my-2 h-0.5 border-t-0 bg-gray-200 dark:bg-white/10" />
                <p className="italic text-gray-800 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodMenu;
