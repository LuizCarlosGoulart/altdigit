import { Button } from "@/components/ui/button";

export function CTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: (contactSection as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 lg:p-16 border border-gray-800 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Simplificar Sua Experiência com Impostos?</h2>
            <p className="text-xl text-gray-300 mb-10">Junte-se a milhares de usuários satisfeitos que transformaram seu processo de preparação de impostos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg hover:opacity-90">
                Compre Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-700 hover:border-primary text-gray-300 hover:text-white"
                onClick={scrollToContact}
              >
                Contate-nos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
