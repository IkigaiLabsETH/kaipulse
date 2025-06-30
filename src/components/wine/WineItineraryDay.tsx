"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface WineItineraryButton {
  label: string;
  href: string;
}

interface WineItineraryDayProps {
  title: string;
  stayInfo?: string;
  diningInfo?: string;
  description: string[];
  buttons?: WineItineraryButton[];
  className?: string;
}

export default function WineItineraryDay({ 
  title, 
  stayInfo, 
  diningInfo, 
  description, 
  buttons = [],
  className = ""
}: WineItineraryDayProps) {
  return (
    <Card className={`bg-black border-yellow-500 ${className}`}>
      <CardHeader>
        <CardTitle className="font-epilogue text-2xl text-yellow-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {(stayInfo || diningInfo) && (
          <div className="text-white/90 font-satoshi mb-2">
            {stayInfo && (
              <>
                <span className="font-bold text-yellow-400">Stay:</span> {stayInfo}<br/>
              </>
            )}
            {diningInfo && (
              <>
                <span className="font-bold text-yellow-400">Dining:</span> {diningInfo}
              </>
            )}
          </div>
        )}
        
        {buttons.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {buttons.map((button, index) => (
              <Link key={index} href={button.href} target="_blank">
                <Button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all duration-300 mt-2 mb-2">
                  {button.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
        
        <div className="space-y-2">
          {description.map((paragraph, index) => (
            <p key={index} className="text-white/80 font-satoshi">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 