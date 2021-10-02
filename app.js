// Js for navbar hamburger

const hamEvent = document.querySelector(".hamburger-list")
const navMenu = document.querySelector(".nav-menu")
const navList = document.querySelectorAll(".nav-list")

hamEvent.addEventListener("click",otherMenu)

function otherMenu() {
    hamEvent.classList.toggle("active")
    navMenu.classList.toggle("active")
}

navList.forEach(n => n.addEventListener("click", closingMenu))

function closingMenu() {
    hamEvent.classList.remove('active')
    navMenu.classList.remove('active')
}
// Selecting all DOM
const screen1El = document.querySelector('.screen1')
const screen2El = document.querySelector('.screen2')
const tempscreenEl = document.querySelector('.temp-screen')
const numericalEls = document.querySelectorAll('.number')
const operationEls = document.querySelectorAll('.operation') 
const equalEl = document.querySelector('.equal-btn')
const dotOperationEl = document.querySelector('.dot-operation')
const deleteAllEl = document.querySelector('.deleteall-btn')
const removeLastEl = document.querySelector('.clear-btn')

// Declaring required variables
let num1 = ""
let num2 = ""
let total = null
let finalOperation = ""
let noDot = false
numericalEls.forEach(number => {
    number.addEventListener('click', (e)=> {
        if (e.target.innerText ==="." && !noDot){
            noDot = true
        }
        else if(e.target.innerText === "." && noDot){
            return
        }
        num2 += e.target.innerText
        screen2El.innerText = num2
    })
})

operationEls.forEach(operation=> {
    operation.addEventListener('click', (e)=> {
        if (!num2) total
        noDot = false
        const operationValue = e.target.innerText
        if (num1 && num2 && finalOperation) {
            mathsOperation()
        }
        else {
            total = parseFloat(num2)
        }
        clearValue(operationValue)
        finalOperation = operationValue
        console.log(total)
    })
})

// creating a function clearValue

function clearValue(value = '') {
    num1 += num2 + ' ' + value + ' '
    screen1El.innerText = num1
    screen2El.innerText = ''
    num2 = ''
    tempscreenEl.innerText = total 
}

// Creating a function mathsOperation

function mathsOperation() {
    if(finalOperation === '+') {
        total = parseFloat(total) + parseFloat(num2)
    }
    else if(finalOperation === '-') {
        total = parseFloat(total) - parseFloat(num2)
    }
    else if(finalOperation === 'X') {
        total = parseFloat(total) * parseFloat(num2)
    }
    else if(finalOperation === '/') {
        total = parseFloat(total) / parseFloat(num2)
    }
    else if (finalOperation === '%') {
        total = parseFloat(total) % parseFloat(num2)
    }
}

equalEl.addEventListener('click', (e)=> {
    if (!num1 || !num2) return
    noDot = false
    mathsOperation()
    clearValue()
    screen2El.innerText = total
    tempscreenEl.innerText = ''
    num2 = total
    num1 = ' '
})

deleteAllEl.addEventListener('click', (e)=> {
    screen1El.innerText = "0"
    screen2El.innerText = "0"
    tempscreenEl.innerText = "0"
    num1 = ""
    num2 = ""
    total = ""
})

removeLastEl.addEventListener('click', (e)=> {
    screen2El.innerText = ''
    num2 = ''
})
// creating a function click button

function clicKey(key) {
    numericalEls.forEach(button=> {
        if(button.innerText === key){
            button.click()
        }
    })
}

function clickOp(key) {
    operationEls.forEach(button=> {
        if(button.innerText === key){
            button.click()
        }
    })
}

function clickEqualkey(key) {
    equalEl.click()
}
// Using keyboards key to insert inputs

window.addEventListener('keydown', (e)=> {
    if (e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9'
    ){
        clicKey(e.key)
    }else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%'

    ) {
        clickOp(e.key)
    }
    else if(e.key === '*') {
        clickOp('X')
    }
    else if (e.key == "Enter" || e.key === "=") {
        clickEqualkey()
    }
})

