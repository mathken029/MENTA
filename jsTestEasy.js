//テスト用のシート
//https://docs.google.com/spreadsheets/d/11cGw_2ZxroXRoDMjJVmyXEwG38Kz8Llojm-btS0CTIs/edit?pli=1#gid=461908147
//シート「【課題】ドリル」

//■カテゴリ：変数

// 変数を定義してください。
// ①値に""りんご""を持つ、定数appleを定義してください。
// ②定義した定数appleの値をログで確認してください。

const apple = "りんご";
console.log(apple);

//■カテゴリ：関数

// 引数を2倍にする関数を作る
// ①値に70を持つ、変数weightを定義してください。
// ②定義したweightに60を代入してください。
// ③定義したweightの値をログで確認してください。


// 引数を+1する関数を作る
// "①仮引数numを持つ関数addOneを定義してください。
// ②仮引数を+1して返してください。
// ③関数addOneに実引数3を渡して実行し、返り値をログ出力してください。"

// ①②に従って関数を定義してください。
const addOne = () => {
  // ここに処理を書いてください。
}
// ③ログ出力してください。
console.log()


//引数を-1する関数を作る


// 引数の文字数が10文字未満ならtrue,10文字以上だったらfalseを返す関数を作る
// ①仮引数strを持つ関数judgeLengthを定義してください。
// ②仮引数strの文字数が10文字未満ならtrue,10文字以上だったらfalseを返してください。
// ③関数getLengthに実引数""apple""を渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const judgeLength = () => {
  // ここに処理を書いてください。

}
// ③ログ出力してください。
console.log()


//引数の文字数が5文字以上かつ10文字未満ならtrueを返す関数を作る


//引数が文字列ならtrue、それ以外ならfalseを返す関数を作る
//①仮引数parameterを持つ関数isStringを定義してください。
//②仮引数parameterが文字列ならtrue、それ以外ならfalseを返してください。
//③関数isStringに実引数3を渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const isString = () => {
  // ここに処理を書いてください。

}
// ③ログ出力してください。
console.log()

//2つの引数を合計する関数を作る
//①仮引数num1, num2を持つ関数getSumを定義してください。
//②仮引数num1とnum2の合計値を返してください。
//③関数getSumに実引数3, 2を渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const getSum = () => {
  // ここに処理を書いてください。

}
// ③ログ出力してください。
console.log()


//2つの引数の文字列を結合する関数を作る
// ①仮引数firstName, lastNameを持つ関数getFullNameを定義してください。
// ②仮引数firstNameとlastNameを結合した文字列を返してください。フルネームなので間に半角スペースを付け加えてください。
// ③関数getFullNameに実引数""Tanaka"", ""Taro""を渡して実行し、返り値をログ出力してください。

// ①②に従って関数を定義してください。
const getFullName = (){
  // ここに処理を書いてください。

}
// ③ログ出力してください。
console.log()

//■カテゴリ：文字列

//文字列"あいうえお"を変数で定義する。
//①定数answerに代入してください。



//文字列"あいうえお"を"かきくけこ"に変更する
//①変数answerにあいうえおを格納してください。
//②変数answerの値あいうえおをかきくけこに変更してください。

let answer = 
answer = 

//文字列"あいうえお"と"かきくけこ"の2つの文字列を連結する。
// ①定数str1にあいうえおを代入してください。
// ②定数str２にかきくけこを代入してください。
// ③定数answerにstr1とstr2を連結した値を代入してください。

const answer = "あいうえお"
// const str1 = 
// const str2 = 
// const answer = 


//■カテゴリ：文字列操作

//文字列strの部分文字列を返してください。
const str = 'Menta';

// Menの部分だけコンソールに出力してください

const alphabet = "abcde";

// 最後のeだけコンソールに出力してください


 console.log(str.substring());
 console.log(alphabet.substring());

 //confirmメソッドを使用し、名前が間違っていないか確認するポップアップを表示させてましょう


 //■カテゴリ：オブジェクト

 //空のオブジェクトを定義する
 //①定数personにオブジェクトを定義する。


 //プロパティnameが"ボブ"、ageが20であるオブジェクトを定義する


//オブジェクトのageプロパティの値を30に変更し、ログに出力しよう
//①ageプロパティに30の数字を代入してください。
//②コンソール上にobjectを表示させ、ageが変更されていることを確認してください。

const object = {age: 35, weight: 80}
// ここから処理を書いてください。


//オブジェクトのageプロパティの値を関数を使って、30に変更し、ログに出力しよう

const object = {age: 35, weight: 80}
// ここから処理を書いてください。

//オブジェクトのageプロパティの値に+1する
//①ageプロパティの値を+1してください。
//②コンソール上にobjectを表示させ、ageが変更されていることを確認してください。

const object = {age: 35, weight: 80}
// ここから処理を書いてください。


//オブジェクトのageプロパティの値を関数を使って、+1増やして、ログに出力しよう

const object = {age: 35, weight: 80}
// ここから処理を書いてください。


//libraryオブジェクトのopenHourプロパティの値を更新し、ログに出力してみよう
//①定数libraryの中のopenHourプロパティの値を "8am ~ 9pm"に更新してください。
const library = {
  openHour: ""7am ~ 10pm""
}

//libraryオブジェクトのopenHourプロパティの値を関数を使って更新し、ログに出力してみよう
//①定数libraryの中のopenHourプロパティの値を "8am ~ 9pm"に更新してください。

const library = {
  openHour: ""7am ~ 10pm""
}

//オブジェクトにプロパティweightとその値"50kg"を追加する
//①weightプロパティに""50kg""の値を持たせて、定数objectに追加してください。
//②コンソール上にobjectを表示させ、weightが追加されていることを確認してください。

