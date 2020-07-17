let playerLI = document.getElementById("playerUL").getElementsByTagName("LI");

// Create a "close" button and append it to each list item
let myPlayerList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myPlayerList.length; i++) {
  let span = document.createElement("SPAM");
  let txt = document.createTextNode("highlight_off");
  span.className = "material-icons close";
  span.appendChild(txt);
  myPlayerList[i].appendChild(span);
}

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

  let input = document.createElement("input");
  input.type = "text";
  input.name = "addPlayer";
  input.id = "addPlayer";
  input.placeholder = "Player...";
  input.className = "textfield";

  li.appendChild(input);

  document.getElementById("playerUL").appendChild(li);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("clear");
  span.className = "material-icons close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  let range = document.createElement("input");
  range.type = "range";
  range.min = "1";
  range.max = "5";
  range.value = "1";
  range.id = "addSkill";
  range.className = "slider";

  li.appendChild(range);
}

// Logic for teamlist
// Create a new list item when clicking on the "+" button
function newTeam() {
  let li = document.createElement("li");

  let input = document.createElement("input");
  input.type = "text";
  input.name = "addTeam";
  input.id = "addTeam";
  input.placeholder = "Team...";
  input.className = "textfield";
  li.appendChild(input);

  document.getElementById("teamUL").appendChild(li);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("clear");
  span.className = "material-icons close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
