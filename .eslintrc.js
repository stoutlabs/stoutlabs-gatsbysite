module.exports = {
  "extends": ["wesbos"],
  "rules": {
    "quotes": [
      2,
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "singleQuote": false,
        "printWidth": 100
      }
    ],
    "react/prop-types": [
      1,
      {
        "skipUndeclared": true
      }
    ],
    "react/no-danger": [0],
    "react/state-in-constructor": [0],
    "react/jsx-props-no-spreading": [0],
    "react/destructuring-assignment": [1],
    "no-nested-ternary": [0],
    "no-plusplus": [0],
    "camelcase": [0]
  }
}