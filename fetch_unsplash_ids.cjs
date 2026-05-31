const https = require('https');

const ids = [4, 9, 20, 24, 26, 42, 48, 60, 119, 160, 163, 175, 180, 201, 274, 318, 370];

async function getInfo(id) {
  return new Promise((resolve) => {
    https.get(`https://picsum.photos/id/${id}/info`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(`${id}: ${json.url.split('/').pop()}`);
        } catch (e) {
          resolve(`${id}: error`);
        }
      });
    }).on('error', () => resolve(`${id}: error`));
  });
}

async function run() {
  for (const id of ids) {
    console.log(await getInfo(id));
  }
}
run();
