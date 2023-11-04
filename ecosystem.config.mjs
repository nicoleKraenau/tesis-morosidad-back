// Import the required modules using ESM syntax
import { join } from 'path';

// Export the configuration object
export default {
  apps: [
    {
      name: "back",
      // Use the full path to the npm binary
      script: join(process.cwd(), 'node_modules', '.bin', 'npm'),
      args: "run prod",
    },
  ],
};