import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message:
        "Hi! I'm here to help you learn more about AdTech's digital marketing services. What would you like to know?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const { resolvedTheme } = useTheme();

  const quickResponses = [
    "What services do you offer?",
    "What are your pricing plans?",
    "How can you help my startup?",
    "Schedule a consultation",
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessages = [...messages, { type: "user", message: inputMessage }];

    // Simple bot responses based on keywords
    let botResponse =
      "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or contact us directly.";

    if (
      inputMessage.toLowerCase().includes("service") ||
      inputMessage.toLowerCase().includes("what do you do")
    ) {
      botResponse =
        "We offer comprehensive digital marketing services for tech startups including SEO, content marketing, social media management, paid advertising, lead generation, and strategy consulting. Would you like to know more about any specific service?";
    } else if (
      inputMessage.toLowerCase().includes("pricing") ||
      inputMessage.toLowerCase().includes("cost")
    ) {
      botResponse =
        "We have three main packages: Starter ($999/month), Growth ($2,499/month), and Scale ($4,999/month). Each package is designed for different stages of your startup's growth. Would you like to schedule a consultation to discuss which package is right for you?";
    } else if (
      inputMessage.toLowerCase().includes("help") ||
      inputMessage.toLowerCase().includes("startup")
    ) {
      botResponse =
        "We specialize in helping tech startups, freelance developers, and software companies grow through strategic digital marketing. Our team understands the tech industry and can help you reach your target audience effectively. What specific challenges are you facing?";
    } else if (
      inputMessage.toLowerCase().includes("consultation") ||
      inputMessage.toLowerCase().includes("schedule")
    ) {
      botResponse =
        "I'd be happy to help you schedule a consultation! Please scroll down to our contact form or call us at +94 77 123 4567. Our team offers free initial consultations to discuss your marketing needs.";
    }

    setTimeout(() => {
      setMessages([...newMessages, { type: "bot", message: botResponse }]);
    }, 1000);

    setMessages(newMessages);
    setInputMessage("");
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
    handleSendMessage();
  };

  // Theme-based classes
  const cardBg = resolvedTheme === "dark" ? "bg-gray-900" : "bg-white";
  const headerBg =
    resolvedTheme === "dark"
      ? "bg-navy-800 text-white"
      : "bg-navy-600 text-white";
  const userMsgBg = "bg-navy-600 text-white";
  const botMsgBg =
    resolvedTheme === "dark"
      ? "bg-gray-800 text-gray-100"
      : "bg-gray-100 text-gray-800";
  const quickBg =
    resolvedTheme === "dark"
      ? "bg-gray-900 border-gray-800"
      : "bg-gray-50 border-gray-200";
  const quickBtnBg =
    resolvedTheme === "dark"
      ? "bg-gray-800 border-gray-700 hover:bg-navy-900"
      : "bg-white border hover:bg-navy-50 hover:border-navy-200";
  const inputBg = resolvedTheme === "dark" ? "bg-gray-800 text-white" : "";

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-navy-600 hover:bg-navy-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-2xl md:text-3xl"
        >
          {isOpen ? "×" : "💬"}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 z-50 w-full max-w-[95vw] md:max-w-xs min-h-[300px] flex flex-col"
          style={{ maxWidth: 350 }}
        >
          <Card
            className={`shadow-2xl border-0 ${cardBg} rounded-b-lg flex flex-col h-full overflow-hidden`}
          >
            <CardHeader className={`${headerBg} rounded-t-lg p-3`}>
              <CardTitle className="text-base">
                AdTech Support
                <span className="block text-xs font-normal text-blue-100">
                  Usually replies instantly
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 flex flex-col flex-1 h-full">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-2 space-y-2 text-xs">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-2 rounded-lg break-words ${
                        msg.type === "user" ? userMsgBg : botMsgBg
                      }`}
                    >
                      <p>{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Responses */}
              <div className={`p-2 border-t ${quickBg}`}>
                <p className="text-[10px] text-gray-600 dark:text-gray-300 mb-1">
                  Quick questions:
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className={`text-left text-[11px] p-1 rounded transition-colors ${quickBtnBg}`}
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div
                className={`p-2 border-t ${
                  resolvedTheme === "dark" ? "border-gray-800" : ""
                }`}
              >
                <div className="flex space-x-1">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className={`flex-1 text-xs ${inputBg}`}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-navy-600 hover:bg-navy-700 text-white px-2 py-1 text-xs"
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
