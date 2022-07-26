//テスト用のシートの難易度NORMAL
//https://docs.google.com/spreadsheets/d/11cGw_2ZxroXRoDMjJVmyXEwG38Kz8Llojm-btS0CTIs/edit?pli=1#gid=461908147
//シート「【課題】ドリル」

// 書きを導入して結果が横に表示されるようにしている
// VSCodeにインストール後、Ctrl+Shift+Pを押してから「Quokka: Start On Current File」の実行が必要です
// https://quokkajs.com/

//■カテゴリ：関数

// 引数の文字数を返す関数を作る(引数に文字列以外が入力されたときにエラーが表示されるようにしよう)
const getStrLength = (str) => {
  return str.length;
};

console.log(getStrLength("apple"));

// 引数の最初の文字を返す関数を作る
// ①仮引数strを持つ関数getFirstCharを定義してください。
// ②仮引数strの最初の文字を返してください。
// ③関数getFirstCharに実引数appleを渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const getFirstChar = (str) => {
  return str.slice(0, 1);
};
// ③ログ出力してください。
console.log(getFirstChar("apple"));

// 引数の最後の文字を消す関数を作る
// ①仮引数strを持つ関数popStringを定義してください。
// ②仮引数strの最後の文字を消してください。
// ③関数popStringに実引数appleを渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const popString = (str) => {
  return str.slice(0, -1);
};
// ③ログ出力してください。
console.log(popString("apple"));

// 引数の最初の文字を消す関数を作る
// ①仮引数strを持つ関数removeFirstCharを定義してください。
// ②仮引数strの最初の文字を返してください。
// ③関数removeFirstCharに実引数appleを渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const removeFirstChar = (str) => {
  return str.slice(1);
};
// ③ログ出力してください。
console.log(removeFirstChar("apple"));

// true,falseを逆にする関数を作る
// ①仮引数validを持つ関数toggleBooleanを定義してください。
// ②仮引数validのboolean値を逆にしてください。
// ③関数toggleBooleanに実引数trueを渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const toggleBoolean = (valid) => {
  return !valid;
};
// ③ログ出力してください。
console.log(toggleBoolean(true));

// 配列の中身を結合してカンマ区切りの文字列にする関数を作る
// ①仮引数arrを持つ関数answerを定義してください。
// ②仮引数arrの配列の中身を結合してカンマ区切りの文字列して返してください。
// ③関数answerの実引数に[""apple"", ""orange"", ""melon""]を持つ配列を渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const answer = (arr) => {
  return arr.join(",");
};
// ③ログ出力してください。
console.log(answer(["apple", "orange", "melon"]));

//■カテゴリ：関数

// 文字列"あいうえお"に含まれる"あ"を"お"に変換する
// ①課題通りにstrの文字列を変換し、新しい文字列を定数newStrとして定義してください。
// ②strとnewStrの値をログで出力し、値が変更されていることを確認する。

const str1 = "あいうえお";
const newStr1 = str1.replace("あ", "お");

console.log(str1);
console.log(newStr1);

// 文字列"あああああ"に含まれる"あ"を全て"お"に変換する
// 正規表現を用いて解いてみましょう

const str2 = "あああああ";
const newStr2 = str2.replace(/あ/g, "お");

console.log(str2);
console.log(newStr2);

// 文字列"あいうえお"を1文字ずつ分けて配列に入れる
// ①stringメソッドのsplitを使用して、課題を解いてみましょう。
// ②スプレッド構文を使用して課題を解いてみましょう。
// ③正しく実行できているか、ログで出力して確認してください。

const str3 = "あいうえお";
const answer3 = str3.split("");
const answer4 = [...str3];

console.log(str3);
console.log(answer3);
console.log(answer4);

// 文字列"あいうえおかきくけこ"から"あいうえお"を抜き出した新しい文字列を定義し、ログに出力してください。

const str4 = "あいうえおかきくけこ";
const answer5 = str4.match(/かきくけこ/);
console.log(answer5[0]);

