// src/components/FAQ.js

// Add 'use client' because this component uses state for interactivity.
'use client';

import { useState } from 'react';

// Define our FAQ data in an array.
const faqData = [
  {
    id: 1,
    question: "What are your shipping times?",
    answer: "We roast to order. Expect your coffee to be shipped within 48 hours of your order. Delivery within Nigeria typically takes 2-4 business days."
  },
  {
    id: 2,
    question: "Is your coffee ethically sourced?",
    answer: "Absolutely. We are committed to ethical sourcing and partner directly with farmers and co-ops to ensure fair wages and sustainable farming practices."
  },
  {
    id: 3,
    question: "What is the best way to store my coffee beans?",
    answer: "For maximum freshness, store your beans in a cool, dark place in an airtight container. Avoid the refrigerator or freezer."
  },
  {
    id: 4,
    question: "Do you offer subscriptions?",
    answer: "Yes! We offer flexible subscription plans so you never have to run out of your favorite coffee. You can customize the frequency and coffee type in your account."
  }
];

function FAQ() {
  // 'useState' to keep track of which FAQ item is currently open.
  // We'll store the 'id' of the open item. 'null' means none are open.
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    // If the clicked question is already open, close it. Otherwise, open it.
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-amber-50 py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-950 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-amber-200 pb-4">
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-amber-950 hover:text-amber-700"
              >
                <span>{item.question}</span>
                {/* This is a simple plus/minus icon that rotates based on state */}
                <span className={`transform transition-transform duration-300 ${openQuestionId === item.id ? 'rotate-45' : 'rotate-0'}`}>+</span>
              </button>
              {/* The answer is only shown if its id matches the openQuestionId */}
              {openQuestionId === item.id && (
                <div className="mt-4 text-amber-800">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;