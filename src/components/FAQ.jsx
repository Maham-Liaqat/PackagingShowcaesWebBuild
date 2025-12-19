import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is the minimum order quantity for custom printed packaging?',
    answer:
      'Thanks to our digital printing technology, we can produce short runs with very low minimums. Tell us your requirements and we will recommend the most cost‑effective quantity.',
  },
  {
    question: 'How long does production take from order to delivery?',
    answer:
      'Standard production lead time is around 5 working days after artwork approval, plus transit time. Rush options may be available depending on your project.',
  },
  {
    question: 'Are there any setup or cliché/cylinder costs?',
    answer:
      'No. Digital printing eliminates traditional plate, cliché, and cylinder charges, so you can update designs as often as you like without extra setup fees.',
  },
  {
    question: 'What types of products can be packaged in your pouches?',
    answer:
      'Our pouches are suitable for snacks, coffee, confectionery, supplements, pet food, and many other dry or semi‑dry products. We can advise on the best structure for your application.',
  },
  {
    question: 'Can I have different designs for each pouch in my order?',
    answer:
      'Yes. You can print multiple SKUs or designs within the same run with no additional print charges, making it ideal for seasonal or limited‑edition artwork.',
  },
  {
    question: "Do you offer design services if I don't have my own artwork?",
    answer:
      'Yes. Our in‑house design support can help you refine existing artwork or create new packaging designs that are print‑ready and optimized for our pouches.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Answers to your most common packaging questions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`border-b border-gray-100 last:border-b-0 ${
                  isOpen ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900 pr-6">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 text-blue-900">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

