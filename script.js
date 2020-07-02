const allPlayers = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6', 'player7', 'player8', 'player9', 'player10'];

const players = allPlayers;

const playersLeft = players.length;

const getRandomPlayer = (max) => {
    return Math.floor(Math.random() * max);
};

const removePlayer = (player) {
    
}

console.log(getRandomPlayer(playersLeft));




