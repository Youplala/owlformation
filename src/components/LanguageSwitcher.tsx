import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2"
        aria-label={t('accessibility.languageSwitcher')}
      >
        <Globe className="w-4 h-4" />
        <span className="font-semibold">
          {i18n.language === 'fr' ? 'EN' : 'FR'}
        </span>
      </Button>
    </motion.div>
  );
}
