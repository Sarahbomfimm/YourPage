import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const portfolioItems = [
  {
    title: 'Restaurante Villa Toscana',
    category: 'Site Institucional',
    description: 'Site elegante com cardápio digital e sistema de reservas integrado.',
    image: 'https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwODQ0NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Design Premium', 'Responsivo', 'SEO'],
  },
  {
    title: 'Advocacia Mendes & Souza',
    category: 'Site Profissional',
    description: 'Plataforma institucional que transmite autoridade e profissionalismo.',
    image: 'https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA4NjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Corporativo', 'Minimalista', 'Conversão'],
  },
  {
    title: 'Tech Solutions Hub',
    category: 'Landing Page',
    description: 'Landing page focada em conversão para captação de leads B2B.',
    image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwODY2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Alta conversão', 'Analytics', 'Otimizado'],
  },
  {
    title: 'Clínica Vita Saúde',
    category: 'Site + Gestão',
    description: 'Site institucional com gestão de anúncios Google Ads.',
    image: 'https://images.unsplash.com/photo-1609941535028-83e3b0291aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2Vic2l0ZSUyMG1vY2t1cCUyMGxhcHRvcHxlbnwxfHx8fDE3NzA5NTIyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Saúde', 'Agendamento', 'Marketing'],
  },
];

export function PortfolioSection() {
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-purple-600/50 transition-all duration-300"
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
    </section>
  );
}
