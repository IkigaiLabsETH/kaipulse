"use client";

interface WineSectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function WineSectionHeader({ 
  title, 
  subtitle, 
  centered = true, 
  className = ""
}: WineSectionHeaderProps) {
  const textAlignment = centered ? "text-center" : "text-left";
  const containerClass = centered ? "mx-auto max-w-4xl" : "";

  return (
    <div className={`${containerClass} ${className}`}>
      <h2 className={`heading-lg text-yellow-400 font-boska mb-10 ${textAlignment} font-bold tracking-tight uppercase`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl text-white/90 font-satoshi mb-8 ${textAlignment} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
} 