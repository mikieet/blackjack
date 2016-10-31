// add object of all cards

// var deck = [A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A12,A13,A14,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C12,C13,C14,H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H12,H13,H14,D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D12,D13,D14]


var deck = [
  	{
    id: "A5",
    suit: "A", 
    card: "5", 
    value: 5
  },
{
    id: "A6",
    suit: "A", 
    card: "6", 
    value: 6
  },
{
    id: "A7",
    suit: "A", 
    card: "7", 
    value: 7
  },
{
    id: "A8",
    suit: "A", 
    card: "8", 
    value: 8
  },
{
    id: "A9",
    suit: "A", 
    card: "9", 
    value: 9
  },
{
    id: "A10",
    suit: "A", 
    card: "10", 
    value: 10
  }
]


$(function(){

// set objects to hold cards

var playersHand = []
var dealersHand = []
var deckSize = deck.length 
var playersScore = null
var dealersScore = null

// select card
function dealCard(player){
  random = Math.floor((Math.random() * deckSize) + 1)
  
  card = deck[random];

  player.push(card)


  displayCards(playersHand);
  deckSize = deckSize - 1
}

function dealForDealer(player){
  calculateScore(player)
}

function firstDeal(){
  dealCard(playersHand);
  dealCard(dealersHand);    
  dealCard(playersHand);
  dealCard(dealersHand);

}



// generate dealers hand

// generate players hand
  
	// calculate total score
var score = null

function calculateScore(player) {
  
  var score = 0
  for (var i = player.length - 1; i >= 0; i--) {
    score += player[i].value
  
    checkScore(player, score);
    displayResult(player, score)
  }
}

function checkScore(player, score){
  if (score > 21){
    bust();
    dealForDealer();
    console.log('Stop!')

  } else if (player.length == 5) {
    console.log("!!! WINNER !!!")
    playerWinMessage()

  } else if (score < 21){
    console.log('carry on!')    
  }
}

function displayResult(player, score){
  if (player === playersHand){
    $("#total-score").html(score)
    var playersScore = score

  } else if (player === dealersHand){
    $("#dealer-score").html(score)
    var dealersScore = score
  }
  
}
  
function defineWinner(){
  finalScorePlayer = $("#total-score").html()
  finalScoreDealer = $("#dealer-score").html()

  if (finalScorePlayer > finalScoreDealer && finalScorePlayer < 22 ){
    playerWinMessage();
  } else {
    dealerWinMessage();
  }
  
}
  
// DEALERS MECHANISM  

// function dealForDealer(){
//   console.log("this is calculating the dealer")
  
//   while (score < 17) {
//     dealCard(dealersHand);
//     displayCards(playersHand)
//     calculateScore(dealersHand);

//     // validateScore(dealersHand);
//     console.log('saafsadsadsadasdasdassa')
//     console.log(dealersHand)

//   } 
// }

// DISPLAY PLAYERS CARDS

function displayCards(playersHand){
  var showCard = ''
  for (var i = playersHand.length - 1; i >= 0; i--) {
    showCard += ('<li>' + playersHand[i].suit + playersHand[i].card + '</li>') 
  }
    showHands = $("#players-cards").html(showCard)

}

// DISPLAY DEALERS CARDS

function displayDealersCards(dealersHand){
  var showCard = ''

  for (var i = dealersHand.length - 1; i >= 0; i--) {
    showCard += ('<li>' + dealersHand[i].suit + dealersHand[i].card + '</li>') 
  }

    showHands = $("#dealers-cards").html(showCard)

}

//USER ACTIONS

  $("#deal").on('click', function(){

    firstDeal();
    calculateScore(playersHand);

  })

  $("#hit").on('click', function(){

    dealCard(playersHand);
    calculateScore(playersHand);

  })

  $("#stick").on('click', function(){
    
    displayDealersCards(dealersHand);
    calculateScore(dealersHand);
    defineWinner();

  })


  // DISPLAY OUTCOMES

  function bust(){
    $("#outcome").html("YOU'RE BUST!!!")
  }

  function playerWinMessage(){
    $("#outcome").html("YOU WIN!!!")
  }

  function dealerWinMessage(){
    $("#outcome").html("YOU LOSE!!!")
  }


});
	// generate new card

	// append new card to players hand

	// calculate total score

	// if player score < 21 allow to continue

		// else player bust

		// reveal dealers hand

		// declare dealer the winner

// on click 'stick'
	
	// generate dealers hand based on rules

		// if dealers score < 17, add new card

		// else reveal dealers hand

	// reveal dealers hand

// calculate winner
	
// display winner

// new deal