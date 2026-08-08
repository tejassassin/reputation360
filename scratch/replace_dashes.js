import fs from 'fs';
import path from 'path';

const files = [
  "/Users/sakshi/Documents/projects/reputation360/src/lib/prerender/faqsPageToHtml.js",
  "/Users/sakshi/Documents/projects/reputation360/src/lib/prerender/contactPageToHtml.js",
  "/Users/sakshi/Documents/projects/reputation360/src/lib/prerender/homePageToHtml.js",
  "/Users/sakshi/Documents/projects/reputation360/src/lib/prerender/guidePageToHtml.js",
  "/Users/sakshi/Documents/projects/reputation360/src/lib/prerender/servicesPageToHtml.js",
  "/Users/sakshi/Documents/projects/reputation360/src/lib/prerender/whoWeServeAudienceLinksToHtml.js",
  "/Users/sakshi/Documents/projects/reputation360/src/data/ormGlossaryData.js",
  "/Users/sakshi/Documents/projects/reputation360/src/pages/FreeRiskScanPage.jsx",
  "/Users/sakshi/Documents/projects/reputation360/src/pages/BusinessesPage.jsx"
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('—')) {
      content = content.replaceAll('—', '-');
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Replaced in: ${file}`);
    }
  }
}
