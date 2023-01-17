git add .
TIMEOUT /T 3
git commit -m "npm publish"
TIMEOUT /T 5
npm version patch
TIMEOUT /T 8
git push