// 対象の文字列を指定した文字で分割し、分割した配列を一つづつログに表示させる。
// ①文字列メソッドのsplitを使用し、"" ""で定数greetingの文字列を分割し、新しい配列を作成する。
// ②配列メソッドのforEachを使用し、コンソールにログを分割した文字列をそれぞれ表示させる。

const greeting = "Hi my name is Bob!";
const splittedArray = greeting.split("");

splittedArray.forEach((str) => console.log(str));

// confirmメソッドを使用し、名前が間違っていないか確認するポップアップを表示させてましょう(テンプレートリテラルを使用して作成してください)

// const namae = "Scot";
// if (confirm(`${namae}さんで間違い無いですか？`)) {
//   console.log(`ようこそ${namae}さん`);
// } else {
//   console.log("もう一度正しい名前を入力してください");
// }

//■カテゴリ：オブジェクト

// オブジェクトのnameプロパティの値をログに出力しよう
// ①仮引数objectを持つ関数getObjectNameを定義してください。
// ②仮引数objectのnameプロパティの値を返してください。
// ③関数getObjectNameの実引数にobjectを渡して実行し、返り値をログ出力してください。

const object1 = { name: "Bob", age: 20 };
console.log(object1.name);

// オブジェクトのnameプロパティの値を関数を使ってログに出力しよう
// ①仮引数objectを持つ関数getObjectNameを定義してください。
// ②仮引数objectのnameプロパティの値を返してください。
// ③関数getObjectNameの実引数にobjectを渡して実行し、返り値をログ出力してください。

const object2 = { name: "Bob", age: 20 };

const getObjectName = (object) => {
  return object.name;
};
console.log(getObjectName(object2));

// オブジェクトのageプロパティの値を関数を使って、30に変更し、オブジェクトをログに出力して、ageプロパティが変更されているのを確認しよう
// ①仮引数numberとobjを持つ、関数changeAgeを定義してください
// ②仮引数objのageプロパティの値に対して、numberの値を代入してください。
// ③返り値に仮引数に渡されたobjを設定してください。

const object3 = { age: 35, weight: 80 };
const changeAge = (number, object) => {
  object.age = number;
  return object;
};

console.log(changeAge(40, object3));

// オブジェクトのプロパティの値を更新する②
// ①定数libraryの中のオブジェクトbookのyearプロパティの値を"10/22/1876"に更新してください。

const library = {
  book: {
    author: "Tom Sawyer",
    year: "11/12/2021",
  },
};

library.book.year = "10/22/1876";
console.log(library);

// 関数の引数にオブジェクトと値を渡すとプロパティweightとその値を追加する関数を作成し、ログに出力してみよう
// ①weightプロパティに""50kg""の値を持たせて、定数objectに追加してください。
// ②コンソール上にobjectを表示させ、weightが追加されていることを確認してください。

const person1 = { name: "Bob", age: 35 };

const addWeight = (obj, number) => {
  obj.weight = number;
  console.log(obj);
};
addWeight(person1, 40);

// オブジェクトのプロパティに複数の値を持つhobby配列を追加する
// ①定数personの中にhobbyプロパティを定義してください。
// ②hobbyプロパティの値にreadingとshoppingを格納した配列を追加する。
// ③それぞれコンソール上にreading, shoppingと出力されるようにログ出力してください。

const person = { name: "Bob", age: 35 };
person.hobby = ["reading", "shopping"];
console.log(person.hobby[0]);
console.log(person.hobby[1]);

// 引数にオブジェクトと消去したいプロパティを渡すことでオブジェクトのプロパティを削除することができる関数を作成し、ログ出力でプロパティが削除できたことを確認する
const person2 = { name: "Bob", age: 35 };

const deleteProperty = (obj, property) => {
  delete obj[property];
  console.log(obj);
};
deleteProperty(person2, "age");

//■カテゴリ：配列操作

