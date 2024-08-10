import { useTranslation } from 'react-i18next';

function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      picture:
        'https://img.freepik.com/fotos-premium/retrato-chef-llevando-sombrero-tenencia-plato-vacio_271410-617.jpg',
      name: 'Anthony',
      designation: t('team.designations.principalChef'),
    },
    {
      picture:
        'https://img.freepik.com/free-photo/portrait-male-chef-kitchen_23-2149646279.jpg',
      name: 'Lucas',
      designation: t('team.designations.mainChef'),
    },
    {
      picture:
        'https://hips.hearstapps.com/delish/assets/cm/15/10/54f63a7e0703a_-_stowell-chef-lg.jpg',
      name: 'Richard',
      designation: t('team.designations.beginnerChef'),
    },
    {
      picture:
        'https://hips.hearstapps.com/digitalspyuk.cdnds.net/12/50/realitytv-masterchef-professionals-2012-anton-piotrowski.jpg?resize=980:*',
      name: 'Mateo',
      designation: t('team.designations.anotherChef'),
    },
  ];

  return (
    <section className="body-font mx-auto px-5 py-12 text-gray-600 dark:text-white">
      <div className="mb-14 text-center">
        <p className="mb-4 font-pacifico text-2xl text-primary sm:text-3xl">
          {t('team.label')}
        </p>
        <p className="title-font mb-4 font-nunito text-2xl font-extrabold sm:text-3xl">
          {t('team.title')}
        </p>
        <p className="text-gray-500s mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
          {t('team.description')}
        </p>
        <div className="mt-6 flex justify-center">
          <div className="inline-flex h-1 w-16 rounded-full bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, i) => (
          <div
            data-aos="flip-down"
            data-aos-delay={i * 100}
            key={i}
            className="flex w-full flex-col items-center rounded-xl py-12 text-center transition-all duration-300 ease-in-out sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 hover:dark:bg-slate-700"
          >
            <img
              src={member.picture}
              className="h-40 w-40 rounded-full bg-indigo-100 object-cover md:h-52 md:w-52"
            />
            <div className="mt-8 flex-grow">
              <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </h2>
              <p className="text-base leading-relaxed dark:text-gray-300">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
