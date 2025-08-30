import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/",
  title: " ",
  description: "A powerful and flexible premium Kanban board plugin for Filament 3.x that provides a complete drag-and-drop task management solution with advanced features like workflow transitions, pagination, search, filtering, and custom actions.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '💰 Pricing & Licensing', link: '/pricing-licensing' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Advanced Kanban?', link: '/introduction/what-is-advanced-kanban' },
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: '💰 Pricing & Licensing', link: '/pricing-licensing' },
          { text: '📦 Installation', link: '/installation' },
          { 
            text: 'Setup',
            collapsed: true,
            items: [
              { text: 'Quick Start', link: '/quick-start' },
              { text: 'MRR Kanban Setup', link: '/mrr-kanban-setup' }
            ]
          },
            {
                text: 'Kanban',
                collapsed: true,
                items: [
                    { text: 'Search', link: '/kanban/search' },
                    { text: 'Filters', link: '/kanban/filters' },
                    {
                        text: 'Columns',
                        link: '/kanban/columns/overview',
                        collapsed: true,
                        items: [
                            { text: 'Overview', link: '/kanban/columns/overview' },
                            { text: 'Transitions', link: '/kanban/columns/transitions' },
                            { text: 'Card Lock', link: '/kanban/columns/lock-card' },
                            { text: 'Components', link: '/kanban/columns/components' },
                        ]
                    },
                    { text: 'Actions', link: '/kanban/actions' },
                ],
            },
          { 
            text: '📚 API Reference',
            collapsed: true,
            items: [
              { text: 'Kanban Class Options', link: '/api-reference/kanban-options' },
              { text: 'KanbanColumn Options', link: '/api-reference/kanban-column-options' }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AsmitNepali/advanced-kanban' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Asmit Nepali'
    },
  }
})
