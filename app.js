window.onload = () => {
   document.querySelector('#number').innerHTML = (numberGenerator());
    document.querySelector('.card').classList.add(suiteGenerator());
}


function numberGenerator(){
  var numberLetter = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q', 'K', 'A'];
  var randomise = Math.floor(Math.random()*numberLetter.length);
  return numberLetter[randomise];
};



function suiteGenerator(){
  var suites = ['club', 'heart', 'spade', 'diamond'];
  var randomiseSuites = Math.floor(Math.random()*suites.length);
  return suites[randomiseSuites]
};


setTimeout(function(){
window.location.reload();
}, 10000);

var mainDiv = document.querySelector('.mainDiv');

function myFunction(){
let newDiv = document.createElement('div');
newDiv.innerHTML = `<div class = "card ${suiteGenerator()}"><div id ="number">${numberGenerator()}</div></div>` 
mainDiv.appendChild(newDiv)
};








