// add object of all cards

// var deck = [A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A12,A13,A14,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C12,C13,C14,H1,H2,H3,H4,H5,H6,H7,H8,H9,H10,H12,H13,H14,D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D12,D13,D14]


var deck = [
  	{
    id: "A5",
    suit: "Ace", 
    card: "5", 
    value: 5
  },
{
    id: "A6",
    suit: "Ace", 
    card: "6", 
    value: 6
  },
{
    id: "A7",
    suit: "Ace", 
    card: "7", 
    value: 7
  },
{
    id: "A8",
    suit: "Ace", 
    card: "8", 
    value: 8
  },
{
    id: "A9",
    suit: "Ace", 
    card: "9", 
    value: 9
  },
{
    id: "A10",
    suit: "Ace", 
    card: "10", 
    value: 10
  }
]


$(function(){

var playersHand = []
var dealersHand = []
// var random = Math.floor((Math.random() * deck.length))
var random = Math.floor((Math.random() * 10))

// select card
  function dealCard(player){
  	var card = deck[random];

    // deck.splice(random,1)
    player.push(random)
    
    // console.log(deck)
    // console.log(playersHand)
  }

  function firstDeal(){
    dealCard(playersHand);
    dealCard(dealersHand);
    dealCard(playersHand);
    dealCard(dealersHand);

  }

  function handValid(score){

  }

// generate dealers hand

// generate players hand
  
	// calculate total score
  function calculateScore(player) {
    var score = 0
    for (var i = player.length - 1; i >= 0; i--) {
      score += player[i]
    }
    if (score > 21){
      // bust();
      // showDealersHand();
      console.log('Stop!')

    } else if (player.length == 5) {
      console.log("!!! WINNER !!!")

    } else {
      console.log('carry on!')
    }
    
    console.log(score)
  }


// on click 'hit'

  $("#deal").on('click', function(){

    firstDeal();
    calculateScore(playersHand);
    console.log("player = " + playersHand)  
    console.log("dealer = " + dealersHand)  
  })

  $("#hit").on('click', function(){
    var random = Math.floor((Math.random() * 52) + 1)

    dealCard(playersHand);
    handValid()
    calculateScore(playersHand)
    console.log("player = " + playersHand)  
  })
})
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