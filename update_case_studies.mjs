import fs from 'fs';
import path from 'path';

const dir = '/Users/sakshi/Documents/projects/reputation360/src/data/caseStudies';
const files = fs.readdirSync(dir).filter(f => f.startsWith('case-') && f.endsWith('.js'));

function getMilestoneContext(timeStr) {
  if (/week/i.test(timeStr)) {
    return "Initial Reputation Audit and Setup";
  }
  const m = timeStr.match(/\d+/);
  if (!m) return "Reputation Management Campaign Progress";
  const startNum = parseInt(m[0], 10);
  
  if (startNum <= 2) return "Initial Reputation Audit and Setup";
  if (startNum >= 3 && startNum <= 4) return "Early Reputation Campaign Progress";
  if (startNum >= 5 && startNum <= 6) return "Continued Reputation Movement";
  if (startNum >= 7 && startNum <= 9) return "Significant Reputation Shift";
  if (startNum >= 10) return "Full Reputation Transformation";
  
  return "Reputation Management Campaign Progress";
}

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. H1 (listTitle)
  content = content.replace(/listTitle:\s*"([^"]+)"/, (match, title) => {
    if (title.startsWith("The ") || title.endsWith(" Case Study")) {
      return match; // keep as is
    }
    return `listTitle: "${title} Case Study"`;
  });

  // 2. H2s
  const h2Replacements = {
    'heading: "The Challenge"': 'heading: "The Reputation Management Challenge"',
    'heading: "Starting Position & Baseline"': 'heading: "Starting Position: Baseline Search Results & Reputation Audit"',
    'heading: "Our Objective"': 'heading: "Our Reputation Management Objective"',
    'heading: "Our Strategy"': 'heading: "Our Reputation Management Strategy"',
    'heading: "Month-by-Month Milestones"': 'heading: "Month-by-Month Reputation Management Milestones"',
    'heading: "Business Impact & Outcome"': 'heading: "Business Impact & Reputation Management Outcome"',
  };

  for (const [target, repl] of Object.entries(h2Replacements)) {
    content = content.replaceAll(target, repl);
  }
  
  // Regex for "The Results" and "The Results (N Months)"
  content = content.replace(/heading:\s*"The Results\s*(?:\((\d+)\s+Months?\))?"/g, (match, months) => {
    if (months) {
      return `heading: "Reputation Management Results (${months} Months)"`;
    }
    return `heading: "Reputation Management Results"`;
  });

  // 3. H3s (milestones)
  // Match lines like "Months 1-2: something" or "      body: `Months 1-2: something"
  content = content.replace(/(^|\n)([ \t]*body:\s*`)?(Month|Months|Week|Weeks)\s+(\d+(-\d+)?):\s*(.*)$/gm, (match, nl, prefix, p1, p2, p3, rest) => {
    const timeStr = `${p1} ${p2}`;
    const newTimeStr = timeStr.replace('-', '–'); // en-dash
    const context = getMilestoneContext(timeStr);
    
    // If it already has the ' - ' separator, it means we ran the script before, or it's formatted differently.
    const realPrefix = prefix || '';
    return `${nl}${realPrefix}${newTimeStr}: ${context} - ${rest}`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
