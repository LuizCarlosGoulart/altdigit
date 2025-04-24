import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  ShieldCheck, 
  Clock, 
  Shield, 
  Database, 
  Headphones 
} from "lucide-react";

const features = [
  {
    icon: <LineChart className="h-7 w-7 text-primary" />,
    title: "Accurate Calculations",
    description: "Get precise tax calculations based on the latest tax laws and regulations. Never worry about miscalculations again."
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: "Secure & Private",
    description: "Your financial data is encrypted and never shared. We prioritize your privacy and security above all else."
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Time-Saving",
    description: "Complete your tax calculations in minutes, not hours. Our intuitive interface makes filing taxes quick and easy."
  },
  {
    icon: <Shield className="h-7 w-7 text-primary" />,
    title: "Maximum Deductions",
    description: "Discover all eligible deductions to minimize your tax liability. Our system ensures you don't miss any opportunities to save."
  },
  {
    icon: <Database className="h-7 w-7 text-primary" />,
    title: "Data Integration",
    description: "Easily import data from various financial sources. Seamlessly integrate with banking, investment, and accounting platforms."
  },
  {
    icon: <Headphones className="h-7 w-7 text-primary" />,
    title: "Expert Support",
    description: "Get assistance whenever you need it. Our tax experts are available to help with any questions or concerns."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Tax Calculator</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Our tax calculator is designed with you in mind, offering the perfect blend of simplicity and powerful features.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-xl shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="gradient-bg hover:opacity-90">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
}
