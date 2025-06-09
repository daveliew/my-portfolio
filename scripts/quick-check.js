#!/usr/bin/env node

/**
 * Quick Validation Script (without build)
 * Fast checks before commit/push
 */

const { execSync } = require('child_process');

const QUICK_CHECKS = {
  typecheck: 'npm run type-check',
  lint: 'npm run lint',
  philosophy: 'npm run philosophy-check'
};

function runQuickCheck() {
  console.log('⚡ Running quick validation checks...\n');
  
  let allPassed = true;
  
  for (const [name, command] of Object.entries(QUICK_CHECKS)) {
    console.log(`🔍 ${name}...`);
    
    try {
      execSync(command, { stdio: 'inherit' });
      console.log(`✅ ${name} passed\n`);
    } catch (error) {
      console.log(`❌ ${name} failed\n`);
      allPassed = false;
    }
  }
  
  if (allPassed) {
    console.log('🎉 All quick checks passed! Ready for full pre-deploy.');
  } else {
    console.log('🚫 Some checks failed. Fix issues before deploying.');
    process.exit(1);
  }
}

if (require.main === module) {
  runQuickCheck();
}