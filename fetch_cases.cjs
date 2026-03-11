const fs = require('fs');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    console.log('Fetching crates...');
    const crates = await fetchJson('https://raw.githubusercontent.com/ByMyKel/CSGO-API/main/public/api/en/crates.json');
    console.log('Fetching skins...');
    const skins = await fetchJson('https://raw.githubusercontent.com/ByMyKel/CSGO-API/main/public/api/en/skins.json');
    
    // Filter to only cases (not capsules, packages, etc.)
    const cases = crates.filter(c => c.type === 'Case' && c.contains && c.contains.length > 0);
    
    console.log(`Found ${cases.length} cases.`);
    
    let output = `import { Case, Item, Rarity, Wear } from '../types';\n\n`;
    output += `export const RARITY_COLORS: Record<Rarity, string> = {
  'Mil-Spec': '#4b69ff',
  'Restricted': '#8847ff',
  'Classified': '#d32ce6',
  'Covert': '#eb4b4b',
  'Rare Special Item': '#ffd700',
};\n\n`;
    output += `export const WEAR_RANGES: Record<Wear, [number, number]> = {
  'Factory New': [0.00, 0.07],
  'Minimal Wear': [0.07, 0.15],
  'Field-Tested': [0.15, 0.38],
  'Well-Worn': [0.38, 0.45],
  'Battle-Scarred': [0.45, 1.00],
};\n\n`;

    const generatedCases = [];
    
    for (const c of cases) {
      // Map items
      const items = [];
      for (const itemRef of c.contains) {
        const skin = skins.find(s => s.id === itemRef.id);
        if (skin) {
          let rarity = skin.rarity.name;
          if (rarity === 'Mil-Spec Grade' || rarity === 'Industrial Grade' || rarity === 'Consumer Grade') rarity = 'Mil-Spec';
          if (rarity === 'Restricted') rarity = 'Restricted';
          if (rarity === 'Classified') rarity = 'Classified';
          if (rarity === 'Covert') rarity = 'Covert';
          if (rarity === 'Contraband') rarity = 'Covert';
          
          if (!['Mil-Spec', 'Restricted', 'Classified', 'Covert', 'Rare Special Item'].includes(rarity)) {
             rarity = 'Mil-Spec';
          }

          items.push({
            id: skin.id,
            weapon: skin.weapon.name,
            name: skin.pattern.name,
            rarity: rarity,
            image: skin.image,
            collection: c.name
          });
        }
      }
      
      if (!items.some(i => i.rarity === 'Rare Special Item')) {
          items.push({
            id: 'skin-vanilla-' + c.id,
            weapon: "★ Rare Special Item",
            name: "Vanilla",
            rarity: "Rare Special Item",
            image: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cjxQ-tW4m9ODk_TzZ-KFlT0HscYp07iXpY_0i1Hh_kZtYTigI9PDI1A_aQ6G-1e9k-u90JLu7ZzOm3Nl73V253ffm0G_hBxIarNnjvKcH1-c",
            collection: c.name
          });
      }
      
      if (items.length > 0) {
        const caseVarName = c.id.replace(/[^a-zA-Z0-9]/g, '') + 'Items';
        output += 'const ' + caseVarName + ': Item[] = ' + JSON.stringify(items, null, 2) + ';\n\n';
        
        // Random price between 0.10 and 50.00
        const price = c.name.includes('Bravo') ? 50.00 : c.name.includes('Weapon Case 1') ? 80.00 : 1.50;
        
        generatedCases.push({
          id: c.id,
          name: c.name,
          image: c.image,
          price: price,
          itemsVar: caseVarName
        });
      }
    }
    
    output += 'export const CASES: Case[] = [\n';
    for (const gc of generatedCases) {
      output += '  {\n';
      output += '    id: "' + gc.id + '",\n';
      output += '    name: "' + gc.name.replace(/"/g, '\\"') + '",\n';
      output += '    image: "' + gc.image + '",\n';
      output += '    price: ' + gc.price + ',\n';
      output += '    items: ' + gc.itemsVar + ',\n';
      output += '  },\n';
    }
    output += '];\n';
    
    fs.writeFileSync('src/data/cases.ts', output);
    console.log('Successfully generated cases.ts');
  } catch (e) {
    console.error(e);
  }
}

run();
