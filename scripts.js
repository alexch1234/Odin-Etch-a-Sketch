const container = document.querySelector('.container');

for (let i = 0; i < 4; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.toggle("grid-row");
    for (let item = 0; item < 4; item++) {
        const gridItem = document.createElement('div');
        gridItem.classList.toggle('grid-item');
        gridRow.appendChild(gridItem);
    }
    container.appendChild(gridRow);
}