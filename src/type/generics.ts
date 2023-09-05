// ジェネリクス
// 場合によって、様々な型に変更することができる
export type Foo<T> = {
  value: T;
};

const foo: Foo<string> = {
  value: "",
};

// 初期値を入れる
type Foo1<T = string> = {
  name: T;
};

// extends
// extendsで指定した型と互換性のあるものしか指定できない
// 素のジェネリクスでは自由すぎるため、ある程度、型を絞りたいときに使用する
type Foo2<T extends string> = {
  value: T;
};
// extendsでstringを指定しているため、文字列かstringしか指定できなくなる
const hoge: Foo<string | "hoge"> = {
  value: "",
};

// 初期値とextendsを同時に併用することもできる
type Foo3<T extends string | number = string> = {
  value: T;
};

// 関数のジェネリクス
const fooa = <T, K>(obj: T, key: K) => {
  return;
};

// Lookup Types
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

// T[K]とすることで、fooかbarかbasの値の型が取得できる
const setProperty = <T, K extends keyof T>(obj: T, key: K, value: T[K]) => {
  obj[key] = value;
};

const obj = {
  foo: 1,
  bar: 2,
  bas: 3,
};
// 3が取得できる
const hh = getProperty(obj, "bas");
setProperty(obj, "bar", 100);
