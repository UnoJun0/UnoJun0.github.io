//Working Versions

//Language Objects
let English = {
  wordList: ['Hi', 'Hello', 'Hey'],
  previousWord: "",
  outputDestination: outputEnglish,
};

let French = {
  wordList: ['Bonjoir','Salut','Bonsoir'],
  previousWord: "",
  outputDestination: outputFrench,
};

let Japanese = {
  wordList: ['Konnichiwa','Ohayou','Konbanwa'],
  previousWord: "",
  outputDestination: outputJapanese,
};

let German = {
  wordList: ['Hallo', 'Guten Tag','Moin',],
  previousWord: "",
  outputDestination: outputGerman,
};

let Hindi = {
  wordList: ['Namaste', 'Namaskar', 'Suprabhat'],
  previousWord: "",
  outputDestination: outputHindi,
};

let China = {
  wordList: ['Nihao', 'Ninhao', 'Dajiahao'],
  previousWord: "",
  outputDestination: outputChinese,
};

//Generate Buttons
document.getElementById("generateEnglish").addEventListener("click", () => generateRandomWord(English));
document.getElementById("generateFrench").addEventListener("click", () => generateRandomWord(French));
document.getElementById("generateJapanese").addEventListener("click", () => generateRandomWord(Japanese));
document.getElementById("generateGerman").addEventListener("click", () => generateRandomWord(German));
document.getElementById("generateHindi").addEventListener("click", () => generateRandomWord(Hindi));
document.getElementById("generateChinese").addEventListener("click", () => generateRandomWord(China));

//Function for random word generation
function generateRandomWord (object) {
  let wordIndex = 0;
  let tempWord = "";

  do {
    let tempWordList = object.wordList;
    wordIndex = Math.floor(Math.random() * tempWordList.length);  
    tempWord = tempWordList[wordIndex];
  } while (tempWord === object.previousWord);
  
  object.outputDestination.textContent = tempWord;
  object.previousWord = tempWord;

};
//Clear buttons
//English - Clear Button
const btnClearTextEnglish = document.getElementById("clearTextEnglish");

btnClearTextEnglish.addEventListener("click", function (){
  document.getElementById("outputEnglish").textContent = ""
});

//French - Clear Button
const btnClearTextFrench = document.getElementById("clearTextFrench");

btnClearTextFrench.addEventListener("click", function (){
  document.getElementById("outputFrench").textContent = ""
});

//Japanese - Clear Button
const btnClearTextJapanese = document.getElementById("clearTextJapanese");

btnClearTextJapanese.addEventListener("click", function (){
  document.getElementById("outputJapanese").textContent = ""
});

//German - Clear Button
const btnClearTextGerman = document.getElementById("clearTextGerman");

btnClearTextGerman.addEventListener("click", function (){
  document.getElementById("outputGerman").textContent = ""
});

//Hindi - Clear Button
const btnClearTextHindi = document.getElementById("clearTextHindi");

btnClearTextHindi.addEventListener("click", function (){
  outputHindi.textContent = ""
});

//Chinese Clear Button
const btnClearTextChinese = document.getElementById("clearTextChinese");

btnClearTextChinese.addEventListener("click", function (){
  document.getElementById("outputChinese").textContent = ""
});

//Clear All Text Fields
const btnClearTextAll = document.getElementById("clearAll");

btnClearTextAll.addEventListener("click", clearAllFields);

function clearAllFields () {
  document.getElementById("outputEnglish").textContent = "";
  document.getElementById("outputFrench").textContent = "";
  document.getElementById("outputJapanese").textContent = "";
  document.getElementById("outputGerman").textContent = "";
  document.getElementById("outputHindi").textContent = "";
  document.getElementById("outputChinese").textContent = "";
};

  