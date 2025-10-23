import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Pause, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function Testimonials() {
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonialsList = t('testimonials.list', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    school: string;
    content: string;
  }>;
  
  const testimonials = testimonialsList.map((item, index) => ({
    ...item,
    rating: 5,
    initials: item.name.split(' ').map(n => n[0]).join(''),
    color: ['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-green-500', 'bg-orange-500', 'bg-indigo-500'][index % 6],
  }));

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <Card className="p-6 w-[380px] flex-shrink-0 hover:shadow-xl transition-shadow bg-white">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-sm text-muted-foreground mb-6 italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t">
        <Avatar>
          <AvatarFallback className={`${testimonial.color} text-white`}>
            {testimonial.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
          <div className="text-xs text-muted-foreground">{testimonial.school}</div>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="témoignages" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling testimonials */}
      <div className="relative mb-16">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Pause/Play button */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 z-20">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setIsPaused(!isPaused)}
            className="bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all"
          >
            {isPaused ? (
              <Play className="w-4 h-4" aria-label={t('accessibility.playCarousel')} />
            ) : (
              <Pause className="w-4 h-4" aria-label={t('accessibility.pauseCarousel')} />
            )}
          </Button>
        </div>
        
        <motion.div
          className="flex gap-6"
          animate={{
            x: isPaused ? undefined : [0, -1 * (testimonials.length * (380 + 24))],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white"
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl mb-2">98%</div>
            <div className="text-purple-100">{t('testimonials.satisfaction')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl mb-2">4.9/5</div>
            <div className="text-purple-100">{t('testimonials.rating')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl mb-2">95%</div>
            <div className="text-purple-100">{t('testimonials.recommend')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
