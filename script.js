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

// Change between Dark and Light mode
const toggleMode = () => {
  let root = document.querySelector(":root");
  let background = getComputedStyle(root).getPropertyValue("--color");
  let text = getComputedStyle(root).getPropertyValue("--color-txt");
  let secondary = getComputedStyle(root).getPropertyValue("--secondary-color");
  let border = getComputedStyle(root).getPropertyPriority("--border");
  let shadow = getComputedStyle(root).getPropertyValue("--shadow");

  if (background === "rgb(25, 25, 29)") {
    root.style.setProperty("--color", "rgb(229, 229, 229)");
  } else {
    root.style.setProperty("--color", "rgb(25, 25, 29)");
  }

  if (text === "rgb(229, 229, 229)") {
    root.style.setProperty("--color-txt", "rgb(25, 25, 29)");
  } else {
    root.style.setProperty("--color-txt", "rgb(229, 229, 229)");
  }

  if (secondary === "rgb(191, 255, 0)") {
    root.style.setProperty("--secondary-color", "rgb(255, 92, 0)");
  } else {
    root.style.setProperty("--secondary-color", "rgb(191, 255, 0)");
  }

  if (shadow === "rgba(0, 0, 0, 0.5)") {
    root.style.setProperty("--shadow", "rgba(0, 0, 0, 0.15)");
  } else {
    root.style.setProperty("--shadow", "rgba(0, 0, 0, 0.5)");
  }

  if (border === "rgba(0, 0, 0, 0.5)") {
    root.style.setProperty("--border", "rgba(255, 255, 255, 0.5)");
  } else {
    root.style.setProperty("--border", "rgba(0, 0, 0, 0.5)");
  }
};
