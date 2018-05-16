    //select the color
const color = document.getElementById('pickColor');
    //select the size
const height = document.getElementById('inputH');
const width = document.getElementById('inputW');
const size = document.getElementById('size');
    //select the table
const table = document.getElementById('pixelCanvas');
    //declare a function for the table
function makeGrid() {
    //first clear the old grid
    table.innerHTML = '';
    let tr, td;
    //create the rows and columns and append them to the table
    for (let i = 0; i < height.value; i++) {
        tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < width.value; j++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }

    //fill the cells with color
    table.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = color.value;
        }
    })
}
    //when size is submitted by the user call makeGrid()
size.addEventListener('submit',function (e) {
    e.preventDefault();
    makeGrid();
})