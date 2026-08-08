import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  for (const [search, replace] of replacements) {
    if (typeof search === 'string') {
      content = content.replace(search, replace);
    } else {
      content = content.replace(search, replace);
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`No changes in ${filePath}`);
  }
}

// 1. Pages
const pagesDir = 'src/pages';
const pageReplacements = {
  'IndividualsPage.jsx': [
    [/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1>Personal Reputation Management Services — Take Back Control of Your Google Results</h1>'],
    [/The Problem (.*) Face/g, 'The Reputation Problem $1 Face'],
    [/blurb:\s*"How People Search Your Name Before Every Meeting"/g, 'blurb: "How People Search Your Name Before Every Meeting"'],
    [/label:\s*"Private & Confidential"/g, 'label: "Why Personal Reputation Management Must Be Private & Confidential"'],
    [/label:\s*"Removal First, Suppression When Needed"/g, 'label: "Removal First, Suppression When Needed: Our Dual Approach"'],
    [/label:\s*"A Personal Reputation Strategy Built Around Your Story"/g, 'label: "A Personal Reputation Strategy Built Around Your Genuine Story"'],
    [/Where damaging content typically appears:/g, 'Where Damaging Reputation Content Typically Appears Online']
  ],
  'ExecutivesPage.jsx': [
    [/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1>Executive Reputation Management Services — Control What Board Members Find</h1>'],
    [/The Problem (.*) Face/g, 'The Reputation Problem $1 Face'],
    [/<h2[^>]*>\s*FAQs?\s*<\/h2>/i, '<h2>Frequently Asked Questions About Executives Reputation Management</h2>'],
    [/blurb:\s*"Executives & online decisions"/g, 'blurb: "How Executives Are Judged by Online Search Results"'],
    [/blurb:\s*"Investors & online decisions"/g, 'blurb: "How Investors Research Executives Before Making Decisions"'],
    [/blurb:\s*"Typical results vs. your control"/g, 'blurb: "Typical Executive Search Results vs. What You Can Control"'],
    [/label:\s*"Trust is the currency"/g, 'label: "Why Trust Is the Core Currency of Executive Reputation"'],
    [/label:\s*"Invisible damage"/g, 'label: "How Reputation Damage Stays Invisible Until It Costs You"'],
    [/label:\s*"Proactive, not reactive"/g, 'label: "Why Reputation Management for Executives Must Be Proactive"'],
    [/Where damaging content typically appears:/g, 'Where Damaging Reputation Content Typically Appears Online']
  ],
  'FinancialAdvisorsPage.jsx': [
    [/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1>Online Reputation Management for Financial Advisors — Control What Clients Find</h1>'],
    [/The Problem (.*) Face/g, 'The Reputation Problem $1 Face'],
    [/Where damaging content typically appears:/g, 'Where Damaging Reputation Content Typically Appears Online']
  ],
  'DoctorsPage.jsx': [
    [/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1>Reputation Management for Doctors & Healthcare Professionals — Protect Your Clinical Record</h1>'],
    [/The Problem (.*) Face/g, 'The Reputation Problem $1 Face'],
    [/<h2[^>]*>\s*FAQs?\s*<\/h2>/i, '<h2>Frequently Asked Questions About Doctors and Healthcare Professionals Reputation Management</h2>'],
    [/blurb:\s*"Trust reviews like a referral"/g, 'blurb: "How Patients Trust Online Reviews Like a Doctor Referral"'],
    [/blurb:\s*"Search before they book"/g, 'blurb: "How Patients Search Your Medical Reputation Before They Book"'],
    [/blurb:\s*"Inquiries fall when ratings slip"/g, 'blurb: "How Patient Inquiries Fall When Doctor Ratings Slip"'],
    [/blurb:\s*"Thin review footprint"/g, 'blurb: "How a Thin Review Footprint Damages a Doctor\'s Reputation"'],
    [/label:\s*"The asymmetry"/g, 'label: "The Asymmetry: Why Fake Reviews Outweigh Real Medical Credentials"'],
    [/label:\s*"Limited control"/g, 'label: "Limited Control: Why Doctors Struggle to Remove False Patient Claims"'],
    [/label:\s*"The practical path"/g, 'label: "The Practical Path: How We Displace Negative Medical Reviews"'],
    [/Where damaging content typically appears:/g, 'Where Damaging Reputation Content Typically Appears Online']
  ],
  'LawyersPage.jsx': [
    [/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1>Reputation Management for Lawyers & Attorneys — Control What Clients Find</h1>'],
    [/The Problem (.*) Face/g, 'The Reputation Problem $1 Face'],
    [/<h2[^>]*>\s*FAQs?\s*<\/h2>/i, '<h2>Frequently Asked Questions About Lawyers and Attorneys Reputation Management</h2>'],
    [/blurb:\s*"Walk away after a disciplinary hit"/g, 'blurb: "How Clients Walk Away After Finding a Disciplinary Search Result"'],
    [/blurb:\s*"GCs vet outside counsel online"/g, 'blurb: "How General Counsels Vet Outside Counsel\'s Reputation Online"'],
    [/blurb:\s*"Strong presence, stronger pipeline"/g, 'blurb: "How a Strong Reputation Builds a Stronger Legal Pipeline"'],
    [/blurb:\s*"Where retain \/ no-retain is decided"/g, 'blurb: "How Search Results Decide Whether a Client Retains You"'],
    [/label:\s*"Adversarial fallout"/g, 'label: "Adversarial Fallout: When Opposing Parties Attack Your Legal Reputation"'],
    [/label:\s*"Limited public response"/g, 'label: "Limited Public Response: Why Attorney-Client Privilege Restricts Your Options"'],
    [/Where damaging content typically appears:/g, 'Where Damaging Reputation Content Typically Appears Online']
  ],
  'RealEstatePage.jsx': [
    [/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1>Online Reputation Management for Real Estate Agents & Brokers — Control What Clients Find</h1>'],
    [/The Problem (.*) Face/g, 'The Reputation Problem $1 Face'],
    [/<h2[^>]*>\s*Frequently Asked Questions\s*<\/h2>/i, '<h2>Frequently Asked Questions About Real Estate Professionals Reputation Management</h2>'],
    [/blurb:\s*"Homebuyers research agents online"/g, 'blurb: "How Homebuyers Research Real Estate Agents Online"'],
    [/blurb:\s*"Never look beyond page one"/g, 'blurb: "How Clients Never Look Beyond Page One of Search Results"'],
    [/blurb:\s*"Revenue increase per star rating gain"/g, 'blurb: "How a Real Estate Agent\'s Revenue Increases With Star Ratings"'],
    [/blurb:\s*"Referrals depend on search results"/g, 'blurb: "How Real Estate Referrals Depend on Your Online Reputation"'],
    [/label:\s*"Entrenched negative press"/g, 'label: "Entrenched Negative Press: Why Real Estate Scrutiny Sticks"'],
    [/label:\s*"Standard active limits"/g, 'label: "Standard Active Limits: How Review Sites Block Removal Efforts"'],
    [/label:\s*"Technical suppression path"/g, 'label: "The Technical Suppression Path: Outranking Negative Real Estate News"'],
    [/Where damaging content typically appears:/g, 'Where Damaging Reputation Content Typically Appears Online']
  ],
  'JobSeekersPage.jsx': [
    [/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1>Personal Reputation Management for Job Seekers — Control What Recruiters Find</h1>'],
    [/The Problem (.*) Face/g, 'The Reputation Problem $1 Face'],
    [/<h2[^>]*>\s*FAQs?\s*<\/h2>/i, '<h2>Frequently Asked Questions About Job Seekers Reputation Management</h2>'],
    [/blurb:\s*"Recruiters research you before they decide"/g, 'blurb: "How Recruiters Research Job Seekers Before Hiring"'],
    [/blurb:\s*"Eliminated after something surfaced online"/g, 'blurb: "How Job Seekers Are Eliminated by Damaging Search Results"'],
    [/blurb:\s*"Won't reach out if search raises concerns"/g, 'blurb: "How Recruiters React When Search Results Raise Concerns"'],
    [/blurb:\s*"Candidates who search their own name first"/g, 'blurb: "How Successful Job Seekers Manage Their Own Search Results"'],
    [/label:\s*"On your own"/g, 'label: "On Your Own: Why Companies Won\'t Fix Your Personal Reputation"'],
    [/label:\s*"Silent signals"/g, 'label: "Silent Signals: How Unseen Search Results Derail Your Career"'],
    [/label:\s*"The practical path forward"/g, 'label: "The Practical Path Forward: Rebuilding Your Professional Search Profile"'],
    [/Where damaging content typically appears:/g, 'Where Damaging Reputation Content Typically Appears Online']
  ],
  'BusinessesPage.jsx': [
    [/<h1[^>]*>[\s\S]*?<\/h1>/, '<h1>Business Reputation Management Services — Control What Customers Find</h1>'],
    [/The Problem (.*) Face/g, 'The Reputation Problem $1 Face'],
    [/<h2[^>]*>\s*FAQs?\s*<\/h2>/i, '<h2>Frequently Asked Questions About Businesses Reputation Management</h2>'],
    [/blurb:\s*"Research before purchase"/g, 'blurb: "How B2B Buyers Research Your Business Reputation Before Purchase"'],
    [/blurb:\s*"Reviews change decisions"/g, 'blurb: "How Reviews Change B2B Purchasing Decisions"'],
    [/blurb:\s*"Sources B2B buyers consult"/g, 'blurb: "How B2B Buyers Consult Search Results Before Buying"'],
    [/blurb:\s*"First-page impact"/g, 'blurb: "How First-Page Search Results Impact Business Revenue"'],
    [/label:\s*"Multiple reputation surfaces"/g, 'label: "Multiple Reputation Surfaces: Why Business Damage Spreads Everywhere"'],
    [/label:\s*"Competitive dynamics"/g, 'label: "Competitive Dynamics: When Competitors Weaponize Your Search Results"'],
    [/label:\s*"One result, many audiences"/g, 'label: "One Result, Many Audiences: How a Single Article Scares Everyone"'],
    [/Where damaging content typically appears:/g, 'Where Damaging Reputation Content Typically Appears Online']
  ]
};

for (const page in pageReplacements) {
  replaceInFile(path.join(pagesDir, page), pageReplacements[page]);
}

// IndustryReputation360Sections.jsx
const industryFilePath = 'src/components/industry/IndustryReputation360Sections.jsx';
const industryReplacements = [
  // Rule 6: Timeline H3s
  [/window:\s*"Weeks 1-4:\s*Initial\s*(Reputation\s*)?(Audit\s*and\s*Campaign\s*)?Setup"/g, 'window: "Weeks 1–4: Initial Reputation Audit and Setup"'],
  [/window:\s*"Weeks 1-4:\s*Initial\s*Reputation\s*Audit\s*and\s*Setup"/g, 'window: "Weeks 1–4: Initial Reputation Audit and Setup"'],
  [/window:\s*"Months 2-4:\s*Early\s*Reputation\s*Movement"/g, 'window: "Months 2–4: Early Reputation Movement"'],
  [/window:\s*"Months 4-7:\s*Significant\s*Reputation\s*Shift"/g, 'window: "Months 4–7: Significant Reputation Shift"'],
  [/window:\s*"Months 8-12:\s*Full\s*Reputation\s*Transformation"/g, 'window: "Months 8–12: Full Reputation Transformation"'],
  
  // Rule 7: Service step H3s
  [/headline:\s*"Step (\d+) - Complete Search Audit \(Week 1\)"/g, 'headline: "Step $1 - Complete Reputation Search Audit (Week 1)"'],
  [/headline:\s*"Step (\d+) - Content and Presence Building \(Months 1-4\)"/g, 'headline: "Step $1 - Reputation Content and Presence Building (Months 1–4)"'],
  [/headline:\s*"Step (\d+) - Long-Term Maintenance \(Month 8 onward\)"/g, 'headline: "Step $1 - Long-Term Reputation Maintenance (Months 8–12)"'],
  [/headline:\s*"Step (\d+) - Strategic Brief and Priority Setting \(Week 2\)"/g, 'headline: "Step $1 - Strategic Reputation Brief and Priority Setting (Week 2)"']
];

replaceInFile(industryFilePath, industryReplacements);

// Rule 8: Who We Serve H3s
// "On pages that list audience segments as H3s, single-word labels must be expanded:"
//   "Individuals" → "Personal Reputation Management for Individuals"
//   "Executives" → "Reputation Management for Executives"
//   "Businesses" → "Business Reputation Management Services"
//   "Professionals" → "Reputation Management for Professionals"
// (Will check where these are located via grep if they exist as H3s in other components)
