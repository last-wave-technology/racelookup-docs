import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,

  lang: 'en-US',

  title: "Racelookup Docs",
  description: "Official Docs of Racelookup",

  sitemap: {
    hostname: 'https://docs.racelookup.com',
  },

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/logo.jpg',
      alt: 'Racelookup Logo'
    },
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/teams' },
      { text: 'Audience', link: '/runner' }
    ],

    sidebar: [
      {
        text: 'Audience',
        items: [
          { text: 'Runner', link: '/runner' },
          { text: 'Race DIrector', link: '/race-director' }
        ]
      }
    ],

    footer: {
      message: 'Racelookup - Go Further with RaceLookup.',
      copyright: 'Copyright © 2025 All rights are reserved.'
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/RaceLookup' },
      { icon: 'facebook', link: 'https://www.facebook.com/racelookup/' },
      { icon: 'twitter', link: 'https://www.twitter.com/racelookup' }
    ],

    search: {
      provider: 'local'
    },
  },
  vite: {
    build: {
      minify: 'terser',
    },
  },
})
