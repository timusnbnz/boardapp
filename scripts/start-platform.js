const { execSync } = require('child_process');
const os = require('os');
const fs = require('fs');

const platform = os.platform(); // 'win32', 'darwin', 'linux'

console.log(`🧠 Detected platform: ${platform}`);

try {
  if (platform === 'win32') {
    console.log('⚙️ Running Windows repair script...');
    // Check if Git Bash is installed at common locations
    const gitBashPaths = [
      'C:\\Program Files\\Git\\bin\\bash.exe',
      'C:\\Program Files (x86)\\Git\\bin\\bash.exe'
    ];
    
    let gitBashPath = null;
    for (const path of gitBashPaths) {
      if (fs.existsSync(path)) {
        gitBashPath = path;
        break;
      }
    }
    
    if (gitBashPath) {
      execSync(`"${gitBashPath}" ./scripts/repair-win.sh`, { stdio: 'inherit' });
    } else {
      execSync('bash ./scripts/repair-win.sh', { stdio: 'inherit' });
    }
  } else if (platform === 'darwin' || platform === 'linux') {
    console.log('⚙️ Running default npm repair...');
    execSync('npm run repair', { stdio: 'inherit' });
  } else {
    console.error('❌ Unsupported platform:', platform);
    process.exit(1);
  }
} catch (err) {
  console.error('💥 Error during startup:', err);
  process.exit(1);
}
