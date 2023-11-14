import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import rehypeKatex from 'rehype-katex'

import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
	site: 'https://karl-mccarron.github.io/', // Write here your website url
	markdown: {
		remarkPlugins: ['remark-gfm', 'remark-smartypants', remarkMath, remarkReadingTime],
		rehypePlugins: [rehypeKatex,],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'material-theme-palenight',
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind()
	],
})
