// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bsuli.infinitecoder.org',
  build: { inlineStylesheets: 'always' },
  image: { service: passthroughImageService() },
});
