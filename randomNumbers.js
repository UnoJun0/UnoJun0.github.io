//creates js variables mapped to html elements
let btn = document.querySelector('button');
let output = document.querySelector('#output');

//function for creating random numbers
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
};

//function for creating an array
function createArrayOfNumbers(start, end){
    let myArray = [];
    for(let i = start; i <= end; i++) { 
        myArray.push(i);
    }
    return myArray;
};

//array variable that takes two arguments (start and finish);
let numbersArray = createArrayOfNumbers(1,20);

btn.addEventListener('click',() => {
    if(numbersArray.length == 0){
        output.innerText = 'No More Random Numbers';
        return;
    }

    let randomIndex = getRandomNumber(0, numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    output.innerText = randomNumber;
    numbersArray.splice(randomIndex, 1);
});

document.querySelector('p').textContent = numbersArray