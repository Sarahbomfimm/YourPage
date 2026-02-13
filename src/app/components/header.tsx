import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useState } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
          className="flex items-center gap-2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-xl">
              YourPage
            </div>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#beneficios" className="text-foreground/80 hover:text-foreground transition-colors">Benefícios</a>
          <a href="#servicos" className="text-foreground/80 hover:text-foreground transition-colors">Serviços</a>
          <a href="#portfolio" className="text-foreground/80 hover:text-foreground transition-colors">Portfólio</a>
          <a href="#depoimentos" className="text-foreground/80 hover:text-foreground transition-colors">Depoimentos</a>
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
                onClick={closeMenu}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Benefícios
              </a>
              <a
                href="#servicos"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Portfólio
              </a>
              <a
                href="#depoimentos"
                onClick={closeMenu}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                Depoimentos
              </a>
              <button className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium">
                Falar com especialista
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}