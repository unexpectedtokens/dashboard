const readXlsxFile = require("read-excel-file/node");

// File path.
readXlsxFile("./excel/barcode.xlsx").then(rows => {
  console.log(rows.slice(1, rows.length));
  rows.forEach(row => console.log(row.length));
  // `rows` is an array of rows
  // each row being an array of cells.
});
