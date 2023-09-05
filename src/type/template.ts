// TemplateLiteralType
export type Hex = `#${string}`;
// 人によって#を省略するしないが分かれるので、上記の書き方をすると
// #が必須になる
const red: Hex = "#ff0000";
