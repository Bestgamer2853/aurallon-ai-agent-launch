
import { 
  MessageCircle,
  FileSearch,
  LayoutDashboard,
  CalendarClock,
  Bell,
  Users
} from "lucide-react";

const USP = () => {
  const benefits = [
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "24/7 Human-Like Qualification",
      description: "Never lose off-hour leads—even on WhatsApp & Slack. Our AI responds naturally and keeps prospects engaged.",
      bgColor: "bg-aurallon-blue"
    },
    {
      icon: <FileSearch className="h-8 w-8 text-white" />,
      title: "Context-Aware Answers (RAG)",
      description: "Combines live web data with your sheet history to provide expert, accurate responses to prospect questions.",
      bgColor: "bg-aurallon-blue"
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-white" />,
      title: "Instant CRM Dashboard",
      description: "Get a live snapshot of your pipeline with no manual entry required. Always know where your leads stand.",
      bgColor: "bg-aurallon-blue"
    },
    {
      icon: <CalendarClock className="h-8 w-8 text-white" />,
      title: "Automated Timezone-Safe Booking",
      description: "Normalize any timezone to IST and eliminate the back-and-forth of scheduling. Clients book when it works for them.",
      bgColor: "bg-aurallon-blue"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Hyper-Personalized Outreach",
      description: "Merge lead data into every message for 2–3× higher reply rates. Every interaction feels custom-tailored.",
      bgColor: "bg-aurallon-blue" 
    },
    {
      icon: <Bell className="h-8 w-8 text-white" />,
      title: "Instant Alerts",
      description: "Get Slack or Telegram pings for new leads and bookings so you never miss an important update.",
      bgColor: "bg-aurallon-blue"
    }
  ];
  
  return (
    <section className="py-16 bg-white px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aurallon-blue mb-4">
            Real Estate Agent Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exclusive advantages designed specifically for real estate professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className={`${benefit.bgColor} p-5 flex justify-center`}>
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
