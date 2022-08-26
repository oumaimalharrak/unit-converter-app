/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// grap input
let num = 0
const numberTyped= document.getElementById('type')
const lengthBox= document.getElementById('length')
const volumeBox = document.getElementById('volume')
const massBox = document.getElementById('mass')

const btnEl= document.getElementById('btn')
btnEl.addEventListener('click',convert)

// onclick convert function
function convert(){
    num = numberTyped.value;
    convertToMeters();
    convertToLiters();
    convertToKilograms()
}

//convert to meter function
function convertToMeters(){ 
     let meters = (num * 0.3048).toFixed(2);
     let feet = (num * 3.2808).toFixed(2);
     lengthBox.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
}

//convert to liter function
function convertToLiters(){
    let liters = (num * 0.264).toFixed(2)
    let gallons = (num * 3.785411784).toFixed(2)
    volumeBox.textContent = `${num} Liters = ${liters} Gallons | ${num} Gallons = ${gallons} Liters`
}

//convert to kilograms function
function convertToKilograms(){
    let kilograms = (num *  2.204).toFixed(2)
    let pounds = (num * 0.4535923).toFixed(2)
    massBox.textContent = `${num} Kilograms = ${kilograms} Pounds| ${num} Pounds = ${pounds} Kilograms`
}