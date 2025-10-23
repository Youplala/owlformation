import { motion } from "motion/react";
import { OwlLogo } from "./OwlLogo";
import { Button } from "./ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.home'), href: "#accueil" },
    { label: t('nav.about'), href: "#apropos" },
    { label: t('nav.courses'), href: "#formations" },
    { label: t('nav.pricing'), href: "#tarifs" },
    { label: t('nav.testimonials'), href: "#témoignages" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#accueil"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <OwlLogo className="w-10 h-10" />
            <div>
              <div className="font-semibold text-purple-700">Owl Formation</div>
              <div className="text-xs text-muted-foreground">by Maryline Brosset</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700"
            >
              <a
                href="https://moodle.owlformation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                {t('nav.moodle')}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('accessibility.closeMenu') : t('accessibility.menu')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <Button
              asChild
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <a
                href="https://moodle.owlformation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                {t('nav.moodle')}
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
