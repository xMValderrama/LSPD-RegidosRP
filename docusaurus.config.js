// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LSPD - RegidosRP',
  tagline: 'Documentación y Reglamentos Oficiales del Los Santos Police Department.',
  favicon: 'img/favicon.ico', // Usando tu favicon.ico

  future: {
    v4: true, 
  },

  // Configuración de Despliegue para GitHub Pages
  url: 'https://xMValderrama.github.io',
  baseUrl: '/LSPD-RegidosRP/',

  organizationName: 'xMValderrama', 
  projectName: 'LSPD-RegidosRP', 
  deploymentBranch: 'gh-pages', // Rama donde se subirá el sitio compilado
  
  trailingSlash: false, 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Configuración de Idioma
  i18n: {
    defaultLocale: 'es', 
    locales: ['es'], 
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Enlaces de Edición apuntando a tu repositorio
          editUrl:
            'https://github.com/xMValderrama/LSPD-RegidosRP/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Enlaces de Edición apuntando a tu repositorio
          editUrl:
            'https://github.com/xMValderrama/LSPD-RegidosRP/tree/main/',
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
      image: 'img/docusaurus-social-card.jpg', // Puedes reemplazar esta imagen
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'LSPD RegidosRP',
        logo: {
          alt: 'LSPD Logo',
          // Usando tu logo-lspd.png
          src: 'img/logo-lspd.png', 
          srcDark: 'img/lspd_dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            // ******* ¡CORRECCIÓN! CAMBIADO DE 'tutorialSidebar' A 'lspdSidebar' *******
            sidebarId: 'lspdSidebar',
            position: 'left',
            label: 'Reglamentos',
          },
          {to: '/blog', label: 'Anuncios', position: 'left'},
          {
            // Enlace directo a tu repositorio
            href: 'https://github.com/xMValderrama/LSPD-RegidosRP', 
            label: 'Código Fuente',
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
                // Aquí también es buena práctica usar el enlace al índice de la nueva documentación
                label: 'Documentación Oficial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Discord Oficial RegidosRP',
                href: 'https://discord.gg/your-community-invite', // REEMPLAZA ESTE ENLACE
              },
            ],
          },
          {
            title: 'Contacto',
            items: [
              {
                label: 'Anuncios y Novedades',
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