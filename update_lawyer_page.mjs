import fs from 'fs';

// Update LawyersPage.jsx
let lawyersContent = fs.readFileSync('src/pages/LawyersPage.jsx', 'utf8');

// 1. "Dense local networks" -> "Dense Local Networks: Why Reputation Damage Spreads Fast in Legal Circles"
lawyersContent = lawyersContent.replace(
  /label:\s*["']Dense local networks["']/i,
  'label: "Dense Local Networks: Why Reputation Damage Spreads Fast in Legal Circles"'
);

// 3. FAQ H2
lawyersContent = lawyersContent.replace(
  'Frequently Asked Questions About Lawyers and Attorneys Reputation Management',
  'Frequently Asked Questions About Lawyer & Attorney Reputation Management'
);

fs.writeFileSync('src/pages/LawyersPage.jsx', lawyersContent, 'utf8');
console.log('Updated LawyersPage.jsx');

// Update IndustryReputation360Sections.jsx
let sectionsContent = fs.readFileSync('src/components/industry/IndustryReputation360Sections.jsx', 'utf8');

// For Lawyers:
sectionsContent = sectionsContent.replace(
  'headline: "Step 2 - Strategy Design (Weeks 1-2)",',
  'headline: "Step 2 - Reputation Strategy Design (Weeks 1-2)",'
);

sectionsContent = sectionsContent.replace(
  'headline: "Step 4 - Displacement and Maintenance (Months 3-12)",',
  'headline: "Step 4 - Reputation Displacement and Maintenance (Months 3-12)",'
);

fs.writeFileSync('src/components/industry/IndustryReputation360Sections.jsx', sectionsContent, 'utf8');
console.log('Updated IndustryReputation360Sections.jsx');

