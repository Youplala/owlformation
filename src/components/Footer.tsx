import { motion } from "motion/react";
import { OwlLogo } from "./OwlLogo";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-b from-purple-50 to-purple-100 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <OwlLogo className="w-10 h-10" />
              <div>
                <div className="font-semibold text-purple-700">Owl Formation</div>
                <div className="text-xs text-muted-foreground">by Maryline Brosset</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 hover:bg-purple-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 hover:bg-purple-300 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 hover:bg-purple-300 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#formations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.courses')}
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.pricing')}
                </a>
              </li>
              <li>
                <a href="#témoignages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.testimonials')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Formations populaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4">{t('footer.popularCourses')}</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">{t('courses.list.ai.title')}</li>
              <li className="text-sm text-muted-foreground">{t('courses.list.video.title')}</li>
              <li className="text-sm text-muted-foreground">{t('courses.list.presentation.title')}</li>
              <li className="text-sm text-muted-foreground">{t('courses.list.content.title')}</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@owlformation.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contact@owlformation.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <a href="tel:+33612345678" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  {t('footer.location')}<br />
                  <span className="text-xs">{t('footer.locationNote')}</span>
                </span>
              </li>
            </ul>
            <Button
              size="sm"
              className="mt-4 bg-purple-600 hover:bg-purple-700"
              asChild
            >
              <a href="mailto:contact@owlformation.com">{t('footer.requestQuote')}</a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-purple-200 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.legal')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </motion.div>

        {/* Certification badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-purple-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">{t('footer.certifications.qualiopi')}</div>
              <div className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-xs">
                {t('footer.certifications.qualiopiLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">{t('footer.certifications.datadock')}</div>
              <div className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-xs">
                {t('footer.certifications.datadockLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">{t('footer.certifications.funding')}</div>
              <div className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm text-xs">
                {t('footer.certifications.fundingLabel')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
