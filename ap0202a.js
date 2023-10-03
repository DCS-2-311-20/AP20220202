"use strict";
// 出力の準備
const element = document.getElementById("msg");

// 変数の宣言
n = 5;
// ループ
for (i = 1; i <= n; i++) {
  // i番目までの合計を計算する
  sum = sum + i;
}
// 結果の出力
const div = document.createElement("div");
div.textContent = `1から${n}までの合計は${sum}`;
element.appendChild(div);
