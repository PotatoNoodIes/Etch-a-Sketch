const square = document.querySelectorAll('.square');
const grid = document.querySelector('.grid-cont');
const gridSizeRange = document.getElementById('gridSizeRange');
let gridColumnDisplay = document.getElementById('grid-columns-display');
let gridRowDisplay = document.getElementById('grid-rows-display');

function createGrid() {
    grid.innerHTML = '';
    const gridSize = gridSizeRange.value;
    const numSquares = Math.floor(600 / gridSize);
    grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
    for (let i = 0; i < numSquares * numSquares; i++) {
      const clone = square.item(0).cloneNode(true);
      grid.appendChild(clone);
    }
}
  
createGrid();
  
gridSizeRange.addEventListener('input', createGrid);

function getRandomColor() {
    const red = Math.floor((Math.random()*256));
    const green = Math.floor((Math.random()*256));
    const blue = Math.floor((Math.random()*256));

    return `rgb(${red}, ${green}, ${blue})`;
}

function setRainbowMode () {
    let isDragging = false;

    grid.addEventListener('mousedown', event => {
        if (event.target.classList.contains('square')) {
            event.target.style.transition = 'background-color 0.1s';
            event.target.style.backgroundColor = getRandomColor();
        }
        isDragging = true;
    });

    grid.addEventListener('mouseup', event => {
        if (event.target.classList.contains('square')) {
            event.target.style.transition = 'background-color 0.1s';
            event.target.style.backgroundColor = getRandomColor();
        }
        isDragging = false;
    });

    grid.addEventListener('mousemove', event => {
        if (isDragging) {
            if (event.target.classList.contains('square')) {
                event.target.style.transition = 'background-color 0.1s';
                event.target.style.backgroundColor = getRandomColor();
            }
        }
    });
}

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    setRainbowMode();
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const square = document.querySelectorAll('.square');
    square.forEach(square =>
        square.style.backgroundColor = '#1f1c1c');
});

const colorPicker = document.querySelector('.color-picker');
const normal = document.querySelector('.normal');

function setColor() {
    const selectColor = colorPicker.value;
    let isDragging = false;

    grid.addEventListener("mousedown", event => {
        if (event.target.classList.contains("square")) {
            event.target.style.transition = "background-color 0.1s";
            event.target.style.backgroundColor = selectColor;
        }
        isDragging = true;
    });

    grid.addEventListener("mouseup", event => {
        if (event.target.classList.contains("square")) {
            event.target.style.transition = "background-color 0.1s";
            event.target.style.backgroundColor = selectColor;
        }
        isDragging = false;
    });

    grid.addEventListener("mousemove", event => {
        if (isDragging) {
            if (event.target.classList.contains("square")) {
                event.target.style.transition = "background-color 0.1s";
                event.target.style.backgroundColor = selectColor;
            }
        }
    });
};

normal.addEventListener('click', setColor);

gridSizeRange.addEventListener("input", event => {
    const numSquares1 = Math.floor(600 / event.target.value);
    gridColumnDisplay.textContent = numSquares1 + "x ";
    gridRowDisplay.textContent = numSquares1;
});
