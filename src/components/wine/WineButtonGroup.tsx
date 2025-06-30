"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface WineButton {
  label: string;
  href: string;
}

interface WineButtonGroupProps {
  title?: string;
  buttons: WineButton[];
  className?: string;
}

export default function WineButtonGroup({ 
  title, 
  buttons, 
  className = ""
}: WineButtonGroupProps) {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-yellow-400 font-epilogue text-xl mb-4">
          {title}
        </h3>
      )}
      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map((button, index) => (
          <Link key={index} href={button.href} target="_blank">
            <Button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300">
              {button.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
} 