// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const webpack = require('webpack');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // plugins: [
  //   function addPolyfills() {
  //     return {
  //         name: 'add-webpack-polyfills',
  //         configureWebpack() {
  //             return {
  //                 resolve: {
  //                     /*
  //                      * This loads the polyfills that we need
  //                      */
  //                     fallback: {
  //                         buffer: require.resolve('buffer/'),
  //                         util: require.resolve('util/'),
  //                     },
  //                 },
  //                 plugins: [
  //                     /*
  //                      * webpack.ProvidePlugin() will utilize the polyfills above and expose
  //                      * the necessary modules (e.g., `Buffer`, `TextDecoder`, etc.) automatically
  //                      * on the global object without needing to explicitly import them.
  //                      * See: https://webpack.js.org/plugins/provide-plugin/
  //                      */
  //                     new webpack.ProvidePlugin({
  //                         Buffer: ['buffer', 'Buffer'],
  //                     }),
  //                     new webpack.ProvidePlugin({
  //                         TextEncoder: ['util', 'TextEncoder'],
  //                     }),
  //                     new webpack.ProvidePlugin({
  //                         TextDecoder: ['util', 'TextDecoder'],
  //                     }),
  //                     new webpack.DefinePlugin({
  //                       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  //                       'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
  //                       'process.env.NODE_DEBUG': JSON.stringify(process.env.DEBUG),
  //                     })
  //                 ],
  //             };
  //         },
  //     };
  // },
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
