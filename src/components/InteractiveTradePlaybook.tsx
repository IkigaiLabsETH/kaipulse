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

const InteractiveTradeSetup = ({ onCalculate, setEarningsDate, setIvRank, ivRank, spotPrice, setSpotPrice }: { 
    onCalculate: (delta: number) => void, 
    setEarningsDate: (date: string) => void,
    ivRank: number,
    setIvRank: (rank: number) => void,
    spotPrice: number,
    setSpotPrice: (price: number) => void,
}) => {
    const [ticker, setTicker] = useState("TSLA");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/market-data?ticker=${ticker}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to fetch data");
            }
            const data = await response.json();
            setIvRank(data.ivRank);
            setEarningsDate(data.earningsDate);
            setSpotPrice(data.spotPrice);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleCalculate = () => {
        const delta = ivRank >= 20 ? 0.25 : 0.15;
        onCalculate(delta);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-end gap-4">
                <div className="flex-grow space-y-2">
                    <Label htmlFor="ticker" className="text-base">Ticker</Label>
                    <Input id="ticker" placeholder="e.g., TSLA" className="bg-black/30 border-yellow-500/50" value={ticker} onChange={(e) => setTicker(e.target.value.toUpperCase())} />
                </div>
                <Button 
                    onClick={handleFetchData} 
                    disabled={isLoading}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-10"
                >
                    {isLoading ? 'Fetching...' : 'Fetch Data'}
                </Button>
            </div>

            <div className="flex justify-start items-center gap-4 text-xs pt-1">
                <span className="text-white/60">Quick Price Links:</span>
                <a href="https://www.tradingview.com/symbols/NASDAQ-TSLA/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">TSLA</a>
                <a href="https://www.tradingview.com/symbols/NASDAQ-MSTR/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">MSTR</a>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                    <Label htmlFor="spot-price" className="text-base">Spot Price</Label>
                    <Input 
                        id="spot-price" 
                        type="number" 
                        placeholder="e.g., 323.63"
                        className="bg-black/30 border-yellow-500/50"
                        value={spotPrice}
                        onChange={(e) => setSpotPrice(parseFloat(e.target.value) || 0)} 
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <Label htmlFor="iv-rank" className="text-base">IV-Rank (%)</Label>
                        <a 
                            href={`https://www.barchart.com/stocks/quotes/${ticker}/options`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-yellow-400 hover:text-yellow-300 underline"
                        >
                            Find IV-Rank
                        </a>
                    </div>
                    <Input 
                        id="iv-rank" 
                        type="number" 
                        placeholder="e.g., 27"
                        className="bg-black/30 border-yellow-500/50"
                        value={ivRank}
                        onChange={(e) => setIvRank(parseFloat(e.target.value) || 0)} 
                    />
                </div>
            </div>
            
            <Button onClick={handleCalculate} className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold h-12 text-lg">Calculate Recommended Delta</Button>

        </div>
    );
};

type TradeDetails = {
    strike: number;
    premium: number;
};

type Checklist = {
    takeProfit: boolean;
    checkRoll: boolean;
};

interface LiveTradeTrackerProps {
    onLogTrade: () => void;
    trade: TradeDetails;
    setTrade: (trade: TradeDetails) => void;
    isTradeLogged: boolean;
    checklist: Checklist;
    handleChecklistChange: (step: keyof Checklist) => void;
    earningsDate: string;
}

const LiveTradeTracker = ({ onLogTrade, trade, setTrade, isTradeLogged, checklist, handleChecklistChange }: LiveTradeTrackerProps) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div className="space-y-2">
                    <Label htmlFor="strike" className="text-base">Strike Price</Label>
                    <Input id="strike" type="number" placeholder="e.g., 350" className="bg-black/30 border-yellow-500/50" value={trade.strike} onChange={(e) => setTrade({...trade, strike: parseFloat(e.target.value)})} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="premium" className="text-base">Premium Received</Label>
                    <Input id="premium" type="number" placeholder="e.g., 5.50" className="bg-black/30 border-yellow-500/50" value={trade.premium} onChange={(e) => setTrade({...trade, premium: parseFloat(e.target.value)})} />
                </div>
            </div>
            <Button onClick={onLogTrade} className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-bold border-2 border-yellow-500 h-12 text-lg">
                Log Trade
            </Button>

            {isTradeLogged && (
                <div className="mt-6 space-y-4">
                    <h4 className="font-epilogue text-lg text-white">Live Trade Management</h4>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="takeProfit" checked={checklist.takeProfit} onChange={() => handleChecklistChange('takeProfit')} />
                        <Label htmlFor="takeProfit">Close if option value ≤ {(trade.premium * 0.2).toFixed(2)} (Take Profit @ 20%)</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <Checkbox id="checkRoll" checked={checklist.checkRoll} onChange={() => handleChecklistChange('checkRoll')} />
                        <Label htmlFor="checkRoll">Roll if spot &gt; {trade.strike - 5} and extrinsic is low</Label>
                    </div>
                </div>
            )}
        </div>
    )
}

