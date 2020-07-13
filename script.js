let playerLI = document.getElementById("playerUL").getElementsByTagName("LI");
let playerCount = 0;
let teamCount = 0;

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
  // lowerCount();
}

/*
function lowerCount(element) {
  if (this.parentElement.parentElement.id === "playerUL") {
    playerCount -= 1;
  }
}
*/

// Logic for playerlist
// Create a new list item when clicking on the "+" button
function newPlayer() {
  playerCount += 1;
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.type = "text";
  input.name = "addPlayer";
  input.id = "addPlayer";
  input.placeholder = "Player " + [playerCount] + "...";
  li.appendChild(input);

  document.getElementById("playerUL").appendChild(li);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("highlight_off");
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

// Logic for teamlist
// Create a new list item when clicking on the "+" button
function newTeam() {
  teamCount += 1;
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.type = "text";
  input.name = "addTeam";
  input.id = "addTeam";
  input.placeholder = "Team " + [teamCount] + "...";
  li.appendChild(input);

  document.getElementById("teamUL").appendChild(li);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("highlight_off");
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
