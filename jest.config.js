import path from 'node:path';
import url from 'node:url';

import { createJestStencilPreset } from 'jest-stencil-runner';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const stencilJestConfig = createJestStencilPreset({
  rootDir: __dirname,
  testMatch: [
    '**/__tests__/**/*.(tsx|js)',
    '**/*.(test|spec).(tsx|js)'
  ]
});

console.log(stencilJestConfig);

export default stencilJestConfig;
