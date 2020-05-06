const remarkImport = require("remark-code-import");

module.exports = {
  title: "EmbraceSQL",
  tagline: "You type the SQL, we'll do the REST",
  url: " https://civitaslearning.github.io/embrace-sql/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "civitaslearning", // Usually your GitHub org/user name.
  projectName: "embrace-sql", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "EmbraceSQL",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/civitaslearning/embrace-sql",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Civitas Learning, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          remarkPlugins: [remarkImport],
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/civitaslearning/embrace-sql/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
