'use client';
import { useState, useEffect, useRef } from 'react';

// --- THIS IS OUR LOCAL "BRAIN" ---
// "Training" means adding more 'if' statements to this function.
const getLocalBotResponse = (message) => {
  const lowerCaseMessage = message.toLowerCase();

  // --- Our "Training" is now a series of keyword checks ---

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
  
  // --- NEW TRAINING RULE ADDED HERE ---
  if (lowerCaseMessage.includes('origin') || lowerCaseMessage.includes('come from')) {
    return "Our coffees are sourced from some of the best growing regions in the world! Our Morning Rise is from Ethiopia, the Midnight Espresso is from Brazil, and our Sunset Decaf comes from Colombia. 🌎";
  }
  // --- YOU CAN ADD MORE 'if' STATEMENTS LIKE THE ONE ABOVE TO TRAIN THE BOT FURTHER ---

  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('help')) {
    return "Hello! I'm BrewBot, the Coffee Co. assistant. You can ask me about our products, shipping, or sourcing. How can I help? ☕";
  }

  // A generic fallback response if no keywords are matched
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
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 bg-amber-900 text-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center z-50 transition-transform hover:scale-110" aria-label="Open chat">
         <div className="w-12 h-12 relative">{isOpen ? (<svg viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="25" height="20" rx="5" ry="5" stroke="white" strokeWidth="4" fill="none"/><rect x="55" y="35" width="25" height="20" rx="5" ry="5" stroke="white" strokeWidth="4" fill="none"/><line x1="45" y1="45" x2="55" y2="45" stroke="white" strokeWidth="4"/><line x1="25" y1="45" x2="40" y2="45" stroke="white" strokeWidth="4" /><line x1="60" y1="45" x2="75" y2="45" stroke="white" strokeWidth="4" /><line x1="40" y1="70" x2="60" y2="70" stroke="white" strokeWidth="4" /></svg>) : (<svg viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="35" width="25" height="20" rx="5" ry="5" stroke="white" strokeWidth="4" fill="none"/><rect x="55" y="35" width="25" height="20" rx="5" ry="5" stroke="white" strokeWidth="4" fill="none"/><line x1="45" y1="45" x2="55" y2="45" stroke="white" strokeWidth="4"/><circle cx="32.5" cy="45" r="5" /><circle cx="67.5" cy="45" r="5" /><path d="M 40 70 Q 50 80 60 70" stroke="white" strokeWidth="4" fill="none" /></svg>)}</div>
      </button>

      <div className={`fixed bottom-28 right-6 w-96 bg-white rounded-lg shadow-2xl z-50 transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="p-4 bg-amber-950 text-white rounded-t-lg flex justify-between items-center">
          <h3 className="font-bold text-lg">Coffee Co. Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="text-amber-200 hover:text-white text-2xl leading-none">&times;</button>
        </div>
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (<div key={index} className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}><p className={`p-3 rounded-lg max-w-xs ${msg.from === 'bot' ? 'bg-gray-200 text-gray-800' : 'bg-amber-800 text-white'}`}>{msg.text}</p></div>))}
          {isLoading && (<div className="flex justify-start"><p className="p-3 rounded-lg bg-gray-200 text-gray-500"><span className="animate-pulse">...</span></p></div>)}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t">
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

