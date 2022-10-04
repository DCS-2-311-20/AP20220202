"use strict";

// 出力の準備
const table = document.getElementsByClassName("tbl");
let idx = 0;

// 文字の配列を表示する関数
function display( a ) {
  const h = a.length;
  const w = a[0].length;
  
  for (let i = 0; i < h; i++ ) {
    const tr = document.createElement("tr");
    let output = "";
    for (let j = 0; j < w; j++) {
      output += `<td>${a[i][j]}</td>`;
    }
    tr.innerHTML = output;
    table[idx].appendChild(tr);
  }
  idx += 1;
}
// 回転させる関数(鏡像になっている)
function rotate( a ) {
  const h = a.length;
  const w = a[0].length;
  const b = [];
  for (let i = 0; i < h; i++ ) {
    b[i] = [];
    for (let j = 0; j < w; j++ ) {
      b[i].push(a[(h - j - 1)][i]);
    }
  }
  return b;
}
// 文字の配列の宣言
const R = [
  ["■","■","■","■","■","■","□","□",],
  ["■","■","□","□","□","■","■","□",],
  ["■","■","□","□","□","■","■","□",],
  ["■","■","■","■","■","■","□","□",],
  ["■","■","□","■","■","□","□","□",],
  ["■","■","□","□","■","■","□","□",],
  ["■","■","□","□","□","■","■","□",],
  ["■","■","□","□","□","□","■","■",],
];
// 元の配列の表示
display( R );
// 配列を90度右に回転
const RR = rotate( R );
// 回転後の配列の表示
display( RR );
