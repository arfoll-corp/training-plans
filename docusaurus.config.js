module.exports = {
  title: 'Plans Trail',
  url: 'https://arfoll-corp.github.io',
  baseUrl: '/trail-plans/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'arfoll-corp',
  projectName: 'training-plans',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
