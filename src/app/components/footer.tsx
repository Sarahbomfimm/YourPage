import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

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
              Criamos presença digital estratégica e profissional para negócios locais. 
              Sites elegantes que atraem clientes e fortalecem sua marca.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
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
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-colors hover:text-white"
              >
                <Facebook className="w-5 h-5" />
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
                <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Depoimentos
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
                <span>contato@yourpage.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP</span>
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
