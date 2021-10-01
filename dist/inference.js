"use strict";
//TypeScriptによる型の推論
/**
 * <JS>
 * 1.JavaScriptソース -> JavaScript AST
 * 2.AST -> バイトコード
 * 3.バイトコードがランタイムによって評価される
 *
 * <TS>
 * 1.TypeScriptソース -> TypeScript AST
 * 2.ASTが型チェッカーによってチェックされる
 * 3.TypeScript AST -> JavaScriptソース
 */
let a = 1 + 2;
let b = a + 2;
let c = {
    apple: a,
    banana: b
};
let d = c.apple * 4;
//# sourceMappingURL=inference.js.map