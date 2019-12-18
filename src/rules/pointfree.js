import { isIdentifier, isCallExpression } from "utils"
import { includes, concat } from "lodash/fp"

const defaultBlacklist = ["parseInt"]

export default {
  meta: {
    docs: {
      description: "Prefer pointfree definitions of functions",
      category: "General",
      recommended: false,
    },
    fixable: null,
    schema: [],
  },
  create: ({ report: contextReport, settings = {} }) => {
    const report = node => {
      contextReport({
        node,
        message: "Prefer pointfree definitions of functions",
      })
    }

    const userBlacklist = settings["pointfree/blacklist"] ?? []
    const completeBlacklist = concat(defaultBlacklist)(userBlacklist)

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

        if (
          isIdentifier(callExpression.callee) &&
          includes(callExpression.callee.name)(completeBlacklist)
        ) {
          return
        }

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
