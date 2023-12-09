const GRID_SIZE = 16;
const GRID_TOTAL_SPACE = 600;
const body = document.querySelector('body');

drawGrid(GRID_SIZE, GRID_TOTAL_SPACE);
addEventListenersToGrid();

const gridSizeButton = document.querySelector('#grid-size-button');
gridSizeButton.addEventListener('click', () => {
    let newGridSize = prompt('How many squares do you want in the grid?');
    while (isNaN(newGridSize)) {
        newGridSize = prompt('Invalid value. How many squares do you want in the grid?');
    }
    body.removeChild(document.querySelector('.container'));
    drawGrid(newGridSize, GRID_TOTAL_SPACE);
    addEventListenersToGrid();
})

function addEventListenersToGrid() {
    const gridBoxes = document.querySelectorAll('.grid-item');
    gridBoxes.forEach(box => {
        box.addEventListener('pointerenter', (e) => {
            e.target.style.backgroundColor = 'brown';
        })
    });
}

function drawGrid(gridSize, gridTotalSpace) {
    const container = document.createElement('div');
    container.classList.toggle('container');
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex';
        gridRow.style.maxWidth = `${gridTotalSpace}px`;
        for (let item = 0; item < gridSize; item++) {
            const gridItem = document.createElement('div');
            let itemSize = gridTotalSpace / gridSize;
            gridItem.style.cssText = `width: ${itemSize}px; height: ${itemSize}px; background-color: red`;
            gridItem.classList.toggle('grid-item');
            gridRow.appendChild(gridItem);
        }
        container.appendChild(gridRow);
    }
    body.appendChild(container);
}