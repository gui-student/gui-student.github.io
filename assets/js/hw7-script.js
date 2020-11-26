// username: gui-student
// See README.md in Blackboard .zip for further contact info
// Sources: https://www.w3schools.com

var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '100%';
tbl.setAttribute('border', '2');
var tbdy = document.createElement('tbody');
var error;
var minY = 1;
var maxY = 3;
var error;

// updates the slider and refreshes the table
$(function () {
    $("#sliderXBegin").slider({
        min: -50,
        max: 50,
        value: 1,
    });
    $("#sliderXEnd").slider({
        min: -50,
        max: 50,
        value: 1,
    });
    $("#sliderYBegin").slider({
        min: -50,
        max: 50,
        value: 1,
    });
    $("#sliderYEnd").slider({
        min: -50,
        max: 50,
        value: 1,
    });
});

// generates the mulitiplication table values
function generateTable()
{
  var minX = parseInt(document.getElementById("xBegin").value);
  if(isNaN(minX)) {
    return null;
  }
  var maxX = parseInt(document.getElementById("xEnd").value);
  if(isNaN(maxX)) {
    return null;
  }
  var minY = parseInt(document.getElementById("yBegin").value);
  if(isNaN(minY)) {
    return null;
  }
  var maxY = parseInt(document.getElementById("yEnd").value);
  if(isNaN(maxY)) {
    return null;
  }
  if(minX > maxX) {
    return null;
  }
  if(minY > maxY) {
    return null;
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
  $("#target").children().remove();
  document.querySelector("#target").append(newTable);
}

// creates the jQuery UI Tabs
$("#tabs").tabs({
activate: function (event, ui) {
        ui.newTab.addClass("selected");
        ui.oldTab.removeClass("selected");
    }
});

let bindSlider = function(slider, input) {
    input.on("input", function () {
        let value = parseInt(input.val());
        slider.slider("value", value);
        if($("#formInput").valid())
        {
            generateTable();
        }
    })
    slider.on("slidechange", function () {
        let value = slider.slider("value");
        console.log(value);
        input.val(value);
        if($("#formInput").valid())
        {
            generateTable();
        }
    })
}

bindSlider($("#sliderXBegin"),$("#xBegin"));
bindSlider($("#sliderXEnd"),$("#xEnd"));
bindSlider($("#sliderYBegin"),$("#yBegin"));
bindSlider($("#sliderYEnd"),$("#yEnd"));

let saveTabsCount = 1;

$("button[name=save]").on("click", function () {
    let panelID = "panel" + saveTabsCount;
    console.log(panelID);
    let newTab = $("<li><a href=#" + panelID + ">Tab " + saveTabsCount + "</a><span class='ui-icon ui-icon-close' role='presentation'></span></li>");
    let newPanel = $("<div id=" + panelID + " class=panel></div>");
    let newTable = $("#target").clone().attr("id", "");
    newPanel.append(newTable);
    $("#tabs ul").append(newTab);
    $("#tabs").append(newPanel);
    $("#tabs").tabs("refresh");
    saveTabsCount++;

    // prevents user from creating too many new tabs
    if(saveTabsCount >= 27) {
        alert("You can only create up to 25 tabs.");
        location.reload();
        return false;
    }
})

// deletes the current tab
$("#tabs").on("click", "span.ui-icon-close", function() {
    var panelId = $(this).closest("li").remove().attr("aria-controls");
    $("#" + panel).remove();
    $("#tabs").tabs("refresh");
});

// deletes all open tabs
$("button[name=deleteTabs]").on("click", function () {
    location.reload();
})
