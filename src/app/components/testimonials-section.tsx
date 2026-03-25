import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Pacote Growth',
    description: 'A partir de:',
    price: 'R$ 1.500,00',
    monthly: null,
    features: [
      'Site completo',
      'Landing page promocional',
      'SEO básico + Google Meu Negócio'
    ],
    target: 'Clínicas e restaurantes',
    highlight: false,
  },
  {
    name: 'Pacote Premium',
    description: 'A partir de:',
    price: 'R$ 1.800,00',
    monthly: 'Mensalidade R$400–600',
    features: [
      'Site ou e-commerce simples',
      'Gestão de anúncios',
      'Relatórios mensais',
      'Suporte mensal'
    ],
    target: 'Receita recorrente',
    highlight: true,
  },
  {
    name: 'Pacote Full',
    description: 'A partir de:',
    price: 'R$ 2.500,00',
    monthly: 'Mensalidade R$600–800',
    features: [
      'Site',
      'Gestão de anúncios',
      'Identidade visual',
      'Posts iniciais',
      'Suporte mensal'
    ],
    target: null,
    highlight: false,
  },
];

const handlePlanSelection = (planName: string) => {
  const message = encodeURIComponent(`Olá, escolhi o ${planName} e gostaria de começar agora.`);
  window.open(`https://wa.me/5582988736580?text=${message}`, '_blank');
};

export function TestimonialsSection() {
  return (
    <section id="planos" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm">Soluções digitais estratégicas</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conheça <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">nossos planos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha a estratégia ideal para o seu negócio decolar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl bg-card border ${plan.highlight ? 'border-purple-600/50 shadow-lg shadow-purple-600/10' : 'border-border'} hover:border-purple-600/50 transition-all duration-300 flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-3xl font-bold mb-1">{plan.price}</div>
                {plan.monthly && (
                  <div className="text-sm text-muted-foreground">{plan.monthly}</div>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>


              <button onClick={() => handlePlanSelection(plan.name)} className={`cursor-pointer flex items-center justify-center w-full py-3 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90' : 'bg-secondary hover:bg-secondary/80'}`}>
                Começar Agora
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}