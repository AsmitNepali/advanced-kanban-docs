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
          { 
            text: '🎨 Advanced Configuration',
            collapsed: true,
            items: [
              { text: 'Custom Card Component', link: '/advanced-configuration/custom-card-component' },
              { text: 'Custom Filter Form', link: '/advanced-configuration/custom-filter-form' },
              { text: 'Header Actions', link: '/advanced-configuration/header-actions' },
              { text: 'Record Actions', link: '/advanced-configuration/record-actions' },
              { text: 'Column Header Actions', link: '/advanced-configuration/column-header-actions' }
            ]
          },
          { 
            text: '🔧 Column Configuration',
            collapsed: true,
            items: [
              { text: 'Basic Component', link: '/column-configuration/basic-component' },
              { text: 'Advanced Column with Transitions', link: '/column-configuration/advanced-column' },
              { text: 'Hidden Column', link: '/column-configuration/hidden-column' },
            ]
          }
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
