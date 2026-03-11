import { Item, InventoryItem } from '../types';
import { RARITY_COLORS } from '../data/cases';
import { calculateItemPrice } from '../utils/pricing';

interface ItemCardProps {
  item: Item;
  inventoryItem?: InventoryItem;
  className?: string;
}

export function ItemCard({ item, inventoryItem, className = '' }: ItemCardProps) {
  const color = RARITY_COLORS[item.rarity];
  
  return (
    <div 
      className={`relative flex flex-col bg-[#1a1c23] border border-[#2a2d36] rounded-md overflow-hidden transition-transform hover:scale-105 ${className}`}
      style={{ borderBottom: `4px solid ${color}` }}
    >
      {inventoryItem?.statTrak && (
        <div className="absolute top-2 right-2 bg-[#ff8c00] text-black text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
          StatTrak™
        </div>
      )}
      
      <div className="relative h-32 w-full bg-gradient-to-b from-[#2a2d36] to-[#1a1c23] flex items-center justify-center p-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="max-h-full max-w-full object-contain drop-shadow-lg"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <div className="text-xs text-gray-400 font-medium">{item.weapon}</div>
        <div className="text-sm text-white font-bold truncate" style={{ color }}>{item.name}</div>
        
        {inventoryItem && (
          <div className="mt-auto pt-2 flex flex-col gap-1">
            <div className="flex justify-between items-end">
              <div className="text-[10px] text-gray-500">{inventoryItem.wear}</div>
              <div className="text-[10px] text-gray-600 font-mono">Float: {inventoryItem.float.toFixed(4)}</div>
            </div>
            <div className="text-xs font-bold text-green-400 mt-1">
              ${calculateItemPrice(inventoryItem).toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
