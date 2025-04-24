import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Simplifique Seus Impostos com Nossa <span className="gradient-text">Calculadora Inteligente</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Elimine o estresse da temporada fiscal com nossa calculadora intuitiva. Economize tempo, dinheiro e evite erros custosos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gradient-bg hover:opacity-90" asChild>
                <a href="#" className="px-8">Adquira a Calculadora</a>
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToAbout} className="border-gray-700 hover:border-primary text-gray-300 hover:text-white">
                Saiba Mais
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <AvatarGroup>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </AvatarGroup>
              <div>
                <p className="text-gray-300"><span className="text-white font-medium">4,9/5</span> de mais de 2.000 avaliações</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30"></div>
              <div className="relative bg-background border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=450&q=80" 
                  alt="Prévia do painel da calculadora de impostos" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animated-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </div>
    </section>
  );
}
