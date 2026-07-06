"use client";

import { useState } from "react";
import Link from "next/link";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the certified riding range of Ziko EV scooters?",
      answer: "The Ziko EV lineup offers a certified range of up to 150 km on a single charge under standard riding conditions, powered by our high-density lithium-ion smart battery packs."
    },
    {
      question: "How long does it take to charge a Ziko EV scooter?",
      answer: "Using our standard home charger, it takes approximately 4.5 hours for a full charge. With a Ziko Fast Charger, you can charge from 0% to 80% in just 45 minutes."
    },
    {
      question: "What warranty is provided with the battery and motor?",
      answer: "We provide an industry-leading 3-year or 30,000 km warranty (whichever comes first) covering both the battery pack and the IP67-rated hub motor."
    },
    {
      question: "How can I schedule a test ride?",
      answer: "You can easily book a slot online! Scroll to our 'Book A Test Ride' section, enter your contact information, select your nearest city, and our team will coordinate the rest."
    },
    {
      question: "Does the scooter support smart connectivity features?",
      answer: "Yes, all Ziko EV models feature real-time GPS tracking, geo-fencing alerts, remote vehicle diagnostics, and OTA software updates through the Ziko Smart App."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 sm:py-8 w-full px-4 lg:px-6 bg-slate-50 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading & Callout */}
        <div className="lg:col-span-4 text-left">
          <span className="font-sans text-[10px] font-bold text-[#95c503] tracking-widest uppercase block mb-3 font-semibold">
            FAQ
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight mb-6">
            Frequently <br /> Asked Questions
          </h2>
          <p className="font-sans text-sm text-slate-500 leading-relaxed mb-8">
            Can't find the answer you're looking for? Reach out to our customer support team for immediate assistance.
          </p>
          
          <div className="p-6 bg-white border border-slate-200 rounded-[20px] shadow-xs text-left">
            <h4 className="font-sans text-xs font-black uppercase text-slate-900 tracking-wider mb-2">
              Still have questions?
            </h4>
            <p className="font-sans text-xs text-slate-400 mb-5 leading-normal">
              Our support team is available 24/7 to resolve all your electric mobility queries.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-slate-950 text-white hover:bg-slate-900 px-5 py-2.5 rounded-[8px] font-sans text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300"
            >
              Contact Support ➔
            </Link>
          </div>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="lg:col-span-8 space-y-4 w-full text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-[16px] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-sans text-sm sm:text-base font-black text-slate-900 uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#BFFF07]/10 border-[#BFFF07]/20 text-[#95c503]' : ''}`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                {/* Expandable Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                >
                  <div className="p-6 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
