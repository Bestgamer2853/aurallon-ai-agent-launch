
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Aurallon's AI agent has transformed our lead response time. We're capturing leads that would've been lost during off-hours, and the seamless booking system has increased our conversion rate by 37%.",
      author: "Michael Rodriguez",
      position: "Principal Broker, Elite Realty Partners"
    },
    {
      quote: "The WhatsApp and Telegram integration is a game-changer. Our international clients love being able to reach us 24/7 and get instant responses. The timezone conversion feature alone saved us countless hours.",
      author: "Priya Sharma",
      position: "Team Lead, Global Properties"
    },
    {
      quote: "We implemented Aurallon last month and have already seen a 42% increase in qualified leads. The automation workflows have eliminated repetitive tasks and let my team focus on closing deals.",
      author: "David Chen",
      position: "Owner, City View Brokerage"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aurallon-blue mb-4">
            What Real Estate Pros Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join industry leaders who are transforming their business with Aurallon
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-10 mb-10">
            <div className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-aurallon-blue opacity-20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="mt-4">
                <p className="font-semibold text-aurallon-blue">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full h-10 w-10 border-aurallon-blue"
            >
              <ChevronLeft className="h-4 w-4 text-aurallon-blue" />
            </Button>
            
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-aurallon-blue' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <Button 
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full h-10 w-10 border-aurallon-blue"
            >
              <ChevronRight className="h-4 w-4 text-aurallon-blue" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">
              Trusted by Real Estate Professionals
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Here we would normally put actual client logos, but we'll use placeholder elements */}
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="h-12 bg-white rounded-md px-8 flex items-center justify-center shadow-sm">
                <div className="text-lg font-bold text-gray-400">Agency {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
