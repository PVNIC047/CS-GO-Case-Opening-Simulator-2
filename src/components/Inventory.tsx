import { useState } from 'react';
import { InventoryItem, Rarity } from '../types';
import { ItemCard } from './ItemCard';
import { calculateItemPrice } from '../utils/pricing';

interface InventoryProps {
  items: InventoryItem[];
  onSellItem: (item: InventoryItem) => void;
}

type SortOption = 'date-desc' | 'date-asc' | 'alpha-asc' | 'alpha-desc' | 'price-asc' | 'price-desc';

export function Inventory({ items, onSellItem }: InventoryProps) {
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');

  if (items.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-xl">Your inventory is empty.</p>
        <p className="mt-2 text-sm">Open some cases to get items!</p>
      </div>
    );
  }

  const sortedItems = [...items].sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return b.dateAcquired - a.dateAcquired;
      case 'date-asc':
        return a.dateAcquired - b.dateAcquired;
      case 'alpha-asc':
        return a.item.name.localeCompare(b.item.name);
      case 'alpha-desc':
        return b.item.name.localeCompare(a.item.name);
      case 'price-asc':
        return calculateItemPrice(a) - calculateItemPrice(b);
      case 'price-desc':
        return calculateItemPrice(b) - calculateItemPrice(a);
      default:
        return b.dateAcquired - a.dateAcquired;
    }
  });

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 max-w-7xl mx-auto gap-4">
        <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Your Inventory</h2>
        <div className="flex items-center gap-4">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-[#1a1c23] border border-[#2a2d36] text-white text-sm rounded-md focus:ring-[#4b69ff] focus:border-[#4b69ff] block p-2.5"
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="alpha-asc">Alphabetical (A-Z)</option>
            <option value="alpha-desc">Alphabetical (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
          <div className="text-gray-400">Total Items: {items.length}</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {sortedItems.map((invItem) => (
          <div key={invItem.id} className="relative group">
            <ItemCard 
              item={invItem.item} 
              inventoryItem={invItem} 
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md backdrop-blur-sm">
              <button
                onClick={() => onSellItem(invItem)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors text-sm uppercase tracking-wider"
              >
                Sell for ${calculateItemPrice(invItem).toFixed(2)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
