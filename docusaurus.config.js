const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://google.com",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/pandaslo",
  },
  email: {
    label: "Email",
    href: "mailto:info@pandaslo.tk",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  about: {
    label: "About",
    to: "about",
  },
  resume: {
    label: "Resume",
    href: "https://evantay.com/pdf/resume.pdf",
  },
};

module.exports = {
  title: "Nik",
  tagline:
    "DESCRIPTION",
  url: "https://pandaslo.tk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "PandaSLO",
  projectName: "pandaweb",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Nik",
      logo: {
        alt: "Nik",
        src: "img/logo.png",
        href: "https://evantay.com",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        { to: "about/", label: "About", position: "right" },
        {
          href: "https://evantay.com/pdf/resume.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
            internetProfiles.about,
            internetProfiles.resume,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
     // copyright: `<a href="https://evantay.com">Design by Evan Tay</a> • <a href="https://github.com/DigiPie/kaya-folio/commits/main">Updated ${new Date().toLocaleDateString()}</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/DigiPie/kaya-folio/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
};
