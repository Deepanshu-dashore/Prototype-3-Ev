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
    <section className="py-4 sm:py-6 w-full px-4 lg:px-6 bg-[#070707] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto bg-slate-950 text-white rounded-[24px] border border-slate-900 p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Callout */}
          <div className="lg:col-span-4 text-left">
            <span className="font-sans text-[10px] font-bold text-[#BFFF07] tracking-widest uppercase block mb-3">
              FAQ
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-6">
              Frequently <br />
              <span className="text-[#BFFF07]">Asked Questions</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed mb-8 font-medium">
              Can't find the answer you're looking for? Reach out to our customer support team for immediate assistance.
            </p>
            
            <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-[20px] text-left">
              <h4 className="font-sans text-xs font-black uppercase text-white tracking-wider mb-2">
                Still have questions?
              </h4>
              <p className="font-sans text-[11px] text-slate-400 mb-5 leading-relaxed font-medium">
                Our support team is available 24/7 to resolve all your electric mobility queries.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#BFFF07] hover:bg-[#a6df05] text-black px-5 py-2.5 rounded-[8px] font-sans text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(191,255,7,0.3)]"
              >
                Contact Support ➔
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 space-y-2.5 w-full text-left">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-slate-900/30 border border-slate-900/80 hover:border-slate-800 rounded-[12px] overflow-hidden transition-all duration-300 group"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-3.5 px-5 flex items-center justify-between gap-4 text-left hover:bg-slate-900/20 transition-colors"
                  >
                    <span className="font-sans text-sm sm:text-[15px] font-bold text-slate-100 group-hover:text-[#BFFF07] transition-colors duration-300 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 transition-all duration-300 group-hover:border-slate-700 ${isOpen ? 'bg-[#BFFF07]/10 border-[#BFFF07]/20 text-[#BFFF07]' : ''}`}>
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  
                  {/* Expandable Panel */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] border-t border-slate-900/50 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                  >
                    <div className="px-5 pb-4 pt-1 text-[13px] sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
