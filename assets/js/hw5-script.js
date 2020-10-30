// username: gui-student

var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '100%';
tbl.setAttribute('border', '2');
var tbdy = document.createElement('tbody');
var error;
var minY = 1;
var maxY = 3;

// generates the mulitiplication table values
function generateTable()
{
  var minX = parseInt(document.getElementById("xBegin").value);
  if(isNaN(minX)) {
    alert("The minimum column value must be an integer!");
    return -1;
  }
  var maxX = parseInt(document.getElementById("xEnd").value);
  if(isNaN(maxX)) {
    alert("The maximum column value must be an integer!");
    return -1;
  }
  var minY = parseInt(document.getElementById("yBegin").value);
  if(isNaN(minY)) {
    alert("The minimum row value must be an integer!");
    return -1;
  }
  var maxY = parseInt(document.getElementById("yEnd").value);
  if(isNaN(maxY)) {
    alert("The maximum row value must be an integer!");
    return -1;
  }
  if(minX > maxX) {
    alert("The minimum column value must be less than the maximum row value!");
    return -1;
  }
  if(minY > maxY) {
    alert("The minimum row value must be less than the maximum column value!");
    return -1;
  }

  // calculates the table values
  function generateValues(index) {
    let rowData = [];
    var result = 0;
    // creates the first row
      if(index == 0 ) {
        rowData.push('*');
        for(let count = minX; count <= maxX; count++) {
          rowData.push(count);
        }
        return rowData;
      }
      rowData.push(minY + (index - 1));
      for(var x = minX; x <= maxX; x++) {
        result =  x * (minY + (index - 1));
        rowData.push(result);
      }
    return rowData;
  }

  let makeRow = function(rowData) {
    let tr = document.createElement('tr');
    rowData.forEach(function(val){
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(val));
      tr.append(td);
    })
    return tr;
  }
  // inserts the rows
  let row;
  let arrRow = [];
  let createTable = function (arrRow){
    var tbdy =  document.createElement('tbody');
    arrRow.forEach(function(row) {
      tbdy.append(row);
    });
    var tbl = document.createElement('table');
    tbl.append(tbdy);
    return tbl;
  }
  // prints the values
  let rows = [];
  for(var index = 0; index <= (maxY - minY) + 1; index++)
  {
    rows.push(makeRow(generateValues(index)));
  }
  var newTable = createTable(rows);
  document.querySelector("#target").append(newTable);
}
