import { useState } from 'react';

interface TabElement {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface TabsProps {
  elements: TabElement[];
  initialSelected?: number;
  onElementClick?: (index: number) => void;
}

function Tabs(props: TabsProps) {
  const [selected, setSelected] = useState<number>(props.initialSelected || 0);

  const elementClicked = (index: number) => {
    setSelected(index);
    props.onElementClick && props.onElementClick(index);
  };

  return (
    <>
      <ul className="mx-auto mt-8 flex w-fit flex-wrap justify-center rounded-lg text-sm md:text-lg font-medium text-gray-500 dark:divide-gray-700 dark:text-gray-400">
        {props.elements.map((element, i) => (
          <li
            className="transition-all duration-300 ease-in-out focus-within:z-10 hover:cursor-pointer"
            key={i}
            onClick={() => elementClicked(i)}
          >
            <div
              className={`flex items-center border-b-4 px-12 py-2 text-gray-900 transition-all duration-300 ease-in-out dark:text-white ${selected === i ? 'border-b-primary' : 'border-b-transparent'} `}
            >
              {element.icon}
              <div className="ml-4">
                <p className="text-xl md:text-2xl font-light">
                  {element.title}
                </p>
                <p className="font-nunito font-bold">{element.subtitle}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tabs;
