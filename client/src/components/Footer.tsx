import { Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";


export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-white mb-6">
            <Monitor className="h-8 w-8 text-primary" />
            <span>Tax<span className="gradient-text">Calc</span></span>
          </a>
          <p className="text-gray-400 mb-6 max-w-lg">Simplifying taxes for everyone with our powerful, easy-to-use calculator.</p>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Tax Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
