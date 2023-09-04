// 空の型を定義する場合の書き方
export const a: Record<string, unknown> = {
  d: "ccc",
};
// こちらの方が拡張性が高いため、使った方がいい
const b: { [key: string]: unknown } = {
  c: "ggg",
};

// 絞り込み
if ("d" in a) {
  console.log(a.d);
}

// interfaceとtypeの違い

// interface:
// ・オブジェクトしか定義できない(配列は無理)
// ・同じ名前の方が重複してもエラーが出ない(勝手に合体される)
// ・extendsを使用して継承する

// type:
// ・なんでも定義できる
// ・&を使用して継承する

type animals = "dog" | "cat";

type Foo = {
  // animalsが追加されるたびに、いちいち書き足さなくていい
  // interfaceではこれが使えない(mapped types)
  [key in animals]: number;
};

const foo: Foo = {
  dog: 1,
  cat: 2,
};

// typeofの使い方
const double = (x: number | string) => {
  // typeofを使用して絞り込み
  if (typeof x === "string") {
    return Number(x) * 2;
  }
  return x * 2;
};

// keyofの使い方
type obj = {
  foo: string;
  bar: string;
};
// keyofは型に対して使うもの
type key = keyof obj;
// fooかbarしか格納できない
const hoge: key = "bar";

// typeofとkeyofの組み合わせ
const obj1 = {
  foo: "aaa",
  bar: "ccc",
};

type key1 = keyof typeof obj1;

const test = (x: keyof typeof obj1) => {
  return;
};

// ダウンキャスト
// 型をもっと詳細にできるという役割
const theme = {
  color: "red" as "red",
  // 上記と同じ結果になる
  colors: "red" as const,
};

// こういう書き方もある(やっていることは上記と同じ)
const theme2 = {
  color: "red",
  back: "blue",
} as const;

// 実戦では定数ファイルやmockデータを定義するときによく使われる
const PATH = {
  INDEX: "/",
  LOGIN: "/login",
} as const;

// アップキャスト
// 型の抽象度を上げる役割
// as anyやas unknownなど
