import { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const hideOnPages = ["/services", "/blog", "/careers"];
  const hideButtons = hideOnPages.some((path) =>
    location.pathname.startsWith(path)
  );

  const quickResponses = [
    "What services do you offer?",
    "What are your pricing plans?",
    "How can you help my startup?",
    "Schedule a consultation",
  ];

  const whatsappNumber = "94766584872";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Ref for auto-scroll
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Clear chat handler
  const handleClearChat = () => {
    setMessages([
      {
        type: "bot",
        message:
          "Hi! I'm here to help you learn more about AdTech's digital marketing services. What would you like to know?",
      },
    ]);
  };

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
        "We have three main packages: Starter , Growth , and Scale . Each package is designed for different stages of your startup's growth. Would you like to schedule a consultation to discuss which package is right for you?";
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
        "I'd be happy to help you schedule a consultation! Please scroll down to our contact form or call us at +94 766584872. Our team offers free initial consultations to discuss your marketing needs.";
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
      {!hideButtons && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-3 items-end">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 md:w-14 md:h-14 rounded-full bg-navy-600 hover:bg-navy-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-2xl md:text-3xl"
            style={{ width: 56, height: 56 }}
          >
            {isOpen ? "×" : "💬"}
          </Button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
              background: "#25D366",
              borderRadius: "50%",
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              transition: "box-shadow 0.2s",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="white"
            >
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.647.86 5.1 2.33 7.09L4 29l7.18-2.29A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.84-.58-5.4-1.58l-.38-.24-4.28 1.37 1.4-4.16-.25-.39A9.97 9.97 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
            </svg>
          </a>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-full max-w-[95vw] md:w-[360px] md:h-[420px] rounded-xl flex flex-col">
          <Card
            className={`shadow-2xl border-0 ${cardBg} rounded-xl flex flex-col h-full overflow-hidden`}
          >
            <CardHeader
              className={`${headerBg} rounded-t-xl p-3 flex flex-row items-center justify-between`}
            >
              <CardTitle className="text-base">
                AdTech Support
                <span className="block text-xs font-normal text-blue-100">
                  Usually replies instantly
                </span>
              </CardTitle>
              <button
                onClick={handleClearChat}
                className="ml-2 px-2 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold shadow transition"
                title="Clear chat"
              >
                Clear
              </button>
            </CardHeader>

            <CardContent className="p-0 flex flex-col flex-1 h-full">
              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-2 space-y-2 text-xs"
                style={{ maxHeight: 280 }}
              >
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
                <div ref={messagesEndRef} />
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
