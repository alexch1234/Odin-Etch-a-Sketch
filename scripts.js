const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.toggle("grid-row");
    for (let item = 0; item < 16; item++) {
        const gridItem = document.createElement('div');
        gridItem.classList.toggle('grid-item');
        gridRow.appendChild(gridItem);
    }
    container.appendChild(gridRow);
}

const gridBoxes = document.querySelectorAll('.grid-item');
gridBoxes.forEach(box => {
    box.addEventListener('pointerenter', (e) => {
        e.target.style = 'background-color: brown';
    })
});