const GRID_SIZE=10;
const squareSize=(100/GRID_SIZE);
const container=document.querySelector(".container");
for (let i=0;i<Math.pow(GRID_SIZE,2);i++){
    const square=document.createElement("div");
    square.classList.add("square");
    square.style.border = "1px solid #000";
    square.style.flexBasis=`${squareSize}%`;
    container.appendChild(square);
}
