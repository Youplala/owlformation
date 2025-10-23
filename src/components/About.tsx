import { motion } from "motion/react";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  
  const milestones = [
    {
      year: "2010",
      title: t('about.milestones.2010.title'),
      description: t('about.milestones.2010.description'),
    },
    {
      year: "2015",
      title: t('about.milestones.2015.title'),
      description: t('about.milestones.2015.description'),
    },
    {
      year: "2019",
      title: t('about.milestones.2019.title'),
      description: t('about.milestones.2019.description'),
    },
    {
      year: "2023",
      title: t('about.milestones.2023.title'),
      description: t('about.milestones.2023.description'),
    },
  ];

  const values = [
    {
      icon: Heart,
      title: t('about.values.proximity.title'),
      description: t('about.values.proximity.description'),
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
    },
    {
      icon: BookOpen,
      title: t('about.values.practice.title'),
      description: t('about.values.practice.description'),
    },
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
  ];

  return (
    <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ImageWithFallback
                  src="/src/assets/images/maryline-brosset.png"
                  alt="Maryline Brosset"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('about.journeyTitle')}
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('about.bio1')}
            </motion.p>
            <motion.div 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              dangerouslySetInnerHTML={{ __html: t('about.bio2') }}
            />
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('about.bio3')}
            </motion.p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl text-center mb-16">{t('about.timelineTitle')}</h3>
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-purple-400 to-purple-200 -translate-x-1/2" />
            
            {/* Animated progress line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 -translate-x-1/2 z-10"
            />

            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative mb-12 last:mb-0">
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex-1"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-purple-100 hover:border-purple-300 group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          {milestone.year}
                        </div>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-200 to-transparent" />
                      </div>
                      <h4 className="mb-2 group-hover:text-purple-600 transition-colors">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>

                  {/* Center dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="relative z-20 flex-shrink-0"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg" />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="absolute inset-0 rounded-full bg-purple-400"
                    />
                  </motion.div>

                  {/* Empty space on other side */}
                  <div className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl text-center mb-12">{t('about.valuesTitle')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
