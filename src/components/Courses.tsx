import { motion } from "motion/react";
import { 
  Brain, 
  Code, 
  FileText, 
  Presentation, 
  Video, 
  MessageSquare,
  Globe,
  Shield,
  Smartphone,
  Database,
  Palette,
  Zap
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

export function Courses() {
  const { t } = useTranslation();
  
  const courses = [
    {
      icon: Brain,
      title: t('courses.list.ai.title'),
      description: t('courses.list.ai.description'),
      duration: t('courses.list.ai.duration'),
      level: t('courses.list.ai.level'),
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: FileText,
      title: t('courses.list.content.title'),
      description: t('courses.list.content.description'),
      duration: t('courses.list.content.duration'),
      level: t('courses.list.content.level'),
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Presentation,
      title: t('courses.list.presentation.title'),
      description: t('courses.list.presentation.description'),
      duration: t('courses.list.presentation.duration'),
      level: t('courses.list.presentation.level'),
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Video,
      title: t('courses.list.video.title'),
      description: t('courses.list.video.description'),
      duration: t('courses.list.video.duration'),
      level: t('courses.list.video.level'),
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: MessageSquare,
      title: t('courses.list.virtual.title'),
      description: t('courses.list.virtual.description'),
      duration: t('courses.list.virtual.duration'),
      level: t('courses.list.virtual.level'),
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Code,
      title: t('courses.list.coding.title'),
      description: t('courses.list.coding.description'),
      duration: t('courses.list.coding.duration'),
      level: t('courses.list.coding.level'),
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Globe,
      title: t('courses.list.website.title'),
      description: t('courses.list.website.description'),
      duration: t('courses.list.website.duration'),
      level: t('courses.list.website.level'),
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Shield,
      title: t('courses.list.security.title'),
      description: t('courses.list.security.description'),
      duration: t('courses.list.security.duration'),
      level: t('courses.list.security.level'),
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Smartphone,
      title: t('courses.list.apps.title'),
      description: t('courses.list.apps.description'),
      duration: t('courses.list.apps.duration'),
      level: t('courses.list.apps.level'),
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Database,
      title: t('courses.list.data.title'),
      description: t('courses.list.data.description'),
      duration: t('courses.list.data.duration'),
      level: t('courses.list.data.level'),
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Palette,
      title: t('courses.list.design.title'),
      description: t('courses.list.design.description'),
      duration: t('courses.list.design.duration'),
      level: t('courses.list.design.level'),
      color: "bg-fuchsia-100 text-fuchsia-600",
    },
    {
      icon: Zap,
      title: t('courses.list.automation.title'),
      description: t('courses.list.automation.description'),
      duration: t('courses.list.automation.duration'),
      level: t('courses.list.automation.level'),
      color: "bg-violet-100 text-violet-600",
    },
  ];

  return (
    <section id="formations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">{t('courses.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('courses.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${course.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className="w-7 h-7" />
                </div>
                
                <h3 className="mb-3">{course.title}</h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">
                    {course.duration}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-purple-50 rounded-2xl p-8">
            <p className="text-muted-foreground mb-2">
              {t('courses.customNote')}
            </p>
            <p className="text-lg" dangerouslySetInnerHTML={{ __html: t('courses.customDescription') }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
