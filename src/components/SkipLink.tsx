import { useTranslation } from 'react-i18next';

export function SkipLink() {
  const { t } = useTranslation();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
    >
      {t('accessibility.skipToContent')}
    </a>
  );
}
