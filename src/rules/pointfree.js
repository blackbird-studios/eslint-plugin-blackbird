import { isIdentifier, isCallExpression } from "utils"

export default {
  meta: {
    docs: {
      description: "Prefer pointfree definitions of functions",
      category: "Fill me in",
      recommended: false,
    },
    fixable: null,
    schema: [],
  },
  create: context => {
    const report = node => {
      context.report({
        node,
        message: "Prefer pointfree definitions of functions",
      })
    }

    return {
      ArrowFunctionExpression: node => {
        if (node.params.length !== 1) {
          return
        }

        const param = node.params[0]

        if (!isIdentifier(param)) {
          return
        }

        if (!isCallExpression(node.body)) {
          return
        }

        const callExpression = node.body

        if (callExpression.arguments.length !== 1) {
          return
        }

        const argument = callExpression.arguments[0]

        if (!isIdentifier(argument)) {
          return
        }

        if (param.name !== argument.name) {
          return
        }

        report(node)
      },
    }
  },
}
