// 空の型を定義する場合の書き方
export const a: Record<string, unknown> = {
  d: "ccc",
};
// こちらの方が拡張性が高いため、使った方がいい
const b: { [key: string]: unknown } = {
  c: "ggg",
};
