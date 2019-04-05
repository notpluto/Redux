# Nano React Boilerplate

Step 1: Clone this repo
```
git clone --depth=1 https://github.com/nnnkit/nano-react.git sample
cd sample
```

Step 2: Install
```
npm install
```

Step 3: Start

```
npm run dev
```
Step 4:

For ESLint and Prettier to work together you need to install ESLint extension on your IDE.

## With VS Code

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Open User Settings and add these to user settings.
  ```js
    // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "eslint.autoFixOnSave": true,
  ```

### Includes

* React 16.8
* ReactDOM
* SCSS / SASS
* ES6 / ES7
* Proposal Class Properties
* Webpack
* Babel
* React Hot Loader
* ESLint + Prettier