function check() {
    console.log('test');
}

function yes() {
    alert(output.textContent);
}

function Random() {
    return Math.floor(Math.random() * 9000000000) + 1000000000;
}
  
function randomValue() {
    document.getElementById('tb').value = Random();
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const yesButton = document.querySelector('.yes-button').addEventListener('click', yes);
const noButton = document.querySelector('.no-button').addEventListener('click', randomValue);