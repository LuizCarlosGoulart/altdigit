import { useState, useEffect } from "react";
import { Link } from "wouter";
import logo from "@/assets/logo.svg"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants";

export function Header() {
  const isMobile = useMobile();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Atualiza o estilo do cabeçalho com base na posição de rolagem
      setScrolled(window.scrollY > 50);

      // Atualiza a seção ativa com base na posição de rolagem
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rola para a seção com comportamento suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={cn(
      "fixed w-full bg-background/80 backdrop-blur-md z-50 transition-all duration-300",
      scrolled ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <img src={logo} alt="Logo AltDigit" className="h-8 w-8" />
              <span>Alt<span className="gradient-text">Digit</span></span>
            </Link>
          </div>
          
          {isMobile ? (
            <MobileNav activeSection={activeSection} scrollToSection={scrollToSection} />
          ) : (
            <DesktopNav activeSection={activeSection} scrollToSection={scrollToSection} />
          )}
        </div>
      </div>
    </header>
  );
}

function DesktopNav({ activeSection, scrollToSection }: { activeSection: string, scrollToSection: (id: string) => void }) {
  return (
    <nav className="flex items-center space-x-10">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`${link.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.id);
          }}
          className={cn(
            "nav-link",
            activeSection === link.id && "active text-white"
          )}
        >
          {link.label}
        </a>
      ))}
      
      <Button className="gradient-bg hover:from-primary hover:to-secondary">
        <a href="https://chk.eduzz.com/801EDDQAW7" className="px8">Comprar Agora</a>
      </Button>
    </nav>
  );
}

function MobileNav({ activeSection, scrollToSection }: { activeSection: string, scrollToSection: (id: string) => void }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background/95 backdrop-blur-lg border-gray-800">
        <div className="flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={cn(
                "text-lg py-2",
                activeSection === link.id ? "text-white" : "text-gray-400"
              )}
            >
              {link.label}
            </a>
          ))}
          
          <Button asChild className="mt-4 w-full gradient-bg hover:from-primary hover:to-secondary">
            Comprar Agora
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
