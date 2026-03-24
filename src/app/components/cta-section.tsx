import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600"></div>

      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"
      ></motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Transforme seu negócio agora</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Seu negócio merece ser visto
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-4 text-white/90"
          >
            Está pronto para ter mais clientes online?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg mb-10 text-white/80 max-w-2xl mx-auto"
          >
            Crie uma presença digital estratégica, elegante e profissional que
            transforma visitantes em clientes e fortalece sua marca no mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl bg-white text-purple-600 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-shadow"
            >
              Começar agora
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent("Olá, gostaria de falar com um especialista.");
                window.open(`https://wa.me/5582988736580?text=${message}`, '_blank');
              }}
              className="px-8 py-4 rounded-xl border-2 border-white/30 backdrop-blur-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Falar com especialista
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              Sem taxa de setup
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              Entrega rápida
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              Suporte dedicado
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
