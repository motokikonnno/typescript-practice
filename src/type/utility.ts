// デフォルトで用意されている型のこと
// よく使われている型を記述している

export type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

// Readonlyを使用するとUser型の中身を変更することができない
type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: "mm",
  age: 20,
};
// 以下のように変更しようとするとエラーが起きる
// user.age = 30

// Partialを使用すると全てオプショナルにしてくれる
type PartialUser = Partial<User>;

// Requiredを使用すると全て必須と定義することができる
type RequiredUser = Required<User>;

// Extract
// 二つの型を指定して、互換性のある型だけを抽出してくれる
type Foo = Extract<string | number, string>;

// Exclude
// 二つの型を指定して、互換性のないものを抽出してくれる
type KK = Exclude<"aa" | 0 | false, string | number>;

// NonNullable
// nullやundefinedを排除してくれる
type N = NonNullable<string | null | undefined>;
