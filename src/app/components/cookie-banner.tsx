import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-2xl"
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-sm md:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">Cookies e Tecnologias</span>
                  {' '}Utilizamos cookies para melhorar sua experiência, personalizar conteúdo, 
                  analisar tráfego e manter você conectado. Ao continuar navegando, você concorda 
                  com nosso uso de cookies.{' '}
                  <a 
                    href="#privacy" 
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Saiba mais
                  </a>
                </p>
              </div>

              <div className="flex gap-3 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReject}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-accent/50 text-sm font-medium transition-colors cursor-pointer"
                >
                  Rejeitar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAccept}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow cursor-pointer"
                >
                  Aceitar Tudo
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="md:hidden p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors absolute top-4 right-4"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
