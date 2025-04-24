import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import React from "react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-gray-300">Tem perguntas sobre nossa Calculadora Imobiliária? Nossa equipe está aqui para ajudar. Entre em contato conosco e responderemos o mais rápido possível.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background rounded-xl p-8 border border-gray-800 shadow-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium text-white text-lg mb-2">Email</h4>
              <p className="text-gray-400">contato@altdigit.com.br</p>
            </div>
            
            <div className="bg-background rounded-xl p-8 border border-gray-800 shadow-lg flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium text-white text-lg mb-2">Telefone</h4>
              <p className="text-gray-400">(47) 9 9757-1249</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h4 className="font-medium text-white text-xl mb-6">Siga-nos</h4>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/p/Alt-Digit-100078057759367/" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/alt_digit_solucoes/" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
