import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const emptyH2Regex = /<h2 className="max-w-4xl font-heading text-\[26px\] font-bold leading-\[1\.12\] text-\[#0f2e58\] md:text-\[32px\] md:leading-\[1\.1\]"><\/h2>/;

const fixMap = {
  'ExecutivesPage.jsx': 'Frequently Asked Questions About Executive Reputation Management',
  'DoctorsPage.jsx': 'Frequently Asked Questions About Doctors and Healthcare Professionals Reputation Management',
  'LawyersPage.jsx': 'Frequently Asked Questions About Lawyers and Attorneys Reputation Management',
  'JobSeekersPage.jsx': 'Frequently Asked Questions About Job Seekers Reputation Management',
  'BusinessesPage.jsx': 'Frequently Asked Questions About Business Reputation Management',
  'RealEstatePage.jsx': 'Frequently Asked Questions About Real Estate Professionals Reputation Management'
};

for (const [file, heading] of Object.entries(fixMap)) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(emptyH2Regex, `<h2 className="max-w-4xl font-heading text-[26px] font-bold leading-[1.12] text-[#0f2e58] md:text-[32px] md:leading-[1.1]">${heading}</h2>`);
  
  if (file === 'BusinessesPage.jsx') {
    content = content.replace(/Strategy Design \(Weeks 1-2\)/, 'Reputation Strategy Design (Weeks 1-2)');
    content = content.replace(/Content and Brand Presence Building \(Months 1-4\)/, 'Reputation Content and Brand Presence Building (Months 1-4)');
    content = content.replace(/Displacement and Monitoring \(Months 2-12\)/, 'Reputation Displacement and Monitoring (Months 2-12)');
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
}
