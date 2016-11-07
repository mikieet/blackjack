

$(function(){
  // var source = $("#my-template").html()
  // var template = Handlebars.compile(source);
  // $("body").append(template(deck));
console.log(deck.length)
// set objects to hold cards

var playersHand = []
var dealersHand = []
var deckSize = deck.length 
var playersScore = null
var dealersScore = null

function reDeal(player){
  console.log(player)
  for (var i = player.length - 1; i >= 0; i--) {
    deck.push(player[i])
    player.splice([i], 1)
  }


}


// select card
function dealCard(player){

  random = Math.floor((Math.random() * deckSize) + 1)
  
  card = deck[random];

  player.push(card)
  deck.splice(random, 1)


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
    console.log(score)
  
    checkScore(player, score);
    displayResult(player, score)
  } 
}

function checkScore(player, score){
  if (score > 21){
    bust();
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
  


// DISPLAY PLAYERS CARDS

//time delay


function displayCards(playersHand){
  var showCard = ''
  for (var i = playersHand.length - 1; i >= 0; i--) {
    showCard += ('<li>' + playersHand[i].card + playersHand[i].suit + '</li>') 
  }
    showHands = $("#players-cards").html(showCard)
  // $("#players-cards").append(template({playingCard: playersHand}));
}

// DISPLAY DEALERS CARDS

function displayDealersCards(dealersHand){
  var showCard = ''

  for (var i = dealersHand.length - 1; i >= 0; i--) {
    showCard += ('<li>' + dealersHand[i].card + dealersHand[i].suit + '</li>') 
  }

    showHands = $("#dealers-cards").html(showCard)

}

//USER ACTIONS

  $("#deal").on('click', function(){
    // move all cards from playersHand and dealersHand back to deck
    reDeal(playersHand);
    reDeal(dealersHand);
    firstDeal();
    calculateScore(playersHand);

  })

  $("#hit").on('click', function(){
    dealCard(playersHand)
    calculateScore(playersHand);

  })

  $("#stick").on('click', function(){
    
    calculateScore(dealersHand);
    displayDealersCards(dealersHand);
    dealToDealer();
    defineWinner();

  })

  function dealToDealer(){
    console.log("adssada")
  
    var dealerScore = $("#dealer-score").html()
    dealerScore = parseInt(dealerScore, 10)

    if (dealerScore < 17){

      dealCard(dealersHand);    
      displayDealersCards(dealersHand)
      calculateScore(dealersHand);
      dealToDealer()

    } else {
      console.log("dealserStops")
    }
  }

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