import fs from 'fs';

let content = fs.readFileSync('src/pages/RealEstatePage.jsx', 'utf8');

// FAQ H2
content = content.replace(
  'Frequently Asked Questions About Real Estate Professionals Reputation Management',
  'Frequently Asked Questions About Real Estate Agent Reputation Management'
);

// Careers H2
content = content.replace(
  'How a Poor Online Presence Limits Real Estate Careers',
  'How a Poor Online Reputation Limits Real Estate Careers'
);

// Impact H3s
content = content.replace(
  'title: "Lead Generation",',
  'title: "Lead Generation: How Reputation Drives Real Estate Leads",'
);
content = content.replace(
  'title: "Client Acquisition Cost",',
  'title: "Client Acquisition Cost: How Reputation Reduces Marketing Spend",'
);
content = content.replace(
  'title: "Recruiting & Relationships",',
  'title: "Recruiting & Relationships: Why Reputation Attracts Top Agents",'
);
content = content.replace(
  'title: "Pricing Power",',
  'title: "Pricing Power: How a Strong Reputation Justifies Higher Commissions",'
);

// Career Pillars H3s
content = content.replace(
  'title: "For New Agents: Building Credibility from Zero",',
  'title: "For New Agents: Building Real Estate Reputation and Credibility",'
);
content = content.replace(
  'title: "For Experienced Agents: Protecting and Leveraging",',
  'title: "For Experienced Agents: Protecting and Leveraging Your Reputation",'
);
content = content.replace(
  'title: "For Brokers & Agency Owners: Your Brand Is on the Line",',
  'title: "For Brokers & Agency Owners: Your Reputation and Brand Are on the Line",'
);

fs.writeFileSync('src/pages/RealEstatePage.jsx', content, 'utf8');
console.log('Updated RealEstatePage.jsx');


let sectionsContent = fs.readFileSync('src/components/industry/IndustryReputation360Sections.jsx', 'utf8');

sectionsContent = sectionsContent.replace(
  'headline: "Step 1 - Real Estate Search Audit (Week 1)",',
  'headline: "Step 1 - Real Estate Reputation Search Audit (Week 1)",'
);

sectionsContent = sectionsContent.replace(
  'headline: "Step 2 - Strategy Design (Weeks 1-2)",',
  'headline: "Step 2 - Reputation Strategy Design (Weeks 1-2)",'
);

sectionsContent = sectionsContent.replace(
  'headline: "Step 4 - Displacement & Maintenance (Months 3-12)",',
  'headline: "Step 4 - Reputation Displacement & Maintenance (Months 3-12)",'
);

fs.writeFileSync('src/components/industry/IndustryReputation360Sections.jsx', sectionsContent, 'utf8');
console.log('Updated IndustryReputation360Sections.jsx');

