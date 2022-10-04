"use strict";

// 出力の準備
const element = document.getElementById("msg");

// 変数の宣言
const n = 3;
// ループ
for (var j = 1; j <= n; j++)
{
  for (var i = 1; i <= (n + 1); i++);
  {
    // 結果の出力
    const div = document.createElement("div");
    div.textContent=`j=${j}, i=${i}`;
    element.appendChild(div);
  }
}