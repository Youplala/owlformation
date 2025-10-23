import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { OwlLogo } from "./OwlLogo";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  
  return (
    <section id="accueil" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700">{t('hero.badge')}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-foreground">
              {t('hero.title')}{" "}
              <span className="text-purple-600">{t('hero.titleHighlight1')}</span> {t('hero.titleHighlight2').includes('IA') ? "et à l'" : "and"}
              <span className="text-purple-600">{t('hero.titleHighlight2')}</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl" dangerouslySetInnerHTML={{ __html: t('hero.description') }} />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 group"
                asChild
              >
                <a href="#formations">
                  {t('hero.ctaPrimary')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="#apropos">{t('hero.ctaSecondary')}</a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t"
            >
              <div>
                <div className="text-3xl text-purple-600 mb-1">{t('hero.stat1')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat1Label')}</div>
              </div>
              <div>
                <div className="text-3xl text-purple-600 mb-1">{t('hero.stat2')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat2Label')}</div>
              </div>
              <div>
                <div className="text-3xl text-purple-600 mb-1">{t('hero.stat3')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stat3Label')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image/Owl */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <OwlLogo className="w-full h-auto max-w-md mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
