const isType = type => node => node.type === type

export const isIdentifier = isType("Identifier")
export const isCallExpression = isType("CallExpression")
export const isBlockStatement = isType("BlockStatement")
