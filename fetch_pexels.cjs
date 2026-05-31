const https = require('https');

function searchPexels(query) {
  return new Promise((resolve) => {
    https.get(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\1\.jpeg/);
        resolve(match ? match[0] : null);
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const queries = [
    "office building glass", // Exec
    "stethoscope desk", // Medical
    "empty boardroom", // HR
    "warehouse boxes", // Retail
    "smartphone laptop desk", // Consumer Electronics
    "whiteboard sticky notes", // Startup
    "shipping packages", // E-commerce counterfeit
    "hospital operating room lights", // Surgeon
    "medical chart stethoscope", // GP
    "graduation cap diploma", // Graduate
  ];
  for (const q of queries) {
    const url = await searchPexels(q);
    console.log(`${q}: ${url}`);
  }
}
run();
