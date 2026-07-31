import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-30"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-xl">
                YourPage
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              A YourPage é focada no <strong>desenvolvimento de sites e sistemas sob medida</strong> em <strong>Maceió/AL</strong> e com atendimento em todo o Brasil. Criamos <strong>landing pages premium</strong>, <strong>sites institucionais</strong> e <strong>sistemas web personalizados</strong> com alto desempenho e design exclusivo.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/yourpage.tech?igsh=MTR6c3J4MzU4YXozaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-colors hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-colors hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://wa.me/5582988736580?text=Ol%C3%A1%2C%20vim%20pelo%20site%20YourPage."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-colors hover:text-white"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#planos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Planos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:yourpage.business.tech@gmail.com" className="hover:text-foreground transition-colors">yourpage.business.tech@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/5582988736580?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors">(82) 98873-6580</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Maceió, AL</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 YourPage. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
    </footer>
  );
}
