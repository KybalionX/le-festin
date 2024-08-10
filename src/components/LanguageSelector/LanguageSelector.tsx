import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

enum Lang {
  es = 'es',
  en = 'en',
}

interface LangOption {
  emoji: string;
  value: Lang;
}

interface Props {
  onLanguageSelected?: (option: Lang) => void;
}

export default function LanguageSelector({ onLanguageSelected }: Props) {
  const [currentLang, setCurrentLang] = useState<Lang | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    setCurrentLang(i18n.language as Lang);
  }, [i18n]);

  const langOptions: LangOption[] = [
    {
      emoji: '🇪🇸',
      value: Lang.es,
    },
    {
      emoji: '🇬🇧',
      value: Lang.en,
    },
  ];

  const changeLanguage = (lang: Lang) => {
    i18n.changeLanguage(lang);
    onLanguageSelected && onLanguageSelected(lang);
  };

  if (!currentLang) return;

  return (
    <select
      defaultValue={currentLang}
      onChange={(e) => changeLanguage(e.target.value as Lang)}
      id="states"
      className="bg-transparent rounded-lg text-white w-full"
    >
      {langOptions.map((option) => (
        <option key={option.value} value={option.value} className="py-4">
          {option.emoji}
        </option>
      ))}
    </select>
  );
}
