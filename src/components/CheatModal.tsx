import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface CheatModalProps {
  onClose: () => void;
  balance: number;
  setBalance: (val: number) => void;
  luckLevel: number;
  setLuckLevel: (val: number) => void;
}

export function CheatModal({ onClose, balance, setBalance, luckLevel, setLuckLevel }: CheatModalProps) {
  const [tempBalance, setTempBalance] = useState(balance.toString());
  const [tempLuck, setTempLuck] = useState(luckLevel.toString());

  const handleSave = () => {
    const newBalance = parseFloat(tempBalance);
    if (!isNaN(newBalance) && newBalance >= 0) {
      setBalance(newBalance);
    }

    const newLuck = parseInt(tempLuck, 10);
    if (!isNaN(newLuck) && newLuck >= 0) {
      setLuckLevel(newLuck);
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#1a1c23] border border-[#2a2d36] rounded-xl shadow-2xl w-full max-w-sm overflow-hidden"
      >
        <div className="flex justify-between items-center p-4 border-b border-[#2a2d36] bg-[#0f1115]">
          <h3 className="text-lg font-bold text-white">Developer Tools</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Balance ($)</label>
            <input
              type="number"
              value={tempBalance}
              onChange={(e) => setTempBalance(e.target.value)}
              className="w-full bg-[#0f1115] border border-[#2a2d36] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#4b69ff] transition-colors"
              step="0.01"
              min="0"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Luck Level (Multiplier)</label>
            <input
              type="number"
              value={tempLuck}
              onChange={(e) => setTempLuck(e.target.value)}
              className="w-full bg-[#0f1115] border border-[#2a2d36] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#4b69ff] transition-colors"
              step="1"
              min="0"
            />
            <p className="text-xs text-gray-500 mt-1">Current Multiplier: {(1 + parseInt(tempLuck || '0') * 0.05).toFixed(2)}x</p>
          </div>
          
          <button
            onClick={handleSave}
            className="w-full mt-2 bg-[#4b69ff] hover:bg-[#3b59df] text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Apply Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
}
