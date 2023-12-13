const fs = require("fs");
const csv = require("csv-parser");

let rowCount = 0;

const key1 = "名前";
const key2 = "郵便番号";

// ファイルを-swapに変更し、列順を入れ替えると読み込める
fs.createReadStream("yourfile-utf-8.csv")
  // fs.createReadStream("yourfile-utf-8-swap.csv")
  .pipe(csv())
  .on("data", (data) => rowCount++)
  .on("data", (data) => {
    console.log("--------------------");
    console.log(data);
    console.log(data[key1]);
    const uniqueKey = `${data[key1]}-${data[key2]}`;
    console.log(`${rowCount}行目 *ユニーク文字:[${uniqueKey}]`);
  })
  .on("end", () => {
    console.log("--------------------");
  });
