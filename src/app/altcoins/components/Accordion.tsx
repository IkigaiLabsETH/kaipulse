'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  q: string;
  a: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left p-6"
          >
            <h4 className="text-xl md:text-2xl font-bold text-yellow-500">{item.q}</h4>
            <ChevronDown
              className={cn('transform transition-transform duration-300', {
                'rotate-180': open === index,
              })}
            />
          </button>
          <div
            className={cn('overflow-hidden transition-all duration-500 ease-in-out', {
              'max-h-0': open !== index,
              'max-h-[5000px]': open === index, // A large enough value to not clip content
            })}
          >
            <div className="p-6 pt-0 text-gray-300">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 