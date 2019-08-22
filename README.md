# tryBabel7

1. 原生动态引入的功能 import().then(resolve(), reject())
2. 官方推荐使用babel.config.js来编写配置，而不推荐用 .babelrc
3. @babel/preset-env 预设，使支持大部分 ES6 语法
4. 推荐preset添加 `useBuiltIns: "usage"`选项，[原因](https://babeljs.io/docs/en/babel-preset-stage-0#usebuiltins)
