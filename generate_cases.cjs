const fs = require('fs');

const data = JSON.parse(fs.readFileSync('crates_data.json', 'utf-8'));

function mapRarity(rarityName) {
  if (rarityName === 'Mil-Spec Grade') return 'Mil-Spec';
  if (rarityName === 'Restricted') return 'Restricted';
  if (rarityName === 'Classified') return 'Classified';
  if (rarityName === 'Covert') return 'Covert';
  return 'Rare Special Item';
}

function processItems(items, collectionName, isRare = false) {
  return items.map(item => {
    let weapon = '';
    let name = '';
    
    if (item.name.includes(' | ')) {
      const parts = item.name.split(' | ');
      weapon = parts[0];
      name = parts[1];
    } else {
      weapon = item.name;
      name = 'Vanilla';
    }

    if (item.phase) {
      name += ` (${item.phase})`;
    }

    let rarity = isRare ? 'Rare Special Item' : mapRarity(item.rarity.name);

    return {
      id: item.id,
      weapon,
      name,
      rarity,
      image: item.image,
      collection: collectionName
    };
  });
}

const kilowattItems = [
  ...processItems(data.kilowatt.contains, 'Kilowatt Collection'),
  ...processItems(data.kilowatt.contains_rare, 'Kilowatt Collection', true)
];

const dreamsItems = [
  ...processItems(data.dreams.contains, 'Dreams & Nightmares Collection'),
  ...processItems(data.dreams.contains_rare, 'Dreams & Nightmares Collection', true)
];

const casesTs = `import { Case, Item, Rarity, Wear } from '../types';

export const RARITY_COLORS: Record<Rarity, string> = {
  'Mil-Spec': '#4b69ff',
  'Restricted': '#8847ff',
  'Classified': '#d32ce6',
  'Covert': '#eb4b4b',
  'Rare Special Item': '#ffd700',
};

export const WEAR_RANGES: Record<Wear, [number, number]> = {
  'Factory New': [0.00, 0.07],
  'Minimal Wear': [0.07, 0.15],
  'Field-Tested': [0.15, 0.38],
  'Well-Worn': [0.38, 0.45],
  'Battle-Scarred': [0.45, 1.00],
};

const kilowattItems: Item[] = ${JSON.stringify(kilowattItems, null, 2)};

const dreamsItems: Item[] = ${JSON.stringify(dreamsItems, null, 2)};

export const CASES: Case[] = [
  {
    id: 'kilowatt',
    name: 'Kilowatt Case',
    image: '${data.kilowatt.image}',
    price: 2.50,
    items: kilowattItems,
  },
  {
    id: 'dreams',
    name: 'Dreams & Nightmares Case',
    image: '${data.dreams.image}',
    price: 2.50,
    items: dreamsItems,
  },
];
`;

fs.writeFileSync('src/data/cases.ts', casesTs);
console.log('Done');
