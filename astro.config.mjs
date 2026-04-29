// @ts-check

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: {
      server: {
        allowedHosts: [
          'commit-designing-asin-funk.trycloudflare.com'
        ]
      }
    }
});