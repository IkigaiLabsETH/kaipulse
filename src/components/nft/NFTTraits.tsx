'use client';

import { Sparkles, Crown, Star, CircleDot, Circle } from 'lucide-react';

interface NFTTrait {
  trait_type: string;
  value: string;
  rarity: number;
}

interface NFTTraitsProps {
  traits: NFTTrait[];
}

export function NFTTraits({ traits }: NFTTraitsProps) {
  const getRarityConfig = (rarity: number) => {
    if (rarity <= 5) return {
      color: 'text-purple-500',
      bgColor: 'bg-purple-500',
      borderColor: 'border-purple-500',
      icon: Crown,
      label: 'Legendary',
      gradient: 'from-purple-500/20'
    };
    if (rarity <= 15) return {
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
      borderColor: 'border-blue-500',
      icon: Star,
      label: 'Rare',
      gradient: 'from-blue-500/20'
    };
    if (rarity <= 30) return {
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      borderColor: 'border-green-500',
      icon: CircleDot,
      label: 'Uncommon',
      gradient: 'from-green-500/20'
    };
    return {
      color: 'text-gray-500',
      bgColor: 'bg-gray-500',
      borderColor: 'border-gray-500',
      icon: Circle,
      label: 'Common',
      gradient: 'from-gray-500/20'
    };
  };

  return (
    <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] transition-all duration-300">
      <div className="px-6 py-4 border-b border-yellow-500/20">
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-yellow-400" />
          <h2 className="text-xl font-bold font-epilogue tracking-tight text-yellow-400">Properties</h2>
          <span className="ml-auto text-sm text-white/60">{traits.length} traits</span>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {traits.map((trait, index) => {
            const config = getRarityConfig(trait.rarity);
            const Icon = config.icon;
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-yellow-500/20 bg-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative p-4">
                  <div className="flex items-center justify-between mb-2">
                    <dt className="text-sm text-white/60 font-medium">{trait.trait_type}</dt>
                    <Icon size={14} className={`${config.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  
                  <dd className="text-white font-medium mb-3 truncate" title={trait.value}>
                    {trait.value}
                  </dd>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium ${config.color}`}>
                        {config.label}
                      </span>
                      <span className="text-xs text-white/60">
                        {trait.rarity}%
                      </span>
                    </div>
                    
                    <div className="h-1.5 w-full bg-[#252932] rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${config.bgColor} opacity-50 group-hover:opacity-75 transition-opacity`}
                        style={{ 
                          width: `${trait.rarity}%`,
                          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 