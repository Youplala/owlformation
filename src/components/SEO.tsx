import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SEO() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{t('seo.title')}</title>
      <meta name="description" content={t('seo.description')} />
      <meta name="keywords" content={t('seo.keywords')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t('seo.title')} />
      <meta property="og:description" content={t('seo.description')} />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:locale" content={currentLang === 'fr' ? 'fr_FR' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('seo.title')} />
      <meta name="twitter:description" content={t('seo.description')} />
      <meta name="twitter:image" content="/og-image.jpg" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Maryline Brosset" />
      <link rel="canonical" href="https://owlformation.com" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Owl Formation",
          "description": t('seo.description'),
          "url": "https://owlformation.com",
          "logo": "https://owlformation.com/logo.png",
          "founder": {
            "@type": "Person",
            "name": "Maryline Brosset"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lyon",
            "addressCountry": "FR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33612345678",
            "contactType": "customer service",
            "email": "contact@owlformation.com"
          }
        })}
      </script>
      
      {/* Structured Data - Courses */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "Course",
              "name": t('courses.list.ai.title'),
              "description": t('courses.list.ai.description'),
              "provider": {
                "@type": "Organization",
                "name": "Owl Formation"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
