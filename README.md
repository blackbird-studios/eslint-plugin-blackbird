# eslint-plugin-blackbird

Blackbird ESLint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-blackbird`:

```
$ npm install eslint-plugin-blackbird --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-blackbird` globally.

## Usage

Add `blackbird` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "blackbird"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "blackbird/pointfree": "error"
    }
}
```

## Supported Rules

* [pointfree](docs/rules/pointfree.md)
