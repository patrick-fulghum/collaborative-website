var currentColor = null;
var wrongGuesses = [];
var answer = [];
var guess = [];
var newGuessArray = [];


var colors = [
  "#40e0d0",
  "#000000",
  "#800080",
  "#ffa500",
  "#0000ff",
  "#ff0000",
  "#008000",
  "#ffff00"
];

function createColorChoiceElement(id,color){
    var c = document.getElementById(id);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(25,25,25,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill();
    c.setAttribute("onClick","changeCursor(this)");
}

function createColorChoiceBoard(){
  for (var i =0; i<colors.length ; i++){
    createColorChoiceElement("canv" + i, colors[i]);
  }
}

function createRow() {
  var child = document.createElement("ul");
  child.innerHTML =
  '<li class="empty pos_0"></li>' +
  '<li class="empty pos_1"></li>' +
  '<li class="empty pos_2"></li>' +
  '<li class="empty pos_3"></li>';
  return child;
}

function createPegs() {
  var pegs = document.createElement("li");
  pegs.setAttribute("class", "peg_list");
  pegs.innerHTML =
  '<div class = "peg"></div>' +
  '<div class = "peg"></div>' +
  '<div class = "peg"></div>' +
  '<div class = "peg"></div>';
  return pegs;
}


function createBoard(){
  var empties = document.querySelector("#empties");
  for (var i = 0; i < 10; ++i) {
    empties.appendChild(createRow());
  }
  var pegList = document.getElementsByTagName("ul");
  for (var t = 1; t <= 10; ++t) {
    pegList[t].appendChild(createPegs());
  }
  var pegLists = document.getElementsByClassName("peg_list");
  for (var j = 0; j < 10; ++j) {
    pegLists[j].setAttribute("id", "peg_list" + j);
  }
}


function addClickHandler(){
  for (var i = 0; i < 4; i++){
    var element = document.getElementsByClassName('empty')[i];
    element.setAttribute("onClick", "changeColor(this)");
  }
}

function removeClickHandler(){
  var ball = document.getElementsByClassName('ball');
  for (var i = 0; i < ball.length; i++){
  ball[i].removeAttribute("onClick", "changeColor(this)");
  }
}

function changeCursor(el){
  var mywindow = document.getElementsByTagName('html');
  currentColor = el.getContext("2d").fillStyle;
  var img = el.toDataURL();
  mywindow[0].setAttribute('style', 'cursor: url('+img+') 20 20,auto;');
}

function generateAnswer(){
  for (var i = 0; i < 4; i++){
    var rand = Math.floor(Math.random() * colors.length);
    answer.push(colors[rand]);
  }
  console.log("Current answer is", answer);
  return answer;
}

function checkWin(){
    if (guess.length === 4){
    var guesses = [];
      for (var i = 0; i < guess.length; i++){
        guesses.push(guess[i]);
      }
    wrongGuesses.push(guesses);

    newGuessArray = guesses;
    compareToAnswer();
    guess = [];
    addClickHandler();
    removeClickHandler();
  }
}

function changeColor(el){
  if (currentColor){
    el.classList.remove("empty");
    el.classList.add("ball");
    if (el.className === 'pos_0 ball'){
      guess[0] = currentColor;
    } else if (el.className === 'pos_1 ball'){
      guess[1] = currentColor;
    } else if (el.className === 'pos_2 ball'){
      guess[2] = currentColor;
    } else if (el.className === 'pos_3 ball'){
      guess[3] = currentColor;
    }
    el.style.background = currentColor;
  }
}

function compareToAnswer(){
  let exactCount = 0;
  let nearCount = 0;
  let dupAnswer = answer.slice();
  let correctIndex;
  for (var i = 0; i < answer.length; i++) {
    if (dupAnswer.includes(guess[i])) {
      if (dupAnswer[i] === guess[i]) {
        exactCount += 1;
        correctIndex = i;
      } else {
        nearCount += 1;
        correctIndex = guess.indexOf(answer[i]);
      }
      dupAnswer[correctIndex] = "Accounted For";
    }
  }
  checkWinner(exactCount, nearCount);
}

function checkWinner(exactCount, nearCount){
  if (exactCount === 4){
    alert("You WON!");
  } else if (wrongGuesses.length>=10){
    alert("You lost!");
  }else
  {
    renderPegs(exactCount, nearCount);
  }
}

function renderPegs(exactCount, nearCount){
  var pegs = document.querySelector("#peg_list" + (wrongGuesses.length - 1));
  for (var i = 0; i < exactCount; i++){
    pegs.children[i].style.background = "red";
    pegs.children[i].style.border = "1px solid red";
  }
  var newCount = nearCount + exactCount;
  for (var j = exactCount; j < newCount; j++){
    pegs.children[j].style.background = "white";
    pegs.children[j].style.border = "1px solid white";
  }
}




createColorChoiceBoard();
createBoard();
generateAnswer();
addClickHandler();
