import fs from 'fs';

// Update DoctorsPage.jsx
let doctorsContent = fs.readFileSync('src/pages/DoctorsPage.jsx', 'utf8');

// FAQ H2
doctorsContent = doctorsContent.replace(
  'Frequently Asked Questions About Doctors and Healthcare Professionals Reputation Management',
  'Frequently Asked Questions About Doctor & Healthcare Reputation Management'
);

fs.writeFileSync('src/pages/DoctorsPage.jsx', doctorsContent, 'utf8');
console.log('Updated DoctorsPage.jsx');

// Update IndustryReputation360Sections.jsx
let sectionsContent = fs.readFileSync('src/components/industry/IndustryReputation360Sections.jsx', 'utf8');

// Step 1
sectionsContent = sectionsContent.replace(
  'headline: "Step 1 - Full Digital Presence Audit (Week 1)",',
  'headline: "Step 1 - Full Digital Reputation Audit (Week 1)",'
);

// Step 4
sectionsContent = sectionsContent.replace(
  'headline: "Step 4 - Authoritative Content Building (Months 1-5)",',
  'headline: "Step 4 - Authoritative Reputation Content Building (Months 1-5)",'
);

fs.writeFileSync('src/components/industry/IndustryReputation360Sections.jsx', sectionsContent, 'utf8');
console.log('Updated IndustryReputation360Sections.jsx');

