import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './backend/schema.yml',
  output: {
    path: 'frontend/js/api',
    format: 'prettier',
  },
  plugins: ['@hey-api/client-axios'],
  useOptions: true,
});
