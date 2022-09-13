import { demoBlockPlugin } from "vitepress-theme-demoblock";
const nav = [
  { text: "指南", link: "/guide/" },
  { text: "组件", link: "/components/button/" },
];
const sidebar = {
  "/guide/": [
    {
      text: "基础",
      items: [
        // This shows `/guide/index.md` page.
        { text: "Index", link: "/guide/" }, // /guide/index.md
        { text: "安装", link: "/guide/install" }, // /guide/install.md
        { text: "快速开始", link: "/guide/start" }, // /guide/start.md
      ],
    },
    {
      text: "进阶",
      items: [],
    },
  ],
  "/components/": [
    {
      text: "介绍",
      collapsible: true,
      items: [{ text: "快速开始", link: "/" }],
    },
    {
      text: "通用",
      collapsible: true,
      items: [{ text: "SButton 按钮", link: "/components/button/" }],
    },
    { text: "导航", items: [] },
    { text: "反馈", items: [] },
    { text: "数据录入", items: [] },
    { text: "数据展示", items: [] },
    { text: "布局", items: [] },
  ],
};

const config = {
  title: "🔨  Sue-UI",
  description: "Vue3 组件库",
  lastUpdated: true,
  cleanUrls: "without-subfolders",

  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present hjwhuge",
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/hjwhuge/sue-ui" },
    ],
    nav,
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin);
    },
  },
};

export default config;
