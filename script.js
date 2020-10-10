let players = [];

const onStart = () => {
  displayList(players, "playerList");
};

// Add new Player to the array.
const addPlayer = () => {
  const newPlayer = {
    name: document.getElementById("player").value,
    skill: Number(document.getElementById("skill").value),
  };

  players.push(newPlayer);
  document.getElementById("player").value = "";
  document.getElementById("skill").value = 1;

  // Display a list of players.
  displayList(players, "playerList");

  // Don't reload the page on submit.
  return false;
};

// Add one to the number of teams.
const addNumberOfTeams = () => {
  let currentNumberOfTeams = Number(
    document.getElementById("numberOfTeams").value
  );
  if (currentNumberOfTeams !== 10) {
    currentNumberOfTeams += 1;
    document.getElementById("numberOfTeams").value = currentNumberOfTeams;
  }
  return false;
};

// Subtract one from the number of teams.
const subNumberOfTeams = () => {
  let currentNumberOfTeams = Number(
    document.getElementById("numberOfTeams").value
  );
  if (currentNumberOfTeams !== 1) {
    currentNumberOfTeams -= 1;
    document.getElementById("numberOfTeams").value = currentNumberOfTeams;
  }
  return false;
};

// Shuffle the player array.
const shuffle = () => {
  let currentIndex = players.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // and swap it with the current element.
    temporaryValue = players[currentIndex];
    players[currentIndex] = players[randomIndex];
    players[randomIndex] = temporaryValue;
  }

  // Return the shuffled player array.
  return players;
};

// Create balanced teams based on the skilllevel.
const balancedTeams = () => {
  let teams = [];

  // Sort the player array from strong to weak based of skill.
  const toShuffle = shuffle(players).sort(
    (a, b) => parseFloat(b.skill) - parseFloat(a.skill)
  );

  // Get the number of teams.
  let numberOfTeams = document.getElementById("numberOfTeams").value;
  let lastTeam = numberOfTeams - 1;

  // Create two arrays based of the number of teams.
  const firstEntry = toShuffle.slice(0, numberOfTeams);
  const fillup = toShuffle.slice(numberOfTeams, toShuffle.length);

  // Add the stronges players as entries to the teams and add an element to store the Teamskill.
  for (let i = 0; i < firstEntry.length; i++) {
    const element = firstEntry[i];
    const teamSkill = firstEntry[i].skill;
    const team = [];
    team.push({ teamSkill }, element);
    teams.push(team);
  }

  // push the player from the fillup array to the team, add his skill to the Teamskill and sort the array.
  for (let i = 0; i < fillup.length; i++) {
    const element = fillup[i];
    let playerSkill = element.skill;
    teams[lastTeam].push(element);
    teams[lastTeam][0].teamSkill += playerSkill;
    teams.sort(
      (a, b) => parseFloat(b[0].teamSkill) - parseFloat(a[0].teamSkill)
    );
  }

  // Display a list of the teams.
  displayList(teams, "teamList");
  console.log(teams);

  // Reset the teams array.
  teams = [];
};

// Function to display a list of the players and teams.
const displayList = (arr, list) => {
  let i = 1;
  let result = "";
  if (arr === players) {
    arr.forEach(function (item) {
      result += `<div class="listItem">
        <li>
          <span class="skill liststyle">${item.skill}</span>
          <span class="name liststyle">${item.name}</span>
          <button class="delete liststyle" id="${item.name}" onclick="deletePlayer('${item.name}')">
            <i class="fas fa-trash-alt"></i>
          </button>
        </li>
      </div>`;
    });
  } else {
    arr.forEach(function (item) {
      elementS = [];
      elementP = "";
      item.forEach(function (object) {
        if (object.teamSkill) {
          elementS += `<span class="skill green teamskills liststyle"> ${object.teamSkill} </span>`;
          // return false;
        } else {
          elementP += `<span class="name liststyle">${object.name}</span>`;
        }
      });
      result += `<div class="listItem teams">
        <li>
          <div class="row">
            <span class="number liststyle"> ${i} </span>
            ${elementS}
          </div>
          <div class="team liststyle"> ${elementP} </div> 
        </li>
      </div>`;
      i++;
    });
  }
  document.getElementById(list).innerHTML = result;
};

// Delete the player from the list and array.
const deletePlayer = (id) => {
  const object = document.querySelector(`#${id}`);
  const index = players
    .map(function (e) {
      return e.name;
    })
    .indexOf(id);
  if (index > -1) {
    players.splice(index, 1);
  }

  // Remove object from the list.
  object.parentNode.remove();

  displayList(players, "playerList");
};

// Split shuffled player array into set sized teams.
const randomTeams = () => {
  let teams = [];
  let toShuffle = shuffle(players).slice();

  // Get the number of teams.
  let numberOfTeams = document.getElementById("numberOfTeams").value;

  // Split the players array into set amount of teams.
  while (toShuffle.length) {
    const teamSize = Math.ceil(toShuffle.length / numberOfTeams--);
    const team = toShuffle.slice(0, teamSize);
    teams.push(team);
    toShuffle = toShuffle.slice(teamSize);
  }

  // Display a list of the teams.
  displayList(teams, "teamList");

  // Reset the teams array.
  teams = [];
};
