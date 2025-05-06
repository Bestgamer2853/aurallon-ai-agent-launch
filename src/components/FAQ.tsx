
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to set up Aurallon?",
      answer: "Go live in under 30 minutes. Our team handles the technical integration with your channels (Telegram, WhatsApp, Slack) and CRM. We'll schedule a quick onboarding call to personalize your AI responses and workflow."
    },
    {
      question: "How does Aurallon handle data privacy?",
      answer: "We take data security seriously. All conversations are encrypted, and we comply with global privacy standards. Your data belongs to you, and we never share it with third parties or use it for training our models without explicit permission."
    },
    {
      question: "What pricing tiers do you offer?",
      answer: "We offer flexible plans starting at $149/month for individual agents, $299/month for small teams (up to 5 agents), and custom enterprise pricing for brokerages. Each plan includes unlimited leads, all communication channels, and CRM integration. Most clients see ROI within the first month through increased lead capture and conversion."
    },
    {
      question: "Do I need a website to use Aurallon?",
      answer: "No, that's the beauty of our system! Aurallon works directly with messaging channels your clients already use: WhatsApp, Telegram, and Slack. No website required, though we can integrate with your existing site if you have one."
    },
    {
      question: "Can I customize the AI responses?",
      answer: "Absolutely! You can personalize the conversation flow, responses, and qualification criteria. The AI will adapt to your specific market, property types, and business style to ensure authentic engagement with your leads."
    },
    {
      question: "What makes Aurallon different from other chatbots?",
      answer: "Unlike generic chatbots, Aurallon is specifically built for real estate workflows and integrates directly with messaging apps your clients already use. Our multi-channel approach, timezone-aware scheduling, and deep CRM integration provide a seamless experience tailored to real estate professionals."
    }
  ];
  
  return (
    <section className="py-16 bg-white px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-aurallon-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Aurallon
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-gray-800 font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
