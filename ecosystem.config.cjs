// Import the required modules using ESM syntax
const path = require('path');

// Export the configuration object
module.exports = {
  apps: [
    {
      name: "back",
      script: path.join(process.cwd(), 'node_modules', '.bin', 'npm'),
      args: "run prod",
    },
  ],
};