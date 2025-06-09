#!/usr/bin/env node

/**
 * Philosophy Validation Script
 * Ensures components follow the Fitzgerald Principle
 */

const fs = require('fs');
const path = require('path');

const PHILOSOPHY_CHECKS = {
  // Check for Fitzgerald Principle references
  fitzgeraldPrinciple: {
    patterns: [
      /fitzgerald/i,
      /productive.*tension/i,
      /opposed.*ideas/i,
      /AND/g, // Should show balancing forces
    ],
    weight: 10,
    description: 'Components should embody or reference the Fitzgerald Principle'
  },

  // Check for balance/tension indicators
  balancedTensions: {
    patterns: [
      /\b\w+\s+AND\s+\w+/g, // "Technical AND Business"
      /simple.*complex/i,
      /consistent.*flexible/i,
      /immediate.*long.?term/i,
    ],
    weight: 8,
    description: 'Should show balanced opposing forces'
  },

  // Check for proof over claims
  proofOverClaims: {
    patterns: [
      /experiment/i,
      /testing/i,
      /active/i,
      /status/i,
      /proof/i,
      /live/i,
    ],
    weight: 6,
    description: 'Should demonstrate rather than just claim'
  },

  // Check for mission alignment
  missionAlignment: {
    patterns: [
      /human.?ai/i,
      /collaboration/i,
      /children/i,
      /next.*generation/i,
      /framework/i,
      /pioneer/i,
    ],
    weight: 7,
    description: 'Should align with core mission'
  },

  // Check for simplicity with depth
  simplicityWithDepth: {
    patterns: [
      /simple/i,
      /clean/i,
      /clear/i,
      /hover/i,
      /explore/i,
      /depth/i,
    ],
    weight: 5,
    description: 'Should show simple surface with rich depth'
  }
};

function analyzeFile(filePath, content) {
  const results = {
    file: filePath,
    scores: {},
    totalScore: 0,
    maxScore: 0,
    philosophyLevel: 'unknown',
    suggestions: []
  };

  // Calculate scores for each philosophy check
  Object.entries(PHILOSOPHY_CHECKS).forEach(([checkName, check]) => {
    let score = 0;
    
    check.patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        score += matches.length;
      }
    });

    results.scores[checkName] = {
      score: Math.min(score, check.weight), // Cap at weight
      maxScore: check.weight,
      description: check.description
    };

    results.totalScore += results.scores[checkName].score;
    results.maxScore += check.weight;
  });

  // Determine philosophy level
  const percentage = (results.totalScore / results.maxScore) * 100;
  
  if (percentage >= 80) {
    results.philosophyLevel = 'exemplary';
  } else if (percentage >= 60) {
    results.philosophyLevel = 'good';
  } else if (percentage >= 40) {
    results.philosophyLevel = 'adequate';
  } else if (percentage >= 20) {
    results.philosophyLevel = 'minimal';
  } else {
    results.philosophyLevel = 'missing';
  }

  // Generate suggestions
  Object.entries(results.scores).forEach(([checkName, checkResult]) => {
    if (checkResult.score < checkResult.maxScore * 0.5) {
      results.suggestions.push(`Consider adding more ${checkName}: ${checkResult.description}`);
    }
  });

  return results;
}

function scanDirectory(dir) {
  const results = [];
  
  function scanRecursive(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanRecursive(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        // Skip type files and test files
        if (!item.endsWith('.d.ts') && !item.includes('.test.') && !item.includes('.spec.')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const relativePath = path.relative(process.cwd(), fullPath);
          results.push(analyzeFile(relativePath, content));
        }
      }
    });
  }
  
  scanRecursive(dir);
  return results;
}

function generateReport(results) {
  console.log('\n🎭 FITZGERALD PRINCIPLE PHILOSOPHY VALIDATION REPORT\n');
  console.log('='.repeat(60));
  
  // Summary stats
  const levels = results.reduce((acc, result) => {
    acc[result.philosophyLevel] = (acc[result.philosophyLevel] || 0) + 1;
    return acc;
  }, {});

  console.log('\n📊 PHILOSOPHY LEVELS:');
  Object.entries(levels).forEach(([level, count]) => {
    const emoji = {
      exemplary: '🏆',
      good: '✅', 
      adequate: '⚠️',
      minimal: '🔄',
      missing: '❌'
    }[level] || '❓';
    
    console.log(`${emoji} ${level.toUpperCase()}: ${count} files`);
  });

  // Top performers
  const topPerformers = results
    .filter(r => r.philosophyLevel === 'exemplary')
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 5);

  if (topPerformers.length > 0) {
    console.log('\n🏆 TOP PHILOSOPHY EXEMPLARS:');
    topPerformers.forEach(result => {
      const percentage = Math.round((result.totalScore / result.maxScore) * 100);
      console.log(`  ${result.file} (${percentage}%)`);
    });
  }

  // Areas for improvement
  const needsWork = results
    .filter(r => ['minimal', 'missing'].includes(r.philosophyLevel))
    .sort((a, b) => a.totalScore - b.totalScore)
    .slice(0, 5);

  if (needsWork.length > 0) {
    console.log('\n🔄 PHILOSOPHY ENHANCEMENT OPPORTUNITIES:');
    needsWork.forEach(result => {
      const percentage = Math.round((result.totalScore / result.maxScore) * 100);
      console.log(`  ${result.file} (${percentage}%)`);
      if (result.suggestions.length > 0) {
        result.suggestions.slice(0, 2).forEach(suggestion => {
          console.log(`    💡 ${suggestion}`);
        });
      }
    });
  }

  // Overall philosophy score
  const overallScore = results.reduce((sum, r) => sum + r.totalScore, 0);
  const overallMax = results.reduce((sum, r) => sum + r.maxScore, 0);
  const overallPercentage = Math.round((overallScore / overallMax) * 100);

  console.log(`\n🎯 OVERALL PHILOSOPHY SCORE: ${overallPercentage}%`);
  
  let grade, message;
  if (overallPercentage >= 80) {
    grade = 'A';
    message = 'Exemplary embodiment of the Fitzgerald Principle!';
  } else if (overallPercentage >= 70) {
    grade = 'B+';
    message = 'Strong philosophical foundation with room for refinement.';
  } else if (overallPercentage >= 60) {
    grade = 'B';
    message = 'Good philosophical alignment, consider deepening integration.';
  } else {
    grade = 'C+';
    message = 'Philosophy present but could be more deeply embedded.';
  }

  console.log(`\n🎓 GRADE: ${grade}`);
  console.log(`📝 ${message}`);
  console.log('\n' + '='.repeat(60));
}

// Main execution
function main() {
  const componentsDir = './components';
  const appDir = './app';
  
  console.log('🔍 Scanning for Fitzgerald Principle adherence...');
  
  const results = [];
  
  if (fs.existsSync(componentsDir)) {
    results.push(...scanDirectory(componentsDir));
  }
  
  if (fs.existsSync(appDir)) {
    results.push(...scanDirectory(appDir));
  }

  if (results.length === 0) {
    console.log('❌ No TypeScript/TSX files found to validate.');
    process.exit(1);
  }

  generateReport(results);
}

if (require.main === module) {
  main();
}

module.exports = { analyzeFile, PHILOSOPHY_CHECKS };