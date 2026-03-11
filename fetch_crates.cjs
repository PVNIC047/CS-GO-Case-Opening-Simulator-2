const https = require('https');
const fs = require('fs');

https.get('https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/crates.json', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const crates = JSON.parse(data);
    const kilowatt = crates.find(c => c.name === 'Kilowatt Case');
    const dreams = crates.find(c => c.name === 'Dreams & Nightmares Case');
    fs.writeFileSync('crates_data.json', JSON.stringify({ kilowatt, dreams }, null, 2));
    console.log('Done');
  });
});
