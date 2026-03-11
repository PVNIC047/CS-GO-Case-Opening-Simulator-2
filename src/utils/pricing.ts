import { InventoryItem } from '../types';

export function calculateItemPrice(inventoryItem: InventoryItem): number {
  const { item, wear, statTrak, float } = inventoryItem;
  
  // Base price by rarity
  let basePrice = 0;
  switch (item.rarity) {
    case 'Mil-Spec': basePrice = 0.50; break;
    case 'Restricted': basePrice = 2.50; break;
    case 'Classified': basePrice = 15.00; break;
    case 'Covert': basePrice = 60.00; break;
    case 'Rare Special Item': basePrice = 300.00; break;
  }

  // Weapon multiplier
  let weaponMultiplier = 1.0;
  const highTier = ['AK-47', 'M4A4', 'M4A1-S', 'AWP', 'Desert Eagle', 'USP-S', 'Glock-18'];
  const midTier = ['MAC-10', 'MP7', 'MP9', 'UMP-45', 'P250', 'Five-SeveN', 'Tec-9', 'Galil AR', 'FAMAS', 'SSG 08', 'P2000'];
  
  if (highTier.includes(item.weapon)) {
    weaponMultiplier = 2.5;
  } else if (midTier.includes(item.weapon)) {
    weaponMultiplier = 1.2;
  } else if (item.rarity !== 'Rare Special Item') {
    weaponMultiplier = 0.6;
  }

  // Knife multiplier
  if (item.rarity === 'Rare Special Item') {
    if (item.weapon.includes('Butterfly Knife')) weaponMultiplier = 4.0;
    else if (item.weapon.includes('Karambit')) weaponMultiplier = 3.5;
    else if (item.weapon.includes('M9 Bayonet')) weaponMultiplier = 2.5;
    else if (item.weapon.includes('Bayonet')) weaponMultiplier = 1.8;
    else if (item.weapon.includes('Kukri')) weaponMultiplier = 1.5;
    else weaponMultiplier = 1.0;

    // Phase multipliers (Dopplers)
    if (item.name.includes('Emerald') || item.name.includes('Sapphire') || item.name.includes('Ruby')) {
      weaponMultiplier *= 5.0;
    } else if (item.name.includes('Phase 2')) {
      weaponMultiplier *= 1.5;
    } else if (item.name.includes('Fade')) {
      weaponMultiplier *= 1.8;
    } else if (item.name.includes('Lore')) {
      weaponMultiplier *= 1.6;
    } else if (item.name.includes('Safari Mesh') || item.name.includes('Scorched') || item.name.includes('Boreal Forest') || item.name.includes('Forest DDPAT')) {
      weaponMultiplier *= 0.5;
    }
  }

  // Wear multiplier
  let wearMultiplier = 1.0;
  switch (wear) {
    case 'Factory New': wearMultiplier = 3.0; break;
    case 'Minimal Wear': wearMultiplier = 1.8; break;
    case 'Field-Tested': wearMultiplier = 1.0; break;
    case 'Well-Worn': wearMultiplier = 0.8; break;
    case 'Battle-Scarred': wearMultiplier = 0.5; break;
  }

  // Float bonus (lower float = higher price, up to 20% bonus)
  const floatMultiplier = 1 + (1 - float) * 0.2;

  // StatTrak multiplier
  const statTrakMultiplier = statTrak ? 2.5 : 1.0;

  // Calculate final price
  let finalPrice = basePrice * weaponMultiplier * wearMultiplier * statTrakMultiplier * floatMultiplier;

  // Add a tiny bit of deterministic randomness based on ID so prices aren't identical
  const hash = inventoryItem.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const randomFactor = 0.95 + ((hash % 10) / 100); // 0.95 to 1.04

  finalPrice *= randomFactor;

  // Round to 2 decimal places
  return Math.max(0.01, Math.round(finalPrice * 100) / 100);
}
