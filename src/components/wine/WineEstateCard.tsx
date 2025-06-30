"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface WineEstateCardProps {
  title: string;
  description: string;
  highlights?: string[];
  className?: string;
}

export default function WineEstateCard({ 
  title, 
  description, 
  highlights = [],
  className = ""
}: WineEstateCardProps) {
  return (
    <Card className={`bg-black border-yellow-500 ${className}`}>
      <CardHeader>
        <CardTitle className="font-epilogue text-xl text-yellow-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/80 font-satoshi mb-4">
          {description}
        </p>
        {highlights.length > 0 && (
          <ul className="list-disc list-inside text-white/80 font-satoshi space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
} 