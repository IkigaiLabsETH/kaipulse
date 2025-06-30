"use client";

import { Grid } from '@/components/ui/grid';
import { ReactNode } from 'react';

interface WineGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function WineGrid({ 
  children, 
  columns = 3, 
  className = ""
}: WineGridProps) {
  return (
    <Grid columns={columns} className={`justify-center ${className}`}>
      {children}
    </Grid>
  );
} 