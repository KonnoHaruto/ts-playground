"use strict";
/*ある関数が引数のリストを取る場合、そのリストを配列として渡すことができる*/
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sum([1, 2, 3]); //6
/*しかし、時には決まった数の引数を取るfixed-arity function（固定アリティ関数）の代わりに、variadic function（可変長引数関数）を望む場合もある*/
//argumentsオブジェクト使用例
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0);
}
//# sourceMappingURL=rest.js.map