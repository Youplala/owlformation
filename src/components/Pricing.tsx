import { motion } from "motion/react";
import { Check, Star, Zap, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

export function Pricing() {
  const { t } = useTranslation();
  
  const packages = [
    {
      name: t('pricing.packages.discovery.name'),
      icon: Star,
      price: t('pricing.packages.discovery.price'),
      duration: t('pricing.packages.discovery.duration'),
      description: t('pricing.packages.discovery.description'),
      features: t('pricing.packages.discovery.features', { returnObjects: true }) as string[],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: t('pricing.packages.standard.name'),
      icon: Zap,
      price: t('pricing.packages.standard.price'),
      duration: t('pricing.packages.standard.duration'),
      description: t('pricing.packages.standard.description'),
      features: t('pricing.packages.standard.features', { returnObjects: true }) as string[],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: t('pricing.packages.premium.name'),
      icon: Building2,
      price: t('pricing.packages.premium.price'),
      duration: t('pricing.packages.premium.duration'),
      description: t('pricing.packages.premium.description'),
      features: t('pricing.packages.premium.features', { returnObjects: true }) as string[],
      popular: false,
      color: "from-orange-500 to-red-500",
    },
  ];

  const customOptions = t('pricing.customOptions', { returnObjects: true }) as string[];

  return (
    <section id="tarifs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">{t('pricing.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                    {t('pricing.popular')}
                  </Badge>
                </div>
              )}
              
              <Card className={`p-8 h-full ${pkg.popular ? 'ring-2 ring-purple-500 shadow-xl' : ''}`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pkg.color} text-white mb-6`}>
                  <pkg.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

                <div className="mb-6">
                  <div className="text-4xl mb-1">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                  asChild
                >
                  <a href="#contact">{t('pricing.requestQuote')}</a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-4">{t('pricing.customTitle')}</h3>
            <p className="text-muted-foreground">
              {t('pricing.customSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {customOptions.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl"
              >
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span>{option}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">{t('pricing.customCta')}</a>
            </Button>
          </div>
        </motion.div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-purple-100 rounded-2xl p-6 text-center"
        >
          <p className="text-sm text-purple-900" dangerouslySetInnerHTML={{ __html: t('pricing.infoNote') }} />
        </motion.div>
      </div>
    </section>
  );
}
