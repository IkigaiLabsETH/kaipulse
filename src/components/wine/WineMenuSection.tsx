"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface WineMenuItem {
  name: string;
  description: string;
}

interface WineMenuSectionProps {
  title: string;
  wines: WineMenuItem[];
  className?: string;
}

export default function WineMenuSection({ 
  title, 
  wines, 
  className = ""
}: WineMenuSectionProps) {
  return (
    <Card className={`bg-black border-yellow-500 ${className}`}>
      <CardHeader>
        <CardTitle className="font-epilogue text-lg text-yellow-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside text-white/80 font-satoshi space-y-2">
          {wines.map((wine, index) => (
            <li key={index}>
              <span className="font-bold text-yellow-400">{wine.name}</span>: {wine.description}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
} 