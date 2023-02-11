//English
const btnEng = document.getElementById("generateEnglish");
const outEng = document.getElementById("outputEnglish");
      
btnEng.addEventListener("click", getWordEng);
   
function getWordEng(){      
  var theWordEng= [
    'Hello',
    'Hi',
    'Hey',
  ];

  var wordNum = Math.floor(Math.random() * theWordEng.length);  
  outEng.textContent = theWordEng[wordNum];
  }

const btnClearTextEng = document.getElementById("clearTextEnglish");

btnClearTextEng.addEventListener("click", function (){
  outEng.textContent = "";
});


//French
const btnFrench = document.getElementById("generateFrench");

btnFrench.addEventListener("click", generate);

function generate (){
  const frenchWordList = ['Bonjoir','Salut','Bonsoir'];
  document.getElementById("outputFrench").textContent = frenchWordList[Math.floor(Math.random()*frenchWordList.length)]
}

const btnClearTextFrench = document.getElementById("clearTextFrench");

btnClearTextFrench.addEventListener("click", function (){
  document.getElementById("outputFrench").textContent = ""
});


/*French2
const btnFre = document.getElementById("generateFrench");
const outFre = document.getElementById("outputFrench");
      
btnFre.addEventListener("click", getWordFre);
    
function getWordFre(){      
  var theWordFre= [
    'Bonjoir',
    'Salut',
    'Bonsoir',
  ];

var wordNum = Math.floor(Math.random() * theWordFre.length);  
  outFre.textContent = theWordFre[wordNum];
  }*/

//Japanese
document.getElementById("generateJapanese").addEventListener("click", generateJapanese)

function generateJapanese (){
  const japaneseWordList = ['Konnichiwa','Ohayou','Konbanwa'];
  outputJapanese.textContent = japaneseWordList[Math.floor(Math.random()*japaneseWordList.length)]
}

const btnClearTextJapanese = document.getElementById("clearTextJapanese");

btnClearTextJapanese.addEventListener("click", function (){
  document.getElementById("outputJapanese").textContent = ""
});

/*Japanese2
const btnJap = document.getElementById("generateJapanese");
const outJap = document.getElementById("outputJapanese");
    
btnJap.addEventListener("click", getWordJap);
  
function getWordJap(){      
var theWordJap= [
  'Konnichiwa',
  'Ohayou',
  'Konbanwa',
];

var wordNum = Math.floor(Math.random() * theWordJap.length);  
outJap.textContent = theWordJap[wordNum];
}*/


//German
function randomWord (words) { //this is for both German and Hindi
  return words [Math.floor(Math.random() * words.length)]
}
document.getElementById("generateGerman").addEventListener("click", germanButton)  

function germanButton () {
  const theWordGerm= ['Hallo', 'Guten Tag','Moin',];
  outputGerman.textContent = randomWord(theWordGerm)
}

const btnClearTextGerman = document.getElementById("clearTextGerman");

btnClearTextGerman.addEventListener("click", function (){
  document.getElementById("outputGerman").textContent = ""
});

/*German2
const btnGerm = document.getElementById("generateGerman");
const outGerm = document.getElementById("outputGerman");
    
btnGerm.addEventListener("click", getWordGerman);
  
function getWordGerman(){      
const theWordGerm= [
  'Hallo',
  'Guten Tag',
  'Moin',
];

var wordNum = Math.floor(Math.random() * theWordGerm.length);  
outGerm.textContent = theWordGerm[wordNum];
}*/


//Hindi
document.getElementById("generateHindi").addEventListener("click", hindiButton)  

function hindiButton () {
  const theWordHindi = ['Namaste', 'Namaskar', 'Suprabhat'];
  outputHindi.textContent = randomWord(theWordHindi);
}

const btnClearTextHindi = document.getElementById("clearTextHindi");

btnClearTextHindi.addEventListener("click", function (){
  outputHindi.textContent = ""
});


/*Hindi2
const btnHindi = document.getElementById("generateHindi");
const outHindi = document.getElementById("outputHindi");
    
btnHindi.addEventListener("click", getWordHindi);
  
function getWordHindi(){      
var theWordHindi= [
  'Namaste',
  'Namaskar',
  'Suprabhat',
];

var wordNum = Math.floor(Math.random() * theWordHindi.length);  
outHindi.textContent = theWordHindi[wordNum];
}*/

//Chinese
document.getElementById("generateChinese").addEventListener("click", function () {
  let finalOutputChinese = greetings.chinese[Math.floor(Math.random() * greetings.chinese.length)];
  outputChinese.textContent = finalOutputChinese;
});

const btnClearTextChinese = document.getElementById("clearTextChinese");

btnClearTextChinese.addEventListener("click", function (){
  document.getElementById("outputChinese").textContent = ""
});

//object approach - can be used for any language, but currently only used for Chinese
const greetings = {
  english: ['Hi', 'Hello', 'Hey'],
  french: ['Bonjoir','Salut','Bonsoir'],
  japanese: ['Konnichiwa','Ohayou','Konbanwa'],
  german: ['Hallo', 'Guten Tag','Moin',],
  hindi: ['Namaste', 'Namaskar', 'Suprabhat'],
  chinese: ['Nihao', 'Ninhao', 'Dajiahao']
}


/*Chinese2
const btnChinese = document.getElementById("generateChinese");
const outChinese = document.getElementById("outputChinese");
    
btnChinese.addEventListener("click", getWordChinese);
  
function getWordChinese(){      
var theWordChinese= [
  'Nihao',
  'Ninhao',
  'Dajiahao',
];

var wordNum = Math.floor(Math.random() * theWordChinese.length);  
outChinese.textContent = theWordChinese[wordNum];
}*/

