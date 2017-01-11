module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    // 可以使用 console
    "no-console": "off",

    // 使用 ===
    "eqeqeq": "error",

    // 驼峰式命名
    "camelcase": "error",

    // 两个空格缩进
    "indent": [
      "error",
      2
    ],

    // 使用单引号
    "quotes": [
      "error",
      "single"
    ],

    // 语句强制分号结尾
    "semi": [
      "error",
      "always"
    ],

    // 函数调用时，函数名与()之间不能有空格
    "no-spaced-func": 2,

    // 一行结束后面不要有空格
    "no-trailing-spaces": 1,

    // 对象字面量中冒号的前后空格
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }],

    // 大括号风格
    "brace-style": [1, "1tbs"],

    // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-cap": 2,

    // 不以新行开始的块 { 前面要不要有空格
    "space-before-blocks": [1, "always"],

    // 函数定义时括号前面不要有空格
    "space-before-function-paren": [1, "never"],

    // 小括号里面要不要有空格
    "space-in-parens": [1, "never"],

    //注释风格要不要有空格什么的
    "spaced-comment": 1,
  }
};