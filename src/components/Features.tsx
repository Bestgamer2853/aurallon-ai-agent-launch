
import { 
  MessageSquare, 
  Database, 
  Calendar, 
  Settings, 
  FileText,
  Cloud 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-aurallon-blue" />,
      title: "Lead Capture & Automated Follow-Up",
      description: "24/7 intake on Telegram, WhatsApp & Slack with intelligent responses to engage leads."
    },
    {
      icon: <FileText className="h-8 w-8 text-aurallon-blue" />,
      title: "Data Enrichment",
      description: "Auto-append address and firmographics via Google Sheets for complete lead profiles."
    },
    {
      icon: <Calendar className="h-8 w-8 text-aurallon-blue" />,
      title: "Appointment Scheduling",
      description: "One-click call booking that automatically converts timezones to IST for your convenience."
    },
    {
      icon: <Cloud className="h-8 w-8 text-aurallon-blue" />,
      title: "Cloud Deployment",
      description: "Fully managed cloud infrastructure—no local setup, maintenance, or technical expertise required."
    },
    {
      icon: <Database className="h-8 w-8 text-aurallon-blue" />,
      title: "CRM Integration",
      description: "Real-time logging to Google Sheets—maintain an up-to-date pipeline without manual work."
    },
    {
      icon: <Settings className="h-8 w-8 text-aurallon-blue" />,
      title: "Custom Workflows",
      description: "Drag-and-drop sequence builder in n8n to create customized lead journeys."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aurallon-blue mb-4">
            Core n8n Agent Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI-powered chatbot system leverages n8n workflows to automate your entire lead process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
              Multi-Channel Workflow Automation
            </h3>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-gray-200"></div>
              <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
                <div className="bg-white p-4 rounded-full border-2 border-aurallon-blue mb-6 md:mb-0">
                  <div className="bg-aurallon-blue text-white p-3 rounded-full">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <p className="text-center mt-2 font-medium text-sm">Lead Capture</p>
                </div>
                
                <div className="bg-white p-4 rounded-full border-2 border-aurallon-blue mb-6 md:mb-0">
                  <div className="bg-aurallon-blue text-white p-3 rounded-full">
                    <FileText className="h-6 w-6" />
                  </div>
                  <p className="text-center mt-2 font-medium text-sm">Qualification</p>
                </div>
                
                <div className="bg-white p-4 rounded-full border-2 border-aurallon-blue mb-6 md:mb-0">
                  <div className="bg-aurallon-blue text-white p-3 rounded-full">
                    <Database className="h-6 w-6" />
                  </div>
                  <p className="text-center mt-2 font-medium text-sm">Data Enrichment</p>
                </div>
                
                <div className="bg-white p-4 rounded-full border-2 border-aurallon-blue mb-6 md:mb-0">
                  <div className="bg-aurallon-blue text-white p-3 rounded-full">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <p className="text-center mt-2 font-medium text-sm">Booking</p>
                </div>
                
                <div className="bg-white p-4 rounded-full border-2 border-aurallon-green">
                  <div className="bg-aurallon-green text-white p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-center mt-2 font-medium text-sm">Conversion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
