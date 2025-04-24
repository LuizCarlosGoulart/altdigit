import { ArrowRight, CheckCircle } from "lucide-react";

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "50K+", label: "Active Users" },
  { value: "$10M+", label: "Tax Savings" },
  { value: "24/7", label: "Customer Support" }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-zinc-900 opacity-70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Tax Calculator</h2>
          <p className="text-gray-300">Our mission is to simplify tax calculations for individuals and businesses alike, making tax season stress-free and efficient.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Designed for Everyone</h3>
            <p className="text-gray-300 mb-6">Whether you're a freelancer, small business owner, or individual taxpayer, our Tax Calculator adapts to your specific needs.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-white">User-Friendly Interface</h4>
                  <p className="text-gray-400 mt-1">Intuitive design that makes tax calculations accessible to everyone, regardless of tax knowledge.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-white">Continuous Updates</h4>
                  <p className="text-gray-400 mt-1">Our system is continuously updated to reflect the latest tax laws and regulations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-medium text-white">Multi-Platform Access</h4>
                  <p className="text-gray-400 mt-1">Access your tax information on any device, anytime, anywhere.</p>
                </div>
              </div>
            </div>
            

          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Tax calculator in use" 
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
