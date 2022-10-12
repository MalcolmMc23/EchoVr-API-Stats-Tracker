// Malcolm McDonald
// date
// echo vr api test
let bTeam = 0
let oTeam = 0
let last_throw_speed = 0

// let player_list_b
// let player_list_o

let blue_player = [];

let orange_player = []


let url = 'http://127.0.0.1:6721/session'
function setup() {
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth - width) / 2, 30);
  setInterval(askEcho, 1000)
}

  function askEcho() {
    loadJSON(url, getData)
  }

  function getData(data) {

    bTeam = data.blue_points
    oTeam = data.orange_points

    last_throw_speed = data.last_score.disc_speed


for(let i = 0; i < 4; i++) {
    blue_player[i] = data.teams[0].players[i].name
}
for(let i = 0; i < 4; i++) {
  orange_player[i] = data.teams[1].players[i].name
}

  }

function draw() {
  background(20)

  textSize(20)
  fill(255, 0, 0)
  text("Orange has " + oTeam + " points", 100, 100)


  fill(0, 0, 255)
  textSize(20)
  text("Blue has " + bTeam + " points", 300, 100)



  //############
  fill(255)
  textSize(20)
  text("the disc was thrown at " + last_throw_speed + "ms", 500, 400)
  



//#############



  fill(255)
  textSize(20)
  text("Blue player 1 is " + blue_player[0], 200, 300)
  text("Blue player 2 is " + blue_player[1], 200, 320)
  text("Blue player 3 is " + blue_player[2], 200, 340)
  text("Blue player 4 is " + blue_player[3], 200, 360)


  fill(255)
  textSize(20)
  text("Orange player 1 is " + orange_player[0], 200, 450)  
  text("Orange player 2 is " + orange_player[1], 200, 470)  
  text("Orange player 3 is " + orange_player[2], 200, 490)  
  text("Orange player 4 is " + orange_player[3], 200, 510)  


}