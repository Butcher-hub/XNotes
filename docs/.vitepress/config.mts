import { defineConfig } from 'vitepress'
import { getSidebar } from "./utils/getSidebar";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XNotes",
  description: "XNotes",
  base: '/XNotes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [getSidebar("/docs", "/")],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
