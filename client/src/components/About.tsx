import { ArrowRight, CheckCircle } from "lucide-react";
import calculadora from "@/assets/calculadora.gif"

const stats = [
  { value: "98%", label: "Satisfação do Cliente" },
  { value: "5K+", label: "Usuários" },
  { value: "R$50M+", label: "Economia em Impostos" },
  { value: "24/7", label: "Suporte ao Cliente" }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-zinc-900 opacity-70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Calculadora Imobiliária</h2>
          <p className="text-gray-300">Nossa missão é simplificar os cálculos de impostos imobiliários, tornando o processo de venda de imóveis livre de estresse e eficiente.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Projetado para Todos</h3>
            <p className="text-gray-300 mb-6">Seja você um proprietário, investidor imobiliário ou corretor de imóveis, nossa Calculadora Imobiliária se adapta às suas necessidades específicas.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-white">Interface Amigável</h4>
                  <p className="text-gray-400 mt-1">Design intuitivo que torna os cálculos de impostos imobiliários acessíveis a todos, independentemente do conhecimento tributário.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-white">Precisão nos cálculos</h4>
                  <p className="text-gray-400 mt-1">Nosso sistema realiza os cálculos com máxima precisão estando de acordo com as leis e regulamentos tributários mais recentes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-white">Fácil instalação</h4>
                  <p className="text-gray-400 mt-1">Instale em segundos: após a compra, você receberá um e-mail com o arquivo – é só baixar e começar a usar!</p>
                </div>
              </div>
            </div>
            

          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={calculadora}
                  alt="Calculadora imobiliária em uso" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
