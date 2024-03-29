const path = require('path');

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:mdx/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": "off",
    "@typescript-eslint/semi": "error"
  },
  "settings": {
    "import/resolver": {
      "eslint-import-resolver-webpack": {
        "config": path.join(__dirname, "./webpack.development.js")
      }
    }
  },
  "overrides": [
    {
      "files": [
        "*.mdx"
      ],
      "rules": {
        "@typescript-eslint/semi": "off"
      }
    },
    {
      "files": [
        "webpack.development.js",
        "webpack.production.js",
        "webpack.common.js"
      ],
      "env": {
        "node": true
      },
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  "ignorePatterns": [
    "dist",
    "node_modules"
  ]
};
