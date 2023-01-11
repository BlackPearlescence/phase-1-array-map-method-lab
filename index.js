const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const exclusionList = ["OO", "API", "NaN","stopPropagation","PreventDefault","JSONP?"];
const weirdList = ["Oo","Api","Nan","Stoppropagation","Preventdefault","Jsonp?"];

const titleCased = () => {
  // for(const i = 0; i < tutorials.length - 1; i++){
  //   let splitTutorials = String.prototype.split(tutorials[i]);
  //   for(const j = 0; j < tutorials.length - 1; j++){
  //     splitTutorials.map(splitTutorials[0][1] + splitTutorials.slice(1));
  //   }
  // }
  let words = "";
  let count = 0;
  // for(const tutorialTitle of tutorialList){
  for(let i = 0; i < tutorials.length; i++){
    // words = tutorials[i].toLowerCase();
    words = tutorials[i].split(' ');
    words = words.map(words => words[0].toUpperCase() + words.slice(1));
    for(let j = 0; j < exclusionList.length ; j++){
      for(let k = 0; k < words.length ; k++){
        if(words[k] === weirdList[j]){
          words[k] = exclusionList[j];
        }
      }
      
    }
    words = words.join(" ");
    tutorials[i] = words;
  }
  
  // }
  
  return tutorials
}     
