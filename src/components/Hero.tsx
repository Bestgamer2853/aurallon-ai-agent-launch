
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <img src="/lovable-uploads/7e16557b-7e9f-4f68-965b-fe513f3e0f6d.png" alt="Aurallon Automations Logo" className="h-14 md:h-16 object-contain" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aurallon-blue leading-tight">
              Never Miss a Lead: AI Chat on Telegram, WhatsApp & Slack
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Capture, qualify, and book calls automatically—no website needed.
            </p>
            <Button className="text-white bg-aurallon-green hover:bg-aurallon-green/90 rounded-md px-6 py-6 text-lg font-medium" onClick={() => window.open('https://calendly.com/aurallonbiz', '_blank')}>
              Book Your Free Demo
            </Button>
          </div>
          
          <div className="lg:w-1/2 mt-8 lg:mt-0 animate-slide-up">
            <div className="relative">
              <div className="bg-gray-100 rounded-xl p-5 shadow-lg">
                <div className="flex space-x-4 mb-4">
                  {/* WhatsApp mockup */}
                  <div className="bg-white rounded-lg shadow-md p-3 flex-1">
                    <div className="flex items-center bg-[#128C7E] text-white rounded-t-lg p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="ml-2 text-sm font-medium">WhatsApp</span>
                    </div>
                    <div className="p-2 space-y-2">
                      <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
                        <p className="text-xs">Hi! I'm interested in property listings.</p>
                      </div>
                      <div className="bg-aurallon-blue text-white p-2 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                        <p className="text-xs">Welcome! I'd be happy to help. What area are you looking to buy in?</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Telegram mockup */}
                  <div className="bg-white rounded-lg shadow-md p-3 flex-1">
                    <div className="flex items-center bg-[#0088cc] text-white rounded-t-lg p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.5 6.696-.5 6.696l-.822 2.575c-.122.122-.178.25-.527.25-.232 0-.336-.12-.487-.23-.238-.18-1.27-.96-1.84-1.385-.223-.333 0-.51.223-.51 0-.51 1.264-1.238 1.897-1.238.39 0-.364.67-.448.753-.243.242-.91.96-1.588 1.73-.122.14-.142.121-.142-.11C12 11 15 9 15 9l.244-.058s.121-.098.169-.084c.05.015.144.085.144.085z" />
                      </svg>
                      <span className="ml-2 text-sm font-medium">Telegram</span>
                    </div>
                    <div className="p-2 space-y-2">
                      <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
                        <p className="text-xs">When can I schedule a viewing?</p>
                      </div>
                      <div className="bg-aurallon-blue text-white p-2 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                        <p className="text-xs">I can help you book a viewing. What days work best for you?</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Slack mockup */}
                <div className="bg-white rounded-lg shadow-md p-3">
                  <div className="flex items-center bg-[#4A154B] text-white rounded-t-lg p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Slack</span>
                  </div>
                  <div className="p-2 space-y-2">
                    <div className="bg-gray-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
                      <p className="text-xs">What's the price range for 3BHK in downtown?</p>
                    </div>
                    <div className="bg-aurallon-blue text-white p-2 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                      <p className="text-xs">3BHK units in downtown currently range from $350,000-$475,000 depending on amenities. Would you like to see available listings?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-aurallon-green text-white p-2 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
