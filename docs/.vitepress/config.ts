import { demoBlockPlugin } from "vitepress-theme-demoblock";
const nav = [
  { text: "Guide", link: "/guide" },
  {
    text: "Dropdown Menu",
    items: [
      {
        // Title for the section.
        text: "Section A Title",
        items: [
          { text: "Section A Item A", link: "..." },
          { text: "Section B Item B", link: "..." },
        ],
      },
    ],
  },
  {
    text: "Dropdown Menu",
    items: [
      {
        // You may also omit the title.
        items: [
          { text: "Section A Item A", link: "..." },
          { text: "Section B Item B", link: "..." },
        ],
      },
    ],
  },
];
const sidebar = [
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
];

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
