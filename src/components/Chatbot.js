'use client';
import { useState, useEffect, useRef } from 'react';

// --- THIS IS OUR LOCAL "BRAIN" ---
const getLocalBotResponse = (message) => {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes('shipping')) {
    return "We ship all orders within 48 hours. Delivery within Nigeria typically takes 2-4 business days.";
  }
  if (lowerCaseMessage.includes('decaf')) {
    return "Our Sunset Decaf is a fantastic choice! It's a medium roast from Tolima, Colombia, with notes of walnut, brown sugar, and cinnamon. The price is $17.00.";
  }
  if (lowerCaseMessage.includes('morning rise')) {
    return "Ah, the Morning Rise Blend! It's a bright, balanced medium roast from Sidamo, Ethiopia, with notes of Milk Chocolate, Citrus, and Caramel. It costs $16.00.";
  }
  if (lowerCaseMessage.includes('espresso')) {
    return "For a great espresso, I recommend the Midnight Espresso. It's a dark, rich roast from Brazil with notes of Dark Cocoa and Toasted Almond. The price is $18.00.";
  }
  if (lowerCaseMessage.includes('sourcing') || lowerCaseMessage.includes('ethically')) {
    return "We're proud to say all our coffee is ethically and sustainably sourced directly from farmers, ensuring they receive fair wages.";
  }
  if (lowerCaseMessage.includes('origin') || lowerCaseMessage.includes('come from')) {
    return "Our coffees are sourced from some of the best growing regions in the world! Our Morning Rise is from Ethiopia, the Midnight Espresso is from Brazil, and our Sunset Decaf comes from Colombia. 🌎";
  }
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('help')) {
    return "Hello! I'm BrewBot, the Coffee Co. assistant. You can ask me about our products, shipping, or sourcing. How can I help? ☕";
  }
  return "That's a great question! I'm a simple bot and might not have the answer. For more complex inquiries, please reach out to our team at support@coffeeco.com.";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! I'm BrewBot. How can I help you with your coffee questions today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if(isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage = { from: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setTimeout(() => {
      const botResponse = getLocalBotResponse(inputValue);
      setIsLoading(false);
      setMessages(prev => [...prev, { from: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-amber-900 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 ease-in-out hover:scale-110"
        aria-label="Toggle chat"
      >
         {/* THE CHANGE: Reverted to the classic message icon */}
         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
         </svg>
      </button>

      <div className={`fixed bottom-24 right-4 left-4 sm:left-auto sm:w-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col max-h-[calc(100vh-8rem)] transition-all duration-300 ease-in-out origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}>
        {/* Header */}
        <div className="p-4 bg-amber-950 text-white rounded-t-lg flex justify-between items-center flex-shrink-0">
          <h3 className="font-bold text-lg">Coffee Co. Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="text-amber-200 hover:text-white text-2xl leading-none">&times;</button>
        </div>
        
        {/* Message List (This part now scrolls correctly) */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (<div key={index} className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}><p className={`p-3 rounded-lg max-w-xs ${msg.from === 'bot' ? 'bg-gray-200 text-gray-800' : 'bg-amber-800 text-white'}`}>{msg.text}</p></div>))}
          {isLoading && (<div className="flex justify-start"><p className="p-3 rounded-lg bg-gray-200 text-gray-500"><span className="animate-pulse">...</span></p></div>)}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t flex-shrink-0">
          <div className="flex gap-2">
            <input 
              type="text" 
              name="message"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about coffee..."
              className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none" 
            />
            <button type="submit" className="bg-amber-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-amber-800 disabled:bg-amber-900/50" disabled={isLoading}>Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

