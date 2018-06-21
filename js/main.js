// console.log("hi");
const deck = [];
const suits = ["spades", "diamonds","clubs", "hearts"];
const values = ["A", "2", "3", "4" ,"5" ,"6", "7", "8", "9", "10", "Q", "K"];

$(() =>{
//create deck, shuffle and players
  // createDeck();
  // shuffle();
  // createPlayers(1);


  // const players =[];
  const currentPlayer = 0;


  //defining about the Game button
  const $openBtn = $("#openModal");
//Grabbing modal
  const $modal = $("#modal");
//defining modal close button
  const $closeBtn =$("#close");

  const $startBtn = $("#startBtn");
  const $hitBtn =$("#hitBtn");
  const $dealBtn =$("#dealBtn");

//event handler for game buttons
  // const startBtn =()=> {
  // }
  // const hitMe =()=> {
  //   $hitMe();
  //
  // }
  // const stay =()=> {
  //   $stay();
  // }

//event handler to open modal
  const openModal =()=>{
    $modal.css("display", "block");
  }
//event handler to close modal
  const closeModal = ()=> {
    $modal.css("display", "none");
  }

//add listener to about the game button
  $openBtn.on("click", openModal);

//listener
  $closeBtn.on("click", closeModal);

  // add listener for buttons
 $startBtn.on("click",start );
  $hitMe.on("click", hitMe);
  $stay.on("click", stay);

//building deck
  deck = [];
function createDeck(){
  // deck = [];
  for(let i = 0; i < values.length; i++){
    for(let x = 0; x < suites.lenght; x++) {
      const weight = parseInt(values[i]);
      if(values[i] == "J"  || values[i] == "Q" || values[i] == "K"){
        weight = 10;
      }

        if(values[i] == "A"){
          weight = 11;
        }
          const card = {Value: values[i], Suit: suits[x], weight: weight};
          deck.push(card);
    }
  }

};

//building players
const players = [];
function createPlayers(num){
  players = [];
  for(let i =1; i <= num; i++){
    let hand = [];
    let player = { Name: "Player" + i, ID: i, Points: 0, Hand: hand};
      players.push(player);
    }
};

//players and points
const createPlayersUI=()=> {
  $("players").innerHTML = ("");
  for(let i =0; i< players.length; i++){

    const div_player =$("<div>").addClass("player");
    const div_playerid = $("<div>").attr("id","player"+ i);
    const div_hand = $("<div>").attr("id","hand" +i);
    const div_points = $("<div>").attr("id", "points" + i);

    div_playerid.innerHTML = players[i].ID;
    div_player.appendChild(div_playerid);
    div_player.appendChild(div_hand);
    div_player.appendChild(div_points);
    $("players").appendChild(div_player);

  }
};


// using Fisher-Yeats shuffle
 const shuffle = ()=>{
  const i = 0,
        j = 0,
        temp = null

    for(i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
};

const start= ()=>{
//deal 2 cards to every player
currentPlayer = 0;
createDeck();
shuffle();
createPlayers(2);
createPlayersUI();
dealHands();
$("#player" + currentPlayer).addClass("active");
}


//dealing hands to players 2 cards each
const dealHands =()=>{
  for(let i = 0; i < 2; i++){
    for (let x = 0; x < players.length; x++){
        const card = deck.pop();
        players[x].hand.push(card);
        renderCard(card, x);
        updatePoints();
    }
  }
  updateDeck();
};

//cards
const renderCard=()=>{
    const hand = $("#hand" + player);
    $(getCardUI(card)).appendChild("hand");
};

//tried to use care images to make cards.
  // $getCardUI(card) = {
  //   const El = $("<div>");
  //   $("El").addClass("card");
  //   (el.innerHTML) = (card.Suit + " " +card.Value);
  //   return(el);
  // }

  //try to render cards using html
function getCardUI(card){
              const el = $("<div>");
              var icon = '';
              if (card.Suit == 'Hearts')
              icon  ='♥';
              else if (card.Suit == 'Spades')
              icon = '♠';
              else if (card.Suit == 'Diamonds')
              icon = '♦';
              else
              icon = '♣';

              el.className = 'card2';
              el.innerHTML = card.Value + '' + icon;
              return el;
          };

//returns the number of points that a player has in the hand
function getPoints(player){
  const points = 0;
  for(let i = 0; i < players[player].Hand.length; i ++){
  points =+ players[player].Hand[i].Weight;
  }
  players[player].Points = points;
  return points;
};

function updatePoints(){
    for(let i = 0; i < players.length; i++){
      getPoints(i);
      $("points" + i).innerHTML = players[i].Points;
    }
}

  // const currentPlayer = 0;
  function hitMe() {
    //get a card from the deck to the current player
    // chek if current player new points are over 21
    const card = deck.pop();
    players(currentPlayer).hand.push(card);
    renderCard(card, currentPlayer);
    updatePoint();
    check();
  };
function stay(){
  //move to next player if
  if(currentPlayer != players.length -1){
    $("player" +currentPlayer).removeClass("active");
    currentPlayer == 1;
    $("player" + currentPlayer).addClass("active");
  } else {
          end();
        }
}


// check Points
function check() {
  if(players[currentPlayer].Points > 21);
  $("status").innerHTML = ("Player:" + players[currentPlayer].ID +"LOST");
};

function end() {
    const winner = -1;
    const score = 0;

    for(let i = 0; i < players.length; i ++) {
      if (players[i].points > score && players[i].Points < 22){
       winner =i;
    }
    score = players[i].Points;
  }
$("status").innerHTML = ("Winner: Player" +players[winner].ID);
}

function check(){
    if(players[currentPlayer].Points > 21); {
      $("status").innerHTML =("Player:" + players[currentPlayer].ID + "LOST");
    }

};
function updateDeck(){
    $("deckcount").innerHTML = (deck.length);
    };

  // $("window").load(function(){
  //       createDeck();
  //       shuffle();
  //       createPlayers(1);
  //     });




}) // end of document ready
