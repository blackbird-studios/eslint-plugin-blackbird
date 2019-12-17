module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  plugins: ["known-imports"],
  extends: ["plugin:prettier/recommended", "plugin:known-imports/recommended"],
  rules: {
    "object-shorthand": ["error", "properties"],
    "dot-notation": "error",
    "arrow-body-style": ["error", "as-needed"],
    "prefer-template": "error",
    "no-duplicate-imports": "error",
    "prefer-const": "error",
    "no-eq-null": "off"
  },
  settings: {
    "known-imports/blank-line-before-local-imports": true
  }
}

