//document.getElementById("count-el").innerText = 5

//Simple variable operation

//let myAge = 25
//let humanDogRatio = 7
//let count = myAge * humanDogRatio
//console.log(count)

//Reassigning Variables

//let bounsPoints=50
//bonusPoints=100
//bonusPoints=25
//bonusPoints=70
//console.log(bonusPoints)
//let bonsPoints = 50
//bonsPoints = bonsPoints + 50
//bonsPoints = bonsPoints - 75
//bonsPoints = bonsPoints + 45
//console.log(bonsPoints)

//1. initialize the count as 0
//2. Increment the count each time the button is clicked.
//3. change the count el ID in the html to reflect the new count
let countEl = document.getElementById("count-el")
let count = 0 

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}
function save() {
    console.log(count)
}




//you can also define the document as a variable first,
//let countEl = document.get ElementById("count-el")
// then, in the function you would instead write countEl.innerText = count  ---rather than the entire document syntax thing

//function increment() {
//    console.log("The Button Was Clicked")
//}

//functions and variables ??

//let lapsCompleted = 0
//function incrementLaps() {
//    lapsCompleted = lapsCompleted + 3
//}
//incrementLaps()
//incrementLaps()
//incrementLaps()
//console.log(lapsCompleted)


