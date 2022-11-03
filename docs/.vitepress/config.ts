
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ]
}

export default config