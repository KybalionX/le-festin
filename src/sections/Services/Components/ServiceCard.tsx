interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  label: string;
}

function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="p-3 w-full md:w-1/2 lg:w-1/2 xl:w-1/4">
      <div className="relative h-full overflow-hidden rounded-xl bg-gray-100 p-10 dark:bg-slate-800">
        {props.icon}
        <h1 className="mb-6 mt-4 font-nunito text-xl font-bold text-black sm:text-2xl dark:text-white">
          {props.title}
        </h1>
        <p className="mb-3 leading-relaxed text-gray-600 dark:text-gray-400">
          {props.label}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
