let homePoints = 0
let guestPoints = 0

let homeScore = document.getElementById("home-score") 
let guestScore = document.getElementById("guest-score") 

function homeAdd1() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function homeAdd2() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function homeAdd3() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function guestAdd1() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function guestAdd2() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function guestAdd3() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}