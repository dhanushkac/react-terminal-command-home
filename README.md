# [React Terminal Command](https://github.com/dhanushkac/react-terminal-command) Home Page

> A customizable terminal command viewer in React.

[![NPM](https://img.shields.io/npm/v/react-terminal-command.svg)](https://www.npmjs.com/package/react-terminal-command)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/79eccce4-3593-4419-8799-4d35e89d4aea/deploy-status)](https://app.netlify.com/sites/react-terminal-command/deploys)

## Install

`yarn` or `npm install` in the root directory.

---

## Library Install

Using yarn

```bash
yarn add react-terminal-command
```

Using npm

```bash
npm install react-terminal-command
```

## Basic Usage

```tsx
import React, { Component } from 'react';

import { ReactTerminalCommand } from 'react-terminal-command';
import 'react-terminal-command/dist/index.css';

class Example extends Component {
  render() {
    return (
      <ReactTerminalCommand command="yarn install react-terminal-command" />
    );
  }
}
```

## Advanced Usage

```tsx
import React, { Component } from 'react';

import { ReactTerminalCommand, CommandColor } from 'react-terminal-command';
import 'react-terminal-command/dist/index.css';

class Example extends Component {
  render() {
    return (
      <ReactTerminalCommand
        command="yarn install react-terminal-command"
        color={CommandColor.PURPLE}
        withDark
      />
    );
  }
}
```

## Features

- Switchable dark mode and light mode
- Command copy option
- Container preffered width
- Several command colors to choose from

## Props

| Name     | Type    | Description                                            |
| :------- | :------ | :----------------------------------------------------- |
| command  | String  | **Required.** The command to display.                  |
| withDark | boolean | Enable/Disable dark mode. Default: false               |
| color    | Color   | Primary color for terminal command. Default: Color.RED |

## Contribute

1. Submit an issue
2. Fork the repository
3. Create a dedicated branch (never ever work in master)
4. The first time, run command: `yarn` or `npm install` into the directory
5. Run `yarn run build` or `npm run build`
6. Link lib locally with `yarn link` or `npm link`
7. Fix bugs or implement features
8. Always write tests

## Run Tests

Using yarn

```bash
yarn run test:watch
```

Using npm

```bash
npm run test:watch
```

## License

MIT © [dhanushkac](https://github.com/dhanushkac)

## Related Projects

Angular Terminal Command - coming soon

Vue Terminal Command - coming soon
