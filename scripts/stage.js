const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Load environment variables from local .env files if present
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  for (const file of envFiles) {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        content.split(/\r?\n/).forEach(line => {
          const trimmed = line.trim();
          if (trimmed && !trimmed.startsWith('#')) {
            const index = trimmed.indexOf('=');
            if (index !== -1) {
              const key = trimmed.substring(0, index).trim();
              let val = trimmed.substring(index + 1).trim();
              if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
              }
              if (key && !process.env[key]) {
                process.env[key] = val;
              }
            }
          }
        });
      } catch (e) {
        // Fallback silently if parsing fails
      }
    }
  }
}

loadEnv();

const TARGET_REPO = process.env.STAGE_REPO_URL || 'https://github.com/Deepanshu-dashore/Prototype-3-Ev.git';
const REMOTE_NAME = 'stage';

function runCommand(command, options = {}) {
  try {
    return execSync(command, { stdio: 'inherit', ...options });
  } catch (error) {
    console.error(`❌ Error running command: ${command}`);
    process.exit(1);
  }
}

function runCommandGetOutput(command) {
  try {
    return execSync(command, { encoding: 'utf8' }).trim();
  } catch (error) {
    return null;
  }
}

async function main() {
  console.log('🚀 Starting Staging Sync Process...');

  // 1. Check if git repository
  const isGit = runCommandGetOutput('git rev-parse --is-inside-work-tree');
  if (isGit !== 'true') {
    console.error('❌ Error: This is not a git repository.');
    process.exit(1);
  }

  // 2. Set up or update the 'stage' remote
  console.log(`Checking remote repository config for "${REMOTE_NAME}"...`);
  const remotes = runCommandGetOutput('git remote').split('\n');
  if (remotes.includes(REMOTE_NAME)) {
    const currentUrl = runCommandGetOutput(`git remote get-url ${REMOTE_NAME}`);
    if (currentUrl !== TARGET_REPO) {
      console.log(`Updating "${REMOTE_NAME}" remote URL from "${currentUrl}" to "${TARGET_REPO}"...`);
      runCommand(`git remote set-url ${REMOTE_NAME} ${TARGET_REPO}`);
    } else {
      console.log(`Remote "${REMOTE_NAME}" is already correctly configured to: ${TARGET_REPO}`);
    }
  } else {
    console.log(`Adding remote "${REMOTE_NAME}" pointing to "${TARGET_REPO}"...`);
    runCommand(`git remote add ${REMOTE_NAME} ${TARGET_REPO}`);
  }

  // 3. Check current branch
  const currentBranch = runCommandGetOutput('git branch --show-current');
  console.log(`Current branch: ${currentBranch}`);

  // 4. Check for uncommitted changes
  const status = runCommandGetOutput('git status --porcelain');
  if (status) {
    console.log('\n⚠️ You have uncommitted changes in your working directory:');
    console.log(runCommandGetOutput('git status -s'));
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const answer = await new Promise((resolve) => {
      rl.question('\nWhat would you like to do?\n1) Automatically commit and push all changes\n2) Push only currently committed changes (unstaged/uncommitted changes will NOT be pushed)\n3) Cancel operation\nChoose an option (1, 2, or 3): ', (ans) => {
        rl.close();
        resolve(ans.trim());
      });
    });

    if (answer === '1') {
      console.log('Staging all changes...');
      runCommand('git add -A');
      const commitMsg = `chore: staging deployment snapshot at ${new Date().toLocaleString()}`;
      console.log(`Committing changes with message: "${commitMsg}"...`);
      runCommand(`git commit -m "${commitMsg}"`);
    } else if (answer === '3') {
      console.log('❌ Staging cancelled.');
      process.exit(0);
    } else if (answer !== '2') {
      console.log('❌ Invalid option. Staging cancelled.');
      process.exit(1);
    }
  }

  // 5. Push to staging repo on main branch
  console.log(`\n📤 Pushing local ${currentBranch} branch to remote ${REMOTE_NAME} main branch...`);
  console.log('Note: This will perform a force-push to overwrite the staging branch and guarantee a complete copy.');
  
  try {
    // We push the current branch (HEAD) to the main branch of 'stage' remote
    runCommand(`git push ${REMOTE_NAME} HEAD:main --force`);
    console.log('\n✅ Successfully copied current codebase to staging repository on the main branch!');
  } catch (error) {
    console.error('\n❌ Push failed. Please verify git credentials and permissions for the target repository.');
    process.exit(1);
  }
}

main();
