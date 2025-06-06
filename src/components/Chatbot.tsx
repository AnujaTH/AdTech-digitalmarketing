
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: "Hi! I'm here to help you learn more about AdTech's digital marketing services. What would you like to know?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickResponses = [
    "What services do you offer?",
    "What are your pricing plans?",
    "How can you help my startup?",
    "Schedule a consultation"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessages = [
      ...messages,
      { type: 'user', message: inputMessage }
    ];

    // Simple bot responses based on keywords
    let botResponse = "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or contact us directly.";

    if (inputMessage.toLowerCase().includes('service') || inputMessage.toLowerCase().includes('what do you do')) {
      botResponse = "We offer comprehensive digital marketing services for tech startups including SEO, content marketing, social media management, paid advertising, lead generation, and strategy consulting. Would you like to know more about any specific service?";
    } else if (inputMessage.toLowerCase().includes('pricing') || inputMessage.toLowerCase().includes('cost')) {
      botResponse = "We have three main packages: Starter ($999/month), Growth ($2,499/month), and Scale ($4,999/month). Each package is designed for different stages of your startup's growth. Would you like to schedule a consultation to discuss which package is right for you?";
    } else if (inputMessage.toLowerCase().includes('help') || inputMessage.toLowerCase().includes('startup')) {
      botResponse = "We specialize in helping tech startups, freelance developers, and software companies grow through strategic digital marketing. Our team understands the tech industry and can help you reach your target audience effectively. What specific challenges are you facing?";
    } else if (inputMessage.toLowerCase().includes('consultation') || inputMessage.toLowerCase().includes('schedule')) {
      botResponse = "I'd be happy to help you schedule a consultation! Please scroll down to our contact form or call us at +94 77 123 4567. Our team offers free initial consultations to discuss your marketing needs.";
    }

    setTimeout(() => {
      setMessages([...newMessages, { type: 'bot', message: botResponse }]);
    }, 1000);

    setMessages(newMessages);
    setInputMessage('');
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-navy-600 hover:bg-navy-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          {isOpen ? '×' : '💬'}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="bg-navy-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">
                AdTech Support
                <span className="block text-sm font-normal text-blue-100">
                  Usually replies instantly
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-navy-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Responses */}
              <div className="p-4 border-t bg-gray-50">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className="text-left text-xs p-2 bg-white border rounded hover:bg-navy-50 hover:border-navy-200 transition-colors"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-navy-600 hover:bg-navy-700 text-white px-4"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
