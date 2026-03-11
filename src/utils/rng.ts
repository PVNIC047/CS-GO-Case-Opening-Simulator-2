import { Item, Rarity, Wear, InventoryItem } from '../types';

const ODDS = {
  'Mil-Spec': 0.7992327,
  'Restricted': 0.1598465,
  'Classified': 0.0319693,
  'Covert': 0.0063939,
  'Rare Special Item': 0.0025575,
};

export function getRandomRarity(): Rarity {
  const rand = Math.random();
  let cumulative = 0;
  
  for (const [rarity, chance] of Object.entries(ODDS)) {
    cumulative += chance;
    if (rand <= cumulative) {
      return rarity as Rarity;
    }
  }
  
  return 'Mil-Spec'; // Fallback
}

export function getRandomFloat(): number {
  return Math.random();
}

export function getWearFromFloat(float: number): Wear {
  if (float < 0.07) return 'Factory New';
  if (float < 0.15) return 'Minimal Wear';
  if (float < 0.38) return 'Field-Tested';
  if (float < 0.45) return 'Well-Worn';
  return 'Battle-Scarred';
}

export function openCase(items: Item[]): InventoryItem {
  const rarity = getRandomRarity();
  
  // Filter items by selected rarity
  const possibleItems = items.filter(item => item.rarity === rarity);
  
  // If for some reason the case doesn't have this rarity, fallback to any item
  const selectedItem = possibleItems.length > 0 
    ? possibleItems[Math.floor(Math.random() * possibleItems.length)]
    : items[Math.floor(Math.random() * items.length)];

  const float = getRandomFloat();
  const wear = getWearFromFloat(float);
  const statTrak = Math.random() < 0.1; // 10% chance

  return {
    id: Math.random().toString(36).substring(2, 15),
    item: selectedItem,
    wear,
    float,
    statTrak,
    dateAcquired: Date.now(),
  };
}

// Generate a sequence of items for the roulette animation
export function generateRouletteSequence(items: Item[], winningItem: Item, length: number = 50): Item[] {
  const sequence: Item[] = [];
  for (let i = 0; i < length - 5; i++) {
    const randomRarity = getRandomRarity();
    const possibleItems = items.filter(item => item.rarity === randomRarity);
    const item = possibleItems.length > 0 
      ? possibleItems[Math.floor(Math.random() * possibleItems.length)]
      : items[Math.floor(Math.random() * items.length)];
    sequence.push(item);
  }
  
  // Insert winning item near the end (e.g., 5 items from the right edge)
  sequence.push(winningItem);
  
  // Add a few more items after the winner to fill the screen
  for (let i = 0; i < 4; i++) {
    const randomRarity = getRandomRarity();
    const possibleItems = items.filter(item => item.rarity === randomRarity);
    const item = possibleItems.length > 0 
      ? possibleItems[Math.floor(Math.random() * possibleItems.length)]
      : items[Math.floor(Math.random() * items.length)];
    sequence.push(item);
  }
  
  return sequence;
}
