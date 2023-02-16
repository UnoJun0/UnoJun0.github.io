//Working Versions

//Clear buttons
//English - Clear Button
const btnClearTextEng = document.getElementById("clearTextEnglish");

btnClearTextEng.addEventListener("click", function (){
  outEng.textContent = "";
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

//English
// const btnEng = document.getElementById("generateEnglish");
// const outEng = document.getElementById("outputEnglish");
      
// btnEng.addEventListener("click", getWordEng);
   
// function getWordEng(){      
//   let theWordEng= ['Hello', 'Hi','Hey'];

//   let wordNum = Math.floor(Math.random() * theWordEng.length);  
//   outEng.textContent = theWordEng[wordNum];
//   }; 

//French
// const btnFre = document.getElementById("generateFrench");
// const outFre = document.getElementById("outputFrench");
      
// btnFre.addEventListener("click", getWordFre);
    
// function getWordFre(){      
//   var theWordFre= [
//     'Bonjoir',
//     'Salut',
//     'Bonsoir',
//   ];

// var wordNum = Math.floor(Math.random() * theWordFre.length);  
//   outFre.textContent = theWordFre[wordNum];
//   };

//Japanese
// document.getElementById("generateJapanese").addEventListener("click", generateJapanese)

// function generateJapanese (){
//   const japaneseWordList = ['Konnichiwa','Ohayou','Konbanwa'];
//   outputJapanese.textContent = japaneseWordList[Math.floor(Math.random()*japaneseWordList.length)]
// };

//German
function randomWord (words) { //this is for both German and Hindi
  return words [Math.floor(Math.random() * words.length)]
}
document.getElementById("generateGerman").addEventListener("click", germanButton)  

function germanButton () {
  const theWordGerm= ['Hallo', 'Guten Tag','Moin',];
  outputGerman.textContent = randomWord(theWordGerm)
};

//Hindi
document.getElementById("generateHindi").addEventListener("click", hindiButton)  

function hindiButton () {
  const theWordHindi = ['Namaste', 'Namaskar', 'Suprabhat'];
  outputHindi.textContent = randomWord(theWordHindi);
}

//Chinese
// document.getElementById("generateChinese").addEventListener("click", function () {
//   let finalOutputChinese = greetings.chinese[Math.floor(Math.random() * greetings.chinese.length)];
//   outputChinese.textContent = finalOutputChinese;
// });

// //object approach - can be used for any language, but currently only used for Chinese
// const greetings = {
//   english: ['Hi', 'Hello', 'Hey'],
//   french: ['Bonjoir','Salut','Bonsoir'],
//   japanese: ['Konnichiwa','Ohayou','Konbanwa'],
//   german: ['Hallo', 'Guten Tag','Moin',],
//   hindi: ['Namaste', 'Namaskar', 'Suprabhat'],
//   chinese: ['Nihao', 'Ninhao', 'Dajiahao']
// };

////New Code

//EnglishV2
const btnEng = document.getElementById("generateEnglish");
const outEng = document.getElementById("outputEnglish");

let theWordEng= ['Hello','Hi','Hey',];   

btnEng.addEventListener("click", getWordEng);

function getWordEng () {   

  if (theWordEng.length < 1) {
    outEng.textContent = "All done!";
    return;
  };

  let wordIndexEng = Math.floor(Math.random() * theWordEng.length);
  let randomWordEng =  theWordEng[wordIndexEng]; 
  outEng.textContent = randomWordEng;
  theWordEng.splice(wordIndexEng,1);
  };

//FrenchV2
const btnFre = document.getElementById("generateFrench");
const outFre = document.getElementById("outputFrench");
      
btnFre.addEventListener("click", getWordFre);
let theWordFrench= ['Bonjoir', 'Salut', 'Bonsoir',];
    
function getWordFre(){      

  if (theWordFrench.length == 0) {
    outFre.textContent = "Terminé";
    return;
  }

  let wordIndexFrench = Math.floor(Math.random() * theWordFrench.length);  
  outFre.textContent = theWordFrench[wordIndexFrench];
  theWordFrench.splice(wordIndexFrench, 1);
  };

//JapaneseV2
// document.getElementById("generateJapanese").addEventListener("click", generateJapanese)
// let theWordJapanese = ['Konnichiwa','Ohayou','Konbanwa'];

// function generateJapanese(){      
// if (theWordJapanese.length == 0) {
//   outputJapanese.textContent = "Donezo";
//   return;
// }

// let wordIndexJapanese = Math.floor(Math.random() * theWordJapanese.length);  
// outputJapanese.textContent = theWordJapanese[wordIndexJapanese];
// theWordJapanese.splice(wordIndexJapanese, 1);
// }

//JapaneseV3
document.getElementById("generateJapanese").addEventListener("click", generateJapanese);

const theWordJapanese = ['A','B','C'];

let wordListJapanese = [];

function generateJapanese (){

    let wordIndexJapanese = Math.floor(Math.random() * theWordJapanese.length);  
    let theWordJapaneseTemp = theWordJapanese[wordIndexJapanese];
    let previousWordJapanese = "";

    if (theWordJapaneseTemp === previousWordJapanese) {

      // outputJapanese.textContent = wordListJapanese;
      // return;}

      let theWordJapaneseAlt = theWordJapanese.splice(wordIndexJapanese, 1);
      let altJapaneseWord = theWordJapaneseAlt[Math.floor(Math.random()*theWordJapaneseAlt.length)];
      outputJapanese.textContent = altJapaneseWord;
      wordListJapanese.push(altJapaneseWord);
      outputChinese.textContent = wordListJapanese;
      // theWordJapaneseAlt = theWordJapanese;
      previousWordJapanese = "";
      return;}

      // let theWordJapanese2 = ['A','B','C'];
      // theWordJapanese2.splice(wordIndexJapanese,1);
      // let wordIndexJapanese2 = Math.floor(Math.random() * theWordJapanese2.length);  
      // let theWordJapaneseTemp2= theWordJapanese[wordIndexJapanese2];
      // outputJapanese.textContent = theWordJapaneseTemp2;
      // let previousWordJap
  
    else {
      outputJapanese.textContent = theWordJapaneseTemp;
      previousWordJapanese = theWordJapaneseTemp;
      wordListJapanese.push(theWordJapaneseTemp);
      outputChinese.textContent = wordListJapanese; //using this to test ability to maintain history
      return;
      }    
    }