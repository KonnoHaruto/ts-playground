//通常は関数のパラメーターは明示的にアノテートする*1
//TypeScriptはパタメーターについては型を推論しない（戻り値については推論するが明示的にアノテートすることも可能*2）

//*1
function add(a: number, b: number) {
  return a + b;
}

//*
function add2(a: number, b: number): number {
  return a + b;
}

//関数宣言　ー5種類

//名前付き関数
function greet(name: string) {
  return 'hello' + name;
}

//関数式
let greet2 = function(name: string) {
  return 'hello' + name;
}

//アロー関数式
let greet3 = (name: string) => {
  return 'hello' + name;
}

//アロー関数式の省略記法
let greet4 = (name: string) => 'hello' + name;

//関数コンストラクタ
let greet5 = new Function('name','return "hello " + name' );
// -> 関数コンストラクタは全くもって安全じゃない。蜂から逃げ切れるのならば使ってもOKだそうな。

console.log(add(1, 2));
console.log(greet3('晴都'));

//オプショナルパラメーター
/**
 * [?]を使ってパラメーターを省略可能と指定することが可能（オブジェクト型やタプル型同様。）
 * 関数のパラメーターを宣言するときは必須のパラメーターを先に宣言。
 * オプショナルパラメーターはその後に指定する
 * /*/

function log(message: string, uId?: string) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, uId || 'Not signed in'); //選択的代入
}

log('Page loaded');
log('User signed in', 'da763be');