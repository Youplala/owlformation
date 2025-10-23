import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const { t } = useTranslation();
  const faqItems = t('faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">{t('faq.title')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-purple-50 rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl mb-4">{t('contact.subtitle')}</h3>
          <p className="mb-6 text-purple-100">
            {t('faq.items.6.question')}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            {t('footer.requestQuote')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
