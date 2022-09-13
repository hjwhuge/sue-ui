# 🎉 Sue-UI

<p align="center">
    <img src="https://img.shields.io/npm/v/sue-ui?color=c95f8b&amp;label=" alt="NPM version">
    <img src="https://img.shields.io/github/license/hjwhuge/sue-ui?color=red"/>
</p>

## Features

- ⚡️ Vue 3, Vite 3, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prettier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions

## Install

```bash
pnpm i sue-ui
```

## Quick Start

```js
import Vue from "vue";
import SueUI from "sue-ui";

const App = {
  template: `
        <SButton/>
    `,
};

createApp(App).use(SueUI).mount("#app");
```

## Browser Support

Modern browsers and Internet Explorer 10+.

## LICENSE

[MIT](LICENSE)

Copyright (c) 2022 - present hjwhuge
