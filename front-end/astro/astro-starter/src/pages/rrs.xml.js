import rrs from '@astrojs/rss';

export const get = () => rrs({
  title: 'rafael reyes | blog',
  description: 'My journey learning Astro',
  site: 'https://rafael.netlify.app',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`
});