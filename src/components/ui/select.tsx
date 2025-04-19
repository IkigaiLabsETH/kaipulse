import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
}

export function Select({ value, onValueChange, options, className }: SelectProps) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={cn(
          'appearance-none bg-[#1A1A1A] text-white border-[3px] border-yellow-500 rounded-xl px-4 py-2 pr-10 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] hover:-translate-y-1 transition-all duration-200 cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] focus:outline-none focus:border-yellow-400',
          className
        )}
      >
        <SelectPrimitive.Value>
          {options.find(option => option.value === value)?.label}
        </SelectPrimitive.Value>
        <SelectPrimitive.Icon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500">
          <ChevronDown size={16} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="overflow-hidden bg-[#1A1A1A] border-2 border-yellow-500 rounded-xl shadow-lg animate-in fade-in-80"
          position="popper"
          sideOffset={5}
        >
          <SelectPrimitive.Viewport className="p-2">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className="relative flex items-center px-8 py-2 text-sm text-white rounded-lg cursor-pointer hover:bg-yellow-500/10 focus:bg-yellow-500/10 focus:outline-none"
              >
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
} 