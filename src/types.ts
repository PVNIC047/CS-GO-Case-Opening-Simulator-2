export type Rarity = 'Mil-Spec' | 'Restricted' | 'Classified' | 'Covert' | 'Rare Special Item';

export type Wear = 'Factory New' | 'Minimal Wear' | 'Field-Tested' | 'Well-Worn' | 'Battle-Scarred';

export interface Item {
  id: string;
  name: string;
  weapon: string;
  rarity: Rarity;
  image: string;
  collection: string;
}

export interface Case {
  id: string;
  name: string;
  image: string;
  price: number;
  items: Item[];
}

export interface InventoryItem {
  id: string;
  item: Item;
  wear: Wear;
  float: number;
  statTrak: boolean;
  dateAcquired: number;
}
