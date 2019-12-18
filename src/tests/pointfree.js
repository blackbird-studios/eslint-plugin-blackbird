import { RuleTester } from "eslint"

import rule from "rules/pointfree"

const tests = {
  valid: [
    { code: "const f = g" },
    { code: "const f = x => g(1, x)" },
    { code: "const f = x => g(x)(y)" },
    { code: "const f = x => parseInt(x)" },
    {
      code: "const f = x => g(x)",
      settings: { "pointfree/blacklist": ["g"] },
    },
  ],
  invalid: [
    {
      code: "const f = x => g(x)",
      errors: [
        {
          message: "Prefer pointfree definitions of functions",
          type: "ArrowFunctionExpression",
        },
      ],
    },
    {
      code: "const f = x => g(y)(x)",
      errors: [
        {
          message: "Prefer pointfree definitions of functions",
          type: "ArrowFunctionExpression",
        },
      ],
    },
  ],
}

const config = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
  },
}

tests.valid.forEach(test => Object.assign(test, config))
tests.invalid.forEach(test => Object.assign(test, config))

const ruleTester = new RuleTester()
ruleTester.run("pointfree", rule, tests)
