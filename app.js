const team = {
    _players:[
      {firstName:'Sammy', lastName: 'Ama', age: 15},
      {firstName:'fireman', lastName: 'Talker', age: 20},
      {firstName:'Princess', lastName: 'Esuman', age: 24} 
    ],
    _games:[
      {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
       {opponent: 'BlackStar', teamPoints: 10, opponentPoints: 5},
       {opponent: 'BlackQueens', teamPoints: 55, opponentPoints: 70},
     ],
  
     get players(){
       return this._players;
     }, 
     get games() {
       return this._games;  
     },
     addPlayer(firstName, lastName, age){
       let player = {
         firstName: firstName,
         lastName: lastName,
         age: age 
       };
       this.players.push(player);
     },
     addGame(appName, points, appPoints){
       const game = {
         opponent: appName,
         points: points,
         opponentPoints: appPoints
       }
       this.games.push(game); 
     }
  
     };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  team.addGame('Football', 50, 18);
  team.addGame('volleyball', 100, 98); 
  
  
      