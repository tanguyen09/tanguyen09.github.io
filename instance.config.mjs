// Your personal site configuration.
// This file OVERLAYS the template defaults in `site.config.mjs` — only the
// fields set here override the defaults; everything else falls back.
// It is yours to edit, and stays safe when you pull template updates from the
// `upstream` remote. Fields marked TODO(andy) are placeholders to replace.

export default {
	// --- Core ---
	site: 'https://tanguyen09.github.io', // your live URL (GitHub Pages user site)
	title: 'Andy', // site title (browser tab + metadata)
	locale: 'en', // UI language pack: 'en' or 'zh-CN'
	timeZone: 'UTC', // TODO(andy): e.g. 'Asia/Ho_Chi_Minh' — affects how dates display

	// --- Links (shown in footer / about) ---
	social: {
		github: 'https://github.com/tanguyen09',
		// email: 'mailto:tuananhhk09@gmail.com', // uncomment to show a contact email
	},

	// --- Public identity + home-page copy ---
	brand: {
		persona: 'Andy', // the name shown as the author
		alternateNames: ['Andy'], // used for SEO structured data
		homeHeading: 'Andy', // large heading on the home page
		homeTitle: 'Andy — engineer & writer', // TODO(andy): your tagline (browser title)
		homeLede: 'Work, experiments, and short technical writing.', // TODO(andy): one line about you
		writingLede: 'Short technical notes on what I build and learn.', // intro on the writing index
		footerTagline: 'Built for humans and agents.',
		// The quick-question chips on the home "Ask" box:
		askChips: [
			{ label: 'Who is Andy?', query: 'Who is the author?' },
			{ label: 'Experience', query: "What is the author's work experience?" },
			{ label: 'Projects', query: 'What projects has the author built?' },
			{ label: 'Writing', query: 'What does the author write about?' },
		],
		projects: {
			heading: 'Projects',
			description: 'Selected projects and experiments.',
			lede: 'Things I have built, shipped, or explored.',
		},
		about: { crumb: 'About', pageName: 'About' },
	},
};
