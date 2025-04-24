import { ArrowRight } from "lucide-react";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    content: "Tax Calculator has completely transformed how I handle my taxes. It's intuitive, accurate, and saves me hours of work. The deduction finder feature alone saved me thousands of dollars!",
    author: "Michael Roberts",
    role: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    content: "As a freelancer, keeping track of taxes was always my biggest headache. Since I started using Tax Calculator, I've been able to focus on my work instead of worrying about tax season.",
    author: "Sarah Johnson",
    role: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
  },
  {
    content: "The customer support team is exceptional. They helped me understand complex tax situations and guided me through the entire process. I'm extremely satisfied with the service.",
    author: "David Chang",
    role: "Corporate Executive",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Don't just take our word for it. See what our users have to say about their experience with Tax Calculator.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 rounded-xl shadow-lg border border-gray-800 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  className="w-10 h-10 rounded-full mr-4" 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                />
                <div>
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}
