import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit this data to an API
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">Have questions about our Tax Calculator? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-400 mt-1">support@taxcalculator.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Address</h4>
                    <p className="text-gray-400 mt-1">123 Tax Street, Suite 456<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-white mb-4">Follow Us</h4>
                <div className="flex space-x-5">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-background rounded-xl p-8 border border-gray-800 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-zinc-900 border-gray-700 focus:ring-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-zinc-900 border-gray-700 focus:ring-primary"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6 space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-zinc-900 border-gray-700 focus:ring-primary"
                      placeholder="Message subject"
                      required
                    />
                  </div>
                  
                  <div className="mb-6 space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className="bg-zinc-900 border-gray-700 focus:ring-primary resize-none"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full gradient-bg hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
