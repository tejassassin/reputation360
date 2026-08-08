import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const replacements = {
  'BusinessesPage.jsx': '<h1 className="max-w-[560px] font-heading text-[30px] font-bold leading-[1.05] tracking-tight text-[#0f2e58] sm:text-[34px] md:text-[40px]">',
  'DoctorsPage.jsx': '<h1 className="mt-2 max-w-[520px] font-heading text-[34px] font-bold leading-[1.02] tracking-tight text-[#0f2e58] md:text-[40px]">',
  'ExecutivesPage.jsx': '<h1 className="max-w-[520px] font-heading text-[34px] font-bold leading-[1.02] tracking-tight text-[#0f2e58] md:text-[40px]">',
  'FinancialAdvisorsPage.jsx': '<h1 className="font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">',
  'IndividualsPage.jsx': '<h1 className="max-w-[560px] font-heading text-[22px] font-bold leading-[1.12] tracking-tight text-[#0f2e58] sm:text-[26px] md:text-[30px] lg:text-[34px]">',
  'JobSeekersPage.jsx': '<h1 className="font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">',
  'LawyersPage.jsx': '<h1 className="max-w-[520px] font-heading text-[34px] font-bold leading-[1.02] tracking-tight text-[#0f2e58] md:text-[40px]">',
  'RealEstatePage.jsx': '<h1 className="font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">'
};

for (const [file, h1Replacement] of Object.entries(replacements)) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<h1>/, h1Replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed H1 in ${file}`);
}
