const https = require('https');

const knives = [
  '★ Karambit',
  '★ Butterfly Knife',
  '★ M9 Bayonet',
  '★ Talon Knife',
  '★ Skeleton Knife',
  '★ Bayonet',
  '★ Flip Knife',
  '★ Gut Knife',
  '★ Huntsman Knife',
  '★ Bowie Knife',
  '★ Falchion Knife',
  '★ Shadow Daggers',
  '★ Ursus Knife',
  '★ Navaja Knife',
  '★ Stiletto Knife',
  '★ Nomad Knife',
  '★ Survival Knife',
  '★ Paracord Knife',
  '★ Classic Knife'
];

async function fetchImage(name) {
  return new Promise((resolve) => {
    const url = `https://steamcommunity.com/market/search/render/?query=${encodeURIComponent(name)}&start=0&count=1&search_descriptions=0&sort_column=default&sort_dir=desc&appid=730&category_730_ItemSet[]=any&category_730_ProPlayer[]=any&category_730_StickerCapsule[]=any&category_730_TournamentTeam[]=any&category_730_Weapon[]=any`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const html = json.results_html;
          const match = html.match(/src="([^"]+)"/);
          if (match) {
            // Remove the size suffix (e.g., /62fx62f) to get the full image
            let imgUrl = match[1].replace(/\/62fx62f$/, '');
            imgUrl = imgUrl.replace(/\/360fx360f$/, '');
            resolve({ name, url: imgUrl });
          } else {
            resolve({ name, url: null });
          }
        } catch (e) {
          resolve({ name, url: null });
        }
      });
    }).on('error', () => resolve({ name, url: null }));
  });
}

async function run() {
  const results = [];
  for (const knife of knives) {
    const res = await fetchImage(knife);
    results.push(res);
    // sleep to avoid rate limiting
    await new Promise(r => setTimeout(r, 500));
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
