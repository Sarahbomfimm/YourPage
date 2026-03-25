import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Send, CheckCircle2, Loader2, Home, Save } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function BriefingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan') || 'Não especificado';

  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    empresa: '', segmento: '', contato: '',
    objetivos: [] as string[], objetivoOutro: '',
    publico: [] as string[],
    funcionalidades: [] as string[], funcionalidadeOutra: '',
    identidade: '', conteudo: '',
    prazo: '', investimento: ''
  });

  // Carregamento inicial moderno
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      title: 'Informações Básicas',
      fields: (
        <div className="space-y-4">
          <input type="text" placeholder="Nome da empresa/profissional" className="w-full p-4 rounded-xl bg-accent border border-border focus:border-purple-600 outline-none transition-all" value={formData.empresa} onChange={e => setFormData({...formData, empresa: e.target.value})} />
          <input type="text" placeholder="Segmento de atuação" className="w-full p-4 rounded-xl bg-accent border border-border focus:border-purple-600 outline-none transition-all" value={formData.segmento} onChange={e => setFormData({...formData, segmento: e.target.value})} />
          <input type="text" placeholder="Contato (WhatsApp/E-mail)" className="w-full p-4 rounded-xl bg-accent border border-border focus:border-purple-600 outline-none transition-all" value={formData.contato} onChange={e => setFormData({...formData, contato: e.target.value})} />
        </div>
      )
    },
    {
      title: 'Qual o principal objetivo?',
      fields: (
        <div className="grid gap-3">
          {['Credibilidade (institucional)', 'Vendas online (e-commerce)', 'Agendamento de consultas', 'Portfólio'].map(item => (
            <label key={item} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${formData.objetivos.includes(item) ? 'border-purple-600 bg-purple-600/10' : 'border-border bg-accent'}`}>
              <input type="checkbox" className="hidden" checked={formData.objetivos.includes(item)} onChange={() => {
                const news = formData.objetivos.includes(item) ? formData.objetivos.filter(i => i !== item) : [...formData.objetivos, item];
                setFormData({...formData, objetivos: news});
              }} />
              <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.objetivos.includes(item) ? 'bg-purple-600 border-purple-600' : 'border-muted-foreground'}`}>
                {formData.objetivos.includes(item) && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              {item}
            </label>
          ))}
          <input type="text" placeholder="Outro objetivo..." className="w-full p-4 rounded-xl bg-accent border border-border outline-none mt-2" value={formData.objetivoOutro} onChange={e => setFormData({...formData, objetivoOutro: e.target.value})} />
        </div>
      )
    },
    {
      title: 'Quem você quer atingir?',
      fields: (
        <div className="grid gap-3">
          {['Clientes locais', 'Pacientes', 'Empresas/parceiros', 'Público nacional/internacional'].map(item => (
            <label key={item} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${formData.publico.includes(item) ? 'border-purple-600 bg-purple-600/10' : 'border-border bg-accent'}`}>
              <input type="checkbox" className="hidden" checked={formData.publico.includes(item)} onChange={() => {
                const news = formData.publico.includes(item) ? formData.publico.filter(i => i !== item) : [...formData.publico, item];
                setFormData({...formData, publico: news});
              }} />
              <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.publico.includes(item) ? 'bg-purple-600 border-purple-600' : 'border-muted-foreground'}`}>
                {formData.publico.includes(item) && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              {item}
            </label>
          ))}
        </div>
      )
    },
    {
      title: 'Funcionalidades Desejadas',
      fields: (
        <div className="grid gap-3">
          {['Formulário de contato', 'Integração WhatsApp', 'Agendamento online', 'Loja virtual', 'Blog/notícias'].map(item => (
            <label key={item} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${formData.funcionalidades.includes(item) ? 'border-purple-600 bg-purple-600/10' : 'border-border bg-accent'}`}>
              <input type="checkbox" className="hidden" checked={formData.funcionalidades.includes(item)} onChange={() => {
                const news = formData.funcionalidades.includes(item) ? formData.funcionalidades.filter(i => i !== item) : [...formData.funcionalidades, item];
                setFormData({...formData, funcionalidades: news});
              }} />
              <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.funcionalidades.includes(item) ? 'bg-purple-600 border-purple-600' : 'border-muted-foreground'}`}>
                {formData.funcionalidades.includes(item) && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              {item}
            </label>
          ))}
          <input type="text" placeholder="Outra funcionalidade..." className="w-full p-4 rounded-xl bg-accent border border-border outline-none mt-2" value={formData.funcionalidadeOutra} onChange={e => setFormData({...formData, funcionalidadeOutra: e.target.value})} />
        </div>
      )
    },
    {
      title: 'Identidade Visual',
      fields: (
        <div className="grid gap-3">
          {['Sim, já possuo logo e cores', 'Não, preciso que seja criado'].map(item => (
            <label key={item} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${formData.identidade === item ? 'border-purple-600 bg-purple-600/10' : 'border-border bg-accent'}`}>
              <input type="radio" name="identidade" className="hidden" checked={formData.identidade === item} onChange={() => setFormData({...formData, identidade: item})} />
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.identidade === item ? 'bg-purple-600 border-purple-600' : 'border-muted-foreground'}`}>
                {formData.identidade === item && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
              {item}
            </label>
          ))}
        </div>
      )
    },
    {
      title: 'Conteúdo do Site',
      fields: (
        <div className="grid gap-3">
          {['Sim, já possuo textos e imagens', 'Não, preciso de ajuda com o conteúdo'].map(item => (
            <label key={item} className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${formData.conteudo === item ? 'border-purple-600 bg-purple-600/10' : 'border-border bg-accent'}`}>
              <input type="radio" name="conteudo" className="hidden" checked={formData.conteudo === item} onChange={() => setFormData({...formData, conteudo: item})} />
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.conteudo === item ? 'bg-purple-600 border-purple-600' : 'border-muted-foreground'}`}>
                {formData.conteudo === item && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
              {item}
            </label>
          ))}
        </div>
      )
    },
    {
      title: 'Prazo e Investimento',
      fields: (
        <div className="space-y-4">
          <input type="text" placeholder="Prazo ideal para lançamento (ex: 30 dias)" className="w-full p-4 rounded-xl bg-accent border border-border focus:border-purple-600 outline-none transition-all" value={formData.prazo} onChange={e => setFormData({...formData, prazo: e.target.value})} />
          <input type="text" placeholder="Faixa de investimento pretendida" className="w-full p-4 rounded-xl bg-accent border border-border focus:border-purple-600 outline-none transition-all" value={formData.investimento} onChange={e => setFormData({...formData, investimento: e.target.value})} />
        </div>
      )
    }
  ];

  const validateStep = () => {
    switch (currentStep) {
      case 0: return formData.empresa && formData.segmento && formData.contato;
      case 1: return formData.objetivos.length > 0 || formData.objetivoOutro;
      case 2: return formData.publico.length > 0;
      case 3: return formData.funcionalidades.length > 0 || formData.funcionalidadeOutra;
      case 4: return formData.identidade !== '';
      case 5: return formData.conteudo !== '';
      case 6: return formData.prazo && formData.investimento;
      default: return false;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Por favor, preencha os campos obrigatórios antes de prosseguir.");
    }
  };

  const handleSubmit = async () => {
    setIsSending(true);
    
    // Formatação dos dados para o serviço de e-mail
    const templateParams = {
      subject: `Briefing YourPage - ${formData.empresa}`,
      message: `
        Empresa: ${formData.empresa}
        Segmento: ${formData.segmento}
        Contato: ${formData.contato}
        Plano: ${selectedPlan}
        Objetivos: ${formData.objetivos.join(', ')} ${formData.objetivoOutro}
        Público: ${formData.publico.join(', ')}
        Funcionalidades: ${formData.funcionalidades.join(', ')} ${formData.funcionalidadeOutra}
        Identidade: ${formData.identidade}
        Conteúdo: ${formData.conteudo}
        Prazo: ${formData.prazo}
        Investimento: ${formData.investimento}
      `
    };

    try {
      // Aqui você integraria com o EmailJS ou sua API própria
      // Exemplo: await emailjs.send('service_id', 'template_id', templateParams, 'user_id');
      
      console.log("Enviando dados:", templateParams);
      
      // Simulação de delay de rede
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert("Briefing enviado com sucesso! Entraremos em contato em breve.");
      navigate('/');
    } catch (error) {
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-2xl mb-8 shadow-2xl shadow-purple-500/20"
        >
          YourPage
        </motion.div>
        <div className="flex items-center gap-3 text-muted-foreground animate-pulse">
          <Loader2 className="w-5 h-5 animate-spin text-purple-600" />
          Preparando seu briefing personalizado...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-6">
      <div className="max-w-3xl mx-auto mb-12 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium hover:text-purple-600 transition-colors"
        >
          <Home className="w-4 h-4" />
          Voltar ao menu inicial
        </button>
        <div className="text-sm font-bold text-purple-600 bg-purple-600/10 px-4 py-1 rounded-full border border-purple-600/20">
          Plano: {selectedPlan}
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-right font-medium">
          Passo {currentStep + 1} de {steps.length}
        </div>
      </div>

      <div className="max-w-3xl mx-auto min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {steps[currentStep].title}
              </span>
            </h1>
            
            <div className="mb-12">
              {steps[currentStep].fields}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-3xl mx-auto flex items-center justify-between mt-8">
        <button
          onClick={() => {
            setCurrentStep(currentStep - 1);
            setIsSaved(false);
          }}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-accent'}`}
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        {currentStep < steps.length - 1 ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-purple-500/20"
          >
            Próxima pergunta
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        ) : !isSaved ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => validateStep() ? setIsSaved(true) : alert("Preencha os campos antes de salvar.")}
            className="flex items-center gap-2 px-10 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20"
          >
            <Save className="w-5 h-5" />
            Salvar respostas
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            disabled={isSending}
            className="flex items-center gap-2 px-10 py-4 rounded-xl bg-green-600 text-white font-bold shadow-lg shadow-green-500/20 disabled:opacity-50"
          >
            {isSending ? (
              <>Enviando... <Loader2 className="w-5 h-5 animate-spin" /></>
            ) : (
              <>Enviar respostas <Send className="w-5 h-5" /></>
            )}
          </motion.button>
        )}
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>
    </main>
  );
}