import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useState, MouseEvent } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Impede o salto padrão do navegador
    setIsMenuOpen(false); // Fecha o menu

    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 85; // Altura aproximada do header para não tapar o conteúdo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá, gostaria de falar com um especialista.");
    window.open(`https://wa.me/5582988736580?text=${message}`, '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={handleScrollToTop}
          className="flex items-center gap-2"
          style={{ cursor: 'pointer' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-xl">
              YourPage
            </div>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#beneficios"
            onClick={(e) => handleNavClick(e, '#beneficios')}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Benefícios
          </a>
          <a
            href="#servicos"
            onClick={(e) => handleNavClick(e, '#servicos')}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Serviços
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleNavClick(e, '#portfolio')}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#planos"
            onClick={(e) => handleNavClick(e, '#planos')}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Orçamentos
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppContact}
            className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
          >
            Falar com especialista
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-accent"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <a
                href="#beneficios"
                onClick={(e) => handleNavClick(e, '#beneficios')}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Benefícios
              </a>
              <a
                href="#servicos"
                onClick={(e) => handleNavClick(e, '#servicos')}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, '#portfolio')}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Portfólio
              </a>
              <a
                href="#planos"
                onClick={(e) => handleNavClick(e, '#planos')}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Orçamentos
              </a>
              <button onClick={handleWhatsAppContact} className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium">
                Falar com especialista
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}