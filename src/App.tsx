import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Courses } from "./components/Courses";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import { SkipLink } from "./components/SkipLink";

export default function App() {
  return (
    <>
      <SEO />
      <SkipLink />
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Courses />
          <Pricing />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
