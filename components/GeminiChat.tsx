import React, { useState, useRef, useEffect } from "react";
import { getGeminiResponse } from "../services/geminiService";

export const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const examplePrompts = [
    "What's Snehal's approach to Micro-frontends?",
    "Tell me about her Java backend expertise.",
    "Explain her experience with Frappe ERP.",
    "Has she built FinTech applications before?",
    "What leadership roles has she held?",
    "Tell me about a high-performance system she built.",
    "How does she bridge Frontend and Java Backends?",
    "What is her experience with React Native?",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: textToSend }]);
    setIsTyping(true);

    const aiResponse = await getGeminiResponse(textToSend);

    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[380px] h-[600px] max-h-[80vh] bg-black/90 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-4 pt-5 border-b border-white/10 bg-white/5 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-lg border border-white/10">
                <img
                  src="/images/Gemini_AI.jpeg"
                  alt="Gemini AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">
                  Gemini Assistant
                </h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] text-blue-200 uppercase tracking-wider font-medium">
                    Online
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/80 text-white flex items-center justify-center transition-all duration-300 group shadow-md border border-white/10"
              aria-label="Close Chat"
            >
              <i className="fa-solid fa-times text-lg group-hover:scale-110 transition-transform"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="py-4">
                <p className="text-gray-400 text-xs mb-6 text-center italic">
                  Ask about my 2+yr journey...
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {examplePrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt)}
                      className="text-[11px] text-left bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all text-gray-300 hover:text-white flex justify-between items-center group"
                    >
                      {prompt}
                      <i className="fa-solid fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-blue-600 text-white rounded-tr-none shadow-lg" : "bg-white/10 text-gray-200 rounded-tl-none border border-white/5"}`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-black/40 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about my 2+yr journey..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-500"
            />
            <button
              onClick={() => handleSend()}
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors shrink-0 shadow-lg shadow-blue-600/20"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden border-2 border-blue-500 bg-black"
        >
          <img
            src="/images/Gemini_AI.jpeg"
            alt="Gemini AI"
            className="w-full h-full object-cover"
          />
          {/* Pulse indicator */}
          <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 -z-10"></span>
        </button>
      )}
    </div>
  );
};
