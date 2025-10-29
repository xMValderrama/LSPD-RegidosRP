// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Foro Oficial LSPD - RegidosRP',
  tagline: 'Los Santos Police Department',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://xMValderrama.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/LSPD-RegidosRP/',
  
  // === INICIO DE CONFIGURACIÓN CLAVE PARA DESPLIEGUE ===
  
  // GitHub pages deployment config.
  organizationName: 'xMValderrama', // Tu nombre de usuario.
  projectName: 'LSPD-RegidosRP', // Tu nombre de repositorio.
  
  // **PROPIEDAD AGREGADA/CONFIRMADA:** Define la rama donde se subirá el sitio compilado.
  deploymentBranch: 'gh-pages', 
  
  // === FIN DE CONFIGURACIÓN CLAVE PARA DESPLIEGUE ===

  onBrokenLinks: 'throw',

  // Sugerencia para evitar un warning, aunque no es crítica por ahora
  trailingSlash: false, 

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es', // Cambiado a español
    locales: ['es'],     // Solo usamos español por ahora
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Corregido: apunto al repositorio correcto
          editUrl:
            'https://github.com/xMValderrama/LSPD-RegidosRP/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Corregido: apunto al repositorio correcto
          editUrl:
            'https://github.com/xMValderrama/LSPD-RegidosRP/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'LSPD RegidosRP', // Título corregido
        logo: {
          alt: 'LSPD Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Reglamentos', // Etiqueta corregida
          },
          {to: '/blog', label: 'Anuncios', position: 'left'}, // Etiqueta corregida
          {
            // Corregido: apunto al repositorio correcto
            href: 'https://github.com/xMValderrama/LSPD-RegidosRP', 
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Reglamento Base',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Discord Oficial', // Cambiar a tu enlace de Discord
                href: 'https://discordapp.com/invite/BWTC7gCRKd', 
              },
            ],
          },
          {
            title: 'Más Información',
            items: [
              {
                label: 'Blog/Anuncios',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xMValderrama/LSPD-RegidosRP',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LSPD - RegidosRP. Creado Por xValderrama.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;