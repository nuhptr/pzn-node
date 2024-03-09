## Development Dependencies

- [jest](https://jestjs.io/) - npm install jest --save-dev
  run the tests with change script - `"test": "jest"`
- [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env) - npm install @babel/preset-env --save-dev
- [babel-jest](https://www.npmjs.com/package/babel-jest) - npm install babel-jest --save-dev (help to use module system in jest)

## Setup Jest in package.json

`npx jest --init`

- enable `verbose: true`
- transform change to `^.+\\.jsx?$": "babel-jest"` if you want

create babel.config.js file

```js
{
  "presets": ["@babel/preset-env"]
}
```
