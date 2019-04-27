module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-angle-bracket-type-assertion": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-triple-slash-reference": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "error",
  },
};
