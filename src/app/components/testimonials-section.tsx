import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Ana Paula Rodrigues',
    role: 'Proprietária - Villa Toscana',
    image: 'https://images.unsplash.com/photo-1522199899308-2eef382e2158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDg2Nzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'A YourPage transformou completamente nossa presença digital. O site é elegante, profissional e nossos clientes adoram o cardápio digital. Aumentamos 40% nas reservas!',
    rating: 5,
  },
  {
    name: 'Dr. Carlos Mendes',
    role: 'Advogado Sócio',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDg5NDI3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'Profissionalismo do início ao fim. O site transmite exatamente a autoridade que precisávamos. A captação de leads aumentou significativamente.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    role: 'Diretora - Tech Solutions',
    image: 'https://images.unsplash.com/photo-1522199899308-2eef382e2158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDg2Nzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    content: 'A landing page que criaram superou todas as expectativas. Design moderno, carregamento rápido e conversão acima da média do mercado.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de quem confiou na YourPage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-purple-600/50 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20">
            <div className="flex -space-x-4">
              {testimonials.slice(0, 3).map((testimonial, idx) => (
                <div key={idx} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold mb-1">+50 clientes satisfeitos</div>
              <div className="text-muted-foreground">Empresas que transformaram sua presença digital</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
