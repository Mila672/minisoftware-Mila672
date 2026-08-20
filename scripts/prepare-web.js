const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const webDir = path.join(rootDir, 'web');
const iconDir = path.join(rootDir, 'icons');

fs.rmSync(webDir, { recursive: true, force: true });
fs.mkdirSync(webDir, { recursive: true });
fs.mkdirSync(path.join(webDir, 'icons'), { recursive: true });

for (const file of ['index.html', 'manifest.webmanifest', 'service-worker.js']) {
  fs.copyFileSync(path.join(rootDir, file), path.join(webDir, file));
}

for (const icon of fs.readdirSync(iconDir)) {
  fs.copyFileSync(path.join(iconDir, icon), path.join(webDir, 'icons', icon));
}
