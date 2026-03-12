import React from 'react';
import { Zap, DollarSign } from 'lucide-react';

interface UpgradesProps {
  balance: number;
  clickLevel: number;
  luckLevel: number;
  onUpgradeClick: () => void;
  onUpgradeLuck: () => void;
}

export function Upgrades({ balance, clickLevel, luckLevel, onUpgradeClick, onUpgradeLuck }: UpgradesProps) {
  const clickCost = 5.00 + (clickLevel * 5.00);
  const luckCost = 50.00 + (luckLevel * 50.00);

  const currentClickAmount = 0.05 + (clickLevel * 0.05);
  const nextClickAmount = currentClickAmount + 0.05;

  const currentLuckMultiplier = 1.0 + (luckLevel * 0.05);
  const nextLuckMultiplier = currentLuckMultiplier + 0.05;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Upgrades</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Money Clicker Upgrade */}
        <div className="bg-[#1a1c23] border border-[#2a2d36] rounded-xl overflow-hidden shadow-xl p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500/20 p-3 rounded-lg">
              <DollarSign className="text-green-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Better Clicks</h3>
              <p className="text-sm text-gray-400">Level {clickLevel}</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 flex-grow">
            Increase the amount of money you get every time you click the "Add Funds" button.
          </p>
          
          <div className="bg-[#0f1115] rounded-lg p-4 mb-6 border border-[#2a2d36]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Current Amount:</span>
              <span className="text-white font-mono font-bold">${currentClickAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Next Level:</span>
              <span className="text-green-400 font-mono font-bold">${nextClickAmount.toFixed(2)}</span>
            </div>
          </div>
          
          <button
            onClick={onUpgradeClick}
            disabled={balance < clickCost}
            className={`w-full py-3 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
              balance >= clickCost
                ? 'bg-[#4b69ff] hover:bg-[#3b59df] text-white'
                : 'bg-[#2a2d36] text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>Upgrade</span>
            <span className="font-mono bg-black/20 px-2 py-1 rounded text-sm">
              ${clickCost.toFixed(2)}
            </span>
          </button>
        </div>

        {/* Luck Multiplier Upgrade */}
        <div className="bg-[#1a1c23] border border-[#2a2d36] rounded-xl overflow-hidden shadow-xl p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-500/20 p-3 rounded-lg">
              <Zap className="text-yellow-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Luck Multiplier</h3>
              <p className="text-sm text-gray-400">Level {luckLevel}</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 flex-grow">
            Increase your chances of getting rare items from cases.
          </p>
          
          <div className="bg-[#0f1115] rounded-lg p-4 mb-6 border border-[#2a2d36]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Current Multiplier:</span>
              <span className="text-white font-mono font-bold">{currentLuckMultiplier.toFixed(2)}x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Next Level:</span>
              <span className="text-yellow-400 font-mono font-bold">{nextLuckMultiplier.toFixed(2)}x</span>
            </div>
          </div>
          
          <button
            onClick={onUpgradeLuck}
            disabled={balance < luckCost}
            className={`w-full py-3 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
              balance >= luckCost
                ? 'bg-[#4b69ff] hover:bg-[#3b59df] text-white'
                : 'bg-[#2a2d36] text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>Upgrade</span>
            <span className="font-mono bg-black/20 px-2 py-1 rounded text-sm">
              ${luckCost.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
