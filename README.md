# sandbox-vue3

Sandbox developing with [Vue 3](https://vuejs.org/) in [Vite](https://vitejs.dev/).

✅ Node requirements : [14.4.0](https://nodejs.org/en/)

✅ NPM requirements : [6.14.5](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Modules

- State Manager : [Vuex](https://vuex.vuejs.org/)

- Unit Test : [Vitest](https://vitest.dev/)

- Code Cleaner : [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

- Component Library : [Element+](https://element-plus.org/)

## Recommended IDE Setup

- Install [VSCode](https://code.visualstudio.com/)

- Install [Volar extension](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) on VSCode (and disable Vetur)

- Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) on VSCode

- Change VSCode settings :

```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
```

## Project Install

```sh
npm install
```

### Project launch

```sh
npm run dev
```

### Clean with ESLint & Prettier

```sh
npm run clean
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```