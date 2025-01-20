const container=document.querySelector(".container");
//create slider to get input
const slider = document.querySelector("#grid");
const sliderDisplay = document.querySelector('#grid-size');
let isMouseDown = false; 

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

slider.addEventListener('input', () => {
    const gridSize = Math.max(1, parseInt(slider.value, 10)); 
    sliderDisplay.textContent = `Grid size: ${gridSize}`;
    generateGrid(gridSize);
  });
generateGrid(slider.value);

//create and style the squares
function createSquare(){
    const square=document.createElement("div");
    square.classList.add("square");
    square.style.border = "1px solid #000";
    return square;
}
//generate random colors for the squares
function getRandomColor(){
    const r=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
//handle square coloring
function enableColorChangeOnDrag(square) {
    //handle initial click on square
    square.addEventListener("mousedown", (e) => {
        e.preventDefault(); // Prevent drag selection
        square.style.backgroundColor = getRandomColor();
    });

    //handle mouse movement over squares
    square.addEventListener("mouseover", () => {
        if (isMouseDown) {
            square.style.backgroundColor = getRandomColor();
        }
    });
}
  
function generateGrid(gridSize){
    container.innerHTML="";
    const squareSize=(100/gridSize);
    for (let i=0;i<Math.pow(gridSize,2);i++){
        const square=createSquare();
        square.style.flexBasis = `${squareSize}%`; 
        enableColorChangeOnDrag(square);
        container.appendChild(square);
    }
}

