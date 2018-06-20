// console.log("hi");

const deck = [];
const suits = ["spades", "diamonds","clubs", "hearts"];
const cardValues=["11", "2", "3", "4" ,"5" ,"6", "7", "8", "9", "10", "Q", "K"];

$(() =>{
  //defining about the Game button
  const $openBtn = $("#openModal");
//Grabbing modal
  const $modal = $("#modal");
//defining modal close button
  const $closeBtn =$("#close");
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

//building deck
const createDeck=()=> {
  deck = [];
  for(let i = 0; i<values.length; i++){
    for(let x =0; x < suites.lenght; x++) {
      const weight = parseInt(values[i]);
      if(values[i] == "J"  || values[i] == "Q" || values[i] == "K")
        weight = 10;
        if(values[i] == "A")
          weight = 11;
          const card = {Value: values[i], Suit: suits[x], weight: weight};
          deck.push(card);
    }
  }

}

// using Fisher-Yeats shuffle
const shuffle =(array)=> {
  const i = 0,
        j = 0,
        temp = null

    for(i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
}
//building players
const players = [];
const createPlayers=(num)=> {
  players = [];
  for(let i =1; i <= num; i++){
    let hand = [];
    let player = { Name: "Player" + i, ID: i, Points: 0, Hand: hand};
      players.push(player);
    }
}
//players and points
const createPlayersUI =()=>{
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
}
//dealing hands to players 2 cards each
$dealHands=() =>{
  for(let i = 0; i < 2; i++){
    for (let x = 0; x < players.length; x++){
        const card = deck.pop();
        players[x].hand.push(card);
        renderCard(card, x);
        updatePoints();
    }
  }
  updateDeck();
}

//cards
$renderCard=()=>{
    const hand = $("#hand" + player);
    $(getCardUI(card)).appendChild("hand");
}
  $getCardUI(card) = {
    // const el = $("<div>");
    el.addClass("card");
    (el.innerHTML) = (card.Suit + " " +card.Value);
    return(el);
  }

  const currentPlayer = 0;
  $hitMe(){
    //get a card from the deck to the current player
    // chexk if current player new points are over 21
    const card = deck.pop();
    players(currentPlayer).hand.push(card);
    renderCard(card, currentPlayer);
    updatePoint();
    check();
  }
// check Points
$check() =>{
  if(players[currentPlayer].Points > 21);
  $("status").innerHTML = ("Player:" + players[currentPlayer].ID +"LOST");

}

}) // end of document ready
