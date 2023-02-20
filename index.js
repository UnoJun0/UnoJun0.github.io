//Working Versions

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

//EnglishV1
// const btnEng = document.getElementById("generateEnglish");
// const outEng = document.getElementById("outputEnglish");
      
// btnEng.addEventListener("click", getWordEng);
   
// function getWordEng(){      
//   let theWordEng= ['Hello', 'Hi','Hey'];

//   let wordNum = Math.floor(Math.random() * theWordEng.length);  
//   outEng.textContent = theWordEng[wordNum];
//   }; 

//FrenchV1
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

//JapaneseV1
// document.getElementById("generateJapanese").addEventListener("click", generateJapanese)

// function generateJapanese (){
//   const japaneseWordList = ['Konnichiwa','Ohayou','Konbanwa'];
//   outputJapanese.textContent = japaneseWordList[Math.floor(Math.random()*japaneseWordList.length)]
// };

//GermanV1
// function randomWord (words) { //this is for both German and Hindi
//   return words [Math.floor(Math.random() * words.length)]
// }
// document.getElementById("generateGerman").addEventListener("click", germanButton)  

// function germanButton () {
//   const theWordGerm= ['Hallo', 'Guten Tag','Moin',];
//   outputGerman.textContent = randomWord(theWordGerm)
// };

//Hindi
// document.getElementById("generateHindi").addEventListener("click", hindiButton)  

// function hindiButton () {
//   const theWordHindi = ['Namaste', 'Namaskar', 'Suprabhat'];
//   outputHindi.textContent = randomWord(theWordHindi);
// }

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
// const btnEng = document.getElementById("generateEnglish");
// const outEng = document.getElementById("outputEnglish");

// let theWordEng= ['Hello','Hi','Hey',];   

// btnEng.addEventListener("click", getWordEng);

// function getWordEng () {   

//   if (theWordEng.length < 1) {
//     outEng.textContent = "All done!";
//     return;
//   };

//   let wordIndexEng = Math.floor(Math.random() * theWordEng.length);
//   let randomWordEng =  theWordEng[wordIndexEng]; 
//   outEng.textContent = randomWordEng;
//   theWordEng.splice(wordIndexEng,1);
//   };

//EnglishV3
document.getElementById("generateEnglish").addEventListener("click", generateEnglish);

let theWordEnglish = ['Hello','Hi','Hey',];   
let previousWordEnglish = "";
let previousWordsListEnglish = [];
 
function generateEnglish (){
  
  let wordIndexEnglish = 0;
  let theWordEnglishTemp = "";

  do {
    wordIndexEnglish = Math.floor(Math.random() * theWordEnglish.length);  
    theWordEnglishTemp = theWordEnglish[wordIndexEnglish];
  }while(theWordEnglishTemp===previousWordEnglish);
  
  previousWordEnglish = theWordEnglishTemp;
  outputEnglish.textContent = theWordEnglishTemp;
  previousWordsListEnglish.push(previousWordEnglish);
  console.log(previousWordsListEnglish);
};

//FrenchV2
document.getElementById("generateFrench").addEventListener("click", generateFrench);

let theWordFrench = ['Bonjoir', 'Salut','Bonsoir',];
let previousWordFrench = "";
let previousWordsListFrench = [];
 
function generateFrench (){
  
  let wordIndexFrench = 0;
  let theWordFrenchTemp = "";

  do {
    wordIndexFrench = Math.floor(Math.random() * theWordFrench.length);  
    theWordFrenchTemp = theWordFrench[wordIndexFrench];
  }while(theWordFrenchTemp===previousWordFrench);
  
  previousWordFrench = theWordFrenchTemp;
  outputFrench.textContent = theWordFrenchTemp;
  previousWordsListFrench.push(previousWordFrench);
  console.log(previousWordsListFrench);
}

//JapaneseV2
document.getElementById("generateJapanese").addEventListener("click", generateJapanese);

let theWordJapanese = ['Konnichiwa','Ohayou','Konbanwa'];
let previousWordJapanese = "";
let previousWordsListJapanese = [];
 
function generateJapanese (){
  
  let wordIndexJapanese = 0;
  let theWordJapaneseTemp = "";

  do {
    wordIndexJapanese = Math.floor(Math.random() * theWordJapanese.length);  
    theWordJapaneseTemp = theWordJapanese[wordIndexJapanese];
  }while(theWordJapaneseTemp===previousWordJapanese);
  
  previousWordJapanese = theWordJapaneseTemp;
  outputJapanese.textContent = theWordJapaneseTemp;
  previousWordsListJapanese.push(previousWordJapanese);
  console.log(previousWordsListJapanese);
};

//GermanV2
document.getElementById("generateGerman").addEventListener("click", generateGerman);

let theWordGerman = ['Hallo', 'Guten Tag','Moin',];
let previousWordGerman = "";
let previousWordsListGerman = [];
 
function generateGerman (){
  
  let wordIndexGerman = 0;
  let theWordGermanTemp = "";

  do {
    wordIndexGerman = Math.floor(Math.random() * theWordGerman.length);  
    theWordGermanTemp = theWordGerman[wordIndexGerman];
  }while(theWordGermanTemp===previousWordGerman);
  
  previousWordGerman = theWordGermanTemp;
  outputGerman.textContent = theWordGermanTemp;
  previousWordsListGerman.push(previousWordGerman);
  console.log(previousWordsListGerman);
};    

//HindiV2
document.getElementById("generateHindi").addEventListener("click", generateHindi);

let theWordHindi = ['Namaste', 'Namaskar', 'Suprabhat'];
let previousWordHindi = "";
let previousWordsListHindi = [];
 
function generateHindi (){
  
  let wordIndexHindi = 0;
  let theWordHindiTemp = "";

  do {
    wordIndexHindi = Math.floor(Math.random() * theWordHindi.length);  
    theWordHindiTemp = theWordHindi[wordIndexHindi];
  }while(theWordHindiTemp===previousWordHindi);
  
  previousWordHindi = theWordHindiTemp;
  outputHindi.textContent = theWordHindiTemp;
  previousWordsListHindi.push(previousWordHindi);
  console.log(previousWordsListHindi);
};    

//ChineseV2
{document.getElementById("generateChinese").addEventListener("click", generateChinese);

let theWordChinese = ['Nihao', 'Ninhao', 'Dajiahao'];
let previousWordChinese = "";
let previousWordsListChinese = [];
 
function generateChinese (){
  
  let wordIndexChinese = 0;
  let theWordChineseTemp = "";

  do {
    wordIndexChinese = Math.floor(Math.random() * theWordChinese.length);  
    theWordChineseTemp = theWordChinese[wordIndexChinese];
  }while(theWordChineseTemp===previousWordChinese);
  
  previousWordChinese = theWordChineseTemp;
  outputChinese.textContent = theWordChineseTemp;
  previousWordsListChinese.push(previousWordChinese);
  console.log(previousWordsListChinese);
};    }