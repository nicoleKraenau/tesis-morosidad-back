const path = require('path');

module.exports = {
  apps: [
    {
      name: "back",
      script: path.join(process.cwd(), 'node_modules', '.bin', 'npm'),
      args: "run prod",
    },
  ],
};