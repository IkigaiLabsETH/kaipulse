import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Target, DollarSign, PieChart, Rocket } from "lucide-react";

interface CalculatorResultsProps {
  monthlyIncome: number;
  mstyPrice: number;
  monthlyDividend: number;
  exchangeRate: number;
}

export function CalculatorResults({
  monthlyIncome,
  mstyPrice,
  monthlyDividend,
  exchangeRate
}: CalculatorResultsProps) {
  // Calculate derived values
  const sharesNeeded = Math.ceil(monthlyIncome / monthlyDividend);
  const totalInvestment = sharesNeeded * mstyPrice;
  const btcRequired = (totalInvestment / 83333.33).toFixed(2); // Using current BTC price
  const grossYearlyIncome = monthlyIncome * 12;
  const usWithholdingTax = grossYearlyIncome * 0.15;
  const europeanTax = grossYearlyIncome * 0.15;
  const netIncomeEur = (grossYearlyIncome - usWithholdingTax - europeanTax) * exchangeRate;
  const recommendedPortfolio = totalInvestment * 10; // Total portfolio size (10x MSTY investment)
  const mstyAllocation = totalInvestment;
  const btcAllocation = recommendedPortfolio * 0.8;
  const mstrAllocation = totalInvestment;

  return (
    <div className="w-full max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Parameters Card */}
      <Card className="bg-[#1c1f26] border-2 border-yellow-500">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Box className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-yellow-500">Parameters</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-white/60 mb-2">Monthly Income Goal ($)</p>
              <div className="bg-[#2a2d35] border border-yellow-500/20 rounded p-2">
                <p className="text-white">{monthlyIncome}</p>
              </div>
            </div>
            <div>
              <p className="text-white/60 mb-2">MSTY Price/Share ($)</p>
              <div className="bg-[#2a2d35] border border-yellow-500/20 rounded p-2">
                <p className="text-white">{mstyPrice}</p>
              </div>
            </div>
            <div>
              <p className="text-white/60 mb-2">Monthly Dividend/Share ($)</p>
              <div className="bg-[#2a2d35] border border-yellow-500/20 rounded p-2">
                <p className="text-white">{monthlyDividend}</p>
              </div>
            </div>
            <div>
              <p className="text-white/60 mb-2">USD/EUR Exchange Rate</p>
              <div className="bg-[#2a2d35] border border-yellow-500/20 rounded p-2">
                <p className="text-white">{exchangeRate}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Metrics Card */}
      <Card className="bg-[#1c1f26] border-2 border-yellow-500">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-yellow-500">Metrics</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-white/60 mb-2">Shares Needed</p>
              <p className="text-3xl font-bold text-white">{sharesNeeded.toLocaleString()} shares</p>
            </div>
            <div>
              <p className="text-white/60 mb-2">Total Investment</p>
              <p className="text-3xl font-bold text-white">${totalInvestment.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/60 mb-2">BTC Required</p>
              <p className="text-3xl font-bold text-white">{btcRequired} BTC</p>
            </div>
            <div className="pt-2">
              <div className="flex justify-between text-white/60 text-sm mb-2">
                <span>Current Tier:</span>
                <span>Next Tier:</span>
              </div>
              <div className="flex justify-between text-white/60 text-sm">
                <span>Intermediate</span>
                <span>Advanced</span>
              </div>
              <div className="mt-2 h-2 w-full bg-yellow-500/20 rounded-full">
                <div className="h-2 w-1/2 bg-yellow-500 rounded-full"></div>
              </div>
              <p className="text-sm text-white/60 mt-2">Building momentum</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Tax Card */}
      <Card className="bg-[#1c1f26] border-2 border-yellow-500">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-yellow-500">Tax</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-white/60 mb-2">Gross Yearly Income</p>
              <p className="text-3xl font-bold text-white">${grossYearlyIncome.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/60 mb-2">US Withholding Tax (15%)</p>
              <p className="text-3xl font-bold text-white">${usWithholdingTax.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/60 mb-2">European Tax (15%)</p>
              <p className="text-3xl font-bold text-white">${europeanTax.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/60 mb-2">Net Income in EUR</p>
              <p className="text-3xl font-bold text-white">€{netIncomeEur.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Allocation Card */}
      <Card className="bg-[#1c1f26] border-2 border-yellow-500">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-yellow-500">Allocation</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-white/60 mb-2">Recommended Portfolio</p>
              <p className="text-3xl font-bold text-white">${recommendedPortfolio.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/60 mb-2">MSTY (Income)</p>
              <p className="text-3xl font-bold text-white">${mstyAllocation.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/60 mb-2">BTC (Savings)</p>
              <p className="text-3xl font-bold text-white">${btcAllocation.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/60 mb-2">MSTR (Growth)</p>
              <p className="text-3xl font-bold text-white">${mstrAllocation.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Become a Legend Button */}
      <div className="lg:col-span-4 flex justify-center mt-8">
        <Button
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-6 rounded-lg flex items-center gap-2"
        >
          <Rocket className="w-6 h-6" />
          Become a Legend
        </Button>
      </div>
    </div>
  );
} 