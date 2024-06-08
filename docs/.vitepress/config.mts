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
      { text: 'Home', link: '/' }
    ],
    sidebar: [getSidebar("/docs", "/")],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Butcher-hub/XNotes' }
    ]
  }
})
