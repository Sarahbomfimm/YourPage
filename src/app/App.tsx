import { ThemeProvider } from './components/theme-provider';
import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { BenefitsSection } from './components/benefits-section';
import { ServicesSection } from './components/services-section';
import { PortfolioSection } from './components/portfolio-section';
import { TestimonialsSection } from './components/testimonials-section';
import { CTASection } from './components/cta-section';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scroll-to-top';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>
          <HeroSection />
          <BenefitsSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;