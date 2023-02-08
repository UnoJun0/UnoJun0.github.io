//English
const btnEng = document.getElementById("generateEnglish");
const outEng = document.getElementById("outputEnglish");
      
btnEng.addEventListener("click", getWordEng);
   
function getWordEng(){      
  var theWordEng= [
    'Hello',
    'Hi',
    'Yo',
  ];

var wordNum = Math.floor(Math.random() * theWordEng.length);  
  outEng.textContent = theWordEng[wordNum];
  }

//French
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
  }

//Japanese
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
}

//German
const btnGerm = document.getElementById("generateGerman");
const outGerm = document.getElementById("outputGerman");
    
btnGerm.addEventListener("click", getWordGerman);
  
function getWordGerman(){      
var theWordGerm= [
  'Hallo',
  'Guten Tag',
  'Moin',
];

var wordNum = Math.floor(Math.random() * theWordGerm.length);  
outGerm.textContent = theWordGerm[wordNum];
}

//Hindi
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
}

//Chinese
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
}