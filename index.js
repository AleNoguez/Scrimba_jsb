let homeCounterEl = document.getElementById("home-counter")
let guestCounterEl = document.getElementById("guest-counter")
let homeCount = 0
let guestCount = 0

function restartGame(){
    homeCount = 0
    guestCount = 0
    homeCounterEl.textContent = 0
    guestCounterEl.textContent = 0
}

function addHome(amount){
    homeCount += amount
    homeCounterEl.textContent = homeCount
}

function addGuest(amount){
    guestCount += amount
    guestCounterEl.textContent = guestCount
}