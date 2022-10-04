"use strict";

// 変数宣言
const a = [];
const n = 20;
let sum = 0;
let sum2 = 0;

// n回のループ
for (let i = 0; i < n; i++) {
  // 100未満の乱数を生成して， xに代入
  let x = Math.floor( Math.random() * 100 );
  // 配列aの末尾にxを追加
  a.push(x);
  sum += x;
  sum2 += x*x;
}
const ave = sum/n;
const sd = Math.sqrt((sum2 - 2*ave*sum + n*ave*ave)/n);

// 配列aのWebページへの表示(id="array"要素の置換)
document.getElementById("array").textContent = `配列： [ ${a} ]`;
// 合計のWebページへの表示(id="sum"要素の置換)
document.getElementById("sum").textContent = `合計： ${sum}`;
// 平均のWebページへの表示(id="ave"要素の置換)
document.getElementById("ave").textContent = `平均： ${ave}`;
// 標準偏差のWebページへの表示(id="sd"要素の置換)
document.getElementById("sd").textContent = `標準偏差： ${sd}`;

