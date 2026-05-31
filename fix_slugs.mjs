import fs from 'fs';
const slugs = {
  'case-01.js': 'executive-and-founder-reputation-management',
  'case-02.js': 'financial-professional-reputation-recovery',
  'case-03.js': 'medical-and-healthcare-reputation-management',
  'case-04.js': 'hr-and-employment-dispute-reputation-management',
  'case-05.js': 'e-commerce-and-retail-brand-recovery',
  'case-06.js': 'consumer-electronics-product-crisis-recovery',
  'case-07.js': 'startup-reputation-recovery-after-funding-controversy',
  'case-08.js': 'e-commerce-brand-recovery-after-counterfeit-allegations'
};

for (const [file, slug] of Object.entries(slugs)) {
  const path = `src/data/caseStudies/${file}`;
  let content = fs.readFileSync(path, 'utf8');
  if (!content.includes('slug: "')) {
    content = content.replace(/listTitle: "([^"]+)",/, `listTitle: "$1",\n  slug: "${slug}",`);
    fs.writeFileSync(path, content, 'utf8');
  }
}
