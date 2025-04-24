import { Monitor } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-background py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <Monitor className="h-8 w-8 text-primary" />
              <span>Tax<span className="gradient-text">Calc</span></span>
            </a>
            <p className="text-gray-400 mb-6">Simplifying taxes for everyone with our powerful, easy-to-use calculator.</p>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Tax Calculator. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">GDPR Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for tax tips and updates.</p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-zinc-900 border-gray-700 rounded-r-none focus:ring-0 focus:border-gray-700"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 rounded-l-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
