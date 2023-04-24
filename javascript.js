// div containing squares
const squaresDiv = document.querySelector(".squaresDiv");
let color = "black";

// generates squares, takes size input
function generateSquares(size) {
    // removes squares when new size is specified
    let squares = squaresDiv.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        squaresDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        squaresDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.outline = "solid";
        square.style.outlineWidth = "thin";
        square.style.outlineColor = "lightgrey";
        square.style.backgroundColor = "white";
        squaresDiv.appendChild(square);
    }
}

function colorSquare() {
    // 'this' refers to square, which the event listener was added to
  this.style.backgroundColor = color;
}

function changeSize(input) {
  if (input <= 100 && input >= 0) {
    generateSquares(input);
  } else {
    alert("Please choose a number between 0 and 100.");
  }
}

function changeColor(choice) {
   color = choice;
}

generateSquares(16);