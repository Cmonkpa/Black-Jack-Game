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
// const createPlayersUI =()=>{
//   const
// }

}) // end of document ready
