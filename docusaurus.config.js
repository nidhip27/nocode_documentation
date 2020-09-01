module.exports = {
  title: "Storylens",
  tagline: "A NoCode Developmer Platform",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "log",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Storylens Docs",
      logo: {
        alt: "NoCode Documentation for Storylens",
        src:
          "https://res.cloudinary.com/storylens/image/upload/q_auto/v1597498807/static/untitled_4.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://app.storylens.io/a",
          label: "Dashboard",
          position: "left",
        },
        {
          href: "https://github.com/storylens",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Basics",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://fb.com/storylens",
            },

            {
              label: "Twitter",
              href: "https://twitter.com/storylensio",
            },
          ],
        },

        {
          title: "About",
          items: [
            {
              label: "About us",
              href: "https://storylens.io/about",
            },

            {
              label: "Contact",
              href: "https://storylens.io/contact",
            },
          ],
        },
      ],
      copyright: `Copyright 2020, Storylens`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
