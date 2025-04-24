import logo from "@/assets/logo.svg"
import { Button } from "@/components/ui/button";


export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-white mb-6">
          <img src={logo} alt="Logo AltDigit" className="h-8 w-8" />
            <span>Alt<span className="gradient-text">Digit</span></span>
          </a>
          <p className="text-gray-400 mb-6 max-w-lg">Simplificando o cálculo de impostos imobiliários com nossa calculadora poderosa e fácil de usar.</p>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Calculadora Imobiliária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
