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
let saveEl = document.getElementById("save-el")
let count = 0 

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let saveCount = count + " - "
    saveEl.textContent += saveCount
    count = 0
    countEl.innerText = count
    console.log(count)
}




//let name = "Ryan"
//let greeting = "Hi, my name is"

//let myGreeting = greeting + " " + name + "!"
//console.log(myGreeting)

//let points = 4
//let bonusPoints = "10"
//let totalPoints = points + bonusPoints
//console.log(totalPoints)



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


//let welcomeEl = document.getElementById("welcome-el")
//let name = "Ryan"
//let greeting = "Welcome back "

//welcomeEl.innerText = greeting + name 

//welcomeEl.innerText += " hi"

//concadinating variables
const firstName = "Ryan"
const lastName = " Engel"
let fullName = firstName + lastName

console.log(fullName)

//function to call in console
let name = "Linda"
let greeting = "Hi there"

function greetLinda(){
    console.log(greeting + ", " + name + "!")
}
greetLinda()

//onclick function
function nameGreeting() {
    let call = greeting + ", " + name + "!"
    console.log(call)
}

//incrementing and decrementing variables
let myPoints = 3

function add3Points() {
    myPoints += 3
}
add3Points()
add3Points()
add3Points()
function remove1Point() {
    myPoints -= 1
}
remove1Point()
remove1Point()
console.log(myPoints)

//onlick rendering error message

let error = document.getElementById("error")

function purchase() {
    error.textContent= "Something went wrong, please try again" 
}


//simple calculator 

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el") 

function add() {
    let result = num1 + num2
    sum.innerText = "Sum: " + result
}

function subtract() {
    sum.innerText = num1 - num2
}

function divide() {
    sum.innerText = num1 / num2
}

function multiply() {
    sum.innerText = num1 * num2
}