// 配列の中で3文字の要素のみに絞り込んだ配列を取得する
// 配列arrayの要素の中で３文字である要素のみ取得してください。

const fruits = ["apple", "grape", "fig"];

const answer1 = fruits.filter((fruit) => fruit.length === 3);
console.log(answer1);

// オブジェクト配列からあるプロパティのみの配列を取得する
const fruits2 = ["apple", "grape", "fig"];

const answer2 = fruits.filter((fruit) => fruit === "apple");
console.log(answer2);

// 配列内の要素をすべて足し合わせる
// 配列arrayの要素を全て足し合わせて変数resultに返してください。

const array0 = [1, 2, 3, 4, 5];

const result = array0.reduce((sum, number) => sum + number);
console.log(result);

// スプレッド構文を用いて配列の要素を展開する③
// 配列arrayと配列array2をマージした新たな配列array3をスプレッド構文を使用して作成してください。

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2];
console.log(array3);

//■カテゴリ：配列オブジェクト操作

// 配列の中の2番目のオブジェクト要素を取得してログ出力する
// ログに配列の2番目の要素を出力してください。

const object4 = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Michael", age: 15 },
];

console.log(object4[1]);

// 配列内のオブジェクトのidプロパティが2のオブジェクト要素を取得する。
// ①配列メソッドのfindを使用し、条件に最初に一致した要素を定数として定義する。
// ②定義した定数をログで出力し、確認する

const object5 = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Michael", age: 15 },
];

const answer55 = object5.find((element) => element.id === 2);
console.log(answer55);

// 配列内のオブジェクトのageプロパティが15のオブジェクト要素を全て取得する。
// ①配列メソッドのfindを使用し、条件に最初に一致した要素を定数として定義する。
// ②定義した定数をログで出力し、確認する

const object6 = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Michael", age: 15 },
];

const answer6 = object6.filter((element) => element.age === 15);
console.log(answer6);

// 配列内のオブジェクトのageプロパティが15の要素を削除する

const object7 = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Michael", age: 15 },
];

const filteredObject = object7.filter((element) => element.age !== 15);
console.log(filteredObject);

//■カテゴリ：スプレッド構文

// 特定のプロパティの値だけ更新して、新しいオブジェクトを作成しよう
// ★解答わからず

const object8 = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Michael", age: 15 },
];
const object9 = [...object8];
console.log(object9);

//■カテゴリ：fetch, filter

// JSONplacehokderのダミーデータをfetchメソッドを使用してダミーデータを取得しよう
// ①""https://jsonplaceholder.typicode.com/users""
// ②①のURLを使ってダミーデータを取得し、コンソールログに表示させてください。

// ★fetch is not definedで実行できず

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// JSONplacehokderのダミーデータを使って、idが5のデータをログに表示させてみよう
// ①"https://jsonplaceholder.typicode.com/users"

// ★回答できず

//■カテゴリ：その他

// 選択された言語によって、どのURLにリダイレクトするのかを決める関数を作成してください。
//     languageがEnglishの場合→example.com/en
//     languageがJapaneseの場合→example.com/ja
//     languageがオーストラリアにおける英語の場合→example.com/en-au
// 上記の３のどれでもない場合、example.comを返してください。

// ①仮引数languageを持つ関数redirectUrlを定義してください。
// ②仮引数languageの言語によって、どのURLにリダイレクトするのかを決める関数を作成してください。
// ③関数redirectUrlに実引数""English""を渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
function redirectUrl(language) {
  let url = "www.example.com";
  switch (language) {
    case "English":
      return url + "/en";
      break;
    case "Japanese":
      return url + "/ja";
      break;
    case "English(Australia)":
      return url + "/en-au";
      break;
    default:
      return url;
  }
}

// ③ログ出力してください。
console.log(redirectUrl("English"));
console.log(redirectUrl("Japanese"));
console.log(redirectUrl("English(Australia)"));
console.log(redirectUrl("Chinese"));
