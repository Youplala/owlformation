import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const createContactSchema = (t: any) => z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export function ContactForm() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactSchema = createContactSchema(t);
  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, send to your backend:
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">{t('footer.contact')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a 
                      href="mailto:contact@owlformation.com" 
                      className="text-muted-foreground hover:text-purple-600 transition-colors"
                    >
                      contact@owlformation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t('contact.form.phone')}</div>
                    <a 
                      href="tel:+33612345678" 
                      className="text-muted-foreground hover:text-purple-600 transition-colors"
                    >
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{t('footer.location')}</div>
                    <p className="text-muted-foreground">
                      Lyon, France<br />
                      <span className="text-sm">{t('footer.locationNote')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
              <h4 className="text-xl mb-4">💡 {t('pricing.infoNote').split('<strong>')[1]?.split('</strong>')[0]}</h4>
              <ul className="space-y-2 text-purple-100">
                <li>✓ {t('faq.items.0.question')}</li>
                <li>✓ {t('faq.items.2.question')}</li>
                <li>✓ {t('faq.items.6.question')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('contact.form.name')} *</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="mt-2"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">{t('contact.form.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="mt-2"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder={t('contact.form.phonePlaceholder')}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">{t('contact.form.subject')} *</Label>
                  <Select onValueChange={(value) => setValue('subject', value)}>
                    <SelectTrigger className="mt-2" aria-invalid={errors.subject ? 'true' : 'false'}>
                      <SelectValue placeholder={t('contact.form.subjectPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="info">{t('contact.form.subjects.info')}</SelectItem>
                      <SelectItem value="quote">{t('contact.form.subjects.quote')}</SelectItem>
                      <SelectItem value="custom">{t('contact.form.subjects.custom')}</SelectItem>
                      <SelectItem value="other">{t('contact.form.subjects.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p className="text-sm text-red-600 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">{t('contact.form.message')} *</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={5}
                    className="mt-2"
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {t('contact.form.success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {t('contact.form.error')}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    t('contact.form.sending')
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
