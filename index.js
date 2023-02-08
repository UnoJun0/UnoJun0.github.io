const btnEng = document.getElementById("generateEnglish");
const out = document.getElementById("output");
      
btnEng.addEventListener("click", getWord);
   
function getWord(){      
  var theWord= [
    'Hello',
    'Hi',
    'Yo',
  ];

var wordNum = Math.floor(Math.random() * theWord.length);  
  out.textContent = theWord[wordNum];
  }


