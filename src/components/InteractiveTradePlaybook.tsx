"use client";

import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import OptionsPlaybook from './OptionsPlaybook';

const PlaybookSection = ({ title, number, children }: { title: string, number: number, children: React.ReactNode }) => (
    <div className="bg-[#1c1f26] p-8 md:p-10 rounded-none border-2 border-yellow-500/80 shadow-[5px_5px_0px_0px_rgba(234,179,8,0.8)] mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue flex items-center">
            <span className="text-4xl mr-4">§{number}</span> {title}
        </h3>
        <div className="space-y-6 text-gray-300 font-satoshi border-t border-yellow-500/20 pt-6 text-base">
            {children}
        </div>
    </div>
);

const InteractiveTradeSetup = ({ onCalculate, earningsDate, setEarningsDate }: { onCalculate: (delta: number) => void, earningsDate: string, setEarningsDate: (date: string) => void }) => {
    const [ivRank, setIvRank] = useState(27);

    const handleCalculate = () => {
        const delta = ivRank >= 20 ? 0.25 : 0.15;
        onCalculate(delta);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="iv-rank" className="text-base">IV-Rank (%)</Label>
                    <Input 
                        id="iv-rank" 
                        type="number" 
                        placeholder="e.g., 27"
                        className="bg-black/30 border-yellow-500/50"
                        value={ivRank}
                        onChange={(e) => setIvRank(parseFloat(e.target.value) || 0)} 
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="earnings-date" className="text-base">Next Earnings Date</Label>
                    <Input 
                        id="earnings-date" 
                        type="date" 
                        className="bg-black/30 border-yellow-500/50"
                        value={earningsDate}
                        onChange={(e) => setEarningsDate(e.target.value)}
                    />
                </div>
                <div className="flex items-end">
                     <Button onClick={handleCalculate} className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold">Calculate Recommended Delta</Button>
                </div>
            </div>
        </div>
    );
};

const LiveTradeTracker = ({ earningsDate } : { earningsDate: string }) => {
    const [trade, setTrade] = useState({ strike: 350, premium: 5.50 });
    const [isLogged, setIsLogged] = useState(false);
    const [management, setManagement] = useState({ takeProfit: false, checkRoll: false });

    const isNearEarnings = () => {
        const today = new Date();
        const expiry = new Date(today);
        expiry.setDate(today.getDate() + 14); // Assuming 14-day expiry
        const earnings = new Date(earningsDate);

        return earnings > today && earnings < expiry;
    }

    const handleCheck = (step: keyof typeof management) => {
        setManagement(prev => ({...prev, [step]: !prev[step]}));
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                 <div className="space-y-2">
                    <Label htmlFor="strike-price" className="text-base">Strike Price</Label>
                    <Input id="strike-price" type="number" placeholder="e.g., 350" className="bg-black/30 border-yellow-500/50" value={trade.strike} onChange={(e) => setTrade({...trade, strike: parseFloat(e.target.value)})} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="premium" className="text-base">Premium Received</Label>
                    <Input id="premium" type="number" placeholder="e.g., 5.50" className="bg-black/30 border-yellow-500/50" value={trade.premium} onChange={(e) => setTrade({...trade, premium: parseFloat(e.target.value)})} />
                </div>
                <Button onClick={() => setIsLogged(true)} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">Log Trade</Button>
            </div>
            
            {isLogged && (
                 <div className="p-6 bg-green-500/10 border-2 border-dashed border-green-500/50 space-y-4">
                    <h4 className="font-epilogue text-lg text-white">Live Trade Management</h4>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="takeProfit" checked={management.takeProfit} onChange={() => handleCheck('takeProfit')} />
                        <Label htmlFor="takeProfit">Close if option value ≤ {(trade.premium * 0.2).toFixed(2)} (Take Profit @ 20%)</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <Checkbox id="checkRoll" checked={management.checkRoll} onChange={() => handleCheck('checkRoll')} />
                        <Label htmlFor="checkRoll">Roll if spot &gt; {trade.strike - 5} and extrinsic is low</Label>
                    </div>

                    {isNearEarnings() && (
                        <div className="p-4 bg-red-900/50 border border-red-500 text-white mt-4">
                            <p className="font-bold">Warning: Expiration is near the earnings date ({earningsDate}). Volatility could be high.</p>
                        </div>
                    )}
                 </div>
            )}
        </div>
    )
}


export default function InteractiveTradePlaybook() {
    const [recommendedDelta, setRecommendedDelta] = useState<number | null>(null);
    const [earningsDate, setEarningsDate] = useState("2025-07-23");
    const [showNotes, setShowNotes] = useState(false);
    
    const handleCalculation = (delta: number) => {
        setRecommendedDelta(delta);
    }

    return (
        <div>
             <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 tracking-tight text-center mb-2 font-epilogue">
                🦉 Interactive Playbook
            </h2>
            <p className="text-center text-white/80 mb-12">Dynamic Covered Call Assistant</p>

            <PlaybookSection number={1} title="Trade Setup & Strike Recommendation">
                <InteractiveTradeSetup onCalculate={handleCalculation} earningsDate={earningsDate} setEarningsDate={setEarningsDate} />
                {recommendedDelta !== null && (
                     <div className="mt-6 p-6 bg-yellow-500/10 border-2 border-dashed border-yellow-500/50 text-center">
                        <h4 className="font-epilogue text-lg text-white">Recommended Target Delta</h4>
                        <p className="text-4xl font-bold text-yellow-400 font-mono">{recommendedDelta.toFixed(2)}</p>
                        <p className="text-xs text-gray-400 mt-1">Select a strike with a delta close to this value.</p>
                    </div>
                )}
            </PlaybookSection>

            <PlaybookSection number={2} title="Live Trade Tracker & Guidance">
                <LiveTradeTracker earningsDate={earningsDate} />
            </PlaybookSection>

             <div className="text-center my-12">
                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black" onClick={() => setShowNotes(!showNotes)}>
                    {showNotes ? 'Hide' : 'Show'} Full Playbook Notes
                </Button>
            </div>

            {showNotes && <OptionsPlaybook />}
        </div>
    )
} 