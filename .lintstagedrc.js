module.exports = {
  "*.{js,jsx,ts,tsx}": ["yarn eslint src --fix", "yarn eslint src"],
  "*.{css,scss,sass}": [
    "npx stylelint '**/*.{scss,css}' --fix",
    "npx stylelint '**/*.{scss,css}'",
  ],
};
