import { ArrowRight } from "lucide-react";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    content: "A Calculadora de Impostos transformou completamente a forma como lido com meus impostos. É intuitiva, precisa e me economiza horas de trabalho. O recurso de buscador de deduções por si só me economizou milhares de reais!",
    author: "Miguel Roberto",
    role: "Proprietário de Pequena Empresa",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    content: "Como freelancer, acompanhar os impostos sempre foi minha maior dor de cabeça. Desde que comecei a usar a Calculadora de Impostos, consegui me concentrar no meu trabalho em vez de me preocupar com a temporada fiscal.",
    author: "Sara Oliveira",
    role: "Designer Freelancer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    content: "A equipe de suporte ao cliente é excepcional. Eles me ajudaram a entender situações fiscais complexas e me guiaram durante todo o processo. Estou extremamente satisfeito com o serviço.",
    author: "Daniel Santos",
    role: "Executivo Corporativo",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O Que Nossos Usuários Dizem</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Não acredite apenas em nossa palavra. Veja o que nossos usuários têm a dizer sobre sua experiência com a Calculadora de Impostos.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 rounded-xl shadow-lg border border-gray-800 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  className="w-10 h-10 rounded-full mr-4" 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                />
                <div>
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
