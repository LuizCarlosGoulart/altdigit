import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  ShieldCheck, 
  Clock, 
  Shield, 
  Database, 
  Headphones 
} from "lucide-react";

const features = [
  {
    icon: <LineChart className="h-7 w-7 text-primary" />,
    title: "Cálculos Precisos",
    description: "Obtenha cálculos fiscais precisos com base nas leis e regulamentos tributários mais recentes. Nunca mais se preocupe com erros de cálculo."
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: "Seguro e Privado",
    description: "Seus dados financeiros são criptografados e nunca compartilhados. Priorizamos sua privacidade e segurança acima de tudo."
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Economia de Tempo",
    description: "Complete seus cálculos fiscais em minutos, não horas. Nossa interface intuitiva torna o preenchimento de impostos rápido e fácil."
  },
  {
    icon: <Shield className="h-7 w-7 text-primary" />,
    title: "Máximo de Deduções",
    description: "Descubra todas as deduções elegíveis para minimizar sua carga tributária. Nosso sistema garante que você não perca nenhuma oportunidade de economizar."
  },
  {
    icon: <Database className="h-7 w-7 text-primary" />,
    title: "Integração de Dados",
    description: "Importe facilmente dados de várias fontes financeiras. Integre perfeitamente com plataformas bancárias, de investimento e contabilidade."
  },
  {
    icon: <Headphones className="h-7 w-7 text-primary" />,
    title: "Suporte Especializado",
    description: "Obtenha assistência sempre que precisar. Nossos especialistas em impostos estão disponíveis para ajudar com quaisquer dúvidas ou preocupações."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Por Que Escolher Nossa Calculadora de Impostos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Nossa calculadora de impostos foi projetada pensando em você, oferecendo a mistura perfeita de simplicidade e recursos poderosos.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-xl shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