interface DynamicGuidanceProps {
    earningsDate: string;
    expirationDate: string;
    isTradeLogged: boolean;
}

const DynamicGuidance = ({ earningsDate, expirationDate, isTradeLogged }: DynamicGuidanceProps) => {
    const isNearEarnings = () => {
        if (!isTradeLogged || !expirationDate || !earningsDate) return false;

        const expiry = new Date(expirationDate);
        const earnings = new Date(earningsDate);
        const today = new Date();
        
        // Warning if expiry is between today and earnings
        return expiry > today && expiry < earnings;
    };

    if (!isTradeLogged || !isNearEarnings()) return null;

    return (
        <div className="mt-6 p-4 bg-red-900/50 border-2 border-dashed border-red-500/50 text-center">
            <p className="font-bold text-red-300">Warning: Your expiration date is before the next earnings report. This can expose you to higher volatility risk.</p>
        </div>
    );
};

export default function InteractiveTradePlaybook() {
    const [recommendedDelta, setRecommendedDelta] = useState<number | null>(null);
    const [earningsDate, setEarningsDate] = useState("2025-07-23");
    const [ivRank, setIvRank] = useState(27);
    const [spotPrice, setSpotPrice] = useState(323.63);
    const [showNotes, setShowNotes] = useState(false);
    
    // State for the live trade tracker
    const [trade, setTrade] = useState<TradeDetails>({ strike: 350, premium: 5.50 });
    const [isTradeLogged, setIsTradeLogged] = useState(false);
    const [checklist, setChecklist] = useState<Checklist>({ takeProfit: false, checkRoll: false });
    const [expirationDate, setExpirationDate] = useState('');

    const handleCalculation = (delta: number) => {
        setRecommendedDelta(delta);
    };

    const handleLogTrade = () => {
        setIsTradeLogged(true);
    };

    const handleChecklistChange = (step: keyof Checklist) => {
        setChecklist(prev => ({ ...prev, [step]: !prev[step] }));
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h2 className="text-4xl font-bold font-boska text-white">🦉 Interactive Playbook</h2>
                <p className="text-lg text-white/70 mt-2 font-satoshi">Dynamic Covered Call Assistant</p>
            </div>
            
            <PlaybookSection number={1} title="Trade Setup & Strike Recommendation">
                <InteractiveTradeSetup 
                    onCalculate={handleCalculation} 
                    setEarningsDate={setEarningsDate} 
                    ivRank={ivRank}
                    setIvRank={setIvRank}
                    spotPrice={spotPrice}
                    setSpotPrice={setSpotPrice}
                />
                {recommendedDelta !== null && (
                     <div className="mt-6 p-6 bg-yellow-500/10 border-2 border-dashed border-yellow-500/50 text-center">
                        <p className="text-lg text-yellow-300">Based on an IV-Rank of <span className="font-bold text-white">{ivRank}%</span>, the recommended delta for your short call is:</p>
                        <p className="text-5xl font-bold text-white font-mono my-2">{recommendedDelta.toFixed(2)}</p>
                        <p className="text-sm text-yellow-400/80">This balances premium collection with assignment risk.</p>
                    </div>
                )}
            </PlaybookSection>

            <PlaybookSection number={2} title="Live Trade Tracker & Guidance">
                <LiveTradeTracker 
                    onLogTrade={handleLogTrade}
                    trade={trade}
                    setTrade={setTrade}
                    isTradeLogged={isTradeLogged}
                    checklist={checklist}
                    handleChecklistChange={handleChecklistChange}
                    earningsDate={earningsDate}
                />
                <div className="space-y-2 mt-4">
                    <Label htmlFor="expiration-date" className="text-base">Option Expiration Date</Label>
                    <Input 
                        id="expiration-date" 
                        type="date" 
                        className="bg-black/30 border-yellow-500/50"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        disabled={!isTradeLogged}
                    />
                </div>
                <DynamicGuidance earningsDate={earningsDate} expirationDate={expirationDate} isTradeLogged={isTradeLogged} />
            </PlaybookSection>
            
            <div className="text-center">
                <Button variant="ghost" onClick={() => setShowNotes(!showNotes)} className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10">
                    {showNotes ? 'Hide' : 'Show'} Full Playbook Notes
                </Button>
            </div>

            {showNotes && <OptionsPlaybook />}
        </div>
    )
} 