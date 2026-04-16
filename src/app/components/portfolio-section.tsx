import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ArrowRight, Monitor, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  mockupDesktop?: string;
  mockupMobile?: string;
  pdf?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'CyberStore',
    category: 'E-commerce',
    description: 'Plataforma de e-commerce premium com design futurista, múltiplas categorias de eletrônicos, sistema de promoções e integração WhatsApp. Performance otimizada, responsiva e com alta conversão de vendas.',
    image: '/cyberstoreDesk.png',
    tags: ['E-commerce', 'Velocidade e Conversão', 'integração com WhatsApp', 'Alta performance'],
    link: 'https://cyber-store-yourpage.vercel.app/',
    
    mockupDesktop: '/cyberstoreDesk.png',
    mockupMobile: '/cyberstorePhone.jpeg'
  },
  {
    title: 'InspeGov',
    category: 'Controle de inspeção de UHs',
    description: 'Desenvolvido para hotéis que exigem alto padrão de qualidade, o InspeGov acompanha inspeções, retrabalhos, responsáveis por cada unidade habitacional e indicadores de desempenho com muito mais precisão e controle.',
    image: '/inspegov foto.jpeg',
    tags: ['Operação mais ágil', 'Mais controle e rastreabilidade', 'Gestão em tempo real'],
    link: 'https://sarahbomfimm.github.io/inspeGov/',
    mockupDesktop: '/inspegov foto.jpeg',
    mockupMobile: '/inspegov mobile.jpeg',
    pdf: '/InspeGov - Sistema de Governança Hoteleira.pdf',
  }
];

export function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos que <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">inspiram</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja alguns exemplos do nosso trabalho e imagine o potencial do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-purple-600/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <ExternalLink className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">{item.category}</div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-accent text-sm text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Expansão do Projeto */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card border border-purple-600/20 rounded-3xl shadow-2xl shadow-purple-900/20 p-6 md:p-10"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <span className="text-purple-600 font-bold mb-2 block text-sm tracking-wider uppercase">{selectedItem.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{selectedItem.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedItem.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-purple-600/10 text-purple-600 text-sm font-medium border border-purple-600/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedItem.link && (
                    <motion.a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all cursor-pointer"
                    >
                      Acessar Projeto Online
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  )}
                  {selectedItem.pdf && (
                    <motion.a
                      href={selectedItem.pdf}
                      download
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all cursor-pointer"
                    >
                      Baixar Apresentação
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Área de Mockups (Desktop e Mobile) */}
              {(selectedItem.mockupDesktop || selectedItem.mockupMobile) && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-accent/30 rounded-2xl p-6 border border-border/50">
                  {selectedItem.mockupDesktop && (
                    <div className="md:col-span-2 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-muted-foreground font-medium">
                        <Monitor className="w-5 h-5" /> Versão Desktop
                      </div>
                      <div className="rounded-xl overflow-hidden border border-border/50 shadow-sm bg-background aspect-video">
                        <ImageWithFallback
                          src={selectedItem.mockupDesktop}
                          alt="Desktop View"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {selectedItem.mockupMobile && (
                    <div className="md:col-span-1 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-muted-foreground font-medium">
                        <Smartphone className="w-5 h-5" /> Versão Mobile
                      </div>
                      <div className="rounded-xl overflow-hidden border border-border/50 shadow-sm bg-background mx-auto w-full max-w-[280px] aspect-[9/19]">
                        <ImageWithFallback
                          src={selectedItem.mockupMobile}
                          alt="Mobile View"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
