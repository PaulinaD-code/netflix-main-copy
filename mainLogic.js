
// language-choosing-btn

let displayingLanguage = document.querySelector('.js-language-choosing-container');
let languagesAnchors = document.querySelector('.js-languages-anchors');

displayingLanguage.addEventListener('click', ()=>{
  showAnchors();
});

function showAnchors(){
  if(displayingLanguage.className === "language-displaying-container js-language-choosing-container"){
    displayingLanguage.className = "language-displaying-container js-language-choosing-container language-displaying-container-active";

    languagesAnchors.className = "site-languages-choosing-visible";

  }else if(displayingLanguage.className === "language-displaying-container js-language-choosing-container language-displaying-container-active"){
   displayingLanguage.className = "language-displaying-container js-language-choosing-container";

   languagesAnchors.className = "site-languages-choosing-invisible";
  }
}


//main input logic

let mainInputContainer = document.querySelector('.input-field-container');
let spanInput = document.querySelector('.js-span-input');

mainInputContainer.addEventListener('click', ()=>{
  if(spanInput.className === 'input-span js-span-input'){
    spanInput.className = 'input-span js-span-input input-span-active';
  }else{
    spanInput.className = 'input-span js-span-input';
  }

  console.log('funkcja działa')
})


// main question and answers function

function showAnswers(answer, btn){
  if(answer.className === "answers-container" && btn.className === 'plus-btn-icon' ){
    answer.className = "answers-container answers-container-visible";
    btn.className = 'plus-btn-icon plus-rotate';
  }else{
    answer.className = "answers-container";
    btn.className = 'plus-btn-icon';
  }
}

//connect question 1 button

let questionBtn1 = document.querySelector('.js-question-1');
let plusImg1 = document.getElementById('plus1')
let answer1 = document.getElementById('answer1');

questionBtn1.addEventListener('click', ()=>{
  showAnswers(answer1,plusImg1 );
})

//connect question 2 button

let questionBtn2 = document.querySelector('.js-question-2');
let answer2 = document.getElementById('answer2');
let plusImg2 = document.getElementById('plus2');

questionBtn2.addEventListener('click', ()=>{
  showAnswers(answer2, plusImg2);
})

//connect question 3 button

let questionBtn3 = document.querySelector('.js-question-3');
let answer3 = document.getElementById('answer3');
let plusImg3 = document.getElementById('plus3');

questionBtn3.addEventListener('click', ()=>{
  showAnswers(answer3, plusImg3);
})

//connect question 4 button

let questionBtn4 = document.querySelector('.js-question-4');
let answer4 = document.getElementById('answer4');
let plusImg4 = document.getElementById('plus4');

questionBtn4.addEventListener('click', ()=>{
  showAnswers(answer4, plusImg4);
})

//connect question 5 button

let questionBtn5 = document.querySelector('.js-question-5');
let answer5 = document.getElementById('answer5');
let plusImg5 = document.getElementById('plus5');

questionBtn5.addEventListener('click', ()=>{
  showAnswers(answer5, plusImg5);
})

//connect question 6 button

let questionBtn6 = document.querySelector('.js-question-6');
let answer6 = document.getElementById('answer6');
let plusImg6 = document.getElementById('plus6');

questionBtn6.addEventListener('click', ()=>{
  showAnswers(answer6, plusImg6);
})

