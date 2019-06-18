"use strict";
var main = document.getElementById("deck");
/*
 * Create a list that holds all of your cards
 */
// DECLARING ALL THE VARIABLES REQUIRED
var childs = document.getElementsByClassName('card');
var list = [...childs];
let status = 0;
var time;
var timeArea = document.getElementById("time");
var moves = 0;
var cardStore = [];
var min;
var sec;
var hours;
var moveSection = document.getElementById("moves");
var starCount = 3;
var starSection = [...document.getElementsByClassName("fa-star")];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
// functionality to start the game
window.onload = startGame();

function startGame() {
	var changedCards = shuffle(list);
	for (var j in changedCards) {
		console.log(changedCards[j]);
		main.append(changedCards[j]);
	}
}
var m = 0;
// Event Listener to Show Card
while (m < list.length) {
	list[m].addEventListener("click", showCard);
	m++;
}

function showCard() {
	if (status == 0) {
		startTimer();
		status = status + 1;
	}
	this.classList.add("card", "open", "show", "disable");
	cardStore.push(this);
	if (cardStore.length == 2) {
		console.log(cardStore[0].children[0].classList.item(1));
		// INCREAMENT of MOVES
		moves = moves + 1;
		//Displaying card movies count in HTML
		moveSection.innerHTML = moves;
		starRating();
		if (cardStore[0].children[0].classList.item(1) == cardStore[1].children[0].classList.item(1)) {
			console.log("matched");
			cardStore[0].classList.add("match", "disable");
			cardStore[1].classList.add("match", "disable");
			console.log(matchedCards.length);
			if (matchedCards.length == 16) {
				clearInterval(time);
				// sweet Alert for pop up message
				Swal.fire({
					title: "congratulations",
					html: 'You have earned <strong style="color:#ff9f33; text-shadow: 3px 3px 3px #000">' + starCount + '<i class="fa fa-star"> </i> </strong> <br> and you have completed this game with the time of <br>' + hours + 'hours :' + min + 'minutes :' + sec + 'seconds',
					confirmButtonText: '<i class="fa fa-thums-up"></i> Restart',
				}).then(() => {
					// page reloading
					document.location.reload();
				});
			}
			cardStore = [];
		} else {
			cardStore[0].classList.add("unmatch");
			cardStore[1].classList.add("unmatch");
			console.log("unmatched");
			cardStore.map((card) => {
				setTimeout(() => {
					card.classList.remove("unmatch", "open", "show", "disable");
				}, 200);
			})
			cardStore = [];
		}
	}
}
var matchedCards = document.getElementsByClassName("match");
// timer functionality
function startTimer() {
	sec = 0;
	min = 0;
	hours = 0;
	time = setInterval(() => {
		sec = sec + 1;
		if (sec == 59) {
			min = min + 1;
			sec = 0;
		}
		if (min == 60) {
			hours = hours + 1;
			min = 0;
		}
		timeArea.innerHTML = hours + " : " + min + " : " + sec;
	}, 1000)
	if (matchedCards.length == 16) {
		clearInterval(time);
	}
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// star rating
function starRating() {
	if (moves >= 15 && moves <= 17) {
		starCount = 2;
		starSection[2].style.display = "none";
	}
	if (moves >= 17) {
		starCount = 1;
		starSection[1].style.display = "none";
	}
}
