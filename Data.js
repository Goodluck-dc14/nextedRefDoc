const fs = require("fs");
const phoneData = require("./ImageDatas/Iphone")

let newFile = [];
// const newData = JSON.stringify(data);
console.log(data.name);

data.map((el) => {
  newFile.push(el.name);
});

// console.log(newFile.join(","));

fs.writeFile("./text.txt", newFile.join(","), "utf8", (err) => {
  console.log(err);
});

fs.readFile('student.json', (err, data) => {
  if (err) throw err;
  let student = JSON.parse(data);
  console.log(student);
});

console.log('This is after the read call');