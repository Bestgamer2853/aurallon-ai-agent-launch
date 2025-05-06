
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="py-12 bg-aurallon-blue px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Turn Telegram, WhatsApp & Slack into your 24/7 AI Sales Team
            </h2>
            <p className="text-blue-100 text-lg">
              Never miss another lead. Start converting prospects while you sleep.
            </p>
          </div>
          
          <Button 
            className="bg-aurallon-green hover:bg-aurallon-green/90 text-white px-8 py-6 text-lg rounded-md font-medium"
            onClick={() => window.open('https://calendly.com/aurallonbiz', '_blank')}
          >
            Get Your Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
