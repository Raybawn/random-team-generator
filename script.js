// Create a "close" button and append it to each list item
/*
let myList = document.getElementsByClassName("textfield");
let i;
for (i = 0; i < myList.length; i++) {
  let span = document.createElement("SPAM");
  let txt = document.createTextNode("highlight_off");
  span.className = "material-icons close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}
*/

// Click on a close button to remove the current list item
let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Logic for playerlist
// Create a new list item when clicking on the "+" button
function newPlayer() {
  let li = document.createElement("li");
  li.className = "card";

  let input = document.createElement("input");
  input.type = "text";
  input.name = "addPlayer";
  input.id = "addPlayer";
  input.placeholder = "Player...";
  input.className = "textfield";
  input.style.position = "absolute";

  li.appendChild(input);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("clear");
  span.className = "material-icons close";
  span.style.position = "relative";
  span.appendChild(txt);
  li.appendChild(span);

  document.getElementById("playerUL").appendChild(li);

  let range = document.createElement("input");
  range.type = "range";
  range.min = "1";
  range.max = "5";
  range.value = "1";
  range.id = "addSkill";
  range.className = "slider";

  li.appendChild(range);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Logic for teamlist
// Create a new list item when clicking on the "+" button
function newTeam() {
  let li = document.createElement("li");
  li.className = "card";

  let input = document.createElement("input");
  input.type = "text";
  input.name = "addTeam";
  input.id = "addTeam";
  input.placeholder = "Team...";
  input.className = "textfield";
  input.style.position = "absolute";

  li.appendChild(input);

  document.getElementById("teamUL").appendChild(li);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("clear");
  span.className = "material-icons close";
  span.style.position = "relative";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
