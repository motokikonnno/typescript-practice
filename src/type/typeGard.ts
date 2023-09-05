// オプショナルを型ガード
export const foo = (value?: string) => {
  if (!value) {
    return;
  }
  return value;
};

// ユーザー定義の型ガード
type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

// is
// 返り値は必ずUserA型であることを証明できる
// そのため、関数の返り値もUserAであることを証明する処理を書かなければならない
const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === "ja";
};

const bar = (value: any) => {
  if (isUserA(value)) {
    return value;
  }
  return value;
};

const users: (UserA | UserB)[] = [
  {
    name: "田中",
    lang: "ja",
  },
  {
    name: "山田",
    lang: "ja",
  },
  {
    name: "ジョニー",
    lang: "en",
  },
];

// filter関数で型を絞り込むことができない(仕様が不完全?)
// 変数uはUserAになるはずだが、UserBもOKになってしまっている
const u = users.filter((user) => user.lang === "ja");

// こうすることで変数gはUserAのみに絞ることができる
const g = users.filter(isUserA);