const object = {name: ""Bob"", age: 35}
// ここから処理を書いてください。


//オブジェクトのnameプロパティを削除する
//①定数objectのnameプロパティを削除してください。
//②コンソール上にobjectを表示させ、nameが削除されていることを確認してください。

const object = {name: ""Bob"", age: 35}
// ここから処理を書いてください。


//■カテゴリ：配列操作

//空の配列を定義する


//文字列要素"りんご"、"みかん"、"いちご"が入った配列を定義する
//文字列要素"りんご"、"みかん"、"いちご"が入った配列を定義してください。


//配列の2番目の要素をログ出力する
//配列の2番目の要素をログ出力してください。

const arr = [""りんご"",""みかん"",""いちご""];

// arr[インデックス]のように書きましょう


//配列の3番目の要素を”もも”に変更してログ出力する
//配列の3番目の要素を”もも”に変更してログ出力してください。

const arr = [""りんご"",""みかん"",""いちご""];


//配列の最後に文字列要素"すいか"を追加する
//配列の最後に文字列要素"すいか"を追加してください。

const arr = [""りんご"",""みかん"",""いちご""];

//配列の最後の要素を削除する
//配列の最後の要素を削除してください。

const arr = [""りんご"",""みかん"",""いちご""];


//配列の最初に文字列要素"すいか"を追加する
//配列の最初に文字列要素"すいか"を追加してください。
const arr = [""りんご"",""みかん"",""いちご""];


//配列の最初の要素を削除する
//配列の最初の要素を削除してください。
const arr = [""りんご"",""みかん"",""いちご""];



//配列から"みかん"のindexを取得する
//配列から"みかん"のindexを取得してください。
const arr = [""りんご"",""みかん"",""いちご""];


//配列に"りんご"が含まれているか確かめる
//配列arrayの中に"りんご"が含まれているか確かめてください。
const array= [~~~~~~~~~~]
// りんごが含まれていたらtrueを代入してください。
// const answer =


//配列の2番目の要素と3番目の要素からなる配列を作る
//配列arrayの2番目と3番目だけを格納した配列を作成してください。

//2番目の要素と3番目の要素からなる配列をanswer変数に代入してください。
// const answer =


//配列の3番目の要素を削除する
//配列arrayの3番目の要素を削除してください。

//3番目の要素が削除された配列をanswer変数に代入してください。
// const answer =


//配列のそれぞれの要素をログ出力する
//配列arrayの要素をそれぞれコンソールに出力してください。

const fruits = [ ""apple"", ""orange"", ""grape""];

// const answer = 


//配列のそれぞれの要素を2倍にしてログ出力する
//配列arrayの要素をそれぞれ２倍にしてコンソールに出力してください。

const numbers = [1, 2, 3]

// 配列要素を2倍した配列を定義
// const doubleNumbers = 

// 関数を発火してログ出力
// console.log() // [2, 4, 6]


//配列のそれぞれの要素を3倍に加工した配列を取得する
//配列arrayの要素をそれぞれ３倍にした配列を取得してください。

const numbers = [1, 2, 3]
// const tripleNumbers = 


//文字コード順に並べ替える
//配列arrayの要素を文字コード順に並びかえてください。

const array=[""いぬ"",""さる"",""きじ""];

//配列を逆順にする
//配列を逆順にしてください。

const arr = [""りんご"",""みかん"",""いちご""];
// ここに処理を書いてください。


//昇順ソートする
//配列arrayの要素を昇順に並びかえてください。

const array = [1975,11,20];

//降順ソートする
//配列arrayの要素を降順に並びかえてください。

const array = [1975,11,20];

//配列の全要素を引数の文字列で連結させる
//配列arrayの要素を,（カンマ）で区切った文字列に連結した新しい配列を返してください。

const array = [""りんご""、""みかん""、""いちご""];
// ここに処理を書いてください。


//スプレッド構文を用いて配列の要素を展開する①
//配列arrayの要素をarrayCloneでスプレッド構文を使用して展開し、arrayのクローンを作成してください。

const array= [1,2,3,4,5];
// const arrayClone =

//スプレッド構文を用いて配列の要素を展開する②
//配列arrayの要素をarray2で展開し、新たな要素、6,7,8,9,10を追加した新しい配列を作成してください。

const array= [1,2,3,4,5];
// const array2 = 


//■配列オブジェクト操作

//id、name、ageプロパティを持つオブジェクト要素の配列を定義する。
//それぞれidは1,2,3、nameは""ジョン"",""ボブ"",""マイケル""、ageは15,20,30とする
//①定数objectに代入してください。

// const object =


//オブジェクト配列の3番目の要素のageを取得してログ出力する
const object = [
  {id: 1, name: 'John', age: 15},
  {id: 2, name: 'Bob', age: 20},
  {id: 3, name: 'Michael', age: 15},
];
// ここに処理を書いてください。

//配列内のオブジェクトのnameプロパティの文字列が3文字のオブジェクト要素からなる配列を取得する。
// const object =

// const found = 


//配列内のオブジェクトのidプロパティが1の要素を除いた配列を取得する。

const object = [
  {id: 1, name: 'John', age: 15},
  {id: 2, name: 'Bob', age: 20},
  {id: 3, name: 'Michael', age: 15},
];
// const found =


//■カテゴリ：スプレッド構文

//配列をコピーして、新しい配列を作成しよう


//配列の中に要素を追加して、新しい配列を作成しよう


//2つの配列をマージして、新しい配列を作成しよう


//オブジェクトをコピーして、新しいオブジェクトを作成しよう


//オブジェクトの中に要素を追加して、新しいオブジェクトを作成しよう


//2つのオブジェクトをマージして、新しいオブジェクトを作成しよう

