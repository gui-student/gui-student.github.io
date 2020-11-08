// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var newItemEnd = document.createElement('li');
var newTextEnd = document.createTextNode('cream');
newItemEnd.appendChild(newTextEnd);
list.appendChild(newItemEnd);

// ADD NEW ITEM START OF LIST
var newItemStart = document.createElement('li');
var newTextStart = document.createTextNode('kale');
newItemStart.appendChild(newTextStart);
list.insertBefore(newItemStart, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading =  headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;
