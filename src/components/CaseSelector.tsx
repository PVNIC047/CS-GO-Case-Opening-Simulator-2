import { useState } from 'react';
import { Case } from '../types';
import { CASES } from '../data/cases';
import { Key, Package } from 'lucide-react';

interface CaseSelectorProps {
  balance: number;
  ownedCases: Record<string, number>;
  ownedKeys: Record<string, number>;
  onBuyCase: (c: Case) => void;
  onBuyKey: (c: Case) => void;
  onOpenCase: (c: Case) => void;
}

type SortOption = 'default' | 'alpha-asc' | 'alpha-desc' | 'price-asc' | 'price-desc';

export function CaseSelector({ 
  balance, 
  ownedCases, 
  ownedKeys, 
  onBuyCase, 
  onBuyKey, 
  onOpenCase 
}: CaseSelectorProps) {
  const [sortBy, setSortBy] = useState<SortOption>('default');

  const sortedCases = [...CASES].sort((a, b) => {
    switch (sortBy) {
      case 'alpha-asc':
        return a.name.localeCompare(b.name);
      case 'alpha-desc':
        return b.name.localeCompare(a.name);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0; // Keep original order
    }
  });

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 max-w-7xl mx-auto gap-4">
        <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Available Cases</h2>
        <div className="flex items-center gap-4">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-[#1a1c23] border border-[#2a2d36] text-white text-sm rounded-md focus:ring-[#4b69ff] focus:border-[#4b69ff] block p-2.5"
          >
            <option value="default">Default Order</option>
            <option value="alpha-asc">Alphabetical (A-Z)</option>
            <option value="alpha-desc">Alphabetical (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {sortedCases.map((c) => {
          const casesOwned = ownedCases[c.id] || 0;
          const keysOwned = ownedKeys[c.id] || 0;
          const canOpen = casesOwned > 0 && keysOwned > 0;
          
          return (
          <div 
            key={c.id}
            className="bg-[#1a1c23] border border-[#2a2d36] rounded-xl overflow-hidden flex flex-col transition-all hover:border-[#4b69ff] hover:shadow-[0_0_20px_rgba(75,105,255,0.2)] group"
          >
            <div className="relative h-48 w-full bg-gradient-to-b from-[#2a2d36] to-[#1a1c23] flex items-center justify-center p-6 group-hover:from-[#3a3d46] transition-colors">
              <img 
                src={c.image} 
                alt={c.name} 
                className="max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 border border-white/10">
                  <Package size={12} className="text-blue-400" />
                  {casesOwned}
                </div>
                <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 border border-white/10">
                  <Key size={12} className="text-yellow-400" />
                  {keysOwned}
                </div>
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow items-center text-center">
              <h3 className="text-lg text-white font-bold mb-1">{c.name}</h3>
              <div className="text-xs text-gray-400 mb-4">Contains {c.items.length} items</div>
              
              <div className="w-full grid grid-cols-2 gap-2 mb-3">
                <button 
                  onClick={() => onBuyCase(c)}
                  className={`py-2 rounded-md font-bold text-xs uppercase tracking-wider transition-colors ${
                    balance >= c.price 
                      ? 'bg-[#2a2d36] hover:bg-[#3a3d46] text-white border border-white/10' 
                      : 'bg-[#1a1c23] text-gray-600 border border-gray-800 cursor-not-allowed'
                  }`}
                  disabled={balance < c.price}
                >
                  Buy Case
                  <div className="text-gray-400 font-normal">${c.price.toFixed(2)}</div>
                </button>
                <button 
                  onClick={() => onBuyKey(c)}
                  className={`py-2 rounded-md font-bold text-xs uppercase tracking-wider transition-colors ${
                    balance >= 2.49 
                      ? 'bg-[#2a2d36] hover:bg-[#3a3d46] text-white border border-white/10' 
                      : 'bg-[#1a1c23] text-gray-600 border border-gray-800 cursor-not-allowed'
                  }`}
                  disabled={balance < 2.49}
                >
                  Buy Key
                  <div className="text-gray-400 font-normal">$2.49</div>
                </button>
              </div>

              <button 
                onClick={() => onOpenCase(c)}
                className={`mt-auto w-full py-2.5 rounded-md font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                  canOpen 
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]' 
                    : 'bg-[#2a2d36] text-gray-500 cursor-not-allowed'
                }`}
                disabled={!canOpen}
              >
                {canOpen ? 'Unlock Container' : 'Needs Case & Key'}
              </button>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
