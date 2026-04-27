"use client";
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-color transition-colors group-hover:text-gray-500 leading-tight pr-4">
          {question}
        </span>
        
        <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
          <div className="absolute h-0.5 w-4 bg-gray-400 transition-transform duration-300" />
          <div className={`absolute h-4 w-0.5 bg-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`} />
          {isOpen && <div className="absolute h-0.5 w-4 bg-gray-400 rotate-0 transition-transform duration-300" />}
        </div>
      </button>
      
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-lg leading-7 text-color font-light">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};