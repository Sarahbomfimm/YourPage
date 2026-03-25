import { motion } from 'motion/react';
import { Globe, Megaphone, QrCode, Palette, Code, BarChart } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sites Institucionais',
    description: 'Sites elegantes e profissionais que transmitem credibilidade e fortalecem sua marca no mercado.',
    features: ['Design personalizado', 'Responsivo', 'SEO otimizado', 'Integração WhatsApp'],
  },
  {
    icon: Code,
    title: 'Landing Pages',
    description: 'Páginas focadas em conversão, ideais para campanhas, lançamentos e captação de leads.',
    features: ['Alta conversão', 'Carregamento rápido', 'A/B Testing', 'Analytics integrado'],
  },
  {
    icon: QrCode,
    title: 'Cardápio Digital',
    description: 'Cardápios digitais modernos com QR Code, perfeitos para restaurantes e estabelecimentos.',
    features: ['QR Code personalizado', 'Fácil atualização', 'Design atrativo', 'Sem instalação'],
  },
  {
    icon: Megaphone,
    title: 'Gestão de Anúncios',
    description: 'Campanhas estratégicas no Google e redes sociais para atrair mais clientes.',
    features: ['Google Ads', 'Meta Ads', 'Relatórios', 'ROI otimizado'],
  },
  {
    icon: Palette,
    title: 'Identidade Visual',
    description: 'Criação de marca completa: logo, cores, tipografia e manual de identidade visual.',
    features: ['Logo profissional', 'Paleta de cores', 'Manual de marca', 'Materiais gráficos'],
  },
  {
    icon: BarChart,
    title: 'Consultoria Digital',
    description: 'Estratégias personalizadas para maximizar seus resultados no ambiente digital.',
    features: ['Análise de mercado', 'Plano estratégico', 'Acompanhamento', 'Otimização contínua'],
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para fortalecer sua presença digital e conquistar mais clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-purple-600/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow cursor-pointer"
          >
            Solicitar orçamento personalizado
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
